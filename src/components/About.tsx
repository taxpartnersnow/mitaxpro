import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, CheckCircle, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const stats = [
  {
    icon: Users,
    number: "+1,500",
    label: "Clientes Satisfechos",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    number: "5",
    label: "Años de Experiencia",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    number: "98%",
    label: "Tasa de Éxito",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Confidencialidad",
    gradient: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Expertos Certificados",
    description: "Contadores y abogados con licencias vigentes y certificaciones especializadas",
    icon: Award
  },
  {
    title: "Atención Personalizada",
    description: "Cada caso recibe atención individual y dedicada de nuestro equipo especializado",
    icon: Users
  },
  {
    title: "Precios Transparentes",
    description: "Sin sorpresas ni tarifas ocultas. Conoce el costo exacto desde el inicio",
    icon: Shield
  },
  {
    title: "Garantía Total",
    description: "Respaldamos nuestro trabajo con garantía de satisfacción completa",
    icon: CheckCircle
  }
];

const testimonials = [
  {
    name: "María Contreras",
    initials: "MC",
    comment: "TaxPartners me ayudó con mis taxes y la creación de mi LLC. El servicio fue excepcional y muy profesional. ¡Totalmente recomendado!",
    rating: 5
  },
  {
    name: "José Hernández", 
    initials: "JH",
    comment: "Excelente atención al cliente. Me ayudaron a resolver problemas con el IRS que tenía pendientes desde hace años. Muy agradecido.",
    rating: 5
  },
  {
    name: "Ana López",
    initials: "AL", 
    comment: "Profesionales, puntuales y transparentes con los precios. Me guiaron en todo el proceso de declaración de impuestos sin complicaciones.",
    rating: 5
  },
  {
    name: "Carlos Rivera",
    initials: "CR",
    comment: "Los recomiendo al 100%. Me ayudaron a ahorrar una cantidad significativa en mis impuestos y el trato fue excepcional.",
    rating: 5
  },
  {
    name: "Sofia Martinez",
    initials: "SM",
    comment: "Gracias a TaxPartners pude regularizar mi situación fiscal. Su equipo es muy conocedor y me brindaron la confianza que necesitaba.",
    rating: 5
  }
];

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentTestimonial(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const scrollToSlide = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-accent via-background to-accent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary-glow fill-current" />
                ))}
              </div>
              <span className="text-primary font-bold text-lg">Calificación Excelente</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              ¿Por qué elegir{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                TaxPartners?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-10 text-muted-foreground leading-relaxed">
              Somos una firma especializada en servicios fiscales y legales para la comunidad hispana. 
              Nuestro equipo de expertos certificados te brinda la tranquilidad y confianza que necesitas 
              para manejar tus asuntos financieros y legales con total profesionalismo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/20 hover:bg-white/80 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-primary">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="premium" size="lg" className="text-xl px-12 py-4">
              Agenda tu Consulta Gratuita
            </Button>
          </div>
          
          <div className="animate-slide-in-right">
            {/* Logo prominente */}
            <div className="text-center mb-12">
              <img 
                src="/lovable-uploads/7d0d4420-cdc2-418b-8c10-04d8a24306d7.png" 
                alt="Tax Partners Logo" 
                className="h-32 w-auto mx-auto hover:scale-105 transition-transform duration-500 animate-float"
              />
              <h3 className="text-2xl font-bold mt-4 text-primary">TaxPartners</h3>
              <p className="text-muted-foreground">Tu socio de confianza</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-glow transition-all duration-700 transform hover:scale-105 group overflow-hidden animate-bounce-in`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials carousel */}
            <div className="mt-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                setApi={setCarouselApi}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 hover:shadow-glow transition-all duration-500">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">{testimonial.initials}</span>
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-primary-glow fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "{testimonial.comment}"
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-primary scale-125' 
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;