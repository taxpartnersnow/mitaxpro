import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b115556c-f99f-4299-a39e-5e275d34c1bd.png" 
              alt="Tax Partners Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          
          <Button variant="hero" size="sm">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;