# import smtplib
# import os
# import dotenv
# from jinja2 import Environment, FileSystemLoader
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText

# # Cargar variables de entorno
# dotenv.load_dotenv()

# <<<<<<< HEAD
# sender_email = os.getenv('USER')
# class SendEmail:
#     def __init__(self, receiver_email, subject, body):
#         # self.sender_email = sender_email
# =======
# class EmailSender:
#     def __init__(self, sender_email, receiver_email, subject, body):
#         self.sender_email = sender_email
# >>>>>>> main
#         self.receiver_email = receiver_email
#         self.subject = subject
#         self.body = body if isinstance(body, str) else str(body)

#     def send_email(self):
#         msg = MIMEMultipart()
#         msg['From'] = sender_email
#         msg['To'] = self.receiver_email
#         msg['Subject'] = self.subject
# <<<<<<< HEAD
#         msg.attach(MIMEText(self.body, 'plain'))
#         # Send the message via our SMTP server
#         server = smtplib.SMTP('smtp.gmail.com', 587)
#         server.starttls()
#         server.login(os.getenv('USER'), os.getenv('PASSWORD'))
#         server.sendmail(sender_email, self.receiver_email, msg.as_string())
#         server.quit()
#         return {"message": "Email sent successfully"}
# =======
#         msg.attach(MIMEText(self.body, 'html'))
# >>>>>>> main

#         try:
#             with smtplib.SMTP('smtp.gmail.com', 587) as server:
#                 server.starttls()
#                 server.login(os.getenv('EMAIL'), os.getenv('PASSWORD'))
#                 server.sendmail(self.sender_email, self.receiver_email, msg.as_string())
#             return {"message": "Email sent successfully"}
#         except Exception as e:
#             return {"error": str(e)}

# class EmailTemplateManager:
#     def __init__(self, template_dir='./templates'):
#         self.template_dir = template_dir

#     def load_template(self, template_name):
#         try:
#             with open(f'{self.template_dir}/{template_name}.html', 'r') as file:
#                 return file.read()
#         except FileNotFoundError:
#             return None

#     def save_template(self, template_name, html):
#         with open(f'{self.template_dir}/{template_name}.html', 'w') as file:
#             file.write(html)
#         return {"message": "Template created successfully"}

# class SendCustomEmail:
#     def __init__(self, receiver_email, subject, template_name, data):
#         self.receiver_email = receiver_email
#         self.subject = subject
#         self.template_name = template_name
#         self.data = data
#         self.template_manager = EmailTemplateManager()

#     def send_email(self):
# <<<<<<< HEAD
#         # Load the template
#         with open(f'./api/send_email/templates/{self.template_name}.html', 'r') as file:
#             template = file.read()
#         # Replace the placeholders with the data
#         for key, value in self.data.items():
#             template = template.replace(f'{{{{ {key} }}}}', value)
#         # Create a text message
#         msg = MIMEMultipart()
#         msg['From'] = sender_email
#         msg['To'] = self.receiver_email
#         msg['Subject'] = self.subject
#         msg.attach(MIMEText(template, 'html'))
#         # Send the message via our SMTP server
#         server = smtplib.SMTP('smtp.gmail.com', 587)
#         server.starttls()
#         server.login(os.getenv('USER'), os.getenv('PASSWORD'))
#         server.sendmail(sender_email, self.receiver_email, msg.as_string())
#         server.quit()
#         return {"message": "Email sent successfully"}
    
# # clase para hacer un CRUD de las plantillas
# # de los correos electrónicos
# class EmailTemplate:
#     def __init__(self, name, html):
#         self.name = name
#         self.html = html
    
#     def save(self):
#         with open(f'./templates/{self.name}.html', 'w') as file:
#             file.write(self.html)
#         return {"message": "Template created successfully"}
    
#     def create_template(self, template_name, template):
#         with open(f'./templates/{template_name}.html', 'w') as file:
#             file.write(template)
#         return {"message": "Template created successfully"}
    
# class CreateTemplate:
#     def __init__(self, name, html):
#         self.name = name
#         self.html = html
    
#     def save(self):
#         with open(f'./templates/{self.name}.html', 'w') as file:
#             file.write(self.html)
#         return {"message": "Template created successfully"}
    
#     def create_template(self, template_name, template):
#         with open(f'./templates/{template_name}.html', 'w') as file:
#             file.write(template)
#         return {"message": "Template created successfully"}
# =======
#         template = self.template_manager.load_template(self.template_name)
#         if template is None:
#             return {"error": "Template not found"}

#         # Reemplazar los marcadores de posición con los datos
#         for key, value in self.data.items():
#             template = template.replace(f'{{{{ {key} }}}}', value)

#         email_sender = EmailSender(self.sender_email, self.receiver_email, self.subject, template)
#         return email_sender.send_email()

# # Ejemplo de uso
# if __name__ == "__main__":
#     # Crear una nueva plantilla
#     template_manager = EmailTemplateManager()
#     template_manager.save_template('welcome', '<h1>Welcome, {{{{ name }}}}!</h1>')

#     # Enviar un correo electrónico personalizado
#     custom_email = SendCustomEmail(
#         sender_email='your_email@gmail.com',
#         receiver_email='recipient_email@gmail.com',
#         subject='Welcome!',
#         template_name='welcome',
#         data={'name': 'John Doe'}
#     )
#     response = custom_email.send_email()
#     print(response)
# >>>>>>> main