import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Waves, 
  Sparkles, 
  Users, 
  Heart,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SERVICES = [
  {
    title: "Turkish Hammam Therapy",
    description: "Authentic steam, exfoliation, and foam massage in a traditional marble setting.",
    price: "₹1,499",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Moroccan Bath",
    description: "Traditional exfoliation using black soap and steam for deep skin purification.",
    price: "₹1,799",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Deep Tissue Massage",
    description: "Focused muscle recovery targeting chronic tension with deep, rhythmic pressure.",
    price: "₹499 - ₹3,599",
    duration: "Flexible",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Deep Relaxation Therapy",
    description: "A premium full-body experience designed to melt away stress and tension.",
    price: "₹3,000",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Aromatherapy & Potli",
    description: "Healing herbal compresses and essential oils to rejuvenate the body and mind.",
    price: "Starts ₹1,199",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Couple's Retreat",
    description: "Shared tranquility in our specialized private suites for ultimate bonding.",
    price: "Custom",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  }
];

const REVIEWS = [
  {
    name: "Scott TAULKER",
    text: "Millennium Spa comes at number 1 in Ahmedabad. The best is the couple room, its feeling is amazing!",
    rating: 5
  },
  {
    name: "Gagan Babau",
    text: "Absolutely phenomenal experience on CG Road! The signature aromatherapy massage was pure bliss.",
    rating: 5
  },
  {
    name: "Leela Kumari",
    text: "The therapists were super professional and made me feel totally relaxed. Clean and great ambiance!",
    rating: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <span className={`text-xl font-serif font-bold tracking-wider ${isScrolled ? "text-dark" : "text-white"}`}>MILLENNIUM</span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-dark" : "text-white"}`}>
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Services</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('location')} className="hover:text-accent transition-colors">Location</button>
            <a href="tel:+919106687538" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-dark transition-all flex items-center gap-2">
              <Phone size={16} /> Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} className={isScrolled ? "text-dark" : "text-white"} /> : <Menu size={28} className={isScrolled ? "text-dark" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden"
          >
            <button onClick={() => scrollToSection('about')} className="text-dark font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-dark font-medium">Services</button>
            <button onClick={() => scrollToSection('reviews')} className="text-dark font-medium">Reviews</button>
            <button onClick={() => scrollToSection('location')} className="text-dark font-medium">Location</button>
            <a href="tel:+919106687538" className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2">
              <Phone size={18} /> Call to Book
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80" 
            alt="Spa Background" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] font-medium mb-4 block">Premium Wellness & Hammam</span>
            <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight">
              Millennium Luxurious <br /> Spa & Hammam
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Ahmedabad's premier destination for authentic Turkish and Moroccan Hammam rituals. Escape the city, find your sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary transition-all shadow-lg w-full sm:w-auto"
              >
                Explore Therapies
              </button>
              <a 
                href="https://wa.me/919106687538" 
                target="_blank"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-widest uppercase mb-4 block">Our Identity</span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8 leading-tight">
                Luxury Meets <br /> Ancient Tradition
              </h2>
              <p className="text-dark/70 text-lg mb-6 leading-relaxed">
                Located in the heart of Navrangpura, Millennium is one of the few spas in Ahmedabad offering authentic Turkish and Moroccan Hammam rituals alongside modern luxury therapy.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-accent mt-1"><Waves size={24} /></div>
                  <div>
                    <h4 className="font-serif font-bold text-dark">Authentic Hammam</h4>
                    <p className="text-sm text-dark/60">Traditional marble rituals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent mt-1"><Users size={24} /></div>
                  <div>
                    <h4 className="font-serif font-bold text-dark">Couple's Suites</h4>
                    <p className="text-sm text-dark/60">Shared luxury relaxation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent mt-1"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-serif font-bold text-dark">Open 24/7</h4>
                    <p className="text-sm text-dark/60">Always here for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent mt-1"><Heart size={24} /></div>
                  <div>
                    <h4 className="font-serif font-bold text-dark">Expert Staff</h4>
                    <p className="text-sm text-dark/60">Professional therapists</p>
                  </div>
                </div>
              </div>
              <a href="tel:+919106687538" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
                Call for Appointment <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
                  alt="Spa Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-dark">4.7/5 Rating</span>
                </div>
                <p className="text-dark/60 italic max-w-[200px]">"Impeccably clean rooms and professional staff."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest uppercase mb-4 block">Treatments</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Signature Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-dark group-hover:text-primary transition-colors">{service.title}</h3>
                    <span className="text-accent font-bold">{service.price}</span>
                  </div>
                  <p className="text-dark/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-dark/5">
                    <span className="text-xs text-dark/40 uppercase tracking-widest flex items-center gap-1">
                      <Clock size={14} /> {service.duration}
                    </span>
                    <button className="text-primary font-bold text-sm hover:text-accent transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-dark/50 mb-8">And many more: Thai Massage, Hot Stone, Potli Massage, Chocolate Therapy, Gold Facials...</p>
            <a href="tel:+919106687538" className="bg-primary text-white px-10 py-4 rounded-full font-medium hover:bg-dark transition-all inline-block shadow-lg">
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Sparkles size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-white/70 font-medium tracking-widest uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">What Our Guests Say</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-white/90 text-lg italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <span className="text-white font-bold tracking-wide">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-widest uppercase mb-4 block">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8">Visit Our Sanctuary</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Location</h4>
                    <p className="text-dark/60">Swastik Cross Rd, near hotel scenario, Navrangpura, Ahmedabad, Gujarat 380009</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Operating Hours</h4>
                    <p className="text-dark/60">Open 24 Hours | 7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Contact</h4>
                    <p className="text-dark/60">+91 91066 87538</p>
                    <p className="text-dark/60">WhatsApp available for bookings</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="tel:+919106687538" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-dark transition-all flex items-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Millennium+the+luxurious+spa+and+hammam+Ahmedabad" 
                  target="_blank"
                  className="bg-white text-dark border border-dark/10 px-8 py-3 rounded-full font-bold hover:bg-secondary transition-all flex items-center gap-2"
                >
                  <MapPin size={18} /> Directions
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-xl border-8 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979203043864!2d72.5574577!3d23.0348753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f506827051%3A0x6d05f32a0c6479f6!2sMillennium%20the%20luxurious%20spa%20and%20hammam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <Sparkles size={20} />
                </div>
                <span className="text-2xl font-serif font-bold tracking-wider">MILLENNIUM</span>
              </div>
              <p className="text-white/50 max-w-md leading-relaxed mb-8">
                Experience the ultimate in relaxation and rejuvenation at Ahmedabad's most luxurious spa. We specialize in authentic Turkish and Moroccan Hammam rituals.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/919106687538" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all"><WhatsAppIcon size={18} /></a>
                <a href="tel:+919106687538" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all"><Phone size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/50">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Reviews</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Contact</h4>
              <ul className="space-y-4 text-white/50">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-primary shrink-0" /> Navrangpura, Ahmedabad</li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-primary shrink-0" /> +91 91066 87538</li>
                <li className="flex items-center gap-3"><Clock size={18} className="text-primary shrink-0" /> Open 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-white/30 text-sm">
            <p>&copy; {new Date().getFullYear()} Millennium Luxurious Spa & Hammam. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919106687538" 
          target="_blank"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <WhatsAppIcon size={28} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+919106687538" 
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <Phone size={28} />
        </motion.a>
      </div>
    </div>
  );
}
