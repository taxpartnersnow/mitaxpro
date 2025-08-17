import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactanos</h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarte. Agenda tu consulta gratuita hoy mismo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Servicio de Interés</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Selecciona un servicio</option>
                    <option>Preparación de Impuestos</option>
                    <option>Creación de LLC</option>
                    <option>Reparación de Crédito</option>
                    <option>Servicios de Migración</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje</label>
                  <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-muted-foreground">(555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@taxpartners.com</p>
                    <p className="text-muted-foreground">consultas@taxpartners.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-muted-foreground">123 Main Street</p>
                    <p className="text-muted-foreground">Miami, FL 33101</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horarios</h4>
                    <p className="text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sáb: 9:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">¿Necesitas Ayuda Urgente?</h4>
                <p className="mb-4">
                  Para casos urgentes o consultas fuera del horario regular, 
                  contáctanos por WhatsApp.
                </p>
                <Button variant="outline-white" size="sm">
                  WhatsApp: (555) 999-8888
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;