import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

import dotenv


dotenv.load_dotenv()

TEMPLATES_DIR = Path("./api/send_email/templates")


class BaseEmailSender:
    def __init__(self, receiver_email: str, subject: str) -> None:
        self.receiver_email = receiver_email
        self.subject = subject
        self.sender_email = os.getenv("EMAIL") or os.getenv("USER")
        self.sender_password = os.getenv("PASSWORD")

    def _build_message(self, content: str, subtype: str) -> MIMEMultipart:
        if not self.sender_email or not self.sender_password:
            raise ValueError("Email credentials are not configured in the environment")

        msg = MIMEMultipart()
        msg["From"] = self.sender_email
        msg["To"] = self.receiver_email
        msg["Subject"] = self.subject
        msg.attach(MIMEText(content, subtype))
        return msg

    def _send(self, message: MIMEMultipart) -> dict:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(self.sender_email, self.sender_password)
            server.sendmail(self.sender_email, self.receiver_email, message.as_string())
        return {"message": "Email sent successfully"}


class SendEmail(BaseEmailSender):
    def __init__(self, receiver_email: str, subject: str, body: str) -> None:
        super().__init__(receiver_email, subject)
        self.body = body if isinstance(body, str) else str(body)

    def send_email(self) -> dict:
        message = self._build_message(self.body, "plain")
        return self._send(message)


class SendCustomEmail(BaseEmailSender):
    def __init__(self, receiver_email: str, subject: str, template_name: str, data: dict) -> None:
        super().__init__(receiver_email, subject)
        self.template_name = template_name
        self.data = data

    def _render_template(self) -> str:
        template_path = TEMPLATES_DIR / f"{self.template_name}.html"
        template = template_path.read_text(encoding="utf-8")
        for key, value in self.data.items():
            template = template.replace(f"{{{{ {key} }}}}", str(value))
        return template

    def send_email(self) -> dict:
        message = self._build_message(self._render_template(), "html")
        return self._send(message)


class EmailTemplate:
    def __init__(self, name: str, html: str) -> None:
        self.name = name
        self.html = html

    def save(self) -> dict:
        TEMPLATES_DIR.mkdir(parents=True, exist_ok=True)
        (TEMPLATES_DIR / f"{self.name}.html").write_text(self.html, encoding="utf-8")
        return {"message": "Template created successfully"}

    def create_template(self, template_name: str, template: str) -> dict:
        TEMPLATES_DIR.mkdir(parents=True, exist_ok=True)
        (TEMPLATES_DIR / f"{template_name}.html").write_text(template, encoding="utf-8")
        return {"message": "Template created successfully"}


class CreateTemplate(EmailTemplate):
    pass
