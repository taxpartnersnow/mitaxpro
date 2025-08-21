import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["(555) 123-4567", "(555) 987-6543"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["taxpartnersnow@gmail.com"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Dirección",
    details: ["123 Main Street", "Miami, FL 33101"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 9:00 AM - 6:00 PM", "Sáb: 9:00 AM - 2:00 PM", "Dom: Cerrado"],
    gradient: "from-orange-500 to-red-500"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-accent to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Contacto Profesional</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Hablemos de tu Futuro
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a alcanzar tus objetivos financieros y legales. 
            Agenda tu consulta gratuita y descubre cómo podemos transformar tu situación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-card border-0 shadow-xl hover:shadow-glow transition-all duration-500 overflow-hidden">
              {/* Logo en el formulario */}
              <div className="bg-gradient-primary p-6 text-center">
                <img 
                  src="/lovable-uploads/7d0d4420-cdc2-418b-8c10-04d8a24306d7.png" 
                  alt="Tax Partners Logo" 
                  className="h-16 w-auto mx-auto mb-4 filter brightness-0 invert"
                />
                <h3 className="text-2xl font-bold text-primary-foreground">¡Contáctanos Ahora!</h3>
                <p className="text-primary-foreground/90">Respuesta garantizada en 24 horas</p>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Nombre Completo
                    </label>
                    <Input 
                      placeholder="Tu nombre completo" 
                      className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Teléfono
                    </label>
                    <Input 
                      placeholder="(555) 123-4567" 
                      className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                    Servicio de Interés
                  </label>
                  <select className="w-full h-12 p-4 border-2 border-border rounded-md bg-background focus:border-primary transition-all duration-300 hover:border-primary/50 font-medium">
                    <option>Selecciona un servicio</option>
                    <option>Preparación de Impuestos</option>
                    <option>Creación de LLC</option>
                    <option>Reparación de Crédito</option>
                    <option>Servicios de Migración</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos cómo podemos ayudarte..." 
                    rows={6}
                    className="border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                  />
                </div>
                
                <Button variant="premium" size="lg" className="w-full text-xl py-4 group">
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Enviar Mensaje
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Al enviar este formulario, aceptas recibir comunicaciones de TaxPartners. 
                  Tu información está 100% protegida.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">Información de Contacto</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`group p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-primary/10 hover:border-primary/30 animate-scale-in`}
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground mb-1 group-hover:text-foreground transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Emergency Contact Card */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold mb-2">¿Necesitas Ayuda Urgente?</h4>
                  <p className="text-primary-foreground/90 text-lg">
                    Para casos urgentes o consultas fuera del horario regular, 
                    contáctanos por WhatsApp las 24 horas.
                  </p>
                </div>
                <Button 
                  variant="outline-white" 
                  size="lg" 
                  className="w-full text-lg py-4 group"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp: (555) 999-8888
                </Button>
              </CardContent>
            </Card>

            {/* Additional CTA */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 text-center">
              <h4 className="text-2xl font-bold mb-4">¿Prefieres que te llamemos?</h4>
              <p className="text-muted-foreground mb-6 text-lg">
                Déjanos tu número y un experto te contactará en menos de 2 horas
              </p>
              <Button variant="premium" size="lg" className="text-lg px-8">
                Solicitar Llamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;