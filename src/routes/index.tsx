import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InquiryDialog } from "@/components/InquiryDialog";
import {
  Phone, MessageCircle, MapPin, Mail, Clock, Star, ShieldCheck, Zap, Wrench,
  Smartphone, Cable, Lightbulb, Speaker, Battery, Headphones, Settings,
  Award, Users, ThumbsUp, Sparkles,
} from "lucide-react";

import logo from "@/assets/star-logo.asset.json";
import hero from "@/assets/hero-store.jpg";
import repairImg from "@/assets/repair-service.jpg";
import pCharger from "@/assets/product-charger.jpg";
import pEarphones from "@/assets/product-earphones.jpg";
import pSpeaker from "@/assets/product-speaker.jpg";
import pLed from "@/assets/product-led.jpg";
import pPower from "@/assets/product-powerbank.jpg";
import pCable from "@/assets/product-cable.jpg";
import pEmergency from "@/assets/product-emergency.jpg";

const WA = "917909050275";
const PHONE = "+917909050275";
const PHONE_DISPLAY = "+91 7909050275";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Star Electronics & Repering Centre — Mobile Repair & Accessories in Mahishi, Saharsa" },
      { name: "description", content: "Trusted electronics shop & repair centre in Mahishi, Saharsa. Mobile repair, chargers, LED bulbs, speakers, accessories. Trusted Service, Best Price." },
      { property: "og:title", content: "Star Electronics & Repering Centre" },
      { property: "og:description", content: "Mobile repair, accessories, LED & electronics in Mahishi, Saharsa, Bihar. Call +91 79090 50275." },
      { property: "og:image", content: logo.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo.url },
      { name: "keywords", content: "Star Electronics Mahishi, Electronics Shop Saharsa, Mobile Repair Mahishi, Electronics Repair Centre Bihar, Mobile Accessories Shop Saharsa, LED Bulb Shop Saharsa, Mobile Charger Shop Bihar" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("");

  const openInquiry = (service = "") => {
    setDefaultService(service);
    setOpen(true);
  };

  return (
    <div className="min-h-screen text-foreground">
      <Header onInquire={openInquiry} />
      <Hero onInquire={openInquiry} />
      <Services onInquire={openInquiry} />
      <Products onInquire={openInquiry} />
      <RepairCTA onInquire={openInquiry} />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact onInquire={openInquiry} />
      <MapSection />
      <Footer />
      <FloatingButtons />
      <InquiryDialog open={open} onOpenChange={setOpen} defaultService={defaultService} />
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-primary/15">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Star Electronics logo" className="h-12 w-12 rounded-md object-cover ring-1 ring-primary/40" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base sm:text-lg text-gold-gradient font-bold tracking-wide">STAR ELECTRONICS</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">Trusted Service, Best Price</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            ["Services", "#services"],
            ["Products", "#products"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${PHONE}`}>
            <Button variant="goldOutline" size="sm" className="hidden sm:inline-flex">
              <Phone className="h-4 w-4" /> Call
            </Button>
          </a>
          <Button variant="gold" size="sm" onClick={() => onInquire()}>
            <MessageCircle className="h-4 w-4" /> Inquire
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Premium electronics store" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-24 sm:pt-24 sm:pb-32 text-center">
        <img src={logo.url} alt="Star Electronics & Repering Centre logo" className="mx-auto h-32 sm:h-40 w-auto rounded-xl shadow-gold-lg animate-float" />

        <div className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-xs uppercase tracking-[0.25em] text-primary animate-fade-up">
          <Sparkles className="h-3.5 w-3.5" /> A Unit of Iqbal Multitrade
        </div>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up">
          <span className="text-gold-gradient">Your One-Stop</span>
          <br />
          <span className="shimmer-gold">Electronics & Repair</span>
          <br />
          <span className="text-foreground">Destination</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground animate-fade-up">
          Mobile accessories, electronics products, repair services, chargers, speakers, cables,
          LED products and much more at affordable prices.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up">
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" className="h-12 px-6 text-base">
              <MessageCircle className="h-5 w-5" /> Contact on WhatsApp
            </Button>
          </a>
          <Button variant="gold" size="lg" className="h-12 px-6 text-base" onClick={() => onInquire("Repair Service")}>
            <Wrench className="h-5 w-5" /> Request Repair Service
          </Button>
          <a href={`tel:${PHONE}`}>
            <Button variant="goldOutline" size="lg" className="h-12 px-6 text-base">
              <Phone className="h-5 w-5" /> Call Now
            </Button>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            [<Award key="a" />, "10+ Yrs", "Experience"],
            [<Users key="u" />, "5000+", "Happy Customers"],
            [<Wrench key="w" />, "Same-Day", "Repairs"],
            [<ShieldCheck key="s" />, "100%", "Genuine Parts"],
          ].map(([icon, big, small], i) => (
            <div key={i} className="premium-card rounded-xl p-4">
              <div className="text-primary mx-auto w-fit">{icon}</div>
              <div className="mt-2 font-display text-xl text-gold-gradient font-bold">{big}</div>
              <div className="text-xs text-muted-foreground">{small}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  {
    icon: Smartphone, title: "Mobile Repair",
    items: ["Screen Replacement", "Battery Issues", "Charging Problems", "Software Issues", "General Repairs"],
  },
  {
    icon: Cable, title: "Mobile Accessories",
    items: ["Chargers", "Data Cables", "Earphones", "Bluetooth Devices", "Power Banks", "Covers & Tempered Glass"],
  },
  {
    icon: Lightbulb, title: "Electronics Products",
    items: ["LED Bulbs", "Emergency Lights", "Electrical Accessories", "Speakers", "Adapters, Switches, Wires"],
  },
  {
    icon: Settings, title: "Repair Services",
    items: ["Electronics Repair", "Home Appliance Repair", "Electrical Repair", "Maintenance Services"],
  },
];

function Services({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <section id="services" className="py-20 sm:py-28 container mx-auto px-4">
      <SectionHeader eyebrow="What We Do" title="Premium Services" subtitle="From everyday accessories to expert repairs — handled with care and craftsmanship." />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, items }) => (
          <div key={title} className="premium-card rounded-2xl p-6 flex flex-col">
            <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-gradient">{title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
              {items.map((it) => (
                <li key={it} className="flex gap-2"><span className="text-primary">◆</span>{it}</li>
              ))}
            </ul>
            <Button variant="goldOutline" size="sm" className="mt-6" onClick={() => onInquire(title)}>
              <MessageCircle className="h-4 w-4" /> Inquire
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
const products = [
  { name: "Fast Mobile Charger", category: "Charger", img: pCharger, icon: Zap },
  { name: "Premium Earphones", category: "Audio", img: pEarphones, icon: Headphones },
  { name: "Bluetooth Speaker", category: "Speaker", img: pSpeaker, icon: Speaker },
  { name: "LED Bulb", category: "Lighting", img: pLed, icon: Lightbulb },
  { name: "Power Bank", category: "Power", img: pPower, icon: Battery },
  { name: "Braided USB Cable", category: "Cable", img: pCable, icon: Cable },
  { name: "Emergency LED Light", category: "Lighting", img: pEmergency, icon: Lightbulb },
  { name: "Mobile Covers & Glass", category: "Accessory", img: pEarphones, icon: Smartphone },
];

function Products({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Showcase" title="Featured Products" subtitle="Quality accessories and electronics — handpicked for performance and value." />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.name} className="premium-card rounded-2xl overflow-hidden group">
                <div className="aspect-square overflow-hidden bg-black relative">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-background/70 border border-primary/40 text-primary backdrop-blur-sm">
                    {p.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-foreground line-clamp-1">{p.name}</h3>
                  </div>
                  <Button variant="gold" size="sm" className="mt-3 w-full" onClick={() => onInquire(p.name)}>
                    Get Price / Inquiry
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- REPAIR CTA ---------- */
function RepairCTA({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <section className="py-20 sm:py-24 container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl premium-card">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img src={repairImg} alt="Mobile repair service" loading="lazy" width={1400} height={900}
              className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:to-card" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-primary/40 text-xs uppercase tracking-widest text-primary">
              <Wrench className="h-3.5 w-3.5" /> Expert Repairs
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gold-gradient">
              Need Electronics Repair?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Submit your repair request and our team will contact you quickly with the best price and turnaround time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="gold" size="lg" onClick={() => onInquire("Repair Service")}>
                <Wrench className="h-5 w-5" /> Request Repair Service
              </Button>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
const reasons = [
  { icon: ShieldCheck, title: "Trusted Service", desc: "Years of reliable service to our local community." },
  { icon: Zap, title: "Affordable Pricing", desc: "Best prices on accessories and repairs." },
  { icon: Wrench, title: "Experienced Technicians", desc: "Skilled hands for delicate repairs." },
  { icon: Clock, title: "Quick Repair Solutions", desc: "Same-day fixes for most issues." },
  { icon: Award, title: "Genuine Accessories", desc: "Only authentic, quality-checked products." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Friendly support and honest advice." },
  { icon: MapPin, title: "Best Local Store", desc: "Mahishi's go-to electronics destination." },
  { icon: Sparkles, title: "Fast Response", desc: "Quick WhatsApp & call replies." },
];

function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 container mx-auto px-4">
      <SectionHeader eyebrow="Why Star?" title="Why Choose Us" subtitle="Eight reasons our customers keep coming back." />
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="premium-card rounded-2xl p-5 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 border border-primary/30 grid place-items-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-3 font-semibold text-foreground">{title}</div>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary">About Us</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gold-gradient">
            Trusted Electronics, Honest Service.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Star Electronics & Repering Centre is a trusted electronics shop and repair centre
            located in <strong className="text-foreground">Mahishi, Saharsa, Bihar</strong>.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We provide quality electronics products, mobile accessories, repair services,
            electrical items, LED products, and customer-friendly support at affordable prices.
            Our mission is to provide trusted service and best prices for every customer.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="premium-card rounded-xl p-4">
              <div className="text-xs uppercase tracking-wider text-primary">Owner</div>
              <div className="mt-1 font-semibold">Sajid Iqbal</div>
            </div>
            <div className="premium-card rounded-xl p-4">
              <div className="text-xs uppercase tracking-wider text-primary">Hours</div>
              <div className="mt-1 font-semibold">8:00 AM – 8:00 PM</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gold-gradient opacity-30 blur-3xl rounded-full" />
          <img src={logo.url} alt="Star Electronics logo" className="relative mx-auto w-full max-w-md rounded-3xl shadow-gold-lg" />
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { text: "Best electronics shop in our area. Always reliable.", name: "Ravi K." },
  { text: "Quick mobile repair service — fixed my screen the same day.", name: "Priya S." },
  { text: "Affordable prices and genuine accessories. Highly recommended.", name: "Aman R." },
  { text: "Friendly owner and excellent customer support.", name: "Neha P." },
];

function Testimonials() {
  return (
    <section className="py-20 sm:py-28 container mx-auto px-4">
      <SectionHeader eyebrow="Reviews" title="What Customers Say" subtitle="Real feedback from our happy customers." />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="premium-card rounded-2xl p-6">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">“{t.text}”</p>
            <div className="mt-4 text-sm font-semibold text-foreground">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ onInquire }: { onInquire: (s?: string) => void }) {
  return (
    <section id="contact" className="py-20 sm:py-28 container mx-auto px-4">
      <SectionHeader eyebrow="Get in Touch" title="Contact Us" subtitle="We're here to help — reach out anytime during business hours." />
      <div className="mt-14 grid lg:grid-cols-2 gap-8">
        <div className="premium-card rounded-2xl p-8 space-y-5">
          <ContactRow icon={<Smartphone />} label="Business" value="STAR ELECTRONICS & REPERING CENTRE" />
          <ContactRow icon={<Users />} label="Owner" value="Sajid Iqbal" />
          <ContactRow icon={<Phone />} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
          <ContactRow icon={<MessageCircle />} label="WhatsApp" value={PHONE_DISPLAY} href={`https://wa.me/${WA}`} />
          <ContactRow icon={<Mail />} label="Email" value="sajidiqbal7909@gmail.com" href="mailto:sajidiqbal7909@gmail.com" />
          <ContactRow icon={<MapPin />} label="Address" value="Lilja Hatiya Gachhi, Mahishi, Saharsa, Bihar, India" />
          <ContactRow icon={<Clock />} label="Business Hours" value="8:00 AM – 8:00 PM" />
        </div>
        <QuickContactForm onInquire={onInquire} />
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 text-primary grid place-items-center shrink-0">{icon}</div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-primary/80">{label}</div>
        <div className="text-foreground font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:opacity-80 transition">{content}</a> : content;
}

function QuickContactForm({ onInquire: _ }: { onInquire: (s?: string) => void }) {
  const [f, setF] = useState({ name: "", phone: "", service: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Star Electronics & Repering Centre 👋\n\nName: ${f.name}\nPhone: ${f.phone}\nRequired: ${f.service}\nMessage: ${f.message}\n\nThank You.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return (
    <form onSubmit={submit} className="premium-card rounded-2xl p-8 space-y-4">
      <h3 className="font-display text-2xl font-bold text-gold-gradient">Send WhatsApp Inquiry</h3>
      <input required placeholder="Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={100}
        className="w-full bg-secondary border border-primary/20 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition" />
      <input required placeholder="Phone" type="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} maxLength={15}
        className="w-full bg-secondary border border-primary/20 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition" />
      <input required placeholder="Required Product / Service" value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })} maxLength={120}
        className="w-full bg-secondary border border-primary/20 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition" />
      <textarea placeholder="Message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} rows={4} maxLength={500}
        className="w-full bg-secondary border border-primary/20 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none" />
      <Button type="submit" variant="gold" size="lg" className="w-full">
        <MessageCircle className="h-5 w-5" /> Send WhatsApp Inquiry
      </Button>
    </form>
  );
}

/* ---------- MAP ---------- */
function MapSection() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="premium-card rounded-2xl overflow-hidden">
        <iframe
          title="Star Electronics location"
          src="https://www.google.com/maps?q=Mahishi%2C%20Saharsa%2C%20Bihar&output=embed"
          width="100%" height="380" loading="lazy" style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background">
      <div className="container mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Star Electronics" className="h-12 w-12 rounded-md ring-1 ring-primary/40" />
            <div>
              <div className="font-display font-bold text-gold-gradient">STAR ELECTRONICS</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Trusted Service, Best Price</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Your trusted electronics shop & repair centre in Mahishi, Saharsa, Bihar.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li>
            <li><a href="#products" className="text-muted-foreground hover:text-primary">Products</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            <li><a href={`https://wa.me/${WA}`} className="text-muted-foreground hover:text-primary">WhatsApp</a></li>
            <li><a href={`tel:${PHONE}`} className="text-muted-foreground hover:text-primary">Call Now</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary">Reach Us</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Phone: <a href={`tel:${PHONE}`} className="text-foreground hover:text-primary">{PHONE_DISPLAY}</a></li>
            <li>WhatsApp: <a href={`https://wa.me/${WA}`} className="text-foreground hover:text-primary">{PHONE_DISPLAY}</a></li>
            <li>Email: <a href="mailto:sajidiqbal7909@gmail.com" className="text-foreground hover:text-primary">sajidiqbal7909@gmail.com</a></li>
            <li>Lilja Hatiya Gachhi, Mahishi, Saharsa, Bihar</li>
          </ul>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="container mx-auto px-4 py-5 text-center text-xs text-muted-foreground">
        Copyright © 2026 STAR ELECTRONICS & REPERING CENTRE. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------- FLOATING BUTTONS ---------- */
function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      <a href={`tel:${PHONE}`} className="group relative" aria-label="Call Now">
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-card border border-primary/30 text-xs text-foreground opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Call Now</span>
        <span className="grid place-items-center h-14 w-14 rounded-full bg-gold-gradient text-primary-foreground shadow-gold-lg animate-pulse-gold">
          <Phone className="h-6 w-6" />
        </span>
      </a>
      <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Chat on WhatsApp">
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-card border border-primary/30 text-xs text-foreground opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Chat on WhatsApp</span>
        <span className="grid place-items-center h-14 w-14 rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg animate-pulse-whatsapp">
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>
    </div>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gold-gradient">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
