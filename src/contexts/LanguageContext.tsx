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
    'hero.cta.demo': 'Rezervēt demonstrāciju',
    'hero.trial': 'Bezmaksas 14 dienu izmēģinājums',
    'hero.dashboard.title': 'AI Automatizācijas Panelis',
    'hero.dashboard.share': 'Dalīties',
    'hero.dashboard.nav.workers': 'AI Darbinieki',
    'hero.dashboard.nav.analytics': 'Analītika',
    'hero.dashboard.nav.automation': 'Automatizācija',
    'hero.dashboard.nav.reports': 'Atskaites',
    'hero.dashboard.departments.chatbots': 'Čatboti',
    'hero.dashboard.departments.documents': 'Dokumenti',
    'hero.dashboard.departments.processes': 'Procesi',
    'hero.dashboard.tasks': 'AI Uzdevumi',
    'hero.dashboard.new_task': 'Jauns AI Uzdevums',
    
    // Services
    'services.title': 'Mūsu AI Pakalpojumi',
    'services.description': 'Visaptveroši AI risinājumi, kas transformē jūsu biznesa procesus un uzlabo efektivitāti',
    'services.workers.title': 'AI Darbinieki',
    'services.workers.subtitle': 'Gatavi izmantošanai AI darbinieki, kas nevainojami integrējas jūsu komandā',
    'services.workers.description': 'Pielāgoti apmācīti AI darbinieki, kas var veikt specifiskus uzdevumus un darba plūsmas, ar iebūvētām zināšanām un pielāgojamām prasmēm. Sākot no €350.',
    'services.workers.price': 'Sākot no €350',
    'services.chatbots.title': 'AI Čatboti',
    'services.chatbots.subtitle': 'Inteliģenti sarunu aģenti 24/7 klientu atbalstam',
    'services.chatbots.description': 'Moderni čatboti, kas darbojas ar jaunāko AI tehnoloģiju, nodrošinot tūlītēju atbalstu un uzlabojot klientu apmierinātību. Sākot no €300.',
    'services.chatbots.price': 'Sākot no €300',
    'services.automation.title': 'Procesu Automatizācija',
    'services.automation.subtitle': 'Optimizējiet darbības ar inteliģento automatizāciju',
    'services.automation.description': 'Pilnīgi automatizācijas risinājumi, kas optimizē darba plūsmas, samazina izmaksas un uzlabo efektivitāti. Sākot no €300.',
    'services.automation.price': 'Sākot no €300',
    'services.documents.title': 'Dokumentu Apstrāde',
    'services.documents.subtitle': 'Automatizēta dokumentu ģenerēšana un analīze',
    'services.documents.description': 'Inteliģentas sistēmas dokumentu veidošanai, apstrādei un analīzei, samazinot manuālo darbu un kļūdas.',
    'services.documents.price': 'Pēc pieprasījuma',
    'services.intelligence.title': 'Datu Intelekts',
    'services.intelligence.subtitle': 'Pārvērtiet savus datus rīcībspējīgos ieskatos',
    'services.intelligence.description': 'Moderna datu analītika un AI veidoti ieskati labāku biznesa lēmumu pieņemšanai un iespēju identificēšanai.',
    'services.intelligence.price': 'Pēc pieprasījuma',
    'services.custom.title': 'Pielāgoti AI Risinājumi',
    'services.custom.subtitle': 'Individuāli AI risinājumi unikāliem izaicinājumiem',
    'services.custom.description': 'Īpaši izstrādāti AI risinājumi, kas veidoti atbilstoši jūsu biznesa vajadzībām un nozares prasībām.',
    'services.custom.price': 'Pēc pieprasījuma',
    'services.cta.title': 'Gatavi sākt?',
    'services.cta.description': 'Sazinieties ar mums, lai apspriestu, kā AI var transformēt jūsu biznesu un palīdzēt sasniegt jaunos mērķus.',
    'services.cta.contact': 'Sazinaties ar mums',
    'services.cta.consultation': 'Bezmaksas konsultācija',
    'services.learn_more': 'Uzzināt vairāk',
    
    // Features
    'features.title': 'Viss, kas nepieciešams jūsu biznesam',
    'features.description': 'Visaptveroši AI risinājumi, kas optimizē jūsu biznesa procesus un veicina izaugsmi',
    'features.workers.title': 'AI Darbinieki',
    'features.workers.description': 'Automatizēti AI darbinieki, kas strādā 24/7 un veic uzdevumus bez cilvēka iejaukšanās.',
    'features.workers.expanded': 'Izveidojiet pielāgotus AI darbiniekus, kas spēj veikt sarežģītus uzdevumus. No klientu apkalpošanas līdz datu analīzei - mūsu AI darbinieki ir apmācīti strādāt ar jūsu specifiskajām vajadzībām un procesiem.',
    'features.chatbots.title': 'Inteliģenti Čatboti',
    'features.chatbots.description': 'Uzlabojiet klientu apkalpošanu ar AI čatbotiem, kas saprot kontekstu un nodrošina precīzas atbildes.',
    'features.chatbots.expanded': 'Mūsu čatboti izmanto jaunākās dabiskās valodas apstrādes tehnoloģijas, lai nodrošinātu personalizētu un kontekstuālu komunikāciju ar jūsu klientiem. Integrējas ar jūsu esošajām sistēmām un mācās no katras sarunas.',
    'features.automation.title': 'Procesu Automatizācija',
    'features.automation.description': 'Automatizējiet atkārtojošos uzdevumus un optimizējiet darba plūsmas ar AI tehnoloģijām.',
    'features.automation.expanded': 'Identificējiet un automatizējiet biznesa procesus, kas aizņem daudz laika. Mūsu AI risinājumi var apstrādāt dokumentus, izveidot atskaites, pārvaldīt e-pasta sarakstus un daudz ko citu bez cilvēka iejaukšanās.',
    'features.documents.title': 'Dokumentu Apstrāde',
    'features.documents.description': 'Automatizēta dokumentu ģenerēšana, analīze un klasifikācija ar AI tehnoloģijām.',
    'features.documents.expanded': 'Apstrādājiet tūkstošiem dokumentu sekundēs. Mūsu AI spēj lasīt, analizēt, klasificēt un ģenerēt dokumentus dažādos formātos, ietaupot simtiem darba stundu.',
    'features.intelligence.title': 'Datu Intelekts',
    'features.intelligence.description': 'Pārvērtiet savus datus rīcībspējīgos ieskatos ar AI analītiku un prognozēšanu.',
    'features.intelligence.expanded': 'Atklājiet slēptās tendences savos datos. Mūsu AI analītikas rīki nodrošina dziļus ieskatus, prognozes un rekomendācijas, kas palīdz pieņemt labākus biznesa lēmumus.',
    'features.custom.title': 'Pielāgoti Risinājumi',
    'features.custom.description': 'Individuāli AI risinājumi, kas radīti specifiskām jūsu biznesa vajadzībām.',
    'features.custom.expanded': 'Katrs bizness ir unikāls. Mēs izveidojam pielāgotus AI risinājumus, kas pilnībā atbilst jūsu specifiskajām prasībām un integrējas ar esošajām sistēmām.',
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
    'hero.dashboard.title': 'AI Automation Dashboard',
    'hero.dashboard.share': 'Share',
    'hero.dashboard.nav.workers': 'AI Workers',
    'hero.dashboard.nav.analytics': 'Analytics',
    'hero.dashboard.nav.automation': 'Automation',
    'hero.dashboard.nav.reports': 'Reports',
    'hero.dashboard.departments.chatbots': 'Chatbots',
    'hero.dashboard.departments.documents': 'Documents',
    'hero.dashboard.departments.processes': 'Processes',
    'hero.dashboard.tasks': 'AI Tasks',
    'hero.dashboard.new_task': 'New AI Task',
    
    // Services
    'services.title': 'Our AI Services',
    'services.description': 'Comprehensive AI solutions that transform your business processes and improve efficiency',
    'services.workers.title': 'AI Workers',
    'services.workers.subtitle': 'Ready-to-use AI workers that seamlessly integrate with your team',
    'services.workers.description': 'Custom-trained AI workers that can perform specific tasks and workflows, with built-in knowledge and adaptable skills. Starting from €350.',
    'services.workers.price': 'Starting from €350',
    'services.chatbots.title': 'AI Chatbots',
    'services.chatbots.subtitle': 'Intelligent conversation agents for 24/7 customer support',
    'services.chatbots.description': 'Modern chatbots powered by the latest AI technology, providing instant support and improving customer satisfaction. Starting from €300.',
    'services.chatbots.price': 'Starting from €300',
    'services.automation.title': 'Process Automation',
    'services.automation.subtitle': 'Optimize operations with intelligent automation',
    'services.automation.description': 'Complete automation solutions that optimize workflows, reduce costs, and improve efficiency. Starting from €300.',
    'services.automation.price': 'Starting from €300',
    'services.documents.title': 'Document Processing',
    'services.documents.subtitle': 'Automated document generation and analysis',
    'services.documents.description': 'Intelligent systems for document creation, processing, and analysis, reducing manual work and errors.',
    'services.documents.price': 'On request',
    'services.intelligence.title': 'Data Intelligence',
    'services.intelligence.subtitle': 'Transform your data into actionable insights',
    'services.intelligence.description': 'Modern data analytics and AI-driven insights for better business decision-making and opportunity identification.',
    'services.intelligence.price': 'On request',
    'services.custom.title': 'Custom AI Solutions',
    'services.custom.subtitle': 'Individual AI solutions for unique challenges',
    'services.custom.description': 'Specially developed AI solutions tailored to your business needs and industry requirements.',
    'services.custom.price': 'On request',
    'services.cta.title': 'Ready to start?',
    'services.cta.description': 'Contact us to discuss how AI can transform your business and help achieve new goals.',
    'services.cta.contact': 'Contact us',
    'services.cta.consultation': 'Free consultation',
    'services.learn_more': 'Learn more',
    
    // Features
    'features.title': 'Everything your business needs',
    'features.description': 'Comprehensive AI solutions that optimize your business processes and drive growth',
    'features.workers.title': 'AI Workers',
    'features.workers.description': 'Automated AI workers that operate 24/7 and perform tasks without human intervention.',
    'features.workers.expanded': 'Create custom AI workers capable of handling complex tasks. From customer service to data analysis - our AI workers are trained to work with your specific needs and processes.',
    'features.chatbots.title': 'Intelligent Chatbots',
    'features.chatbots.description': 'Improve customer service with AI chatbots that understand context and provide accurate responses.',
    'features.chatbots.expanded': 'Our chatbots use the latest natural language processing technologies to provide personalized and contextual communication with your customers. Integrates with your existing systems and learns from every conversation.',
    'features.automation.title': 'Process Automation',
    'features.automation.description': 'Automate repetitive tasks and optimize workflows with AI technologies.',
    'features.automation.expanded': 'Identify and automate time-consuming business processes. Our AI solutions can process documents, create reports, manage email lists, and much more without human intervention.',
    'features.documents.title': 'Document Processing',
    'features.documents.description': 'Automated document generation, analysis, and classification with AI technologies.',
    'features.documents.expanded': 'Process thousands of documents in seconds. Our AI can read, analyze, classify, and generate documents in various formats, saving hundreds of work hours.',
    'features.intelligence.title': 'Data Intelligence',
    'features.intelligence.description': 'Transform your data into actionable insights with AI analytics and forecasting.',
    'features.intelligence.expanded': 'Discover hidden trends in your data. Our AI analytics tools provide deep insights, forecasts, and recommendations that help make better business decisions.',
    'features.custom.title': 'Custom Solutions',
    'features.custom.description': 'Individual AI solutions created for your specific business needs.',
    'features.custom.expanded': 'Every business is unique. We create custom AI solutions that fully meet your specific requirements and integrate with existing systems.',
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