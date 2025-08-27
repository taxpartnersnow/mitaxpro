import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import tiktokLogo from "@/assets/tiktok-logo-new.png";
const Footer = () => {
  return <footer className="bg-gradient-hero text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="mb-8">
              
              <h3 className="text-2xl font-bold text-primary-glow mb-4">TaxPartners</h3>
            </div>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed max-w-md">Tu socio confiable en servicios fiscales y legales. Más de 5 años ayudando a la comunidad hispana en Estados Unidos a alcanzar sus objetivos financieros.</p>
            
            {/* Social Media con animaciones */}
            <div className="flex space-x-6">
              {[{
              icon: Facebook,
              label: "Facebook",
              url: "#"
            }, {
              icon: Instagram,
              label: "Instagram",
              url: "https://www.instagram.com/taxpartners1?igsh=MW83ZWlzdG8zbHo1MA=="
            }].map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group backdrop-blur-sm border border-white/20">
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>)}
              
              {/* TikTok with custom logo */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group backdrop-blur-sm border border-white/20">
                <img src="/lovable-uploads/2796115b-335e-4bc6-8503-fdc928b9ce2d.png" alt="TikTok" className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div className="animate-slide-in-left">
            <h4 className="text-xl font-bold mb-6 text-primary-glow">Nuestros Servicios</h4>
            <ul className="space-y-4">
              {["Preparación de Impuestos", "Creación de LLC", "Reparación de Crédito", "Servicios de Migración"].map((service, index) => <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-primary-glow transition-all duration-300 flex items-center group">
                    <div className="w-2 h-2 bg-primary-glow rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contacto */}
          <div className="animate-slide-in-right">
            <h4 className="text-xl font-bold mb-6 text-primary-glow">Contacto Directo</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary-glow group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">(555) 123-4567</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">(555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary-glow group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">taxpartnersnow@gmail.com</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary-glow group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">488 Onderdonk Ridgewood NY 11385</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>© 2025 TaxPartners. Todos los derechos reservados.</p>
              <p className="text-sm mt-1">Licenciado y autorizado para operar en Estados Unidos</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-glow transition-colors duration-300">
                Política de Privacidad
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary-glow transition-colors duration-300">
                Términos de Servicio
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary-glow transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;