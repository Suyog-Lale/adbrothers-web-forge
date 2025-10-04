-- Create quote_requests table for storing client inquiries
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL,
  blasting_type TEXT,
  project_type TEXT NOT NULL,
  material_surface TEXT,
  approximate_size TEXT,
  client_name TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow viewing all requests (for admin viewing later)
CREATE POLICY "Anyone can view quote requests"
  ON public.quote_requests
  FOR SELECT
  TO public
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_requests_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for better query performance
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);
CREATE INDEX idx_quote_requests_status ON public.quote_requests(status);