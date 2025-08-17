import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/b115556c-f99f-4299-a39e-5e275d34c1bd.png" 
              alt="Tax Partners Logo" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Tu socio confiable en servicios fiscales y legales. Más de 10 años 
              ayudando a la comunidad hispana en Estados Unidos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Preparación de Impuestos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creación de LLC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reparación de Crédito</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servicios de Migración</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(555) 123-4567</li>
              <li>info@taxpartners.com</li>
              <li>123 Main Street<br />Miami, FL 33101</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TaxPartners. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;