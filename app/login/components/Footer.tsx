export default function Footer() {
  return (
    <footer id="contact" className="py-8 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="Logo text-xl mb-2">EduConnect</h3>
          <p className="icono">Boost Your Productivity</p>
        </div>
        <div>
          <h4 className="text-lg mb-2">Contact Us</h4>
          <p>Email: alexisdg051@gmail.com</p>
          <p>Phone: +57(321) 612-3545</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 EduConnect. All rights reserved.</p>
      </div>
    </footer>
  )
}

