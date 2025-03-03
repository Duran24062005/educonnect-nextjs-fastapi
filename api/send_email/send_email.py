import smtplib
import os
import dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Cargar variables de entorno
dotenv.load_dotenv()

class EmailSender:
    def __init__(self, sender_email, receiver_email, subject, body):
        self.sender_email = sender_email
        self.receiver_email = receiver_email
        self.subject = subject
        self.body = body

    def send_email(self):
        msg = MIMEMultipart()
        msg['From'] = self.sender_email
        msg['To'] = self.receiver_email
        msg['Subject'] = self.subject
        msg.attach(MIMEText(self.body, 'html'))

        try:
            with smtplib.SMTP('smtp.gmail.com', 587) as server:
                server.starttls()
                server.login(os.getenv('EMAIL'), os.getenv('PASSWORD'))
                server.sendmail(self.sender_email, self.receiver_email, msg.as_string())
            return {"message": "Email sent successfully"}
        except Exception as e:
            return {"error": str(e)}

class EmailTemplateManager:
    def __init__(self, template_dir='./templates'):
        self.template_dir = template_dir

    def load_template(self, template_name):
        try:
            with open(f'{self.template_dir}/{template_name}.html', 'r') as file:
                return file.read()
        except FileNotFoundError:
            return None

    def save_template(self, template_name, html):
        with open(f'{self.template_dir}/{template_name}.html', 'w') as file:
            file.write(html)
        return {"message": "Template created successfully"}

class SendCustomEmail:
    def __init__(self, sender_email, receiver_email, subject, template_name, data):
        self.sender_email = sender_email
        self.receiver_email = receiver_email
        self.subject = subject
        self.template_name = template_name
        self.data = data
        self.template_manager = EmailTemplateManager()

    def send_email(self):
        template = self.template_manager.load_template(self.template_name)
        if template is None:
            return {"error": "Template not found"}

        # Reemplazar los marcadores de posición con los datos
        for key, value in self.data.items():
            template = template.replace(f'{{{{ {key} }}}}', value)

        email_sender = EmailSender(self.sender_email, self.receiver_email, self.subject, template)
        return email_sender.send_email()

# Ejemplo de uso
if __name__ == "__main__":
    # Crear una nueva plantilla
    template_manager = EmailTemplateManager()
    template_manager.save_template('welcome', '<h1>Welcome, {{{{ name }}}}!</h1>')

    # Enviar un correo electrónico personalizado
    custom_email = SendCustomEmail(
        sender_email='your_email@gmail.com',
        receiver_email='recipient_email@gmail.com',
        subject='Welcome!',
        template_name='welcome',
        data={'name': 'John Doe'}
    )
    response = custom_email.send_email()
    print(response)