import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight, Shield } from "lucide-react";
const Hero = () => {
  return <section className="relative bg-gradient-hero text-white py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] animate-float">
          <img src="/src/assets/tax-consultation-hero.jpg" alt="Mujer recibiendo asesoría fiscal profesional" className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20" />
        </div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            {/* Trust badges */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 px-4 py-2 bg-primary-glow/20 rounded-full border border-primary-glow/30">
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span className="text-primary-glow font-medium">Garantía</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-primary-glow/20 rounded-full border border-primary-glow/30">
                <Shield className="w-5 h-5 text-primary-glow" />
                <span className="text-primary-glow font-medium">100% guiado</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-primary-glow/20 rounded-full border border-primary-glow/30">
                <Star className="w-5 h-5 text-primary-glow fill-current" />
                <span className="text-primary-glow font-medium">Hoy mismo</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Servicios Fiscales y Legales{" "}
              <span className="text-primary-glow">
                profesionales
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl text-zinc-200">Expertos en preparación de impuestos, creación de LLC, reparación de crédito y servicios de migración. Tu éxito financiero y legal es nuestra prioridad. </p>
            
            <div className="mb-10">
              <Button variant="premium" size="lg" className="text-lg px-8 py-4 group">
                Empezar mi declaración de renta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-primary-glow rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TP</span>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TX</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">PR</span>
                </div>
                <div className="w-10 h-10 bg-primary-glow/80 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
              <span className="text-gray-300">Siempre estamos contigo: 5  asesores y 
expertos tributarios listos para ayudarte 
cuando lo necesites.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default Hero;