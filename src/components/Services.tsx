import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, CreditCard, Users, ArrowRight, Check } from "lucide-react";
import testimonioJacobo from "@/assets/testimonio-jacobo.jpeg";
import testimonioAnaLucia from "@/assets/testimonio-ana-lucia.png";
const services = [{
  icon: FileText,
  title: "Preparación de Impuestos \npara personas",
  description: "Maximiza tu reembolso con nuestro servicio experto de preparación de taxes. Manejamos todo tipo de situaciones fiscales con precisión y cuidado.",
  features: ["Impuestos personales", "Maximización de deducciones", "Representación ante el IRS", "E-filing incluido", "Revisión gratuita", "Soporte 24/7"],
  price: "Consulta gratuita",
  badge: "Más Popular",
  gradient: "from-blue-500 to-purple-600"
}, {
  icon: Users,
  title: "Preparación de Impuestos \npara corporaciones",
  description: "Optimiza la situación fiscal de tu negocio y asegura el cumplimiento. Nuestro servicio especializado maneja la complejidad de los impuestos corporativos para que tú te enfoques en crecer.",
  features: ["Impuestos Corporativos y de Sociedad", "Declaraciones de Impuestos Estatales y Locales", "Planificación Fiscal Estratégica", "Seguimiento de casos", "Soporte 24/7"],
  price: "Consulta gratuita",
  badge: "Más Popular",
  gradient: "from-purple-500 to-pink-600"
}, {
  icon: Building,
  title: "Creación de LLC",
  description: "Establece tu negocio de manera legal y protege tus activos personales con nuestro servicio completo de incorporación empresarial.",
  features: ["Registro en el estado", "Número EIN federal", "Operating Agreement", "Asesoría legal incluida", "Seguimiento completo"],
  price: "Consulta gratuita",
  badge: "Recomendado",
  gradient: "from-green-500 to-emerald-600"
}];

const casosDeExito = [
{
  amount: "$12,500",
  label: "Reembolso obtenido",
  subLabel: "SOLTERO",
  description: "Jacobo, soltero de 24 años, estudia en la universidad y trabaja al mismo tiempo. Logró un reembolso de $4.500 USD, ya que se le aplicó el crédito por estudio y el crédito por trabajo (EITC)",
  image: testimonioJacobo,
  client: "Jacobo Gutiérrez"
},
{
  amount: "$6,800",
  label: "REEMBOLSO OBTENIDO",
  subLabel: "CASADOS DECLARANDO JUNTOS",
  description: "Esteban y María trabajan en una empresa de aseo y, en sus tiempos libres, trabajan en Amazon Flex; tienen un hijo de 7 años. Ambos obtuvieron ingresos acumulados por $50,000 USD.\n\nSe les aplicó el crédito por trabajo, ya que sus ingresos no superaron los $53,000 USD al año, y también el crédito tributario por hijo menor de 17 años; en total obtuvieron un reembolso de $6,800 USD.",
  client: "Esteban y María"
},
{
  amount: "$5,302",
  label: "REEMBOLSO OBTENIDO",
  subLabel: "JEFE DE FAMILIA",
  description: "Ana Lucía, de 45 años, es coordinadora en una agencia de carga en Miami. Tiene un hijo de 27 años, por quien vela económicamente, ya que presenta una condición física que le impide trabajar.\n\nEl año pasado obtuvo ingresos por $62,000 y recibió un reembolso de $5,302 USD.",
  image: testimonioAnaLucia,
  client: "Ana Lucía"
}];


const Services = () => {
  return <section className="py-24 bg-gradient-overlay relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resultados de clientes + Casos de éxito */}
        <div className="mb-24 animate-fade-in">
          <div className="text-center mb-16">
            


            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Estos son algunos de  los resultados de nuestros clientes

          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Historias reales de clientes que confiaron en nosotros y obtuvieron resultados extraordinarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosDeExito.map((caso, index) =>
          <div
            key={index}
            className="relative bg-gradient-card rounded-3xl p-8 shadow-xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group overflow-hidden">

                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {caso.amount}
                  </div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {caso.label}
                  </div>
                  {'subLabel' in caso && (caso as any).subLabel &&
              <div className="text-sm font-bold mb-4 uppercase tracking-wider text-secondary" style={{ color: 'hsl(221, 83%, 53%)' }}>
                      {(caso as any).subLabel}
                    </div>
              }
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {caso.description}
                  </p>
                  {caso.image && (
                    <img src={caso.image} alt={`Testimonio de ${caso.client}`} className="w-full rounded-2xl mb-6 shadow-lg" />
                  )}
                  <div className="border-t border-border/50 pt-4">
                    <span className="text-sm font-medium text-foreground">{caso.client}</span>
                  </div>
                </div>
              </div>
          )}
          </div>
        </div>

        {/* Servicios */}
        <div id="services" className="text-center mb-20 animate-fade-in scroll-mt-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold">Nuestros Servicios Profesionales</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Soluciones Completas
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Ofrecemos servicios especializados para todas tus necesidades fiscales, legales y financieras con el respaldo de más de 5 años de experiencia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="relative bg-gradient-card border-0 shadow-xl hover:shadow-glow transition-all duration-700 hover:-translate-y-4 group overflow-hidden animate-scale-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${service.gradient}`}>
                  {service.badge}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  {/* Floating animation ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-primary/30 rounded-2xl animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 whitespace-pre-line">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm group/item">
                      <div className="w-5 h-5 bg-primary rounded-full mr-3 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="group-hover/item:text-primary transition-colors duration-300">
                        {feature}
                      </span>
                    </li>)}
                </ul>
                
                <div className="pt-6 border-t border-border/50">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>
                  <div className="text-center">
                    <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://wa.me/17187081844', '_blank')}>

                      Comunícate con un asesor para más información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">¿No estás seguro qué servicio necesitas?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestros expertos te ayudarán a encontrar la solución perfecta para tu situación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
              variant="premium"
              size="lg"
              className="text-xl px-12 py-4"
              onClick={() => window.open('https://cal.com/mitaxpro/30min', '_blank')}>

                Agenda tu consulta gratuita aquí
              </Button>
              <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-4 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://wa.me/17187081844', '_blank')}>

                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;