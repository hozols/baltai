import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'lv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  lv: {
    // Navigation
    'nav.features': 'Iespējas',
    'nav.solutions': 'Risinājumi',
    'nav.pricing': 'Cenas',
    'nav.contact': 'Kontakti',
    'nav.theme': 'Tēma',
    
    // Hero Section
    'hero.badge': 'Jauni AI risinājumi',
    'hero.title': 'AI automatizācija augošiem uzņēmumiem',
    'hero.title.highlight': 'augošiem',
    'hero.description': 'Optimizējiet savus biznesa procesus ar mūsu visaptverošajiem AI risinājumiem. Radīts moderniem uzņēmumiem, kas novērtē efektivitāti, precizitāti un mērogojamu izaugsmi.',
    'hero.cta.demo': 'Rezervēt bezmaksas konsultāciju',
    'hero.trial': 'Bezmaksas 14 dienu izmēģinājums',
    'hero.showcase.title': 'Mūsu AI Risinājumi',
    'hero.showcase.view_all': 'Skatīt visus',
    'hero.showcase.nav.workers': 'AI Darbinieki',
    'hero.showcase.nav.chatbots': 'Čatboti',
    'hero.showcase.nav.automation': 'Automatizācija',
    'hero.showcase.nav.analytics': 'Analītika',
    'hero.showcase.categories.automation': 'Automatizācija',
    'hero.showcase.categories.intelligence': 'Datu Intelekts',
    'hero.showcase.categories.support': 'Klientu Atbalsts',
    'hero.showcase.services': 'Aktīvie Pakalpojumi',
    'hero.showcase.explore': 'Izpētīt pakalpojumus',
    
    // Services
    'services.title': 'Mūsu AI Pakalpojumi',
    'services.description': 'Visaptveroši AI risinājumi, kas transformē jūsu biznesa procesus un uzlabo efektivitāti',
    'services.workers.title': 'AI Darbinieki',
    'services.workers.subtitle': 'Gatavi izmantošanai AI darbinieki, kas nevainojami integrējas jūsu komandā',
    'services.workers.description': 'Pielāgoti apmācīti AI darbinieki, kas var veikt specifiskus uzdevumus un darba plūsmas, ar iebūvētām zināšanām un pielāgojamām prasmēm.',
    'services.chatbots.title': 'AI Čatboti',
    'services.chatbots.subtitle': 'Inteliģenti sarunu aģenti 24/7 klientu atbalstam',
    'services.chatbots.description': 'Moderni čatboti, kas darbojas ar jaunāko AI tehnoloģiju, nodrošinot tūlītēju atbalstu un uzlabojot klientu apmierinātību.',
    'services.automation.title': 'Procesu Automatizācija',
    'services.automation.subtitle': 'Optimizējiet darbības ar inteliģento automatizāciju',
    'services.automation.description': 'Pilnīgi automatizācijas risinājumi, kas optimizē darba plūsmas, samazina izmaksas un uzlabo efektivitāti.',
    'services.documents.title': 'Dokumentu Apstrāde',
    'services.documents.subtitle': 'Automatizēta dokumentu ģenerēšana un analīze',
    'services.documents.description': 'Inteliģentas sistēmas dokumentu veidošanai, apstrādei un analīzei, samazinot manuālo darbu un kļūdas.',
    'services.intelligence.title': 'Datu Intelekts',
    'services.intelligence.subtitle': 'Pārvērtiet savus datus rīcībspējīgos ieskatos',
    'services.intelligence.description': 'Moderna datu analītika un AI veidoti ieskati labāku biznesa lēmumu pieņemšanai un iespēju identificēšanai.',
    'services.custom.title': 'Pielāgoti AI Risinājumi',
    'services.custom.subtitle': 'Individuāli AI risinājumi unikāliem izaicinājumiem',
    'services.custom.description': 'Īpaši izstrādāti AI risinājumi, kas veidoti atbilstoši jūsu biznesa vajadzībām un nozares prasībām.',
    'services.cta.title': 'Gatavi sākt?',
    'services.cta.description': 'Sazinieties ar mums, lai apspriestu, kā AI var transformēt jūsu biznesu un palīdzēt sasniegt jaunos mērķus.',
    'services.cta.contact': 'Sazinaties ar mums',
    'services.cta.consultation': 'Bezmaksas konsultācija',
    'services.learn_more': 'Uzzināt vairāk',
    
    // Pricing
    'pricing.title': 'Caurspīdīgas Cenas Katram Posmam',
    'pricing.subtitle': 'Izvēlieties sev piemēroto plānu un sāciet transformēt savu biznesu ar AI',
    'pricing.starter.title': 'Sākuma',
    'pricing.starter.price': 'Sākot no €299',
    'pricing.starter.period': 'mēnesī',
    'pricing.starter.description': 'Ideāls mazākiem uzņēmumiem, kas vēlas sākt AI automatizācijas ceļu',
    'pricing.professional.title': 'Profesionālis',
    'pricing.professional.price': 'Sākot no €699',
    'pricing.professional.period': 'mēnesī',
    'pricing.professional.description': 'Pilnvērtīgs risinājums uzņēmumiem ar sarežģītām automatizācijas vajadzībām',
    'pricing.contact': 'Sazināties',
    'pricing.popular': 'Populārākais',
    
    // Benefits
    'features.title': 'Viss, kas nepieciešams jūsu biznesam',
    'features.description': 'AI tehnoloģijas, kas sniedz reālus rezultātus un transformē jūsu uzņēmuma darbību',
    'features.efficiency.title': 'Dramatiska Efektivitātes Pieaugums',
    'features.efficiency.description': 'Samaziniet manuālo darbu līdz 80% un paātriniet procesus ar inteliģento automatizāciju.',
    'features.efficiency.expanded': 'Mūsu klienti vidēji ietaupa 15-25 stundas nedēļā katram darbiniekam, automatizējot atkārtojošos uzdevumus. AI sistēmas strādā 24/7 bez pārtraukumiem un kļūdām.',
    'features.savings.title': 'Ievērojams Izmaksu Samazinājums',
    'features.savings.description': 'Samaziniet darbaspēka izmaksas un operacionālās izmaksas ar AI automatizāciju.',
    'features.savings.expanded': 'Vidējais mūsu klientu izmaksu samazinājums ir 40-60% pirmajā gadā. AI risinājumi atmaksājas 3-6 mēnešos un turpina radīt ietaupījumus ilgtermiņā.',
    'features.growth.title': 'Mērogojama Biznesa Izaugsme',
    'features.growth.description': 'Paplašiniet savu biznesu bez proporcionāla darbinieku skaita palielināšanas.',
    'features.growth.expanded': 'AI sistēmas ļauj apstrādāt 10x lielāku darba apjomu ar to pašu komandu. Mūsu klienti vidēji palielina savu kapacitāti par 200-500% pirmajā gadā.',
    'features.accuracy.title': 'Maksimāla Precizitāte un Kvalitāte',
    'features.accuracy.description': 'Samaziniet cilvēciskās kļūdas līdz minimumam ar AI precizitāti.',
    'features.accuracy.expanded': 'AI sistēmas nodrošina 99.9% precizitāti datu apstrādē un lēmumu pieņemšanā. Pilnībā novēršiet tipiskās manuālā darba kļūdas.',
    'features.competitive.title': 'Konkurētspējas Priekšrocība',
    'features.competitive.description': 'Apsteidziet konkurentus ar jaunākajām AI tehnoloģijām un inovācijām.',
    'features.competitive.expanded': 'Kļūstiet par nozares līderi, piedāvājot ātrāku, precizāku un kvalitatīvāku servisu. AI ļauj reaģēt uz tirgus izmaiņām reāllaikā.',
    'features.satisfaction.title': 'Uzlabota Klientu Apmierinātība',
    'features.satisfaction.description': 'Nodrošiniet 24/7 atbalstu un personalizētu pieredzi katram klientam.',
    'features.satisfaction.expanded': 'Mūsu klienti reģistrē 40-70% klientu apmierinātības pieaugumu. AI ļauj sniegt tūlītējas, precīzas atbildes un personalizētu apkalpošanu.',
    'features.learn_more': 'Uzzināt vairāk →',
    
    // Contact Page
    'contact.title': 'Sazinaties ar mums',
    'contact.subtitle': 'Gatavi transformēt savu biznesu ar AI? Sazinieties ar mūsu ekspertiem.',
    'contact.form.title': 'Nosūtiet mums ziņu',
    'contact.form.name': 'Vārds',
    'contact.form.name.placeholder': 'Jūsu vārds',
    'contact.form.email': 'E-pasts',
    'contact.form.email.placeholder': 'jusu.epasts@piemers.lv',
    'contact.form.company': 'Uzņēmums',
    'contact.form.company.placeholder': 'Jūsu uzņēmuma nosaukums',
    'contact.form.phone': 'Telefons',
    'contact.form.phone.placeholder': '+371 20 000 000',
    'contact.form.service': 'Interesējošais pakalpojums',
    'contact.form.service.placeholder': 'Izvēlieties pakalpojumu',
    'contact.form.service.workers': 'AI Darbinieki',
    'contact.form.service.chatbots': 'AI Čatboti',
    'contact.form.service.automation': 'Procesu Automatizācija',
    'contact.form.service.documents': 'Dokumentu Apstrāde',
    'contact.form.service.intelligence': 'Datu Intelekts',
    'contact.form.service.custom': 'Pielāgoti Risinājumi',
    'contact.form.service.consultation': 'Konsultācija',
    'contact.form.message': 'Ziņa',
    'contact.form.message.placeholder': 'Pastāstiet mums par savu projektu un vajadzībām...',
    'contact.form.submit': 'Nosūtīt ziņu',
    'contact.form.sending': 'Nosūta...',
    'contact.info.title': 'Kontaktinformācija',
    'contact.info.address': 'Adrese',
    'contact.info.phone': 'Tālrunis',
    'contact.info.email': 'E-pasts',
    'contact.info.hours': 'Darba laiks',
    'contact.info.hours.weekdays': 'Pirmdiena - Piektdiena: 9:00 - 18:00',
    'contact.info.hours.weekend': 'Sestdiena - Svētdiena: Pēc vienošanās',
    'contact.map.title': 'Mūsu atrašanās vieta',
    'contact.form.success': 'Paldies! Jūsu ziņa ir nosūtīta. Mēs sazināsimies ar jums tuvāko 24 stundu laikā.',
    'contact.form.error': 'Radās kļūda nosūtot ziņu. Lūdzu mēģiniet vēlreiz.',
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.theme': 'Theme',
    
    // Hero Section
    'hero.badge': 'New AI Solutions',
    'hero.title': 'AI automation for growing businesses',
    'hero.title.highlight': 'growing',
    'hero.description': 'Optimize your business processes with our comprehensive AI solutions. Built for modern companies that value efficiency, precision, and scalable growth.',
    'hero.cta.demo': 'Book a Demo',
    'hero.trial': 'Free 14-day trial',
    'hero.showcase.title': 'Our AI Solutions',
    'hero.showcase.view_all': 'View All',
    'hero.showcase.nav.workers': 'AI Workers',
    'hero.showcase.nav.chatbots': 'Chatbots',
    'hero.showcase.nav.automation': 'Automation',
    'hero.showcase.nav.analytics': 'Analytics',
    'hero.showcase.categories.automation': 'Automation',
    'hero.showcase.categories.intelligence': 'Data Intelligence',
    'hero.showcase.categories.support': 'Customer Support',
    'hero.showcase.services': 'Active Services',
    'hero.showcase.explore': 'Explore Services',
    
    // Services
    'services.title': 'Our AI Services',
    'services.description': 'Comprehensive AI solutions that transform your business processes and improve efficiency',
    'services.workers.title': 'AI Workers',
    'services.workers.subtitle': 'Ready-to-use AI workers that seamlessly integrate with your team',
    'services.workers.description': 'Custom-trained AI workers that can perform specific tasks and workflows, with built-in knowledge and adaptable skills.',
    'services.chatbots.title': 'AI Chatbots',
    'services.chatbots.subtitle': 'Intelligent conversation agents for 24/7 customer support',
    'services.chatbots.description': 'Modern chatbots powered by the latest AI technology, providing instant support and improving customer satisfaction.',
    'services.automation.title': 'Process Automation',
    'services.automation.subtitle': 'Optimize operations with intelligent automation',
    'services.automation.description': 'Complete automation solutions that optimize workflows, reduce costs, and improve efficiency.',
    'services.documents.title': 'Document Processing',
    'services.documents.subtitle': 'Automated document generation and analysis',
    'services.documents.description': 'Intelligent systems for document creation, processing, and analysis, reducing manual work and errors.',
    'services.intelligence.title': 'Data Intelligence',
    'services.intelligence.subtitle': 'Transform your data into actionable insights',
    'services.intelligence.description': 'Modern data analytics and AI-driven insights for better business decision-making and opportunity identification.',
    'services.custom.title': 'Custom AI Solutions',
    'services.custom.subtitle': 'Individual AI solutions for unique challenges',
    'services.custom.description': 'Specially developed AI solutions tailored to your business needs and industry requirements.',
    'services.cta.title': 'Ready to start?',
    'services.cta.description': 'Contact us to discuss how AI can transform your business and help achieve new goals.',
    'services.cta.contact': 'Contact us',
    'services.cta.consultation': 'Free consultation',
    'services.learn_more': 'Learn more',
    
    // Pricing
    'pricing.title': 'Transparent Pricing for Every Stage',
    'pricing.subtitle': 'Choose the plan that fits your needs and start transforming your business with AI',
    'pricing.starter.title': 'Starter',
    'pricing.starter.price': 'Starting from €299',
    'pricing.starter.period': 'per month',
    'pricing.starter.description': 'Perfect for small businesses starting their AI automation journey',
    'pricing.professional.title': 'Professional',
    'pricing.professional.price': 'Starting from €699',
    'pricing.professional.period': 'per month',
    'pricing.professional.description': 'Complete solution for businesses with complex automation needs',
    'pricing.contact': 'Contact Us',
    'pricing.popular': 'Most Popular',
    
    // Benefits
    'features.title': 'Everything your business needs',
    'features.description': 'AI technologies that deliver real results and transform your business operations',
    'features.efficiency.title': 'Dramatic Efficiency Increase',
    'features.efficiency.description': 'Reduce manual work by up to 80% and accelerate processes with intelligent automation.',
    'features.efficiency.expanded': 'Our clients save an average of 15-25 hours per week per employee by automating repetitive tasks. AI systems work 24/7 without breaks or errors.',
    'features.savings.title': 'Significant Cost Reduction',
    'features.savings.description': 'Reduce labor costs and operational expenses with AI automation.',
    'features.savings.expanded': 'Average cost reduction for our clients is 40-60% in the first year. AI solutions pay for themselves in 3-6 months and continue generating savings long-term.',
    'features.growth.title': 'Scalable Business Growth',
    'features.growth.description': 'Expand your business without proportionally increasing headcount.',
    'features.growth.expanded': 'AI systems allow processing 10x more work with the same team. Our clients typically increase their capacity by 200-500% in the first year.',
    'features.accuracy.title': 'Maximum Precision and Quality',
    'features.accuracy.description': 'Minimize human errors with AI precision.',
    'features.accuracy.expanded': 'AI systems provide 99.9% accuracy in data processing and decision-making. Completely eliminate typical manual work errors.',
    'features.competitive.title': 'Competitive Advantage',
    'features.competitive.description': 'Outpace competitors with cutting-edge AI technologies and innovations.',
    'features.competitive.expanded': 'Become an industry leader by offering faster, more accurate, and higher quality service. AI enables real-time response to market changes.',
    'features.satisfaction.title': 'Improved Customer Satisfaction',
    'features.satisfaction.description': 'Provide 24/7 support and personalized experience for every customer.',
    'features.satisfaction.expanded': 'Our clients report 40-70% increase in customer satisfaction. AI enables instant, accurate responses and personalized service.',
    'features.learn_more': 'Learn more →',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business with AI? Get in touch with our experts.',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+371 20 000 000',
    'contact.form.service': 'Service of Interest',
    'contact.form.service.placeholder': 'Select a service',
    'contact.form.service.workers': 'AI Workers',
    'contact.form.service.chatbots': 'AI Chatbots',
    'contact.form.service.automation': 'Process Automation',
    'contact.form.service.documents': 'Document Processing',
    'contact.form.service.intelligence': 'Data Intelligence',
    'contact.form.service.custom': 'Custom Solutions',
    'contact.form.service.consultation': 'Consultation',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your project and needs...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.weekdays': 'Monday - Friday: 9:00 - 18:00',
    'contact.info.hours.weekend': 'Saturday - Sunday: By appointment',
    'contact.map.title': 'Our Location',
    'contact.form.success': 'Thank you! Your message has been sent. We will contact you within 24 hours.',
    'contact.form.error': 'There was an error sending your message. Please try again.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('lv');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};