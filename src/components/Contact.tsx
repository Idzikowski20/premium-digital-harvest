
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Light effects */}
      <div className="absolute top-40 left-20 w-24 h-24 bg-premium-purple/60 rounded-full blur-[50px] animate-pulse-slow"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-premium-blue/60 rounded-full blur-[60px] animate-pulse-slow delay-150"></div>
      <div className="absolute bottom-40 left-1/2 w-28 h-28 bg-premium-pink/60 rounded-full blur-[55px] animate-pulse-slow delay-300"></div>
      
      <div className="absolute top-0 right-0 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
          <p className="text-premium-light/70">
            Masz pytania dotyczące rozwoju witryny internetowej? Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-premium-dark/50 border border-premium-light/10 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Informacje kontaktowe</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-premium-light/50 mb-1">Email:</p>
                  <p className="font-medium">kontakt@idz.tech</p>
                </div>
                <div>
                  <p className="text-premium-light/50 mb-1">Telefon:</p>
                  <p className="font-medium">+48 512 246 908</p>
                </div>
                <div>
                  <p className="text-premium-light/50 mb-1">Adres:</p>
                  <p className="font-medium">Lublin, Polska</p>
                </div>
              </div>
            </div>
            
            <div>
              <Button className="w-full bg-premium-gradient hover:bg-white hover:text-black transition-colors py-6">
                Umów spotkanie online
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
