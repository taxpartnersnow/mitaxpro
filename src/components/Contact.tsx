import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nombre_completo: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre debe tener menos de 100 caracteres"),
  telefono: z.string().trim().min(1, "El teléfono es requerido").max(20, "El teléfono debe tener menos de 20 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "El email debe tener menos de 255 caracteres"),
  servicio_interes: z.string().min(1, "Debes seleccionar un servicio"),
  mensaje: z.string().trim().max(1000, "El mensaje debe tener menos de 1000 caracteres").optional(),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["(718) 708-1844"],
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
    details: ["488 Onderdonk Ridgewood NY 11385"],
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre_completo: "",
    telefono: "",
    email: "",
    servicio_interes: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar datos
      const validatedData = contactSchema.parse(formData);

      // Guardar en la base de datos
      const { error } = await supabase
        .from("prospectos")
        .insert([{
          nombre_completo: validatedData.nombre_completo,
          telefono: validatedData.telefono,
          email: validatedData.email,
          servicio_interes: validatedData.servicio_interes,
          mensaje: validatedData.mensaje || null,
        }]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Te contactaremos en menos de 24 horas.",
      });

      // Limpiar formulario
      setFormData({
        nombre_completo: "",
        telefono: "",
        email: "",
        servicio_interes: "",
        mensaje: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error en el formulario",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error al enviar",
          description: "Por favor intenta nuevamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
                <h3 className="text-2xl font-bold text-primary-foreground">¡Contáctanos Ahora!</h3>
                <p className="text-primary-foreground/90">Respuesta garantizada en 24 horas</p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                        Nombre Completo
                      </label>
                      <Input 
                        name="nombre_completo"
                        value={formData.nombre_completo}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo" 
                        className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                        Teléfono
                      </label>
                      <Input 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567" 
                        className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                        required
                      />
                    </div>
                  </div>
                
                  <div className="group">
                    <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Email
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com" 
                      className="h-12 border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                      required
                    />
                  </div>
                
                  <div className="group">
                    <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Servicio de Interés
                    </label>
                    <select 
                      name="servicio_interes"
                      value={formData.servicio_interes}
                      onChange={handleInputChange}
                      className="w-full h-12 p-4 border-2 border-border rounded-md bg-background focus:border-primary transition-all duration-300 hover:border-primary/50 font-medium"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Preparación de Impuestos">Preparación de Impuestos</option>
                      <option value="Creación de LLC">Creación de LLC</option>
                      <option value="Servicios de Migración">Servicios de Migración</option>
                    </select>
                  </div>
                
                  <div className="group">
                    <label className="text-sm font-semibold mb-3 block text-foreground group-focus-within:text-primary transition-colors duration-300">
                      Mensaje
                    </label>
                    <Textarea 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos cómo podemos ayudarte..." 
                      rows={6}
                      className="border-2 border-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                
                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full text-xl py-4 group"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario, aceptas recibir comunicaciones de TaxPartners. 
                    Tu información está 100% protegida.
                  </p>
                </form>
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