import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            {/* Trust badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-glow fill-current" />
                ))}
              </div>
              <span className="text-primary-glow font-semibold">5,000+ Clientes Satisfechos</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Servicios Fiscales{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-pulse">
                Profesionales
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Expertos certificados en preparación de impuestos, creación de LLC, reparación de crédito 
              y servicios de migración. <span className="text-primary-glow font-semibold">Tu éxito financiero es nuestra prioridad.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Button variant="premium" size="lg" className="text-xl px-10 py-4 group">
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline-white" size="lg" className="text-xl px-10 py-4">
                Consulta Gratuita
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">+10 años de experiencia</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">100% Confidencial</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Atención en español</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Garantía total</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            {/* Floating pricing card */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              {/* Logo prominente */}
              <div className="text-center mb-8">
                <img 
                  src="/lovable-uploads/b115556c-f99f-4299-a39e-5e275d34c1bd.png" 
                  alt="Tax Partners Logo" 
                  className="h-20 w-auto mx-auto mb-4 filter brightness-0 invert animate-pulse"
                />
                <h3 className="text-3xl font-bold text-center mb-2">¡Obtén tu Cotización!</h3>
                <p className="text-primary-glow text-lg">Precios transparentes y competitivos</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 px-6 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                  <span className="font-medium text-lg">Preparación de Taxes</span>
                  <span className="text-primary-glow font-bold text-xl group-hover:scale-110 transition-transform duration-300">Desde $50</span>
                </div>
                <div className="flex items-center justify-between py-4 px-6 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                  <span className="font-medium text-lg">Creación de LLC</span>
                  <span className="text-primary-glow font-bold text-xl group-hover:scale-110 transition-transform duration-300">Desde $199</span>
                </div>
                <div className="flex items-center justify-between py-4 px-6 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                  <span className="font-medium text-lg">Reparación de Crédito</span>
                  <span className="text-primary-glow font-bold text-xl group-hover:scale-110 transition-transform duration-300">Desde $99</span>
                </div>
                <div className="flex items-center justify-between py-4 px-6 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                  <span className="font-medium text-lg">Servicios de Migración</span>
                  <span className="text-primary-glow font-bold text-xl group-hover:scale-110 transition-transform duration-300">Consulta</span>
                </div>
              </div>

              <Button variant="premium" size="lg" className="w-full mt-8 text-xl py-4">
                ¡Solicita tu Consulta GRATIS!
              </Button>
            </div>

            {/* Floating decoration elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-glow rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;