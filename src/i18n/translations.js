import { servicePageTranslations } from './servicePages.js';
import { pricingPageTranslations } from './pricingPage.js';
import { productsPageTranslations } from './productsPage.js';
import { servicesPageTranslations } from './servicesPage.js';
import { aboutPageTranslations } from './aboutPage.js';
import { careersPageTranslations } from './careersPage.js';
import { caseStudiesPageTranslations } from './caseStudiesPage.js';
import { jobsPageTranslations } from './jobsPage.js';
import { blogPageTranslations } from './blogPage.js';
import { legacyServicePageTranslations } from './legacyServicePages.js';
import { referPageTranslations } from './referPage.js';
import { legalPageTranslations } from './legalPages.js';
import { chatbotTranslations } from './chatbot.js';
import { accountPageTranslations } from './accountPage.js';
import { testimonialsTranslations } from './testimonials.js';

export const translations = {
  en: {
    nav: { home:'Home', services:'Services', about:'About', contact:'Get Started', login:'Login', signup:'Sign Up', blog:'Blog', products:'Products', pricing:'Pricing', careers:'Careers', contactUs:'Contact', getStarted:'Get Started', servicesLabel:'SERVICES' },
    hero: {
      eyebrow: 'BLOCKCHAIN INFRASTRUCTURE COMPANY',
      title1: 'CREATE. INNOVATE.',
      title2: 'EVOLVE.',
      sub: 'At DefiGate, we combine blockchain and AI to power the future of e-commerce. Our solutions deliver transparency, security, and efficiency, creating a seamless digital experience for businesses and consumers alike.',
      cta1: 'Explore Products',
      cta2: 'Get Started',
    },
    stats: [
      { value:'$2B+', label:'TVL Secured' },
      { value:'50+',  label:'Protocols Deployed' },
      { value:'10+',  label:'Chains Supported' },
      { value:'100%', label:'Audit Pass Rate' },
    ],
    sections: {
      whatWeDo: 'What We Build', ourServices: 'Our Expertise',
      servicesSubtitle: 'Deep technical mastery across blockchain, AI, and Web3 � powering the next generation of decentralized applications.',
      ourWork: 'Case Studies', caseStudies: 'Case Studies',
      caseSubtitle: 'Real protocols. Real TVL. Real results.',
      howWeWork: 'How We Ship', ourProcess: 'Our Process',
      processSubtitle: 'A rigorous, security-first methodology for shipping blockchain products.',
      learnMore: 'Learn more ?',
      ctaTitle: 'Ready to ship your blockchain product?',
      ctaSub: "Let's build the infrastructure that powers the next generation of Web3.",
      ctaBtn: 'Talk to Our Team',
    },
    process: [
      { num:'01', title:'Protocol Design', desc:'We architect your tokenomics, smart contract logic, and security model before writing a single line of code.' },
      { num:'02', title:'Development', desc:'Solidity, Rust, or Move � our engineers build to the highest standards with full test coverage.' },
      { num:'03', title:'Audit & Testing', desc:'Every contract goes through internal review, third-party audit, and mainnet simulation before launch.' },
      { num:'04', title:'Launch & Monitor', desc:'We deploy, monitor on-chain activity, and provide ongoing security support post-launch.' },
    ],
    servicesPage: {
      tag: 'Our Products', title: 'Blockchain Products',
      subtitle: 'Production-ready blockchain infrastructure built for scale, security, and decentralization.',
      getQuote: 'Get a Demo',
    },
    aboutPage: {
      tag: 'Who We Are', title: 'Built on Chain,\nBuilt to Last',
      subtitle: 'DefiGate is a blockchain product company building the infrastructure that powers the next generation of decentralized finance and Web3 applications.',
      missionTag: 'Our Mission', missionTitle: 'Making blockchain infrastructure accessible, secure, and production-ready',
      missionP1: 'Founded in 2025, DefiGate was born from a simple belief: the best blockchain products are built by teams who understand both the technology and the business.',
      missionP2: 'We are engineers, auditors, and product builders who have shipped DeFi protocols, NFT platforms, and Web3 infrastructure used by thousands of users across 10+ chains.',
      valuesTag: 'Our Values', teamTag: 'The Team', teamTitle: 'Meet Our Team',
    },
    contactPage: {
      tag: 'Get In Touch', title: "Let's Build Together",
      subtitle: "Tell us about your blockchain project and we'll get back to you within 1 hour.",
      infoTitle: 'Contact Information',
      email: 'Email', phone: 'Phone', hq: 'Headquarters', response: 'Response Time',
      responseVal: 'Within 1 hour',
      namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'Select a product',
      messagePlaceholder: 'Tell us about your blockchain project...',
      send: 'Send Message', sending: 'Sending...',
      success: "Message sent! We'll be in touch soon.",
      error: 'Something went wrong. Please try again.',
      fullName: 'Full Name *', emailLabel: 'Email *', phoneLabel: 'Phone', serviceLabel: 'Product', messageLabel: 'Message *',
    },
    auth: {
      welcomeBack: 'Welcome back', signInSub: 'Sign in to your DefiGate account',
      signIn: 'Sign In', signingIn: 'Signing in...',
      createAccount: 'Create account', joinSub: 'Join DefiGate today',
      creating: 'Creating account...', create: 'Create Account',
      fullName: 'Full Name', email: 'Email', password: 'Password',
      confirmPassword: 'Confirm Password', noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?', signUp: 'Sign up', signInLink: 'Sign in',
      namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com',
      loginSuccess: 'Login successful! Redirecting...',
    },
    footer: {
      desc: 'DefiGate builds production-grade blockchain infrastructure � DeFi protocols, smart contract platforms, Web3 wallets, and on-chain analytics.',
      services: 'Products', company: 'Company', contact: 'Contact',
      aboutUs: 'About Us', careers: 'Careers', blog: 'Blog',
      privacy: 'Privacy Policy', terms: 'Terms of Service', cookie: 'Cookie Policy',
      rights: '� {year} DefiGate. All rights reserved.',
    },
    cookie: {
      text: 'We use cookies on this website to make your browsing experience easier and to analyze traffic anonymously. For more information, please see our Privacy Policy. Do you agree to the use of cookies?',
      mandatory: 'Enable Mandatory', settings: 'Cookie Settings', allowAll: 'Allow All',
      settingsTitle: 'Cookie Settings', settingsSub: 'Manage your cookie preferences below.',
      necessary: 'Necessary Cookies', necessaryDesc: 'Required for the site to function. Cannot be disabled.',
      analytics: 'Analytics Cookies', analyticsDesc: 'Help us understand how visitors interact with the site.',
      marketing: 'Marketing Cookies', marketingDesc: 'Used to deliver relevant advertisements.',
      alwaysOn: 'Always On', back: 'Back', savePrefs: 'Save Preferences',
    },
    membership: {
      tag: 'Plans', title: 'Choose Your Membership',
      subtitle: 'Unlock services that match your needs. Upgrade or downgrade anytime.',
      monthly: 'Monthly', annual: 'Annual',
      currentPlan: 'Current Plan', renews: 'Renews',
      upgrade: 'Upgrade', downgrade: 'Downgrade',
      noPlan: "You don't have an active plan yet. Pick one above to get started.",
      cancel: 'To cancel your membership,', contactSupport: 'contact support',
    },
    refer: {
      heroTitle: 'Earn $10,000 from\nproject sales',
      heroSub: 'Receive an additional 10% of project revenue starting from the second month',
      heroBtn: 'Become a partner',
      clutchLabel: 'Based on 60 Clutch reviews',
      upworkLabel: '100+ reviews',
    },
  },

  es: {
    nav: { home:'Inicio', services:'Servicios', about:'Sobre Nosotros', contact:'Contacto', login:'Iniciar sesi�n', signup:'Registrarse', blog:'Blog', products:'Productos', pricing:'Precios', careers:'Carreras', contactUs:'Contacto', getStarted:'Comenzar', servicesLabel:'SERVICIOS' },
    hero: {
      eyebrow: 'EMPRESA DE INFRAESTRUCTURA BLOCKCHAIN',
      title1: 'CREA. INNOVA.',
      title2: 'EVOLUCIONA.',
      titleWords: ['CREA.', 'INNOVA.', 'EVOLUCIONA.'],
      sub: 'En DefiGate, combinamos blockchain e IA para impulsar el futuro del comercio electr�nico. Nuestras soluciones aportan transparencia, seguridad y eficiencia para crear una experiencia digital fluida.',
      cta1: 'Explorar productos',
      cta2: 'Comenzar',
    },
    stats: [
      { value: '$20M+', label: 'TVL asegurado' },
      { value: '20+',  label: 'Protocolos desplegados' },
      { value: '20+',  label: 'Cadenas compatibles' },
      { value: '100%',  label: 'Tasa de auditor�as aprobadas' },
    ],
    sections: {
      whatWeDo: 'Lo Que Hacemos', ourServices: 'Nuestra Experiencia',
      servicesSubtitle: 'Dominio t�cnico profundo en blockchain, IA y Web3 � impulsando la pr�xima generaci�n de aplicaciones descentralizadas.',
      ourWork: 'Nuestro Trabajo', caseStudies: 'Casos de Estudio',
      caseSubtitle: 'Proyectos reales, resultados reales.',
      howWeWork: 'C�mo Trabajamos', ourProcess: 'Nuestro Proceso',
      processSubtitle: 'Una metodolog�a probada que entrega resultados a tiempo.',
      learnMore: 'M�s informaci�n ?',
      ctaTitle: '�Listo para construir algo grande?',
      ctaSub: 'Convirtamos tu idea en un producto escalable.',
      ctaBtn: 'Consulta Gratuita',
    },
    process: [
      { num:'01', title:'Descubrimiento', desc:'Nos sumergimos en tus objetivos de negocio, usuarios y requisitos t�cnicos.' },
      { num:'02', title:'Dise�o',         desc:'Wireframes, prototipos y dise�o UI/UX alineados con tu marca.' },
      { num:'03', title:'Construcci�n',   desc:'Desarrollo �gil con sprints semanales y entrega continua.' },
      { num:'04', title:'Lanzamiento y Escala', desc:'Despliegue, monitoreo y soporte continuo mientras creces.' },
    ],
    servicesPage: {
      tag: 'Lo Que Ofrecemos', title: 'Nuestros Servicios',
      subtitle: 'Servicios tecnol�gicos de espectro completo.',
      getQuote: 'Obtener Cotizaci�n',
    },
    aboutPage: {
      tag: 'Qui�nes Somos', title: 'Construido por Ingenieros,\nImpulsado por Prop�sito',
      subtitle: 'DefiGate es una empresa global de desarrollo de software.',
      missionTag: 'Nuestra Misi�n', missionTitle: 'Convirtiendo ideas complejas en software elegante y escalable',
      missionP1: 'Fundada en 2025, DefiGate ha crecido de un peque�o equipo de ingenieros apasionados a una empresa global con clientes en m�s de 30 pa�ses.',
      missionP2: 'Nuestro equipo combina profunda experiencia t�cnica con una mentalidad de producto � no solo escribimos c�digo, resolvemos problemas de negocio.',
      valuesTag: 'Nuestros Valores', teamTag: 'El Equipo', teamTitle: 'Conoce a Nuestros Miembros',
    },
    contactPage: {
      tag: 'Ponte en Contacto', title: 'Construyamos Juntos',
      subtitle: 'Cu�ntanos sobre tu proyecto y te responderemos en 1 hora.',
      infoTitle: 'Informaci�n de Contacto',
      email: 'Correo', phone: 'Tel�fono', hq: 'Sede Central', response: 'Tiempo de Respuesta',
      responseVal: 'En 1 hora',
      namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@correo.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'Selecciona un servicio',
      messagePlaceholder: 'Cu�ntanos sobre tu proyecto...',
      send: 'Enviar Mensaje', sending: 'Enviando...',
      success: '�Mensaje enviado!',
      error: 'Algo sali� mal. Int�ntalo de nuevo.',
      fullName: 'Nombre Completo *', emailLabel: 'Correo *', phoneLabel: 'Tel�fono', serviceLabel: 'Servicio', messageLabel: 'Mensaje *',
    },
    auth: {
      welcomeBack: 'Bienvenido de nuevo', signInSub: 'Inicia sesi�n en tu cuenta DefiGate',
      signIn: 'Iniciar Sesi�n', signingIn: 'Iniciando sesi�n...',
      createAccount: 'Crear cuenta', joinSub: '�nete a DefiGate hoy',
      creating: 'Creando cuenta...', create: 'Crear Cuenta',
      fullName: 'Nombre Completo', email: 'Correo', password: 'Contrase�a',
      confirmPassword: 'Confirmar Contrase�a', noAccount: '�No tienes cuenta?',
      hasAccount: '�Ya tienes cuenta?', signUp: 'Reg�strate', signInLink: 'Inicia sesi�n',
      namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@correo.com',
      loginSuccess: '�Inicio de sesi�n exitoso! Redirigiendo...',
    },
    footer: {
      desc: 'Dise�a, construye y asegura productos web, m�viles y blockchain con SDLC de nivel empresarial e integraciones de IA.',
      services: 'Servicios', company: 'Empresa', contact: 'Contacto',
      aboutUs: 'Sobre Nosotros', careers: 'Carreras', blog: 'Blog',
      privacy: 'Pol�tica de Privacidad', terms: 'T�rminos de Servicio', cookie: 'Pol�tica de Cookies',
      rights: '� {year} DefiGate. Todos los derechos reservados.',
    },
    cookie: {
      text: 'Usamos cookies en este sitio web para facilitar tu experiencia de navegaci�n y analizar el tr�fico de forma an�nima. Para m�s informaci�n, consulta nuestra Pol�tica de Privacidad. �Aceptas el uso de cookies?',
      mandatory: 'Solo Necesarias', settings: 'Configuraci�n de Cookies', allowAll: 'Permitir Todo',
      settingsTitle: 'Configuraci�n de Cookies', settingsSub: 'Gestiona tus preferencias de cookies a continuaci�n.',
      necessary: 'Cookies Necesarias', necessaryDesc: 'Requeridas para el funcionamiento del sitio. No se pueden deshabilitar.',
      analytics: 'Cookies de An�lisis', analyticsDesc: 'Nos ayudan a entender c�mo los visitantes interact�an con el sitio.',
      marketing: 'Cookies de Marketing', marketingDesc: 'Usadas para mostrar anuncios relevantes.',
      alwaysOn: 'Siempre Activo', back: 'Volver', savePrefs: 'Guardar Preferencias',
    },
    membership: {
      tag: 'Planes', title: 'Elige tu Membres�a',
      subtitle: 'Desbloquea servicios que se adaptan a tus necesidades.',
      monthly: 'Mensual', annual: 'Anual',
      currentPlan: 'Plan Actual', renews: 'Renueva',
      upgrade: 'Mejorar', downgrade: 'Reducir',
      noPlan: 'A�n no tienes un plan activo. Elige uno arriba para comenzar.',
      cancel: 'Para cancelar tu membres�a,', contactSupport: 'contacta soporte',
    },
    refer: {
      heroTitle: 'Gana $10,000 de\nventas de proyectos',
      heroSub: 'Recibe un 10% adicional de los ingresos del proyecto a partir del segundo mes',
      heroBtn: 'Convi�rtete en socio',
      clutchLabel: 'Basado en 60 rese�as de Clutch',
      upworkLabel: '100+ rese�as',
    },
  },

  fr: {
    nav: { home:'Accueil', services:'Services', about:'� propos', contact:'Contact', login:'Connexion', signup:"S'inscrire", blog:'Blog' },
    hero: {
      eyebrow: 'D�VELOPPEMENT LOGICIEL ENTREPRISE',
      title1: 'Concevoir. Construire.',
      title2: 'S�curiser.',
      sub: 'Nous cr�ons des produits web, mobiles et blockchain avec un SDLC de niveau entreprise, des int�grations IA et une conformit� pr�te pour les audits.',
      cta1: 'D�marrer votre Projet',
      cta2: 'Commencer',
    },
    stats: [
      { value:'150+', label:'Projets Livr�s' },
      { value:'10+',  label:'Ing�nieurs Experts' },
      { value:'10+',  label:'Pays Servis' },
      { value:'100%',  label:'Satisfaction Client' },
    ],
    sections: {
      whatWeDo: 'Ce Que Nous Faisons', ourServices: 'Notre Expertise',
      servicesSubtitle: 'Ma�trise technique approfondie en blockchain, IA et Web3 � alimentant la prochaine g�n�ration d\'applications d�centralis�es.',
      ourWork: 'Notre Travail', caseStudies: '�tudes de Cas',
      caseSubtitle: 'Projets r�els, r�sultats r�els.',
      howWeWork: 'Comment Nous Travaillons', ourProcess: 'Notre Processus',
      processSubtitle: 'Une m�thodologie �prouv�e qui livre des r�sultats dans les d�lais.',
      learnMore: 'En savoir plus ?',
      ctaTitle: 'Pr�t � construire quelque chose de grand?',
      ctaSub: 'Transformons votre id�e en un produit �volutif.',
      ctaBtn: 'Consultation Gratuite',
    },
    process: [
      { num:'01', title:'D�couverte',  desc:'Nous plongeons dans vos objectifs m�tier, utilisateurs et exigences techniques.' },
      { num:'02', title:'Conception',  desc:'Maquettes, prototypes et design UI/UX align�s avec votre marque.' },
      { num:'03', title:'Construction', desc:'D�veloppement agile avec des sprints hebdomadaires et une livraison continue.' },
      { num:'04', title:'Lancement & Croissance', desc:'D�ploiement, surveillance et support continu au fil de votre croissance.' },
    ],
    servicesPage: {
      tag: 'Ce Que Nous Offrons', title: 'Nos Services',
      subtitle: 'Services technologiques � spectre complet, de la conception � la production.',
      getQuote: 'Obtenir un Devis',
    },
    aboutPage: {
      tag: 'Qui Nous Sommes', title: 'Construit par des Ing�nieurs,\nAnim� par un But',
      subtitle: 'DefiGate est une soci�t� mondiale de d�veloppement logiciel.',
      missionTag: 'Notre Mission', missionTitle: 'Transformer des id�es complexes en logiciels �l�gants et �volutifs',
      missionP1: 'Fond�e en 2025, DefiGate est pass�e d\'une petite �quipe d\'ing�nieurs passionn�s � une entreprise mondiale avec des clients dans plus de 30 pays.',
      missionP2: 'Notre �quipe combine une expertise technique approfondie avec un �tat d\'esprit produit � nous ne faisons pas que coder, nous r�solvons des probl�mes m�tier.',
      valuesTag: 'Nos Valeurs', teamTag: "L'�quipe", teamTitle: 'Rencontrez Nos Membres',
    },
    contactPage: {
      tag: 'Nous Contacter', title: 'Construisons Ensemble',
      subtitle: 'Parlez-nous de votre projet et nous vous r�pondrons dans l\'heure.',
      infoTitle: 'Informations de Contact',
      email: 'E-mail', phone: 'T�l�phone', hq: 'Si�ge Social', response: 'Temps de R�ponse',
      responseVal: 'En 1 heure',
      namePlaceholder: 'Votre nom', emailPlaceholder: 'votre@email.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'S�lectionner un service',
      messagePlaceholder: 'Parlez-nous de votre projet...',
      send: 'Envoyer le Message', sending: 'Envoi en cours...',
      success: 'Message envoy� ! Nous vous contacterons bient�t.',
      error: 'Une erreur est survenue. Veuillez r�essayer.',
      fullName: 'Nom Complet *', emailLabel: 'E-mail *', phoneLabel: 'T�l�phone', serviceLabel: 'Service', messageLabel: 'Message *',
    },
    auth: {
      welcomeBack: 'Bon retour', signInSub: 'Connectez-vous � votre compte DefiGate',
      signIn: 'Se Connecter', signingIn: 'Connexion en cours...',
      createAccount: 'Cr�er un compte', joinSub: 'Rejoignez DefiGate aujourd\'hui',
      creating: 'Cr�ation du compte...', create: 'Cr�er un Compte',
      fullName: 'Nom Complet', email: 'E-mail', password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe', noAccount: "Vous n'avez pas de compte?",
      hasAccount: 'Vous avez d�j� un compte?', signUp: "S'inscrire", signInLink: 'Se connecter',
      namePlaceholder: 'Votre nom', emailPlaceholder: 'votre@email.com',
      loginSuccess: 'Connexion r�ussie ! Redirection...',
    },
    footer: {
      desc: 'Concevez, construisez et s�curisez des produits web, mobiles et blockchain avec un SDLC de niveau entreprise.',
      services: 'Services', company: 'Entreprise', contact: 'Contact',
      aboutUs: '� Propos', careers: 'Carri�res', blog: 'Blog',
      privacy: 'Politique de Confidentialit�', terms: "Conditions d'Utilisation", cookie: 'Politique des Cookies',
      rights: '� {year} DefiGate. Tous droits r�serv�s.',
    },
    cookie: {
      text: 'Nous utilisons des cookies sur ce site pour faciliter votre navigation et analyser le trafic de mani�re anonyme. Pour plus d\'informations, consultez notre Politique de Confidentialit�. Acceptez-vous l\'utilisation des cookies?',
      mandatory: 'N�cessaires Uniquement', settings: 'Param�tres des Cookies', allowAll: 'Tout Autoriser',
      settingsTitle: 'Param�tres des Cookies', settingsSub: 'G�rez vos pr�f�rences de cookies ci-dessous.',
      necessary: 'Cookies N�cessaires', necessaryDesc: 'Requis pour le fonctionnement du site. Ne peut pas �tre d�sactiv�.',
      analytics: 'Cookies Analytiques', analyticsDesc: 'Nous aident � comprendre comment les visiteurs interagissent avec le site.',
      marketing: 'Cookies Marketing', marketingDesc: 'Utilis�s pour diffuser des publicit�s pertinentes.',
      alwaysOn: 'Toujours Actif', back: 'Retour', savePrefs: 'Enregistrer',
    },
    membership: {
      tag: 'Plans', title: 'Choisissez votre Abonnement',
      subtitle: 'D�bloquez des services adapt�s � vos besoins.',
      monthly: 'Mensuel', annual: 'Annuel',
      currentPlan: 'Plan Actuel', renews: 'Renouvellement',
      upgrade: 'Am�liorer', downgrade: 'R�duire',
      noPlan: "Vous n'avez pas encore de plan actif. Choisissez-en un ci-dessus pour commencer.",
      cancel: 'Pour annuler votre abonnement,', contactSupport: 'contactez le support',
    },
    refer: {
      heroTitle: 'Gagnez 10 000 $ gr�ce\naux ventes de projets',
      heroSub: 'Recevez 10% suppl�mentaires des revenus du projet � partir du deuxi�me mois',
      heroBtn: 'Devenir partenaire',
      clutchLabel: 'Bas� sur 60 avis Clutch',
      upworkLabel: '100+ avis',
    },
  },

  nl: {
    nav: { home:'Thuis', services:'Diensten', about:'Over ons', contact:'Contact', login:'Inloggen', signup:'Aanmelden', blog:'Blog' },
    hero: {
      eyebrow: 'ENTERPRISE SOFTWAREONTWIKKELING',
      title1: 'Ontwerp. Bouw.',
      title2: 'Beveilig.',
      sub: 'Wij maken web-, mobiele en blockchain-producten met enterprise-grade SDLC, AI-integraties en auditklare compliance.',
      cta1: 'Start uw Project',
      cta2: 'Beginnen',
    },
    stats: [
      { value:'150+', label:'Geleverde Projecten' },
      { value:'10+',  label:'Expert Ingenieurs' },
      { value:'10+',  label:'Bediende Landen' },
      { value:'100%',  label:'Klanttevredenheid' },
    ],
    sections: {
      whatWeDo: 'Wat Wij Doen', ourServices: 'Onze Expertise',
      servicesSubtitle: 'Diepgaande technische beheersing van blockchain, AI en Web3 � de volgende generatie gedecentraliseerde applicaties aandrijven.',
      ourWork: 'Ons Werk', caseStudies: 'Casestudies',
      caseSubtitle: 'Echte projecten, echte resultaten.',
      howWeWork: 'Hoe Wij Werken', ourProcess: 'Ons Proces',
      processSubtitle: 'Een bewezen methodologie die resultaten op tijd levert.',
      learnMore: 'Meer informatie ?',
      ctaTitle: 'Klaar om iets groots te bouwen?',
      ctaSub: 'Laten we uw idee omzetten in een schaalbaar product.',
      ctaBtn: 'Gratis Consultatie',
    },
    process: [
      { num:'01', title:'Ontdekking',  desc:'We duiken diep in uw bedrijfsdoelen, gebruikers en technische vereisten.' },
      { num:'02', title:'Ontwerp',     desc:'Wireframes, prototypes en UI/UX-ontwerp afgestemd op uw merk.' },
      { num:'03', title:'Bouwen',      desc:'Agile ontwikkeling met wekelijkse sprints en continue levering.' },
      { num:'04', title:'Lancering & Schalen', desc:'Implementatie, monitoring en doorlopende ondersteuning terwijl u groeit.' },
    ],
    servicesPage: {
      tag: 'Wat Wij Bieden', title: 'Onze Diensten',
      subtitle: 'Volledige technologische diensten van idee tot productie.',
      getQuote: 'Offerte Aanvragen',
    },
    aboutPage: {
      tag: 'Wie Wij Zijn', title: 'Gebouwd door Ingenieurs,\nGedreven door Doel',
      subtitle: 'DefiGate is een wereldwijd softwareontwikkelingsbedrijf.',
      missionTag: 'Onze Missie', missionTitle: 'Complexe idee�n omzetten in elegante, schaalbare software',
      missionP1: 'Opgericht in 2025, is DefiGate gegroeid van een klein team van gepassioneerde ingenieurs naar een wereldwijd bedrijf met klanten in meer dan 30 landen.',
      missionP2: 'Ons team combineert diepgaande technische expertise met een productmentaliteit � we schrijven niet alleen code, we lossen zakelijke problemen op.',
      valuesTag: 'Onze Waarden', teamTag: 'Het Team', teamTitle: 'Ontmoet Onze Leden',
    },
    contactPage: {
      tag: 'Neem Contact Op', title: 'Laten We Samen Bouwen',
      subtitle: 'Vertel ons over uw project en we nemen binnen 1 uur contact op.',
      infoTitle: 'Contactinformatie',
      email: 'E-mail', phone: 'Telefoon', hq: 'Hoofdkantoor', response: 'Reactietijd',
      responseVal: 'Binnen 1 uur',
      namePlaceholder: 'Uw naam', emailPlaceholder: 'uw@email.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'Selecteer een dienst',
      messagePlaceholder: 'Vertel ons over uw project...',
      send: 'Bericht Versturen', sending: 'Verzenden...',
      success: 'Bericht verzonden! We nemen snel contact op.',
      error: 'Er is iets misgegaan. Probeer het opnieuw.',
      fullName: 'Volledige Naam *', emailLabel: 'E-mail *', phoneLabel: 'Telefoon', serviceLabel: 'Dienst', messageLabel: 'Bericht *',
    },
    auth: {
      welcomeBack: 'Welkom terug', signInSub: 'Log in op uw DefiGate-account',
      signIn: 'Inloggen', signingIn: 'Inloggen...',
      createAccount: 'Account aanmaken', joinSub: 'Word vandaag lid van DefiGate',
      creating: 'Account aanmaken...', create: 'Account Aanmaken',
      fullName: 'Volledige Naam', email: 'E-mail', password: 'Wachtwoord',
      confirmPassword: 'Wachtwoord Bevestigen', noAccount: 'Heeft u geen account?',
      hasAccount: 'Heeft u al een account?', signUp: 'Aanmelden', signInLink: 'Inloggen',
      namePlaceholder: 'Uw naam', emailPlaceholder: 'uw@email.com',
      loginSuccess: 'Inloggen gelukt! Doorverwijzen...',
    },
    footer: {
      desc: 'Ontwerp, bouw en beveilig web-, mobiele en blockchain-producten met enterprise-grade SDLC en AI-integraties.',
      services: 'Diensten', company: 'Bedrijf', contact: 'Contact',
      aboutUs: 'Over Ons', careers: 'Carri�res', blog: 'Blog',
      privacy: 'Privacybeleid', terms: 'Servicevoorwaarden', cookie: 'Cookiebeleid',
      rights: '� {year} DefiGate. Alle rechten voorbehouden.',
    },
    cookie: {
      text: 'We gebruiken cookies op deze website om uw browse-ervaring te vergemakkelijken en het verkeer anoniem te analyseren. Zie ons Privacybeleid voor meer informatie. Gaat u akkoord met het gebruik van cookies?',
      mandatory: 'Alleen Noodzakelijk', settings: 'Cookie-instellingen', allowAll: 'Alles Toestaan',
      settingsTitle: 'Cookie-instellingen', settingsSub: 'Beheer uw cookievoorkeuren hieronder.',
      necessary: 'Noodzakelijke Cookies', necessaryDesc: 'Vereist voor het functioneren van de site. Kan niet worden uitgeschakeld.',
      analytics: 'Analytische Cookies', analyticsDesc: 'Helpen ons begrijpen hoe bezoekers de site gebruiken.',
      marketing: 'Marketing Cookies', marketingDesc: 'Gebruikt voor relevante advertenties.',
      alwaysOn: 'Altijd Aan', back: 'Terug', savePrefs: 'Voorkeuren Opslaan',
    },
    membership: {
      tag: 'Plannen', title: 'Kies uw Lidmaatschap',
      subtitle: 'Ontgrendel diensten die bij uw behoeften passen.',
      monthly: 'Maandelijks', annual: 'Jaarlijks',
      currentPlan: 'Huidig Plan', renews: 'Verlengt',
      upgrade: 'Upgraden', downgrade: 'Downgraden',
      noPlan: 'U heeft nog geen actief plan. Kies er een hierboven om te beginnen.',
      cancel: 'Om uw lidmaatschap te annuleren,', contactSupport: 'neem contact op met support',
    },
    refer: {
      heroTitle: 'Verdien $10.000 met\nprojectverkopen',
      heroSub: 'Ontvang een extra 10% van de projectinkomsten vanaf de tweede maand',
      heroBtn: 'Word partner',
      clutchLabel: 'Gebaseerd op 60 Clutch-beoordelingen',
      upworkLabel: '100+ beoordelingen',
    },
  },

  pt: {
    nav: { home:'In�cio', services:'Servi�os', about:'Sobre', contact:'Contato', login:'Entrar', signup:'Cadastrar', blog:'Blog' },
    hero: {
      eyebrow: 'DESENVOLVIMENTO DE SOFTWARE EMPRESARIAL',
      title1: 'Projete. Construa.',
      title2: 'Proteja.',
      sub: 'Criamos produtos web, m�veis e blockchain com SDLC de n�vel empresarial, integra��es de IA e conformidade pronta para auditorias.',
      cta1: 'Iniciar seu Projeto',
      cta2: 'Come�ar',
    },
    stats: [
      { value:'150+', label:'Projetos Entregues' },
      { value:'10+',  label:'Engenheiros Especialistas' },
      { value:'10+',  label:'Pa�ses Atendidos' },
      { value:'100%',  label:'Satisfa��o do Cliente' },
    ],
    sections: {
      whatWeDo: 'O Que Fazemos', ourServices: 'Nossa Expertise',
      servicesSubtitle: 'Dom�nio t�cnico profundo em blockchain, IA e Web3 � impulsionando a pr�xima gera��o de aplica��es descentralizadas.',
      ourWork: 'Nosso Trabalho', caseStudies: 'Estudos de Caso',
      caseSubtitle: 'Projetos reais, resultados reais.',
      howWeWork: 'Como Trabalhamos', ourProcess: 'Nosso Processo',
      processSubtitle: 'Uma metodologia comprovada que entrega resultados no prazo.',
      learnMore: 'Saiba mais ?',
      ctaTitle: 'Pronto para construir algo grande?',
      ctaSub: 'Vamos transformar sua ideia em um produto escal�vel.',
      ctaBtn: 'Consulta Gratuita',
    },
    process: [
      { num:'01', title:'Descoberta',  desc:'Mergulhamos nos seus objetivos de neg�cio, usu�rios e requisitos t�cnicos.' },
      { num:'02', title:'Design',      desc:'Wireframes, prot�tipos e design UI/UX alinhados com sua marca.' },
      { num:'03', title:'Constru��o',  desc:'Desenvolvimento �gil com sprints semanais e entrega cont�nua.' },
      { num:'04', title:'Lan�amento & Escala', desc:'Implanta��o, monitoramento e suporte cont�nuo enquanto voc� cresce.' },
    ],
    servicesPage: {
      tag: 'O Que Oferecemos', title: 'Nossos Servi�os',
      subtitle: 'Servi�os tecnol�gicos de espectro completo, da idea��o � produ��o.',
      getQuote: 'Solicitar Or�amento',
    },
    aboutPage: {
      tag: 'Quem Somos', title: 'Constru�do por Engenheiros,\nMovido por Prop�sito',
      subtitle: 'DefiGate � uma empresa global de desenvolvimento de software.',
      missionTag: 'Nossa Miss�o', missionTitle: 'Transformando ideias complexas em software elegante e escal�vel',
      missionP1: 'Fundada em 2025, a DefiGate cresceu de uma pequena equipe de engenheiros apaixonados para uma empresa global com clientes em mais de 30 pa�ses.',
      missionP2: 'Nossa equipe combina profunda expertise t�cnica com uma mentalidade de produto � n�o apenas escrevemos c�digo, resolvemos problemas de neg�cio.',
      valuesTag: 'Nossos Valores', teamTag: 'A Equipe', teamTitle: 'Conhe�a Nossos Membros',
    },
    contactPage: {
      tag: 'Entre em Contato', title: 'Vamos Construir Juntos',
      subtitle: 'Conte-nos sobre seu projeto e responderemos em 1 hora.',
      infoTitle: 'Informa��es de Contato',
      email: 'E-mail', phone: 'Telefone', hq: 'Sede', response: 'Tempo de Resposta',
      responseVal: 'Em 1 hora',
      namePlaceholder: 'Seu nome', emailPlaceholder: 'seu@email.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'Selecione um servi�o',
      messagePlaceholder: 'Conte-nos sobre seu projeto...',
      send: 'Enviar Mensagem', sending: 'Enviando...',
      success: 'Mensagem enviada! Entraremos em contato em breve.',
      error: 'Algo deu errado. Por favor, tente novamente.',
      fullName: 'Nome Completo *', emailLabel: 'E-mail *', phoneLabel: 'Telefone', serviceLabel: 'Servi�o', messageLabel: 'Mensagem *',
    },
    auth: {
      welcomeBack: 'Bem-vindo de volta', signInSub: 'Entre na sua conta DefiGate',
      signIn: 'Entrar', signingIn: 'Entrando...',
      createAccount: 'Criar conta', joinSub: 'Junte-se � DefiGate hoje',
      creating: 'Criando conta...', create: 'Criar Conta',
      fullName: 'Nome Completo', email: 'E-mail', password: 'Senha',
      confirmPassword: 'Confirmar Senha', noAccount: 'N�o tem uma conta?',
      hasAccount: 'J� tem uma conta?', signUp: 'Cadastrar', signInLink: 'Entrar',
      namePlaceholder: 'Seu nome', emailPlaceholder: 'seu@email.com',
      loginSuccess: 'Login realizado com sucesso! Redirecionando...',
    },
    footer: {
      desc: 'Projete, construa e proteja produtos web, m�veis e blockchain com SDLC de n�vel empresarial e integra��es de IA.',
      services: 'Servi�os', company: 'Empresa', contact: 'Contato',
      aboutUs: 'Sobre N�s', careers: 'Carreiras', blog: 'Blog',
      privacy: 'Pol�tica de Privacidade', terms: 'Termos de Servi�o', cookie: 'Pol�tica de Cookies',
      rights: '� {year} DefiGate. Todos os direitos reservados.',
    },
    cookie: {
      text: 'Usamos cookies neste site para facilitar sua experi�ncia de navega��o e analisar o tr�fego anonimamente. Para mais informa��es, consulte nossa Pol�tica de Privacidade. Voc� concorda com o uso de cookies?',
      mandatory: 'Apenas Necess�rios', settings: 'Configura��es de Cookies', allowAll: 'Permitir Todos',
      settingsTitle: 'Configura��es de Cookies', settingsSub: 'Gerencie suas prefer�ncias de cookies abaixo.',
      necessary: 'Cookies Necess�rios', necessaryDesc: 'Necess�rios para o funcionamento do site. N�o podem ser desativados.',
      analytics: 'Cookies de An�lise', analyticsDesc: 'Nos ajudam a entender como os visitantes interagem com o site.',
      marketing: 'Cookies de Marketing', marketingDesc: 'Usados para exibir an�ncios relevantes.',
      alwaysOn: 'Sempre Ativo', back: 'Voltar', savePrefs: 'Salvar Prefer�ncias',
    },
    membership: {
      tag: 'Planos', title: 'Escolha sua Assinatura',
      subtitle: 'Desbloqueie servi�os que atendem �s suas necessidades.',
      monthly: 'Mensal', annual: 'Anual',
      currentPlan: 'Plano Atual', renews: 'Renova',
      upgrade: 'Melhorar', downgrade: 'Reduzir',
      noPlan: 'Voc� ainda n�o tem um plano ativo. Escolha um acima para come�ar.',
      cancel: 'Para cancelar sua assinatura,', contactSupport: 'entre em contato com o suporte',
    },
    refer: {
      heroTitle: 'Ganhe $10.000 com\nvendas de projetos',
      heroSub: 'Receba 10% adicionais da receita do projeto a partir do segundo m�s',
      heroBtn: 'Torne-se parceiro',
      clutchLabel: 'Baseado em 60 avalia��es do Clutch',
      upworkLabel: '100+ avalia��es',
    },
  },

  it: {
    nav: { home:'Home', services:'Servizi', about:'Chi siamo', contact:'Contatti', login:'Accedi', signup:'Registrati', blog:'Blog' },
    hero: {
      eyebrow: 'SVILUPPO SOFTWARE AZIENDALE',
      title1: 'Progetta. Costruisci.',
      title2: 'Proteggi.',
      sub: 'Creiamo prodotti web, mobile e blockchain con SDLC di livello enterprise, integrazioni AI e conformit� pronta per gli audit.',
      cta1: 'Inizia il tuo Progetto',
      cta2: 'Esplora i Servizi',
    },
    stats: [
      { value:'150+', label:'Progetti Consegnati' },
      { value:'10+',  label:'Ingegneri Esperti' },
      { value:'10+',  label:'Paesi Serviti' },
      { value:'100%',  label:'Soddisfazione del Cliente' },
    ],
    sections: {
      whatWeDo: 'Cosa Facciamo', ourServices: 'I Nostri Servizi',
      servicesSubtitle: 'Soluzioni tecnologiche end-to-end su misura per le vostre esigenze.',
      ourWork: 'Il Nostro Lavoro', caseStudies: 'Casi Studio',
      caseSubtitle: 'Progetti reali, risultati reali.',
      howWeWork: 'Come Lavoriamo', ourProcess: 'Il Nostro Processo',
      processSubtitle: 'Una metodologia collaudata che consegna risultati nei tempi previsti.',
      learnMore: 'Scopri di pi� ?',
      ctaTitle: 'Pronti a costruire qualcosa di grande?',
      ctaSub: 'Trasformiamo la tua idea in un prodotto scalabile.',
      ctaBtn: 'Consulenza Gratuita',
    },
    process: [
      { num:'01', title:'Scoperta',    desc:'Approfondiamo i tuoi obiettivi aziendali, utenti e requisiti tecnici.' },
      { num:'02', title:'Design',      desc:'Wireframe, prototipi e design UI/UX allineati con il tuo brand.' },
      { num:'03', title:'Sviluppo',    desc:'Sviluppo agile con sprint settimanali e consegna continua.' },
      { num:'04', title:'Lancio & Crescita', desc:'Deployment, monitoraggio e supporto continuo mentre cresci.' },
    ],
    servicesPage: {
      tag: 'Cosa Offriamo', title: 'I Nostri Servizi',
      subtitle: 'Servizi tecnologici a spettro completo, dall\'ideazione alla produzione.',
      getQuote: 'Richiedi un Preventivo',
    },
    aboutPage: {
      tag: 'Chi Siamo', title: 'Costruito da Ingegneri,\nGuidato da uno Scopo',
      subtitle: 'DefiGate � una societ� globale di sviluppo software.',
      missionTag: 'La Nostra Missione', missionTitle: 'Trasformare idee complesse in software elegante e scalabile',
      missionP1: 'Fondata nel 2025, DefiGate � cresciuta da un piccolo team di ingegneri appassionati a un\'azienda globale con clienti in oltre 30 paesi.',
      missionP2: 'Il nostro team combina una profonda competenza tecnica con una mentalit� di prodotto � non scriviamo solo codice, risolviamo problemi aziendali.',
      valuesTag: 'I Nostri Valori', teamTag: 'Il Team', teamTitle: 'Incontra i Nostri Membri',
    },
    contactPage: {
      tag: 'Contattaci', title: 'Costruiamo Insieme',
      subtitle: 'Raccontaci del tuo progetto e ti risponderemo entro 1 ora.',
      infoTitle: 'Informazioni di Contatto',
      email: 'E-mail', phone: 'Telefono', hq: 'Sede Centrale', response: 'Tempo di Risposta',
      responseVal: 'Entro 1 ora',
      namePlaceholder: 'Il tuo nome', emailPlaceholder: 'tua@email.com',
      phonePlaceholder: '+1 (234) 567-890', selectService: 'Seleziona un servizio',
      messagePlaceholder: 'Raccontaci del tuo progetto...',
      send: 'Invia Messaggio', sending: 'Invio in corso...',
      success: 'Messaggio inviato! Ti contatteremo presto.',
      error: 'Qualcosa � andato storto. Riprova.',
      fullName: 'Nome Completo *', emailLabel: 'E-mail *', phoneLabel: 'Telefono', serviceLabel: 'Servizio', messageLabel: 'Messaggio *',
    },
    auth: {
      welcomeBack: 'Bentornato', signInSub: 'Accedi al tuo account DefiGate',
      signIn: 'Accedi', signingIn: 'Accesso in corso...',
      createAccount: 'Crea account', joinSub: 'Unisciti a DefiGate oggi',
      creating: 'Creazione account...', create: 'Crea Account',
      fullName: 'Nome Completo', email: 'E-mail', password: 'Password',
      confirmPassword: 'Conferma Password', noAccount: 'Non hai un account?',
      hasAccount: 'Hai gi� un account?', signUp: 'Registrati', signInLink: 'Accedi',
      namePlaceholder: 'Il tuo nome', emailPlaceholder: 'tua@email.com',
      loginSuccess: 'Accesso riuscito! Reindirizzamento...',
    },
    footer: {
      desc: 'Progetta, costruisci e proteggi prodotti web, mobile e blockchain con SDLC di livello enterprise e integrazioni AI.',
      services: 'Servizi', company: 'Azienda', contact: 'Contatti',
      aboutUs: 'Chi Siamo', careers: 'Carriere', blog: 'Blog',
      privacy: 'Informativa sulla Privacy', terms: 'Termini di Servizio', cookie: 'Informativa sui Cookie',
      rights: '� {year} DefiGate. Tutti i diritti riservati.',
    },
    cookie: {
      text: 'Utilizziamo i cookie su questo sito per rendere la tua esperienza di navigazione pi� semplice e per analizzare il traffico in modo anonimo. Per ulteriori informazioni, consulta la nostra Informativa sulla Privacy. Accetti l\'uso dei cookie?',
      mandatory: 'Solo Necessari', settings: 'Impostazioni Cookie', allowAll: 'Consenti Tutti',
      settingsTitle: 'Impostazioni Cookie', settingsSub: 'Gestisci le tue preferenze sui cookie di seguito.',
      necessary: 'Cookie Necessari', necessaryDesc: 'Necessari per il funzionamento del sito. Non possono essere disabilitati.',
      analytics: 'Cookie Analitici', analyticsDesc: 'Ci aiutano a capire come i visitatori interagiscono con il sito.',
      marketing: 'Cookie di Marketing', marketingDesc: 'Utilizzati per mostrare annunci pertinenti.',
      alwaysOn: 'Sempre Attivo', back: 'Indietro', savePrefs: 'Salva Preferenze',
    },
    membership: {
      tag: 'Piani', title: 'Scegli il tuo Abbonamento',
      subtitle: 'Sblocca servizi adatti alle tue esigenze.',
      monthly: 'Mensile', annual: 'Annuale',
      currentPlan: 'Piano Attuale', renews: 'Rinnovo',
      upgrade: 'Aggiorna', downgrade: 'Declassa',
      noPlan: 'Non hai ancora un piano attivo. Scegline uno sopra per iniziare.',
      cancel: 'Per annullare il tuo abbonamento,', contactSupport: 'contatta il supporto',
    },
    refer: {
      heroTitle: 'Guadagna $10.000 dalle\nvendite di progetti',
      heroSub: 'Ricevi un ulteriore 10% dei ricavi del progetto a partire dal secondo mese',
      heroBtn: 'Diventa partner',
      clutchLabel: 'Basato su 60 recensioni Clutch',
      upworkLabel: '100+ recensioni',
    },
  },
};

