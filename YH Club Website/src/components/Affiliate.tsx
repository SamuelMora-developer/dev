
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Affiliate = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email });
    
    // Show success toast
    toast({
      title: "Application Received!",
      description: "We'll review your application and get back to you soon.",
    });
    
    // Reset form
    setName('');
    setEmail('');
  };

  const benefits = [
    'Earn up to 30% commission on every sale you refer',
    'Dedicated affiliate dashboard to track your earnings',
    'Promotional materials and resources provided',
    'Monthly payments via PayPal or direct deposit',
    'Exclusive affiliate-only training and support',
  ];

  return (
    <div className="py-16 bg-hustler-lightgray" id="affiliate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hustler-black">Become an Affiliate</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-hustler-darkgray">
            Join our affiliate program and earn commissions by promoting our courses to your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-hustler-black mb-6">Affiliate Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-hustler-gold font-bold mr-2">✓</span>
                  <span className="text-hustler-darkgray">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-hustler-black rounded-lg">
              <p className="text-white text-center">
                <span className="block text-hustler-gold font-bold text-xl mb-1">Ready to start earning?</span>
                Apply now and start promoting our courses to your audience!
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-hustler-black mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Full Name
                </label>
                <Input 
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-hustler-darkgray mb-1">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-hustler-gold hover:bg-yellow-500 text-hustler-black"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
