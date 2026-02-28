import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Beaker,
    Menu,
    X,
    CheckCircle2,
    Award,
    BookOpen,
    GraduationCap,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Founder', href: '#founder' },
        { name: 'Programs', href: '#programs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                        <Beaker className="text-slate-950 w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter gradient-text">CHEMEDIIT</span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-widest">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="btn-premium py-2 px-6 text-sm">Join Now</button>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-nav p-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-4 text-center text-lg font-bold text-slate-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* PREMIUM HERO BANNER */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/chemediit_hero_banner.png"
                    alt="Premium Chemistry Lab"
                    className="w-full h-full object-cover opacity-30 scale-105 animate-3d"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
            </div>

            {/* 3D BACKGROUND SHAPES */}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    <span className="text-xs font-bold tracking-[0.2em] text-amber-200">#1 CHEMISTRY REVOLUTION</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tighter"
                >
                    MASTER <br /> <span className="gradient-text">CHEMISTRY</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium"
                >
                    Comprehensive and competitive excellence for <span className="text-white">JEE (Mains + Advance)</span> & <span className="text-white">NEET</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <button className="btn-premium text-lg group">
                        Explore Programs <ArrowUpRight className="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors">
                        Contact Us
                    </button>
                </motion.div>

                {/* Stats Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { label: 'Success Rate', val: '98%' },
                        { label: 'IITians Made', val: '500+' },
                        { label: 'Experience', val: '15yr+' },
                        { label: 'Exams Covered', val: '5+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="glass-card p-10 group hover:border-amber-500/30 transition-all duration-500"
    >
        <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Icon className="text-amber-500 w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed leading-relaxed">{desc}</p>
    </motion.div>
);

const About = () => {
    const features = [
        { icon: BookOpen, title: 'Simplified Concepts', desc: 'Our Moto is to make Chemistry fun and simplified for every student.' },
        { icon: Award, title: 'Proven Tricks', desc: 'We teach techniques and ways to memorize things easily for long-term retention.' },
        { icon: CheckCircle2, title: 'JEE & NEET Prep', desc: 'Get Undoubted success in JEE & NEET with our focused curriculum.' },
        { icon: GraduationCap, title: 'Board Excellence', desc: 'Aim for the prestigious 90+ marks in your board examinations.' }
    ];

    return (
        <section id="about" className="section-padding bg-slate-950">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        WHY <span className="gradient-text">CHEMEDIIT?</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8" />
                    <p className="text-7xl md:text-9xl font-black text-white/5 absolute left-0 right-0 pointer-events-none select-none">QUALITY</p>
                    <h3 className="text-3xl md:text-4xl font-bold gradient-text italic">"Ratna Mana Hai"</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => <FeatureCard key={i} {...f} delay={i * 0.1} />)}
                </div>
            </div>
        </section>
    );
};

const Founder = () => {
    return (
        <section id="founder" className="section-padding bg-slate-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] pointer-events-none" />
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                            <img
                                src="https://i.pinimg.com/736x/33/99/7a/33997a7229d8570d535e6ddfdd916ba4.jpg"
                                alt="Indrajeet Kumar Singh"
                                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Quote Pop */}
                        <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-xs md:block hidden">
                            <p className="text-lg italic text-slate-300">"Your dreams are not yours alone!"</p>
                            <p className="mt-4 font-bold text-amber-500 text-sm">— Indrajeet Kumar Singh</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-4">MEET OUR <span className="gradient-text">FOUNDER</span></h2>
                        <h4 className="text-2xl font-bold text-amber-500 mb-8 uppercase tracking-widest">Indrajeet Kumar Singh</h4>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                            <p>
                                With over <span className="text-white font-bold">15 years</span> of distinguished teaching experience at <span className="text-white">VMC Coaching</span>, Indrajeet Kumar Sir has mentored thousands of students to achieve their dreams.
                            </p>
                            <p>
                                His philosophy revolves around conceptual clarity, personalized guidance, and relentless motivation. He believes in building strong foundations from the ground up.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                'Mentored 500+ IITians',
                                'Former VMC Faculty',
                                'Multiple School Toppers',
                                'Global University Mentor'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn-premium">Read Full Story</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProgramBox = ({ title, duration, items, color }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`glass-card p-10 relative overflow-hidden group`}
    >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors`} />
        <h3 className="text-2xl font-black mb-2 text-white">{title}</h3>
        <p className="text-amber-500 font-bold mb-8 uppercase tracking-tighter">{duration}</p>

        <ul className="space-y-4 mb-10">
            {items.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item}</span>
                </li>
            ))}
        </ul>

        <button className="w-full py-3 rounded-xl border border-white/10 group-hover:bg-amber-500 group-hover:text-slate-950 font-bold transition-all">
            Enquire Now
        </button>
    </motion.div>
);

const Programs = () => {
    const commonFeatures = [
        'Comprehensive syllabus coverage',
        'Regular assessments & feedback',
        'Personalized doubt clearing',
        'Offline & Online modes'
    ];

    return (
        <section id="programs" className="section-padding bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">ELITE <span className="gradient-text">PROGRAMS</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Tailored coaching for the brightest minds aiming for excellence in competitive chemistry.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                    <ProgramBox
                        title="JEE (Mains & Advanced)"
                        duration="2-Years Foundation"
                        items={commonFeatures}
                    />
                    <ProgramBox
                        title="NEET Excellence"
                        duration="2-Years Target"
                        items={commonFeatures}
                    />
                    <ProgramBox
                        title="Board Mastery"
                        duration="Class 11th & 12th"
                        items={['CBSE / ICSE / BSEB focus', ...commonFeatures]}
                    />
                    <ProgramBox
                        title="Target Batch"
                        duration="Crash Course / Dropper"
                        items={['Rapid revision modules', ...commonFeatures]}
                    />
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 mb-20">
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                                <Beaker className="text-slate-950 w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter gradient-text">CHEMEDIIT</span>
                        </div>
                        <p className="text-slate-400 text-lg mb-10 max-w-md italic">
                            "Transforming how students perceive and learn chemistry. From basic concepts to advanced competitive levels."
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-amber-500" />
                                </div>
                                <span className="text-slate-300 font-medium">+91 91101 27801</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-amber-500" />
                                </div>
                                <span className="text-slate-300 font-medium">contact@chemediit.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-amber-500" />
                                </div>
                                <span className="text-slate-300 font-medium font-medium leading-relaxed">Shop No 1, Main Market, <br />Near VMC, Patna, Bihar</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Quick Inquiry</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                                <input type="email" placeholder="Email Address" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                            </div>
                            <select className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                                <option>Select Program</option>
                                <option>JEE Foundation</option>
                                <option>NEET Target</option>
                                <option>Board Support</option>
                            </select>
                            <textarea placeholder="Your Message" rows="4" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                            <button className="btn-premium w-full">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">© 2026 CHEMEDIIT. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <Twitter className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="font-sans antialiased text-slate-200">
            <Navbar />
            <Hero />
            <About />
            <Founder />
            <Programs />
            <Footer />
        </div>
    );
};

export default App;