const localeUpdates = {
  en: {
    nav: { products: 'Products', pricing: 'Pricing', careers: 'Careers', contactUs: 'Contact', getStarted: 'Get Started', servicesLabel: 'SERVICES' },
    hero: {
      eyebrow: 'BLOCKCHAIN INFRASTRUCTURE COMPANY',
      titleWords: ['CREATE.', 'INNOVATE.', 'EVOLVE.'],
      title1: 'CREATE. INNOVATE.', title2: 'EVOLVE.',
      sub: 'At DefiGate, we combine blockchain and AI to power the future of e-commerce. Our solutions deliver transparency, security, and efficiency, creating a seamless digital experience for businesses and consumers alike.',
      cta1: 'Explore Products', cta2: 'Get Started',
    },
    stats: [{ value: '$20M+', label: 'TVL Secured' }, { value: '20+', label: 'Protocols Deployed' }, { value: '20+', label: 'Chains Supported' }, { value: '100%', label: 'Audit Pass Rate' }],
    servicesMenu: [
      { key: 'web3', label: 'Smart Payments', title: 'Smart Payments', desc: 'Self-hosted crypto payments with instant settlement and zero transaction fees.', tags: ['Zero Fees', 'Multi-Chain', 'Self-Hosted'] },
      { key: 'nft-dev', label: 'AI Recommendations', title: 'AI Recommendations', desc: 'AI-powered recommendations that personalize customer experiences and drive conversion.', tags: ['AI', 'Analytics', 'Personalization'] },
      { key: 'nft-market', label: 'Crypto Checkout', title: 'Crypto Checkout', desc: 'Simple, secure cryptocurrency checkout for modern e-commerce.', tags: ['Checkout', 'Crypto', 'E-commerce'] },
      { key: 'crypto', label: 'Web3 MVPs', title: 'Web3 MVPs', desc: 'Launch production-ready Web3 products faster with an experienced product team.', tags: ['MVP', 'Web3', 'dApps'] },
    ],
    home: {
      expertiseTag: 'Expertise', expertiseTitle: 'Areas of expertise', expertiseSub: 'Four focused capabilities we ship for blockchain and Web3 products.', learnMore: 'Learn More',
      platformTag: 'SELF-HOSTED PAYMENT GATEWAY', platformTitle: 'Accept Crypto Payments with Zero Fees.', platformDesc: 'DefiGate is a self-hosted cryptocurrency payment gateway for e-commerce. Accept 20+ cryptocurrencies with zero transaction fees, instant settlement, and complete control of your funds.',
      reviewsTag: 'Reviews', reviewsTitle: 'Highly satisfied clients', reviewsSub: 'Real feedback from teams who shipped blockchain, AI, and product work with DefiGate.',
      clientsTag: 'Our clients', clientsTitle: 'We are trusted',
      getStartedTag: 'Get started', howWeStart: 'How we get started',
      formTitle: "Share Your Project's Vision", formSub: "Tell us what you're building � we'll reply within 24 hours.", attachFile: 'Attach File', ndaPrefix: 'Your idea is 100% protected by our', ndaStrong: 'Non Disclosure Agreement',
      validation: { nameRequired: 'Name is required', emailRequired: 'Email is required', emailInvalid: 'Enter a valid email', countryRequired: 'Please select a country', phoneRequired: 'Phone number is required', phoneInvalid: 'Enter a valid phone number', messageRequired: 'Please describe your project' },
      nameLabel: "Name",
      emailLabel: "Email",
      countryLabel: "Country",
      phoneLabel: "Phone",
      messageLabel: "Project details",
      selectCountry: "Select country",
      phonePlaceholder: "Phone Number",
      submit: "Submit",
      sending: "Sending...",
      tryDemo: "Try Live Demo",
      getStartedCta: "Get Started",
      steps: [{"title":"Install","text":"Install DefiGate in 5 minutes using Docker Compose or Kubernetes."},{"title":"Enable coins","text":"Enable the cryptocurrencies you want to accept (BTC, ETH, USDT, etc.)."},{"title":"Configure","text":"Generate API keys and configure webhooks for payment notifications."},{"title":"Integrate","text":"Integrate with your store using ready-made plugins or REST API."},{"title":"Go live","text":"Start accepting crypto payments with zero transaction fees and instant settlement."}],
      platformFeatures: [{"title":"Zero Transaction Fees","text":"Keep 100% of your revenue. No 2.9% + $0.30 fees like traditional processors. Save thousands annually."},{"title":"Non-Custodial Security","text":"You control your private keys and funds. Payments go directly to your wallet. No third-party can freeze or seize your assets."},{"title":"Self-Hosted Control","text":"Deploy on your own infrastructure. Complete data privacy and independence. No vendor lock-in or monthly fees."}],
      engagement: {"tag":"BLOCKCHAIN DEVELOPMENT","titleBefore":"From Protocol to","titleHighlight":"Production","titleAfter":".","subtitle":"A proven four-phase methodology for building production-grade blockchain protocols with security-first development and institutional-grade infrastructure.","phases":[{"title":"Protocol Design & Tokenomics","desc":"Economic modeling, tokenomics design, security architecture, and technical requirements. Deliverable: comprehensive protocol specification, economic audit, and security model documentation.","timeline":"Week 1-2"},{"title":"Smart Contract Development","desc":"Solidity/Rust development with formal verification, automated testing suites, gas optimization, and security vulnerability assessment � all code reviewed and audited before deployment.","timeline":"Week 2-6"},{"title":"Security Audit & Testing","desc":"Comprehensive security audits with third-party verification, mainnet simulation, stress testing, and economic attack vector analysis across all protocol components.","timeline":"Week 6-8"},{"title":"Deployment & Monitoring","desc":"Mainnet deployment, real-time monitoring setup, on-chain analytics implementation, and ongoing security support. Most protocols continue with us for long-term maintenance.","timeline":"Ongoing"}]},
    },
  },
  es: {
    nav: { products: 'Productos', pricing: 'Precios', careers: 'Carreras', contactUs: 'Contacto', getStarted: 'Comenzar', servicesLabel: 'SERVICIOS' },
    hero: { eyebrow: 'EMPRESA DE INFRAESTRUCTURA BLOCKCHAIN', titleWords: ['CREA.', 'INNOVA.', 'EVOLUCIONA.'], title1: 'CREA. INNOVA.', title2: 'EVOLUCIONA.', sub: 'En DefiGate, combinamos blockchain e IA para impulsar el futuro del comercio electr�nico. Nuestras soluciones aportan transparencia, seguridad y eficiencia para crear una experiencia digital fluida.', cta1: 'Explorar productos', cta2: 'Comenzar' },
    stats: [{ value: '$20M+', label: 'TVL asegurado' }, { value: '20+', label: 'Protocolos desplegados' }, { value: '20+', label: 'Cadenas compatibles' }, { value: '100%', label: 'Tasa de auditor�as aprobadas' }],
    servicesMenu: [
      { key: 'web3', label: 'Pagos inteligentes', title: 'Pagos inteligentes', desc: 'Pagos cripto autoalojados con liquidaci�n instant�nea y cero comisiones.', tags: ['Sin comisiones', 'Multicadena', 'Autoalojado'] },
      { key: 'nft-dev', label: 'Recomendaciones con IA', title: 'Recomendaciones con IA', desc: 'Recomendaciones con IA que personalizan experiencias e impulsan conversiones.', tags: ['IA', 'Anal�tica', 'Personalizaci�n'] },
      { key: 'nft-market', label: 'Checkout cripto', title: 'Checkout cripto', desc: 'Checkout de criptomonedas simple y seguro para el comercio electr�nico.', tags: ['Checkout', 'Cripto', 'E-commerce'] },
      { key: 'crypto', label: 'MVPs Web3', title: 'MVPs Web3', desc: 'Lanza productos Web3 listos para producci�n m�s r�pido.', tags: ['MVP', 'Web3', 'dApps'] },
    ],
    home: {
      expertiseTag: 'Experiencia', expertiseTitle: '�reas de especializaci�n', expertiseSub: 'Cuatro capacidades clave para productos blockchain y Web3.', learnMore: 'Saber m�s',
      platformTag: 'PASARELA DE PAGO AUTOALOJADA', platformTitle: 'Acepta pagos cripto sin comisiones.', platformDesc: 'DefiGate es una pasarela de pago de criptomonedas autoalojada para comercio electr�nico. Acepta m�s de 20 criptomonedas con cero comisiones y control total de tus fondos.',
      reviewsTag: 'Rese�as', reviewsTitle: 'Clientes muy satisfechos', reviewsSub: 'Comentarios reales de equipos que crearon productos blockchain, IA y digitales con DefiGate.',
      clientsTag: 'Nuestros clientes', clientsTitle: 'Conf�an en nosotros', getStartedTag: 'Comenzar', howWeStart: 'C�mo empezamos',
      formTitle: 'Comparte la visi�n de tu proyecto', formSub: 'Cu�ntanos qu� est�s creando; responderemos en 24 horas.', attachFile: 'Adjuntar archivo', ndaPrefix: 'Tu idea est� 100% protegida por nuestro', ndaStrong: 'Acuerdo de confidencialidad',
      validation: { nameRequired: 'El nombre es obligatorio', emailRequired: 'El correo es obligatorio', emailInvalid: 'Introduce un correo v�lido', countryRequired: 'Selecciona un pa�s', phoneRequired: 'El tel�fono es obligatorio', phoneInvalid: 'Introduce un tel�fono v�lido', messageRequired: 'Describe tu proyecto' },
      nameLabel: "Nombre",
      emailLabel: "Correo",
      countryLabel: "Pa�s",
      phoneLabel: "Tel�fono",
      messageLabel: "Detalles del proyecto",
      selectCountry: "Selecciona un pa�s",
      phonePlaceholder: "N�mero de tel�fono",
      submit: "Enviar",
      sending: "Enviando...",
      tryDemo: "Probar demo en vivo",
      getStartedCta: "Comenzar",
      steps: [{"title":"Instalar","text":"Instala DefiGate en 5 minutos con Docker Compose o Kubernetes."},{"title":"Activar monedas","text":"Activa las criptomonedas que quieras aceptar (BTC, ETH, USDT, etc.)."},{"title":"Configurar","text":"Genera claves API y configura webhooks para notificaciones de pago."},{"title":"Integrar","text":"Integra con tu tienda usando plugins listos o la API REST."},{"title":"Lanzar","text":"Empieza a aceptar pagos cripto con cero comisiones y liquidaci�n instant�nea."}],
      platformFeatures: [{"title":"Cero comisiones","text":"Qu�date con el 100% de tus ingresos. Sin comisiones del 2,9% + $0,30. Ahorra miles cada a�o."},{"title":"Seguridad no custodial","text":"T� controlas tus claves y fondos. Los pagos van directo a tu billetera. Nadie puede congelar tus activos."},{"title":"Control autoalojado","text":"Despliega en tu propia infraestructura. Privacidad total e independencia. Sin dependencia de proveedor."}],
      engagement: {"tag":"DESARROLLO BLOCKCHAIN","titleBefore":"Del protocolo a","titleHighlight":"producci�n","titleAfter":".","subtitle":"Una metodolog�a probada en cuatro fases para construir protocolos blockchain listos para producci�n, con seguridad primero e infraestructura de nivel institucional.","phases":[{"title":"Dise�o de protocolo y token�mica","desc":"Modelado econ�mico, dise�o de token�mica, arquitectura de seguridad y requisitos t�cnicos. Entregable: especificaci�n del protocolo, auditor�a econ�mica y documentaci�n del modelo de seguridad.","timeline":"Semana 1-2"},{"title":"Desarrollo de smart contracts","desc":"Desarrollo en Solidity/Rust con verificaci�n formal, suites de pruebas, optimizaci�n de gas y evaluaci�n de vulnerabilidades � todo revisado y auditado antes del despliegue.","timeline":"Semana 2-6"},{"title":"Auditor�a y pruebas de seguridad","desc":"Auditor�as completas con verificaci�n de terceros, simulaci�n en mainnet, pruebas de estr�s y an�lisis de vectores de ataque econ�mico.","timeline":"Semana 6-8"},{"title":"Despliegue y monitoreo","desc":"Despliegue en mainnet, monitoreo en tiempo real, anal�tica on-chain y soporte de seguridad continuo.","timeline":"Continuo"}]},
    },
    footerDesc: 'DefiGate crea infraestructura blockchain lista para producci�n: protocolos DeFi, plataformas de contratos inteligentes, billeteras Web3 y anal�tica on-chain.',
  },
  fr: {
    nav: { products: 'Produits', pricing: 'Tarifs', careers: 'Carri�res', contactUs: 'Contact', getStarted: 'Commencer', servicesLabel: 'SERVICES' },
    hero: { eyebrow: 'ENTREPRISE D�INFRASTRUCTURE BLOCKCHAIN', titleWords: ['CR�EZ.', 'INNOVEZ.', '�VOLUEZ.'], title1: 'CR�EZ. INNOVEZ.', title2: '�VOLUEZ.', sub: 'Chez DefiGate, nous associons blockchain et IA pour fa�onner l�avenir du commerce �lectronique. Nos solutions apportent transparence, s�curit� et efficacit�.', cta1: 'Explorer les produits', cta2: 'Commencer' },
    stats: [{ value: '$20M+', label: 'TVL s�curis�' }, { value: '20+', label: 'Protocoles d�ploy�s' }, { value: '20+', label: 'Cha�nes prises en charge' }, { value: '100%', label: 'Taux d�audits r�ussis' }],
    servicesMenu: [
      { key: 'web3', label: 'Paiements intelligents', title: 'Paiements intelligents', desc: 'Paiements crypto auto-h�berg�s avec r�glement instantan� et z�ro frais.', tags: ['Z�ro frais', 'Multicha�ne', 'Auto-h�berg�'] },
      { key: 'nft-dev', label: 'Recommandations IA', title: 'Recommandations IA', desc: 'Des recommandations IA qui personnalisent les exp�riences et am�liorent la conversion.', tags: ['IA', 'Analytique', 'Personnalisation'] },
      { key: 'nft-market', label: 'Paiement crypto', title: 'Paiement crypto', desc: 'Un paiement en cryptomonnaies simple et s�curis� pour l�e-commerce.', tags: ['Paiement', 'Crypto', 'E-commerce'] },
      { key: 'crypto', label: 'MVPs Web3', title: 'MVPs Web3', desc: 'Lancez plus rapidement des produits Web3 pr�ts pour la production.', tags: ['MVP', 'Web3', 'dApps'] },
    ],
    home: { expertiseTag: 'Expertise', expertiseTitle: 'Domaines d�expertise', expertiseSub: 'Quatre capacit�s cibl�es pour les produits blockchain et Web3.', learnMore: 'En savoir plus', platformTag: 'PASSERELLE DE PAIEMENT AUTO-H�BERG�E', platformTitle: 'Acceptez les paiements crypto sans frais.', platformDesc: 'DefiGate est une passerelle de paiement crypto auto-h�berg�e pour l�e-commerce. Acceptez plus de 20 cryptomonnaies sans frais et gardez le contr�le de vos fonds.', reviewsTag: 'Avis', reviewsTitle: 'Des clients tr�s satisfaits', reviewsSub: 'Des retours r�els d��quipes ayant lanc� des produits blockchain, IA et num�riques avec DefiGate.', clientsTag: 'Nos clients', clientsTitle: 'Ils nous font confiance', getStartedTag: 'Commencer', howWeStart: 'Comment nous d�marrons', formTitle: 'Partagez la vision de votre projet', formSub: 'Parlez-nous de votre projet � nous r�pondrons sous 24 heures.', attachFile: 'Joindre un fichier', ndaPrefix: 'Votre id�e est prot�g�e � 100 % par notre', ndaStrong: 'accord de confidentialit�', validation: { nameRequired: 'Le nom est requis', emailRequired: 'L�e-mail est requis', emailInvalid: 'Saisissez un e-mail valide', countryRequired: 'S�lectionnez un pays', phoneRequired: 'Le t�l�phone est requis', phoneInvalid: 'Saisissez un t�l�phone valide', messageRequired: 'D�crivez votre projet' },
      nameLabel: "Nom",
      emailLabel: "E-mail",
      countryLabel: "Pays",
      phoneLabel: "T�l�phone",
      messageLabel: "D�tails du projet",
      selectCountry: "S�lectionnez un pays",
      phonePlaceholder: "Num�ro de t�l�phone",
      submit: "Envoyer",
      sending: "Envoi...",
      tryDemo: "Essayer la d�mo",
      getStartedCta: "Commencer",
      steps: [{"title":"Installer","text":"Installez DefiGate en 5 minutes avec Docker Compose ou Kubernetes."},{"title":"Activer les devises","text":"Activez les cryptomonnaies que vous souhaitez accepter (BTC, ETH, USDT, etc.)."},{"title":"Configurer","text":"G�n�rez des cl�s API et configurez les webhooks de paiement."},{"title":"Int�grer","text":"Int�grez votre boutique avec des plugins pr�ts � l�emploi ou l�API REST."},{"title":"Lancer","text":"Acceptez les paiements crypto sans frais et avec r�glement instantan�."}],
      platformFeatures: [{"title":"Z�ro frais de transaction","text":"Gardez 100 % de vos revenus. Pas de frais 2,9 % + 0,30 $. �conomisez des milliers par an."},{"title":"S�curit� non custodiale","text":"Vous contr�lez vos cl�s et vos fonds. Les paiements vont directement vers votre portefeuille."},{"title":"Contr�le auto-h�berg�","text":"D�ployez sur votre infrastructure. Confidentialit� totale et ind�pendance. Pas de d�pendance fournisseur."}],
      engagement: {"tag":"D�VELOPPEMENT BLOCKCHAIN","titleBefore":"Du protocole � la","titleHighlight":"production","titleAfter":".","subtitle":"Une m�thodologie en quatre phases pour construire des protocoles blockchain pr�ts pour la production, avec une approche s�curit� d�abord.","phases":[{"title":"Conception du protocole et tokenomics","desc":"Mod�lisation �conomique, tokenomics, architecture de s�curit� et exigences techniques.","timeline":"Semaine 1-2"},{"title":"D�veloppement de smart contracts","desc":"D�veloppement Solidity/Rust avec v�rification formelle, tests automatis�s et optimisation du gas.","timeline":"Semaine 2-6"},{"title":"Audit et tests de s�curit�","desc":"Audits complets, simulation mainnet, tests de stress et analyse des vecteurs d�attaque.","timeline":"Semaine 6-8"},{"title":"D�ploiement et monitoring","desc":"D�ploiement mainnet, monitoring temps r�el, analytique on-chain et support continu.","timeline":"Continu"}]} },
    footerDesc: 'DefiGate construit une infrastructure blockchain pr�te pour la production : protocoles DeFi, plateformes de contrats intelligents, portefeuilles Web3 et analytique on-chain.',
  },
  nl: {
    nav: { products: 'Producten', pricing: 'Prijzen', careers: 'Vacatures', contactUs: 'Contact', getStarted: 'Aan de slag', servicesLabel: 'DIENSTEN' },
    hero: { eyebrow: 'BLOCKCHAIN-INFRASTRUCTUURBEDRIJF', titleWords: ['CRE�ER.', 'INNOVEER.', 'EVOLUEER.'], title1: 'CRE�ER. INNOVEER.', title2: 'EVOLUEER.', sub: 'Bij DefiGate combineren we blockchain en AI om de toekomst van e-commerce aan te drijven. Onze oplossingen bieden transparantie, veiligheid en effici�ntie.', cta1: 'Producten verkennen', cta2: 'Aan de slag' },
    stats: [{ value: '$20M+', label: 'Beveiligde TVL' }, { value: '20+', label: 'Uitgerolde protocollen' }, { value: '20+', label: 'Ondersteunde chains' }, { value: '100%', label: 'Audit-slaagpercentage' }],
    servicesMenu: [
      { key: 'web3', label: 'Slimme betalingen', title: 'Slimme betalingen', desc: 'Zelfgehoste cryptobetalingen met directe afrekening en nul transactiekosten.', tags: ['Geen kosten', 'Multi-chain', 'Zelfgehost'] },
      { key: 'nft-dev', label: 'AI-aanbevelingen', title: 'AI-aanbevelingen', desc: 'AI-aanbevelingen die ervaringen personaliseren en conversie verhogen.', tags: ['AI', 'Analyse', 'Personalisatie'] },
      { key: 'nft-market', label: 'Crypto checkout', title: 'Crypto checkout', desc: 'Eenvoudig en veilig afrekenen met crypto voor e-commerce.', tags: ['Checkout', 'Crypto', 'E-commerce'] },
      { key: 'crypto', label: 'Web3 MVP�s', title: 'Web3 MVP�s', desc: 'Breng productieklare Web3-producten sneller op de markt.', tags: ['MVP', 'Web3', 'dApps'] },
    ],
    home: { expertiseTag: 'Expertise', expertiseTitle: 'Expertisegebieden', expertiseSub: 'Vier gerichte mogelijkheden voor blockchain- en Web3-producten.', learnMore: 'Meer informatie', platformTag: 'ZELFGEHOSTE BETAALGATEWAY', platformTitle: 'Accepteer cryptobetalingen zonder kosten.', platformDesc: 'DefiGate is een zelfgehoste cryptobetaalgateway voor e-commerce. Accepteer meer dan 20 cryptovaluta zonder transactiekosten en houd volledige controle over uw geld.', reviewsTag: 'Beoordelingen', reviewsTitle: 'Zeer tevreden klanten', reviewsSub: 'Echte feedback van teams die blockchain-, AI- en digitale producten bouwden met DefiGate.', clientsTag: 'Onze klanten', clientsTitle: 'Zij vertrouwen ons', getStartedTag: 'Aan de slag', howWeStart: 'Hoe we beginnen', formTitle: 'Deel de visie van uw project', formSub: 'Vertel ons wat u bouwt � we antwoorden binnen 24 uur.', attachFile: 'Bestand bijvoegen', ndaPrefix: 'Uw idee is 100% beschermd door onze', ndaStrong: 'geheimhoudingsovereenkomst', validation: { nameRequired: 'Naam is verplicht', emailRequired: 'E-mail is verplicht', emailInvalid: 'Voer een geldig e-mailadres in', countryRequired: 'Selecteer een land', phoneRequired: 'Telefoonnummer is verplicht', phoneInvalid: 'Voer een geldig telefoonnummer in', messageRequired: 'Beschrijf uw project' },
      nameLabel: "Naam",
      emailLabel: "E-mail",
      countryLabel: "Land",
      phoneLabel: "Telefoon",
      messageLabel: "Projectdetails",
      selectCountry: "Selecteer een land",
      phonePlaceholder: "Telefoonnummer",
      submit: "Versturen",
      sending: "Verzenden...",
      tryDemo: "Live demo proberen",
      getStartedCta: "Aan de slag",
      steps: [{"title":"Installeren","text":"Installeer DefiGate in 5 minuten met Docker Compose of Kubernetes."},{"title":"Munten inschakelen","text":"Schakel de cryptovaluta in die u wilt accepteren (BTC, ETH, USDT, enz.)."},{"title":"Configureren","text":"Genereer API-sleutels en configureer webhooks voor betalingsmeldingen."},{"title":"Integreren","text":"Integreer met uw winkel via plugins of de REST API."},{"title":"Live gaan","text":"Accepteer cryptobetalingen zonder transactiekosten en met directe afrekening."}],
      platformFeatures: [{"title":"Nul transactiekosten","text":"Houd 100% van uw omzet. Geen 2,9% + $0,30 kosten. Bespaar jaarlijks duizenden."},{"title":"Non-custodiale beveiliging","text":"U beheert uw sleutels en fondsen. Betalingen gaan rechtstreeks naar uw wallet."},{"title":"Zelfgehoste controle","text":"Deploy op uw eigen infrastructuur. Volledige privacy en onafhankelijkheid."}],
      engagement: {"tag":"BLOCKCHAIN-ONTWIKKELING","titleBefore":"Van protocol naar","titleHighlight":"productie","titleAfter":".","subtitle":"Een bewezen vierfasenmethode voor productieklare blockchainprotocollen met security-first ontwikkeling.","phases":[{"title":"Protocolontwerp & tokenomics","desc":"Economische modellering, tokenomics, beveiligingsarchitectuur en technische eisen.","timeline":"Week 1-2"},{"title":"Smartcontractontwikkeling","desc":"Solidity/Rust-ontwikkeling met formele verificatie, testsuites en gasoptimalisatie.","timeline":"Week 2-6"},{"title":"Security-audit & testen","desc":"Uitgebreide audits, mainnet-simulatie, stresstests en analyse van aanvalsvectoren.","timeline":"Week 6-8"},{"title":"Uitrol & monitoring","desc":"Mainnet-uitrol, realtime monitoring, on-chainanalyse en doorlopende support.","timeline":"Doorlopend"}]} },
    footerDesc: 'DefiGate bouwt productieklare blockchain-infrastructuur: DeFi-protocollen, smartcontractplatforms, Web3-wallets en on-chainanalyse.',
  },
  pt: {
    nav: { products: 'Produtos', pricing: 'Pre�os', careers: 'Carreiras', contactUs: 'Contato', getStarted: 'Come�ar', servicesLabel: 'SERVI�OS' },
    hero: { eyebrow: 'EMPRESA DE INFRAESTRUTURA BLOCKCHAIN', titleWords: ['CRIE.', 'INOVE.', 'EVOLUA.'], title1: 'CRIE. INOVE.', title2: 'EVOLUA.', sub: 'Na DefiGate, combinamos blockchain e IA para impulsionar o futuro do com�rcio eletr�nico. Nossas solu��es oferecem transpar�ncia, seguran�a e efici�ncia.', cta1: 'Explorar produtos', cta2: 'Come�ar' },
    stats: [{ value: '$20M+', label: 'TVL protegido' }, { value: '20+', label: 'Protocolos implantados' }, { value: '20+', label: 'Redes compat�veis' }, { value: '100%', label: 'Taxa de aprova��o em auditorias' }],
    servicesMenu: [
      { key: 'web3', label: 'Pagamentos inteligentes', title: 'Pagamentos inteligentes', desc: 'Pagamentos cripto auto-hospedados com liquida��o instant�nea e zero taxas.', tags: ['Sem taxas', 'Multichain', 'Auto-hospedado'] },
      { key: 'nft-dev', label: 'Recomenda��es com IA', title: 'Recomenda��es com IA', desc: 'Recomenda��es de IA que personalizam experi�ncias e aumentam convers�es.', tags: ['IA', 'An�lise', 'Personaliza��o'] },
      { key: 'nft-market', label: 'Checkout cripto', title: 'Checkout cripto', desc: 'Checkout de criptomoedas simples e seguro para e-commerce.', tags: ['Checkout', 'Cripto', 'E-commerce'] },
      { key: 'crypto', label: 'MVPs Web3', title: 'MVPs Web3', desc: 'Lance produtos Web3 prontos para produ��o mais r�pido.', tags: ['MVP', 'Web3', 'dApps'] },
    ],
    home: { expertiseTag: 'Especializa��o', expertiseTitle: '�reas de especializa��o', expertiseSub: 'Quatro capacidades focadas para produtos blockchain e Web3.', learnMore: 'Saiba mais', platformTag: 'GATEWAY DE PAGAMENTO AUTO-HOSPEDADO', platformTitle: 'Aceite pagamentos cripto sem taxas.', platformDesc: 'DefiGate � um gateway de pagamento de criptomoedas auto-hospedado para e-commerce. Aceite mais de 20 criptomoedas sem taxas e mantenha controle total dos seus fundos.', reviewsTag: 'Avalia��es', reviewsTitle: 'Clientes muito satisfeitos', reviewsSub: 'Feedback real de equipes que criaram produtos blockchain, IA e digitais com a DefiGate.', clientsTag: 'Nossos clientes', clientsTitle: 'Eles confiam em n�s', getStartedTag: 'Come�ar', howWeStart: 'Como come�amos', formTitle: 'Compartilhe a vis�o do seu projeto', formSub: 'Conte-nos o que voc� est� criando � responderemos em at� 24 horas.', attachFile: 'Anexar arquivo', ndaPrefix: 'Sua ideia est� 100% protegida pelo nosso', ndaStrong: 'Acordo de confidencialidade', validation: { nameRequired: 'O nome � obrigat�rio', emailRequired: 'O e-mail � obrigat�rio', emailInvalid: 'Digite um e-mail v�lido', countryRequired: 'Selecione um pa�s', phoneRequired: 'O telefone � obrigat�rio', phoneInvalid: 'Digite um telefone v�lido', messageRequired: 'Descreva seu projeto' },
      nameLabel: "Nome",
      emailLabel: "E-mail",
      countryLabel: "Pa�s",
      phoneLabel: "Telefone",
      messageLabel: "Detalhes do projeto",
      selectCountry: "Selecione um pa�s",
      phonePlaceholder: "N�mero de telefone",
      submit: "Enviar",
      sending: "Enviando...",
      tryDemo: "Experimentar demo",
      getStartedCta: "Come�ar",
      steps: [{"title":"Instalar","text":"Instale a DefiGate em 5 minutos com Docker Compose ou Kubernetes."},{"title":"Ativar moedas","text":"Ative as criptomoedas que deseja aceitar (BTC, ETH, USDT, etc.)."},{"title":"Configurar","text":"Gere chaves de API e configure webhooks para notifica��es de pagamento."},{"title":"Integrar","text":"Integre � sua loja com plugins prontos ou a API REST."},{"title":"Lan�ar","text":"Comece a aceitar pagamentos cripto com zero taxas e liquida��o instant�nea."}],
      platformFeatures: [{"title":"Zero taxas de transa��o","text":"Fique com 100% da receita. Sem taxas de 2,9% + $0,30. Economize milhares por ano."},{"title":"Seguran�a n�o custodial","text":"Voc� controla suas chaves e fundos. Os pagamentos v�o direto para sua carteira."},{"title":"Controle auto-hospedado","text":"Implante na sua infraestrutura. Privacidade total e independ�ncia."}],
      engagement: {"tag":"DESENVOLVIMENTO BLOCKCHAIN","titleBefore":"Do protocolo �","titleHighlight":"produ��o","titleAfter":".","subtitle":"Uma metodologia comprovada em quatro fases para construir protocolos blockchain prontos para produ��o.","phases":[{"title":"Design de protocolo e tokenomics","desc":"Modelagem econ�mica, tokenomics, arquitetura de seguran�a e requisitos t�cnicos.","timeline":"Semana 1-2"},{"title":"Desenvolvimento de smart contracts","desc":"Desenvolvimento Solidity/Rust com verifica��o formal, testes e otimiza��o de gas.","timeline":"Semana 2-6"},{"title":"Auditoria e testes de seguran�a","desc":"Auditorias completas, simula��o em mainnet, testes de estresse e an�lise de vetores de ataque.","timeline":"Semana 6-8"},{"title":"Implanta��o e monitoramento","desc":"Implanta��o em mainnet, monitoramento em tempo real, analytics on-chain e suporte cont�nuo.","timeline":"Cont�nuo"}]} },
    footerDesc: 'A DefiGate desenvolve infraestrutura blockchain pronta para produ��o: protocolos DeFi, plataformas de contratos inteligentes, carteiras Web3 e an�lises on-chain.',
  },
  it: {
    nav: { products: 'Prodotti', pricing: 'Prezzi', careers: 'Carriere', contactUs: 'Contatti', getStarted: 'Inizia', servicesLabel: 'SERVIZI' },
    hero: { eyebrow: 'AZIENDA DI INFRASTRUTTURA BLOCKCHAIN', titleWords: ['CREA.', 'INNOVA.', 'EVOLVI.'], title1: 'CREA. INNOVA.', title2: 'EVOLVI.', sub: 'In DefiGate combiniamo blockchain e IA per alimentare il futuro dell�e-commerce. Le nostre soluzioni offrono trasparenza, sicurezza ed efficienza.', cta1: 'Esplora i prodotti', cta2: 'Inizia' },
    stats: [{ value: '$20M+', label: 'TVL protetto' }, { value: '20+', label: 'Protocolli distribuiti' }, { value: '20+', label: 'Chain supportate' }, { value: '100%', label: 'Tasso di audit superati' }],
    servicesMenu: [
      { key: 'web3', label: 'Pagamenti intelligenti', title: 'Pagamenti intelligenti', desc: 'Pagamenti crypto self-hosted con regolamento istantaneo e zero commissioni.', tags: ['Zero commissioni', 'Multi-chain', 'Self-hosted'] },
      { key: 'nft-dev', label: 'Raccomandazioni IA', title: 'Raccomandazioni IA', desc: 'Raccomandazioni IA che personalizzano le esperienze e aumentano le conversioni.', tags: ['IA', 'Analisi', 'Personalizzazione'] },
      { key: 'nft-market', label: 'Checkout crypto', title: 'Checkout crypto', desc: 'Checkout in criptovaluta semplice e sicuro per l�e-commerce.', tags: ['Checkout', 'Crypto', 'E-commerce'] },
      { key: 'crypto', label: 'MVP Web3', title: 'MVP Web3', desc: 'Lancia pi� rapidamente prodotti Web3 pronti per la produzione.', tags: ['MVP', 'Web3', 'dApp'] },
    ],
    home: { expertiseTag: 'Competenza', expertiseTitle: 'Aree di competenza', expertiseSub: 'Quattro capacit� mirate per prodotti blockchain e Web3.', learnMore: 'Scopri di pi�', platformTag: 'GATEWAY DI PAGAMENTO SELF-HOSTED', platformTitle: 'Accetta pagamenti crypto senza commissioni.', platformDesc: 'DefiGate � un gateway di pagamento in criptovalute self-hosted per e-commerce. Accetta oltre 20 criptovalute senza commissioni e mantieni il controllo totale dei tuoi fondi.', reviewsTag: 'Recensioni', reviewsTitle: 'Clienti molto soddisfatti', reviewsSub: 'Feedback reale di team che hanno realizzato prodotti blockchain, IA e digitali con DefiGate.', clientsTag: 'I nostri clienti', clientsTitle: 'Si fidano di noi', getStartedTag: 'Inizia', howWeStart: 'Come iniziamo', formTitle: 'Condividi la visione del tuo progetto', formSub: 'Raccontaci cosa stai costruendo: risponderemo entro 24 ore.', attachFile: 'Allega file', ndaPrefix: 'La tua idea � protetta al 100% dal nostro', ndaStrong: 'Accordo di riservatezza', validation: { nameRequired: 'Il nome � obbligatorio', emailRequired: 'L�e-mail � obbligatoria', emailInvalid: 'Inserisci un�e-mail valida', countryRequired: 'Seleziona un paese', phoneRequired: 'Il telefono � obbligatorio', phoneInvalid: 'Inserisci un telefono valido', messageRequired: 'Descrivi il tuo progetto' },
      nameLabel: "Nome",
      emailLabel: "E-mail",
      countryLabel: "Paese",
      phoneLabel: "Telefono",
      messageLabel: "Dettagli del progetto",
      selectCountry: "Seleziona un paese",
      phonePlaceholder: "Numero di telefono",
      submit: "Invia",
      sending: "Invio...",
      tryDemo: "Prova la demo",
      getStartedCta: "Inizia",
      steps: [{"title":"Installa","text":"Installa DefiGate in 5 minuti con Docker Compose o Kubernetes."},{"title":"Abilita monete","text":"Abilita le criptovalute che vuoi accettare (BTC, ETH, USDT, ecc.)."},{"title":"Configura","text":"Genera chiavi API e configura webhook per le notifiche di pagamento."},{"title":"Integra","text":"Integra con il tuo store usando plugin pronti o l�API REST."},{"title":"Vai live","text":"Inizia ad accettare pagamenti crypto con zero commissioni e regolamento istantaneo."}],
      platformFeatures: [{"title":"Zero commissioni","text":"Tieni il 100% dei ricavi. Niente commissioni 2,9% + $0,30. Risparmia migliaia all�anno."},{"title":"Sicurezza non custodiale","text":"Controlli chiavi e fondi. I pagamenti vanno direttamente al tuo wallet."},{"title":"Controllo self-hosted","text":"Deploy sulla tua infrastruttura. Privacy totale e indipendenza."}],
      engagement: {"tag":"SVILUPPO BLOCKCHAIN","titleBefore":"Dal protocollo alla","titleHighlight":"produzione","titleAfter":".","subtitle":"Una metodologia in quattro fasi per costruire protocolli blockchain pronti per la produzione, con sicurezza al primo posto.","phases":[{"title":"Design del protocollo e tokenomics","desc":"Modellazione economica, tokenomics, architettura di sicurezza e requisiti tecnici.","timeline":"Settimana 1-2"},{"title":"Sviluppo smart contract","desc":"Sviluppo Solidity/Rust con verifica formale, suite di test e ottimizzazione del gas.","timeline":"Settimana 2-6"},{"title":"Audit e test di sicurezza","desc":"Audit completi, simulazione mainnet, stress test e analisi dei vettori di attacco.","timeline":"Settimana 6-8"},{"title":"Deploy e monitoraggio","desc":"Deploy su mainnet, monitoraggio in tempo reale, analytics on-chain e supporto continuo.","timeline":"Continuo"}]} },
    footerDesc: 'DefiGate realizza infrastrutture blockchain pronte per la produzione: protocolli DeFi, piattaforme di smart contract, wallet Web3 e analisi on-chain.',
  },
};

