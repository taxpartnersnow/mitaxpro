import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import mitaxProLogo from "@/assets/mitax-pro-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center animate-fade-in">
            <img 
              src={mitaxProLogo} 
              alt="MiTax Pro Logo" 
              className="h-28 w-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-slide-in-right">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group font-medium text-lg"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group font-medium text-lg"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-all duration-300 relative group font-medium text-lg"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:block animate-bounce-in">
            <a href="https://cal.com/diego-8oyx2o/15min" target="_blank" rel="noopener noreferrer">
              <Button variant="premium" size="lg" className="text-lg">
                Agenda tu consulta gratuita aquí
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/10 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a href="https://cal.com/diego-8oyx2o/15min" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="premium" size="lg" className="w-full mt-4">
                  Agenda tu consulta gratuita aquí
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;