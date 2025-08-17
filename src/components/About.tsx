import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    label: "Clientes Satisfechos"
  },
  {
    icon: Clock,
    number: "10+",
    label: "Años de Experiencia"
  },
  {
    icon: Award,
    number: "98%",
    label: "Tasa de Éxito"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Confidencialidad"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-primary">TaxPartners?</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Somos una firma especializada en servicios fiscales y legales para la comunidad hispana. 
              Nuestro equipo de expertos certificados te brinda la tranquilidad y confianza que necesitas 
              para manejar tus asuntos financieros y legales.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Expertos Certificados</h4>
                  <p className="text-muted-foreground">Contadores y abogados con licencias vigentes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Atención Personalizada</h4>
                  <p className="text-muted-foreground">Cada caso recibe atención individual y dedicada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Precios Transparentes</h4>
                  <p className="text-muted-foreground">Sin sorpresas ni tarifas ocultas</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Agenda tu Consulta
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-card">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;