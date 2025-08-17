import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Servicios Fiscales y Legales{" "}
              <span className="text-primary-glow">Confiables</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Expertos en preparación de impuestos, creación de LLC, reparación de crédito 
              y servicios de migración para la comunidad hispana en Estados Unidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg">
                Comenzar Ahora
              </Button>
              <Button variant="outline-white" size="lg">
                Consulta Gratuita
              </Button>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span>Más de 10 años de experiencia</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span>Atención en español</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span>Garantía de satisfacción</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">¿Necesitas ayuda?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-4 bg-white/20 rounded-lg">
                  <span>Preparación de Taxes</span>
                  <span className="text-primary-glow font-semibold">Desde $50</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-white/20 rounded-lg">
                  <span>Creación de LLC</span>
                  <span className="text-primary-glow font-semibold">Desde $199</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-white/20 rounded-lg">
                  <span>Reparación de Crédito</span>
                  <span className="text-primary-glow font-semibold">Desde $99</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 bg-white/20 rounded-lg">
                  <span>Servicios de Migración</span>
                  <span className="text-primary-glow font-semibold">Consulta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;