import smtplib
import os
import dotenv
from jinja2 import Environment, FileSystemLoader
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Path: api/send_email/send_email.py
# Description: This script sends an email using the SMTP protocol.
dotenv.load_dotenv()

sender_email = os.getenv('USER')
class SendEmail:
    def __init__(self, receiver_email, subject, body):
        # self.sender_email = sender_email
        self.receiver_email = receiver_email
        self.subject = subject
        self.body = body if isinstance(body, str) else str(body)

    def send_email(self):
        # Create a text message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = self.receiver_email
        msg['Subject'] = self.subject
        msg.attach(MIMEText(self.body, 'plain'))
        # Send the message via our SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(os.getenv('USER'), os.getenv('PASSWORD'))
        server.sendmail(sender_email, self.receiver_email, msg.as_string())
        server.quit()
        return {"message": "Email sent successfully"}

# Creacion de una clase que permita enviar emails personalizados a los usuarios
# utilizando plantillas html preconfiguradas de la carpeta templates

class SendCustomEmail:
    def __init__(self, receiver_email, subject, template_name, data):
        self.receiver_email = receiver_email
        self.subject = subject
        self.template_name = template_name
        self.data = data

    def send_email(self):
        # Load the template
        with open(f'./api/send_email/templates/{self.template_name}.html', 'r') as file:
            template = file.read()
        # Replace the placeholders with the data
        for key, value in self.data.items():
            template = template.replace(f'{{{{ {key} }}}}', value)
        # Create a text message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = self.receiver_email
        msg['Subject'] = self.subject
        msg.attach(MIMEText(template, 'html'))
        # Send the message via our SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(os.getenv('USER'), os.getenv('PASSWORD'))
        server.sendmail(sender_email, self.receiver_email, msg.as_string())
        server.quit()
        return {"message": "Email sent successfully"}
    
# clase para hacer un CRUD de las plantillas
# de los correos electrónicos
class EmailTemplate:
    def __init__(self, name, html):
        self.name = name
        self.html = html
    
    def save(self):
        with open(f'./templates/{self.name}.html', 'w') as file:
            file.write(self.html)
        return {"message": "Template created successfully"}
    
    def create_template(self, template_name, template):
        with open(f'./templates/{template_name}.html', 'w') as file:
            file.write(template)
        return {"message": "Template created successfully"}
    
class CreateTemplate:
    def __init__(self, name, html):
        self.name = name
        self.html = html
    
    def save(self):
        with open(f'./templates/{self.name}.html', 'w') as file:
            file.write(self.html)
        return {"message": "Template created successfully"}
    
    def create_template(self, template_name, template):
        with open(f'./templates/{template_name}.html', 'w') as file:
            file.write(template)
        return {"message": "Template created successfully"}