Object.entries(localeUpdates).forEach(([locale, updates]) => {
  const translation = translations[locale];
  translation.nav = { ...translation.nav, ...updates.nav };
  translation.hero = { ...translation.hero, ...updates.hero };
  translation.stats = updates.stats;
  translation.servicesMenu = updates.servicesMenu;
  translation.home = updates.home;
  if (updates.footerDesc) translation.footer.desc = updates.footerDesc;
});

Object.entries(servicePageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(pricingPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(productsPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(servicesPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(aboutPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(careersPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(caseStudiesPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(jobsPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(blogPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(legacyServicePageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(referPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(legalPageTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(chatbotTranslations).forEach(([locale, pages]) => {
  if (translations[locale]) Object.assign(translations[locale], pages);
});

Object.entries(accountPageTranslations).forEach(([locale, pages]) => {
  if (!translations[locale]) return;
  const { membership, ...rest } = pages;
  Object.assign(translations[locale], rest);
  if (membership) {
    translations[locale].membership = { ...translations[locale].membership, ...membership };
  }
});

/* __HOME_CONTACT_EXTRAS__ */
const __homeExtras = {"en":{"caseStudy":"Case study","fullCase":"Full case","teamTag":"THE TEAM","teamTitle":"Meet Our Team"},"es":{"caseStudy":"Caso de estudio","fullCase":"Caso completo","teamTag":"EL EQUIPO","teamTitle":"Conoce a nuestro equipo"},"fr":{"caseStudy":"�tude de cas","fullCase":"Cas complet","teamTag":"L'�QUIPE","teamTitle":"Rencontrez notre �quipe"},"nl":{"caseStudy":"Case study","fullCase":"Volledige case","teamTag":"HET TEAM","teamTitle":"Ontmoet ons team"},"pt":{"caseStudy":"Estudo de caso","fullCase":"Caso completo","teamTag":"A EQUIPE","teamTitle":"Conhe�a nossa equipe"},"it":{"caseStudy":"Caso di studio","fullCase":"Caso completo","teamTag":"IL TEAM","teamTitle":"Incontra il nostro team"}};
const __contactExtras = {"en":{"headline":"Let's Build Your Scalable Software Solution","sub":"Give us a few details about your project. We'll reach out for a friendly conversation, then put together a proposal that fits your timeline and budget.","features":[{"title":"How we start working together","desc":"Fill out the short form below. We'll sign an NDA immediately to protect your idea."},{"title":"Free consultation","desc":"One of our experts will contact you during 2�5 minutes to talk about your goals, requirements, and technical needs."},{"title":"Detailed proposal","desc":"See exactly what you'll get: timelines, costs, and the people behind the project. And you're under no obligation to move forward."}]},"es":{"headline":"Construyamos tu soluci�n de software escalable","sub":"Cu�ntanos algunos detalles de tu proyecto. Te contactaremos para una conversaci�n amable y prepararemos una propuesta acorde a tu plazo y presupuesto.","features":[{"title":"C�mo empezamos a trabajar juntos","desc":"Completa el formulario breve. Firmamos un NDA de inmediato para proteger tu idea."},{"title":"Consulta gratuita","desc":"Un experto te contactar� en 2�5 minutos para hablar de objetivos, requisitos y necesidades t�cnicas."},{"title":"Propuesta detallada","desc":"Ver�s plazos, costos y el equipo del proyecto. Sin obligaci�n de continuar."}]},"fr":{"headline":"Construisons votre solution logicielle �volutive","sub":"Donnez-nous quelques d�tails sur votre projet. Nous vous contacterons pour une discussion, puis pr�parerons une proposition adapt�e � votre planning et budget.","features":[{"title":"Comment nous d�marrons ensemble","desc":"Remplissez le formulaire. Nous signons imm�diatement un NDA pour prot�ger votre id�e."},{"title":"Consultation gratuite","desc":"Un expert vous contacte en 2�5 minutes pour parler objectifs, besoins et aspects techniques."},{"title":"Proposition d�taill�e","desc":"D�lais, co�ts et �quipe du projet � sans obligation de poursuivre."}]},"nl":{"headline":"Laten we uw schaalbare softwaresolutie bouwen","sub":"Geef ons wat details over uw project. We nemen contact op voor een gesprek en maken een voorstel dat past bij uw planning en budget.","features":[{"title":"Hoe we samen starten","desc":"Vul het korte formulier in. We tekenen meteen een NDA om uw idee te beschermen."},{"title":"Gratis consultatie","desc":"Een expert belt u binnen 2�5 minuten over doelen, eisen en technische behoeften."},{"title":"Gedetailleerd voorstel","desc":"Planning, kosten en team � zonder verplichting om door te gaan."}]},"pt":{"headline":"Vamos construir sua solu��o de software escal�vel","sub":"Conte-nos alguns detalhes do seu projeto. Entraremos em contato para uma conversa e montaremos uma proposta alinhada ao seu prazo e or�amento.","features":[{"title":"Como come�amos a trabalhar juntos","desc":"Preencha o formul�rio curto. Assinamos um NDA imediatamente para proteger sua ideia."},{"title":"Consulta gratuita","desc":"Um especialista entra em contato em 2�5 minutos sobre objetivos, requisitos e necessidades t�cnicas."},{"title":"Proposta detalhada","desc":"Prazos, custos e equipe � sem obriga��o de seguir adiante."}]},"it":{"headline":"Costruiamo la tua soluzione software scalabile","sub":"Raccontaci alcuni dettagli del progetto. Ti contatteremo per una chiacchierata e prepareremo una proposta adatta a tempi e budget.","features":[{"title":"Come iniziamo a collaborare","desc":"Compila il breve modulo. Firmiamo subito un NDA per proteggere la tua idea."},{"title":"Consulenza gratuita","desc":"Un esperto ti contatta in 2�5 minuti per obiettivi, requisiti e esigenze tecniche."},{"title":"Proposta dettagliata","desc":"Tempistiche, costi e team � senza alcun obbligo di proseguire."}]}};
Object.entries(__homeExtras).forEach(([locale, extras]) => {
  if (translations[locale]?.home) Object.assign(translations[locale].home, extras);
});
Object.entries(__contactExtras).forEach(([locale, extras]) => {
  if (translations[locale]?.contactPage) Object.assign(translations[locale].contactPage, extras);
});

Object.entries(testimonialsTranslations).forEach(([locale, data]) => {
  if (translations[locale]?.home) {
    translations[locale].home.testimonials = data.testimonials;
  }
});
// Fix Dutch case-study label
if (translations.nl?.home) translations.nl.home.caseStudy = 'Casestudy';

