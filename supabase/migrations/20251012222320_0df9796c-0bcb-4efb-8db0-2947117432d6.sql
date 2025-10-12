-- Crear tabla de prospectos para guardar información del formulario de contacto
CREATE TABLE public.prospectos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre_completo TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT NOT NULL,
  servicio_interes TEXT NOT NULL,
  mensaje TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.prospectos ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones públicas (cualquier persona puede enviar el formulario)
CREATE POLICY "Permitir inserción pública de prospectos" 
ON public.prospectos 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Política para que solo usuarios autenticados puedan ver los prospectos (para futura administración)
CREATE POLICY "Usuarios autenticados pueden ver prospectos" 
ON public.prospectos 
FOR SELECT 
TO authenticated
USING (true);

-- Crear índice para búsquedas por fecha
CREATE INDEX idx_prospectos_created_at ON public.prospectos(created_at DESC);