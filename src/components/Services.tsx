import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, CreditCard, Users } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Preparación de Impuestos",
    description: "Maximiza tu reembolso con nuestro servicio experto de preparación de taxes. Manejamos todo tipo de situaciones fiscales.",
    features: ["Taxes personales y de negocio", "Maximización de deducciones", "Representación ante el IRS", "E-filing incluido"],
    price: "Desde $50"
  },
  {
    icon: Building,
    title: "Creación de LLC",
    description: "Establece tu negocio de manera legal y protege tus activos personales con nuestro servicio completo de incorporación.",
    features: ["Registro en el estado", "Número EIN federal", "Operating Agreement", "Asesoría legal incluida"],
    price: "Desde $199"
  },
  {
    icon: CreditCard,
    title: "Reparación de Crédito",
    description: "Mejora tu score crediticio y abre nuevas oportunidades financieras con nuestro programa personalizado.",
    features: ["Análisis de reporte crediticio", "Disputa de elementos negativos", "Estrategias de mejora", "Monitoreo continuo"],
    price: "Desde $99"
  },
  {
    icon: Users,
    title: "Servicios de Migración",
    description: "Te acompañamos en tu proceso migratorio con asesoría experta y representación legal especializada.",
    features: ["Asesoría migratoria", "Preparación de documentos", "Representación legal", "Seguimiento de casos"],
    price: "Consulta gratuita"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones completas para todas tus necesidades fiscales, legales y financieras
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full" variant="default">
                    Más Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;