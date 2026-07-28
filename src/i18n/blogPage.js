export const blogPageTranslations = {
  en: {
    blogPage: {
      heroTitle: 'DefiGate Blog:\nExpert Insights & Guides',
      heroSub: 'New product features, the latest in technology, solutions and updates.',
      emailPlaceholder: 'E-mail',
      subscribe: 'Subscribe',
      subscribed: '✅ Subscribed!',
      allArticles: 'All articles',
      searchPlaceholder: 'Search',
      readMore: 'Read more →',
      noPosts: 'No posts found.',
      postNotFound: 'Post not found.',
      backToBlog: '← Back to Blog',
      categories: {
        all: 'All articles',
        ai: 'AI',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Design',
        other: 'Other',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'The Future of DeFi: What to Expect in 2025',
          preview: 'Decentralized finance is evolving rapidly. We explore the key trends shaping DeFi protocols, liquidity management, and cross-chain interoperability in 2025.',
          content: `Decentralized finance is evolving rapidly. We explore the key trends shaping DeFi protocols, liquidity management, and cross-chain interoperability in 2025.

The rise of Layer 2 solutions has dramatically reduced gas costs, making DeFi accessible to a broader audience. Protocols like Arbitrum and Optimism have seen explosive growth, and we expect this trend to continue.

Cross-chain bridges are maturing, with formal verification becoming standard practice. The days of bridge exploits costing hundreds of millions are numbered as the industry adopts more rigorous security standards.

Real-world asset tokenization is perhaps the most exciting frontier — bringing traditional financial instruments on-chain opens up entirely new markets and liquidity pools.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Building Production-Grade Smart Contracts with Foundry',
          preview: 'Foundry has become the go-to framework for serious smart contract development. Learn how we use it for testing, fuzzing, and deploying audited contracts.',
          content: `Foundry has become the go-to framework for serious smart contract development. Learn how we use it for testing, fuzzing, and deploying audited contracts.

The key advantage of Foundry over Hardhat is its native Solidity testing — you write tests in Solidity, which means you catch edge cases that JavaScript tests miss. The fuzzer is particularly powerful for finding unexpected inputs that break invariants.

Our workflow: write the contract, write invariant tests, run the fuzzer for 24 hours, then submit for audit. This approach has helped us ship zero critical vulnerabilities across 15+ production contracts.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'AI-Powered Code Review: How We Ship Faster',
          preview: 'Integrating LLMs into our development workflow has cut code review time by 40%. Here is how we built our internal AI review pipeline.',
          content: `Integrating LLMs into our development workflow has cut code review time by 40%. Here is how we built our internal AI review pipeline.

We built a GitHub Action that runs on every PR, sending the diff to GPT-4 with a custom prompt tuned for our coding standards. The model flags potential bugs, security issues, and style violations before a human reviewer even looks at the code.

The key insight was that AI review works best as a first pass, not a replacement for human review. It catches the obvious issues so human reviewers can focus on architecture and business logic.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'NFT Marketplace Architecture: Lessons Learned',
          preview: 'After building three NFT marketplaces, we share the architectural decisions, pitfalls, and optimizations that make the difference between a good and great platform.',
          content: `After building three NFT marketplaces, we share the architectural decisions, pitfalls, and optimizations that make the difference between a good and great platform.

The biggest mistake teams make is storing metadata on-chain. IPFS with Arweave pinning is the right approach — immutable, decentralized, and cost-effective. We learned this the hard way on our first marketplace.

For the smart contract layer, use a proxy pattern from day one. You will need to upgrade your contracts, and retrofitting upgradeability is painful. OpenZeppelin's UUPS proxy is our current recommendation.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes at Scale: Our DevOps Playbook',
          preview: 'Managing 50+ microservices across multiple cloud providers requires a solid Kubernetes strategy. We share our complete playbook for production deployments.',
          content: `Managing 50+ microservices across multiple cloud providers requires a solid Kubernetes strategy. We share our complete playbook for production deployments.

We use ArgoCD for GitOps — every deployment is a git commit, which gives us a complete audit trail and easy rollbacks. Combined with Helm charts for templating, we can deploy a new service in under 10 minutes.

Observability is non-negotiable at scale. Our stack: Prometheus for metrics, Loki for logs, Tempo for traces, all visualized in Grafana. We set up SLOs for every service and alert on error budget burn rate.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'Web3 Wallet UX: Designing for Non-Crypto Users',
          preview: 'The biggest barrier to Web3 adoption is UX. We break down how to design wallet experiences that feel as simple as a banking app.',
          content: `The biggest barrier to Web3 adoption is UX. We break down how to design wallet experiences that feel as simple as a banking app.

The seed phrase problem is real. Most users cannot safely store 12 words. Social recovery wallets — where trusted contacts can help recover access — are the solution. We have implemented this in three production wallets now.

Transaction confirmation screens need to speak human, not hex. Instead of showing a raw transaction hash, show "You are sending 0.5 ETH to Alice" with a clear fee breakdown. This single change reduced support tickets by 60% in our last project.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
  es: {
    blogPage: {
      heroTitle: 'Blog DefiGate:\nPerspectivas y guías de expertos',
      heroSub: 'Nuevas funciones de producto, lo último en tecnología, soluciones y actualizaciones.',
      emailPlaceholder: 'Correo electrónico',
      subscribe: 'Suscribirse',
      subscribed: '✅ ¡Suscripción confirmada!',
      allArticles: 'Todos los artículos',
      searchPlaceholder: 'Buscar',
      readMore: 'Leer más →',
      noPosts: 'No se encontraron publicaciones.',
      postNotFound: 'Publicación no encontrada.',
      backToBlog: '← Volver al blog',
      categories: {
        all: 'Todos los artículos',
        ai: 'IA',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Diseño',
        other: 'Otros',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'El futuro de DeFi: qué esperar en 2025',
          preview: 'Las finanzas descentralizadas evolucionan a gran velocidad. Exploramos las tendencias clave que moldean los protocolos DeFi, la gestión de liquidez y la interoperabilidad entre cadenas en 2025.',
          content: `Las finanzas descentralizadas evolucionan a gran velocidad. Exploramos las tendencias clave que moldean los protocolos DeFi, la gestión de liquidez y la interoperabilidad entre cadenas en 2025.

El auge de las soluciones Layer 2 ha reducido drásticamente los costes de gas, haciendo que DeFi sea accesible para un público más amplio. Protocolos como Arbitrum y Optimism han experimentado un crecimiento explosivo, y esperamos que esta tendencia continúe.

Los puentes entre cadenas están madurando, y la verificación formal se está convirtiendo en práctica estándar. Los días de exploits en puentes que cuestan cientos de millones están contados a medida que la industria adopta estándares de seguridad más rigurosos.

La tokenización de activos del mundo real es quizás la frontera más emocionante: llevar instrumentos financieros tradicionales on-chain abre mercados y pools de liquidez completamente nuevos.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Construir smart contracts de nivel producción con Foundry',
          preview: 'Foundry se ha convertido en el framework de referencia para el desarrollo serio de smart contracts. Descubre cómo lo usamos para pruebas, fuzzing y despliegue de contratos auditados.',
          content: `Foundry se ha convertido en el framework de referencia para el desarrollo serio de smart contracts. Descubre cómo lo usamos para pruebas, fuzzing y despliegue de contratos auditados.

La ventaja clave de Foundry sobre Hardhat es su testing nativo en Solidity: escribes las pruebas en Solidity, lo que te permite detectar casos límite que las pruebas en JavaScript pasan por alto. El fuzzer es especialmente potente para encontrar entradas inesperadas que rompen invariantes.

Nuestro flujo de trabajo: escribir el contrato, escribir pruebas de invariantes, ejecutar el fuzzer durante 24 horas y luego enviarlo a auditoría. Este enfoque nos ha permitido lanzar cero vulnerabilidades críticas en más de 15 contratos en producción.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'Revisión de código con IA: cómo entregamos más rápido',
          preview: 'Integrar LLMs en nuestro flujo de desarrollo ha reducido el tiempo de revisión de código en un 40 %. Así construimos nuestro pipeline interno de revisión con IA.',
          content: `Integrar LLMs en nuestro flujo de desarrollo ha reducido el tiempo de revisión de código en un 40 %. Así construimos nuestro pipeline interno de revisión con IA.

Construimos una GitHub Action que se ejecuta en cada PR, enviando el diff a GPT-4 con un prompt personalizado ajustado a nuestros estándares de código. El modelo señala posibles bugs, problemas de seguridad y violaciones de estilo antes de que un revisor humano vea el código.

La clave fue entender que la revisión con IA funciona mejor como primera pasada, no como reemplazo de la revisión humana. Detecta los problemas obvios para que los revisores humanos puedan centrarse en la arquitectura y la lógica de negocio.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'Arquitectura de marketplace NFT: lecciones aprendidas',
          preview: 'Tras construir tres marketplaces NFT, compartimos las decisiones arquitectónicas, trampas y optimizaciones que marcan la diferencia entre una plataforma buena y una excelente.',
          content: `Tras construir tres marketplaces NFT, compartimos las decisiones arquitectónicas, trampas y optimizaciones que marcan la diferencia entre una plataforma buena y una excelente.

El error más común es almacenar metadatos on-chain. IPFS con pinning en Arweave es el enfoque correcto: inmutable, descentralizado y rentable. Lo aprendimos a la fuerza en nuestro primer marketplace.

Para la capa de smart contracts, usa un patrón proxy desde el primer día. Necesitarás actualizar tus contratos, y añadir upgradeability después es doloroso. El proxy UUPS de OpenZeppelin es nuestra recomendación actual.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes a escala: nuestro manual de DevOps',
          preview: 'Gestionar más de 50 microservicios en varios proveedores cloud requiere una estrategia sólida de Kubernetes. Compartimos nuestro manual completo para despliegues en producción.',
          content: `Gestionar más de 50 microservicios en varios proveedores cloud requiere una estrategia sólida de Kubernetes. Compartimos nuestro manual completo para despliegues en producción.

Usamos ArgoCD para GitOps: cada despliegue es un commit de git, lo que nos da un historial de auditoría completo y rollbacks sencillos. Combinado con Helm charts para plantillas, podemos desplegar un nuevo servicio en menos de 10 minutos.

La observabilidad no es negociable a escala. Nuestro stack: Prometheus para métricas, Loki para logs, Tempo para trazas, todo visualizado en Grafana. Configuramos SLOs para cada servicio y alertamos sobre la tasa de consumo del presupuesto de errores.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'UX de wallets Web3: diseñar para usuarios no cripto',
          preview: 'La mayor barrera para la adopción de Web3 es la UX. Analizamos cómo diseñar experiencias de wallet tan simples como una app bancaria.',
          content: `La mayor barrera para la adopción de Web3 es la UX. Analizamos cómo diseñar experiencias de wallet tan simples como una app bancaria.

El problema de la frase semilla es real. La mayoría de usuarios no pueden guardar 12 palabras de forma segura. Las wallets con recuperación social — donde contactos de confianza ayudan a recuperar el acceso — son la solución. Ya lo hemos implementado en tres wallets en producción.

Las pantallas de confirmación de transacciones deben hablar en lenguaje humano, no en hexadecimal. En lugar de mostrar un hash de transacción en bruto, muestra «Estás enviando 0,5 ETH a Alice» con un desglose claro de comisiones. Este único cambio redujo los tickets de soporte un 60 % en nuestro último proyecto.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
  fr: {
    blogPage: {
      heroTitle: 'Blog DefiGate :\nAnalyses et guides d\'experts',
      heroSub: 'Nouvelles fonctionnalités, dernières avancées technologiques, solutions et mises à jour.',
      emailPlaceholder: 'E-mail',
      subscribe: 'S\'abonner',
      subscribed: '✅ Abonnement confirmé !',
      allArticles: 'Tous les articles',
      searchPlaceholder: 'Rechercher',
      readMore: 'Lire la suite →',
      noPosts: 'Aucun article trouvé.',
      postNotFound: 'Article introuvable.',
      backToBlog: '← Retour au blog',
      categories: {
        all: 'Tous les articles',
        ai: 'IA',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Design',
        other: 'Autre',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'L\'avenir de la DeFi : à quoi s\'attendre en 2025',
          preview: 'La finance décentralisée évolue rapidement. Nous explorons les tendances clés qui façonnent les protocoles DeFi, la gestion de liquidité et l\'interopérabilité cross-chain en 2025.',
          content: `La finance décentralisée évolue rapidement. Nous explorons les tendances clés qui façonnent les protocoles DeFi, la gestion de liquidité et l'interopérabilité cross-chain en 2025.

L'essor des solutions Layer 2 a considérablement réduit les coûts de gas, rendant la DeFi accessible à un public plus large. Des protocoles comme Arbitrum et Optimism ont connu une croissance explosive, et nous prévoyons que cette tendance se poursuive.

Les ponts cross-chain mûrissent, la vérification formelle devenant une pratique standard. Les jours des exploits de ponts coûtant des centaines de millions sont comptés, l'industrie adoptant des normes de sécurité plus rigoureuses.

La tokenisation d'actifs du monde réel est peut-être la frontière la plus passionnante — amener les instruments financiers traditionnels on-chain ouvre des marchés et des pools de liquidité entièrement nouveaux.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Construire des smart contracts de niveau production avec Foundry',
          preview: 'Foundry est devenu le framework incontournable pour le développement sérieux de smart contracts. Découvrez comment nous l\'utilisons pour les tests, le fuzzing et le déploiement de contrats audités.',
          content: `Foundry est devenu le framework incontournable pour le développement sérieux de smart contracts. Découvrez comment nous l'utilisons pour les tests, le fuzzing et le déploiement de contrats audités.

L'avantage clé de Foundry par rapport à Hardhat est son testing natif en Solidity — vous écrivez les tests en Solidity, ce qui permet de détecter des cas limites que les tests JavaScript manquent. Le fuzzer est particulièrement puissant pour trouver des entrées inattendues qui brisent les invariants.

Notre workflow : écrire le contrat, écrire les tests d'invariants, lancer le fuzzer pendant 24 heures, puis soumettre à l'audit. Cette approche nous a permis de livrer zéro vulnérabilité critique sur plus de 15 contrats en production.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'Revue de code assistée par IA : comment nous livrons plus vite',
          preview: 'L\'intégration des LLM dans notre workflow de développement a réduit le temps de revue de code de 40 %. Voici comment nous avons construit notre pipeline interne de revue par IA.',
          content: `L'intégration des LLM dans notre workflow de développement a réduit le temps de revue de code de 40 %. Voici comment nous avons construit notre pipeline interne de revue par IA.

Nous avons créé une GitHub Action qui s'exécute à chaque PR, envoyant le diff à GPT-4 avec un prompt personnalisé adapté à nos standards de code. Le modèle signale les bugs potentiels, les problèmes de sécurité et les violations de style avant qu'un relecteur humain ne regarde le code.

L'insight clé était que la revue par IA fonctionne mieux comme première passe, et non comme remplacement de la revue humaine. Elle détecte les problèmes évidents pour que les relecteurs humains se concentrent sur l'architecture et la logique métier.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'Architecture de marketplace NFT : leçons apprises',
          preview: 'Après avoir construit trois marketplaces NFT, nous partageons les décisions architecturales, pièges et optimisations qui font la différence entre une bonne et une excellente plateforme.',
          content: `Après avoir construit trois marketplaces NFT, nous partageons les décisions architecturales, pièges et optimisations qui font la différence entre une bonne et une excellente plateforme.

La plus grande erreur des équipes est de stocker les métadonnées on-chain. IPFS avec pinning Arweave est la bonne approche — immuable, décentralisé et rentable. Nous l'avons appris à nos dépens sur notre première marketplace.

Pour la couche smart contract, utilisez un pattern proxy dès le premier jour. Vous devrez mettre à jour vos contrats, et ajouter l'upgradeability après coup est douloureux. Le proxy UUPS d'OpenZeppelin est notre recommandation actuelle.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes à l\'échelle : notre playbook DevOps',
          preview: 'Gérer plus de 50 microservices sur plusieurs fournisseurs cloud exige une stratégie Kubernetes solide. Nous partageons notre playbook complet pour les déploiements en production.',
          content: `Gérer plus de 50 microservices sur plusieurs fournisseurs cloud exige une stratégie Kubernetes solide. Nous partageons notre playbook complet pour les déploiements en production.

Nous utilisons ArgoCD pour le GitOps — chaque déploiement est un commit git, ce qui nous donne une piste d'audit complète et des rollbacks faciles. Combiné avec des Helm charts pour le templating, nous pouvons déployer un nouveau service en moins de 10 minutes.

L'observabilité est non négociable à l'échelle. Notre stack : Prometheus pour les métriques, Loki pour les logs, Tempo pour les traces, le tout visualisé dans Grafana. Nous définissons des SLO pour chaque service et alertons sur le taux de consommation du budget d'erreur.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'UX de wallet Web3 : concevoir pour les non-crypto',
          preview: 'La plus grande barrière à l\'adoption du Web3 est l\'UX. Nous expliquons comment concevoir des expériences de wallet aussi simples qu\'une application bancaire.',
          content: `La plus grande barrière à l'adoption du Web3 est l'UX. Nous expliquons comment concevoir des expériences de wallet aussi simples qu'une application bancaire.

Le problème de la phrase secrète est réel. La plupart des utilisateurs ne peuvent pas stocker 12 mots en toute sécurité. Les wallets à récupération sociale — où des contacts de confiance peuvent aider à récupérer l'accès — sont la solution. Nous l'avons implémenté dans trois wallets en production.

Les écrans de confirmation de transaction doivent parler humain, pas hexadécimal. Au lieu d'afficher un hash de transaction brut, affichez « Vous envoyez 0,5 ETH à Alice » avec un détail clair des frais. Ce seul changement a réduit les tickets de support de 60 % sur notre dernier projet.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
  nl: {
    blogPage: {
      heroTitle: 'DefiGate Blog:\nExpertinzichten & gidsen',
      heroSub: 'Nieuwe productfuncties, het laatste nieuws in technologie, oplossingen en updates.',
      emailPlaceholder: 'E-mail',
      subscribe: 'Abonneren',
      subscribed: '✅ Aangemeld!',
      allArticles: 'Alle artikelen',
      searchPlaceholder: 'Zoeken',
      readMore: 'Lees meer →',
      noPosts: 'Geen berichten gevonden.',
      postNotFound: 'Bericht niet gevonden.',
      backToBlog: '← Terug naar blog',
      categories: {
        all: 'Alle artikelen',
        ai: 'AI',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Design',
        other: 'Overig',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'De toekomst van DeFi: wat te verwachten in 2025',
          preview: 'Gedecentraliseerde financiën evolueren snel. We verkennen de belangrijkste trends die DeFi-protocollen, liquiditeitsbeheer en cross-chain interoperabiliteit in 2025 vormgeven.',
          content: `Gedecentraliseerde financiën evolueren snel. We verkennen de belangrijkste trends die DeFi-protocollen, liquiditeitsbeheer en cross-chain interoperabiliteit in 2025 vormgeven.

De opkomst van Layer 2-oplossingen heeft gaskosten drastisch verlaagd, waardoor DeFi toegankelijk wordt voor een breder publiek. Protocollen zoals Arbitrum en Optimism hebben explosieve groei doorgemaakt, en we verwachten dat deze trend zich voortzet.

Cross-chain bruggen rijpen, met formele verificatie als standaardpraktijk. De dagen van brugexploits die honderden miljoenen kosten zijn geteld naarmate de industrie strengere beveiligingsstandaarden omarmt.

Tokenisatie van real-world assets is misschien wel de meest spannende grens — traditionele financiële instrumenten on-chain brengen opent volledig nieuwe markten en liquiditeitspools.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Productieklare smart contracts bouwen met Foundry',
          preview: 'Foundry is het toonaangevende framework geworden voor serieuze smart contract-ontwikkeling. Leer hoe we het gebruiken voor testen, fuzzing en het deployen van geauditete contracten.',
          content: `Foundry is het toonaangevende framework geworden voor serieuze smart contract-ontwikkeling. Leer hoe we het gebruiken voor testen, fuzzing en het deployen van geauditete contracten.

Het belangrijkste voordeel van Foundry ten opzichte van Hardhat is native Solidity-testing — je schrijft tests in Solidity, waardoor je edge cases oppikt die JavaScript-tests missen. De fuzzer is bijzonder krachtig voor het vinden van onverwachte inputs die invarianten breken.

Onze workflow: schrijf het contract, schrijf invarianttests, draai de fuzzer 24 uur, en dien daarna in voor audit. Deze aanpak heeft ons geholpen nul kritieke kwetsbaarheden te leveren over meer dan 15 productiecontracten.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'AI-gestuurde code review: hoe we sneller shippen',
          preview: 'Het integreren van LLM\'s in onze ontwikkelworkflow heeft de code review-tijd met 40% verkort. Zo bouwden we onze interne AI review-pipeline.',
          content: `Het integreren van LLM's in onze ontwikkelworkflow heeft de code review-tijd met 40% verkort. Zo bouwden we onze interne AI review-pipeline.

We bouwden een GitHub Action die bij elke PR draait en de diff naar GPT-4 stuurt met een aangepaste prompt afgestemd op onze codestandaarden. Het model markeert potentiële bugs, beveiligingsproblemen en stijlschendingen voordat een menselijke reviewer naar de code kijkt.

Het belangrijkste inzicht was dat AI-review het best werkt als eerste pass, niet als vervanging van menselijke review. Het vangt de voor de hand liggende problemen op, zodat menselijke reviewers zich kunnen richten op architectuur en businesslogica.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'NFT marketplace-architectuur: geleerde lessen',
          preview: 'Na het bouwen van drie NFT marketplaces delen we de architecturale beslissingen, valkuilen en optimalisaties die het verschil maken tussen een goed en een geweldig platform.',
          content: `Na het bouwen van drie NFT marketplaces delen we de architecturale beslissingen, valkuilen en optimalisaties die het verschil maken tussen een goed en een geweldig platform.

De grootste fout die teams maken is metadata on-chain opslaan. IPFS met Arweave pinning is de juiste aanpak — onveranderlijk, gedecentraliseerd en kosteneffectief. We leerden dit op de harde manier bij onze eerste marketplace.

Voor de smart contract-laag: gebruik vanaf dag één een proxy-patroon. Je zult je contracten moeten upgraden, en upgradeability achteraf toevoegen is pijnlijk. OpenZeppelin's UUPS proxy is onze huidige aanbeveling.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes op schaal: ons DevOps-playbook',
          preview: 'Het beheren van 50+ microservices over meerdere cloudproviders vereist een solide Kubernetes-strategie. We delen ons complete playbook voor productiedeployments.',
          content: `Het beheren van 50+ microservices over meerdere cloudproviders vereist een solide Kubernetes-strategie. We delen ons complete playbook voor productiedeployments.

We gebruiken ArgoCD voor GitOps — elke deployment is een git commit, wat ons een volledig auditspoor en eenvoudige rollbacks geeft. Gecombineerd met Helm charts voor templating kunnen we een nieuwe service in minder dan 10 minuten deployen.

Observability is niet onderhandelbaar op schaal. Onze stack: Prometheus voor metrics, Loki voor logs, Tempo voor traces, allemaal gevisualiseerd in Grafana. We stellen SLO's in voor elke service en alarmeren op error budget burn rate.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'Web3 wallet UX: ontwerpen voor niet-crypto gebruikers',
          preview: 'De grootste barrière voor Web3-adoptie is UX. We leggen uit hoe je wallet-ervaringen ontwerpt die net zo eenvoudig aanvoelen als een bankapp.',
          content: `De grootste barrière voor Web3-adoptie is UX. We leggen uit hoe je wallet-ervaringen ontwerpt die net zo eenvoudig aanvoelen als een bankapp.

Het seed phrase-probleem is echt. De meeste gebruikers kunnen 12 woorden niet veilig opslaan. Social recovery wallets — waarbij vertrouwde contacten helpen toegang te herstellen — zijn de oplossing. We hebben dit nu geïmplementeerd in drie productiewallets.

Transactiebevestigingsschermen moeten menselijk spreken, niet hexadecimaal. In plaats van een ruwe transactiehash te tonen, toon «Je stuurt 0,5 ETH naar Alice» met een duidelijke kostenopsplitsing. Deze ene wijziging verminderde supporttickets met 60% in ons laatste project.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
  pt: {
    blogPage: {
      heroTitle: 'Blog DefiGate:\nInsights e guias de especialistas',
      heroSub: 'Novos recursos de produto, o que há de mais recente em tecnologia, soluções e atualizações.',
      emailPlaceholder: 'E-mail',
      subscribe: 'Inscrever-se',
      subscribed: '✅ Inscrição confirmada!',
      allArticles: 'Todos os artigos',
      searchPlaceholder: 'Pesquisar',
      readMore: 'Ler mais →',
      noPosts: 'Nenhuma publicação encontrada.',
      postNotFound: 'Publicação não encontrada.',
      backToBlog: '← Voltar ao blog',
      categories: {
        all: 'Todos os artigos',
        ai: 'IA',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Design',
        other: 'Outros',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'O futuro da DeFi: o que esperar em 2025',
          preview: 'As finanças descentralizadas estão evoluindo rapidamente. Exploramos as principais tendências que moldam protocolos DeFi, gestão de liquidez e interoperabilidade cross-chain em 2025.',
          content: `As finanças descentralizadas estão evoluindo rapidamente. Exploramos as principais tendências que moldam protocolos DeFi, gestão de liquidez e interoperabilidade cross-chain em 2025.

A ascensão das soluções Layer 2 reduziu drasticamente os custos de gas, tornando a DeFi acessível a um público mais amplo. Protocolos como Arbitrum e Optimism tiveram crescimento explosivo, e esperamos que essa tendência continue.

As pontes cross-chain estão amadurecendo, com verificação formal se tornando prática padrão. Os dias de exploits em pontes que custam centenas de milhões estão contados à medida que a indústria adota padrões de segurança mais rigorosos.

A tokenização de ativos do mundo real é talvez a fronteira mais empolgante — trazer instrumentos financeiros tradicionais on-chain abre mercados e pools de liquidez totalmente novos.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Construindo smart contracts de nível produção com Foundry',
          preview: 'O Foundry tornou-se o framework de referência para desenvolvimento sério de smart contracts. Saiba como o usamos para testes, fuzzing e implantação de contratos auditados.',
          content: `O Foundry tornou-se o framework de referência para desenvolvimento sério de smart contracts. Saiba como o usamos para testes, fuzzing e implantação de contratos auditados.

A principal vantagem do Foundry sobre o Hardhat é o teste nativo em Solidity — você escreve testes em Solidity, o que significa capturar casos extremos que testes em JavaScript não detectam. O fuzzer é especialmente poderoso para encontrar entradas inesperadas que quebram invariantes.

Nosso fluxo de trabalho: escrever o contrato, escrever testes de invariantes, executar o fuzzer por 24 horas e então submeter para auditoria. Essa abordagem nos ajudou a lançar zero vulnerabilidades críticas em mais de 15 contratos em produção.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'Revisão de código com IA: como entregamos mais rápido',
          preview: 'Integrar LLMs ao nosso fluxo de desenvolvimento reduziu o tempo de revisão de código em 40%. Veja como construímos nosso pipeline interno de revisão com IA.',
          content: `Integrar LLMs ao nosso fluxo de desenvolvimento reduziu o tempo de revisão de código em 40%. Veja como construímos nosso pipeline interno de revisão com IA.

Construímos uma GitHub Action que roda em cada PR, enviando o diff para o GPT-4 com um prompt personalizado ajustado aos nossos padrões de código. O modelo sinaliza possíveis bugs, problemas de segurança e violações de estilo antes que um revisor humano veja o código.

O insight principal foi que a revisão com IA funciona melhor como primeira passagem, não como substituto da revisão humana. Ela captura os problemas óbvios para que os revisores humanos possam focar em arquitetura e lógica de negócio.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'Arquitetura de marketplace NFT: lições aprendidas',
          preview: 'Depois de construir três marketplaces NFT, compartilhamos as decisões arquiteturais, armadilhas e otimizações que fazem a diferença entre uma plataforma boa e uma excelente.',
          content: `Depois de construir três marketplaces NFT, compartilhamos as decisões arquiteturais, armadilhas e otimizações que fazem a diferença entre uma plataforma boa e uma excelente.

O maior erro das equipes é armazenar metadados on-chain. IPFS com pinning no Arweave é a abordagem correta — imutável, descentralizado e econômico. Aprendemos isso da maneira difícil no nosso primeiro marketplace.

Para a camada de smart contracts, use um padrão proxy desde o primeiro dia. Você precisará atualizar seus contratos, e adicionar upgradeability depois é doloroso. O proxy UUPS da OpenZeppelin é nossa recomendação atual.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes em escala: nosso playbook de DevOps',
          preview: 'Gerenciar mais de 50 microsserviços em vários provedores de nuvem exige uma estratégia sólida de Kubernetes. Compartilhamos nosso playbook completo para implantações em produção.',
          content: `Gerenciar mais de 50 microsserviços em vários provedores de nuvem exige uma estratégia sólida de Kubernetes. Compartilhamos nosso playbook completo para implantações em produção.

Usamos ArgoCD para GitOps — cada implantação é um commit git, o que nos dá um histórico de auditoria completo e rollbacks fáceis. Combinado com Helm charts para templates, podemos implantar um novo serviço em menos de 10 minutos.

Observabilidade é inegociável em escala. Nossa stack: Prometheus para métricas, Loki para logs, Tempo para traces, tudo visualizado no Grafana. Configuramos SLOs para cada serviço e alertamos sobre a taxa de consumo do orçamento de erros.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'UX de wallet Web3: projetando para usuários não cripto',
          preview: 'A maior barreira para a adoção do Web3 é a UX. Analisamos como projetar experiências de wallet tão simples quanto um app bancário.',
          content: `A maior barreira para a adoção do Web3 é a UX. Analisamos como projetar experiências de wallet tão simples quanto um app bancário.

O problema da frase semente é real. A maioria dos usuários não consegue guardar 12 palavras com segurança. Wallets com recuperação social — onde contatos de confiança ajudam a recuperar o acesso — são a solução. Já implementamos isso em três wallets em produção.

Telas de confirmação de transação precisam falar humano, não hexadecimal. Em vez de mostrar um hash de transação bruto, mostre «Você está enviando 0,5 ETH para Alice» com um detalhamento claro das taxas. Essa única mudança reduziu tickets de suporte em 60% no nosso último projeto.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
  it: {
    blogPage: {
      heroTitle: 'Blog DefiGate:\nApprofondimenti e guide di esperti',
      heroSub: 'Nuove funzionalità di prodotto, le ultime novità tecnologiche, soluzioni e aggiornamenti.',
      emailPlaceholder: 'E-mail',
      subscribe: 'Iscriviti',
      subscribed: '✅ Iscrizione confermata!',
      allArticles: 'Tutti gli articoli',
      searchPlaceholder: 'Cerca',
      readMore: 'Leggi di più →',
      noPosts: 'Nessun articolo trovato.',
      postNotFound: 'Articolo non trovato.',
      backToBlog: '← Torna al blog',
      categories: {
        all: 'Tutti gli articoli',
        ai: 'IA',
        blockchain: 'Blockchain',
        web3: 'Web3',
        devops: 'DevOps',
        design: 'Design',
        other: 'Altro',
      },
      posts: [
        {
          id: '1',
          categoryKey: 'blockchain',
          title: 'Il futuro della DeFi: cosa aspettarsi nel 2025',
          preview: 'La finanza decentralizzata sta evolvendo rapidamente. Esploriamo le tendenze chiave che modellano i protocolli DeFi, la gestione della liquidità e l\'interoperabilità cross-chain nel 2025.',
          content: `La finanza decentralizzata sta evolvendo rapidamente. Esploriamo le tendenze chiave che modellano i protocolli DeFi, la gestione della liquidità e l'interoperabilità cross-chain nel 2025.

L'ascesa delle soluzioni Layer 2 ha ridotto drasticamente i costi del gas, rendendo la DeFi accessibile a un pubblico più ampio. Protocolli come Arbitrum e Optimism hanno registrato una crescita esplosiva, e prevediamo che questa tendenza continui.

I bridge cross-chain stanno maturando, con la verifica formale che diventa pratica standard. I giorni degli exploit sui bridge che costano centinaia di milioni sono contati, man mano che l'industria adotta standard di sicurezza più rigorosi.

La tokenizzazione di asset del mondo reale è forse la frontiera più entusiasmante — portare strumenti finanziari tradizionali on-chain apre mercati e pool di liquidità completamente nuovi.`,
          authorName: 'Gabriel Ohno',
          createdAt: '2025-01-15',
        },
        {
          id: '2',
          categoryKey: 'web3',
          title: 'Costruire smart contract di livello produzione con Foundry',
          preview: 'Foundry è diventato il framework di riferimento per lo sviluppo serio di smart contract. Scopri come lo usiamo per test, fuzzing e deploy di contratti auditati.',
          content: `Foundry è diventato il framework di riferimento per lo sviluppo serio di smart contract. Scopri come lo usiamo per test, fuzzing e deploy di contratti auditati.

Il vantaggio chiave di Foundry rispetto a Hardhat è il testing nativo in Solidity — scrivi i test in Solidity, il che significa intercettare casi limite che i test JavaScript non colgono. Il fuzzer è particolarmente potente per trovare input inattesi che rompono gli invarianti.

Il nostro workflow: scrivere il contratto, scrivere test di invarianti, eseguire il fuzzer per 24 ore, poi sottoporre all'audit. Questo approccio ci ha permesso di rilasciare zero vulnerabilità critiche su oltre 15 contratti in produzione.`,
          authorName: 'James Rivera',
          createdAt: '2025-02-03',
        },
        {
          id: '3',
          categoryKey: 'ai',
          title: 'Code review con IA: come rilasciamo più velocemente',
          preview: 'Integrare gli LLM nel nostro workflow di sviluppo ha ridotto il tempo di code review del 40%. Ecco come abbiamo costruito la nostra pipeline interna di revisione con IA.',
          content: `Integrare gli LLM nel nostro workflow di sviluppo ha ridotto il tempo di code review del 40%. Ecco come abbiamo costruito la nostra pipeline interna di revisione con IA.

Abbiamo creato una GitHub Action che gira su ogni PR, inviando il diff a GPT-4 con un prompt personalizzato calibrato sui nostri standard di codice. Il modello segnala potenziali bug, problemi di sicurezza e violazioni di stile prima che un revisore umano guardi il codice.

L'intuizione chiave è stata che la revisione con IA funziona meglio come prima passata, non come sostituto della revisione umana. Intercetta i problemi ovvi così i revisori umani possono concentrarsi su architettura e logica di business.`,
          authorName: 'Liam Chen',
          createdAt: '2025-02-20',
        },
        {
          id: '4',
          categoryKey: 'blockchain',
          title: 'Architettura di marketplace NFT: lezioni apprese',
          preview: 'Dopo aver costruito tre marketplace NFT, condividiamo le decisioni architetturali, le trappole e le ottimizzazioni che fanno la differenza tra una piattaforma buona e una eccellente.',
          content: `Dopo aver costruito tre marketplace NFT, condividiamo le decisioni architetturali, le trappole e le ottimizzazioni che fanno la differenza tra una piattaforma buona e una eccellente.

L'errore più grande dei team è archiviare i metadati on-chain. IPFS con pinning su Arweave è l'approccio giusto — immutabile, decentralizzato ed economico. L'abbiamo imparato a nostre spese sul nostro primo marketplace.

Per il layer smart contract, usa un pattern proxy fin dal primo giorno. Dovrai aggiornare i contratti, e aggiungere l'upgradeability in seguito è doloroso. Il proxy UUPS di OpenZeppelin è la nostra raccomandazione attuale.`,
          authorName: 'Ryan Patel',
          createdAt: '2025-03-10',
        },
        {
          id: '5',
          categoryKey: 'devops',
          title: 'Kubernetes su larga scala: il nostro playbook DevOps',
          preview: 'Gestire oltre 50 microservizi su più provider cloud richiede una solida strategia Kubernetes. Condividiamo il nostro playbook completo per i deploy in produzione.',
          content: `Gestire oltre 50 microservizi su più provider cloud richiede una solida strategia Kubernetes. Condividiamo il nostro playbook completo per i deploy in produzione.

Usiamo ArgoCD per GitOps — ogni deploy è un commit git, il che ci dà una traccia di audit completa e rollback facili. Combinato con Helm chart per il templating, possiamo deployare un nuovo servizio in meno di 10 minuti.

L'observability è non negoziabile su larga scala. Il nostro stack: Prometheus per le metriche, Loki per i log, Tempo per le trace, tutto visualizzato in Grafana. Impostiamo SLO per ogni servizio e alertiamo sul tasso di consumo del budget di errore.`,
          authorName: 'David Kim',
          createdAt: '2025-03-25',
        },
        {
          id: '6',
          categoryKey: 'design',
          title: 'UX del wallet Web3: progettare per utenti non crypto',
          preview: 'La barriera più grande all\'adozione del Web3 è l\'UX. Analizziamo come progettare esperienze wallet semplici quanto un\'app bancaria.',
          content: `La barriera più grande all'adozione del Web3 è l'UX. Analizziamo come progettare esperienze wallet semplici quanto un'app bancaria.

Il problema della seed phrase è reale. La maggior parte degli utenti non può conservare 12 parole in sicurezza. I wallet con recovery sociale — dove contatti fidati aiutano a recuperare l'accesso — sono la soluzione. L'abbiamo implementato in tre wallet in produzione.

Le schermate di conferma transazione devono parlare umano, non esadecimale. Invece di mostrare un hash di transazione grezzo, mostra «Stai inviando 0,5 ETH ad Alice» con un dettaglio chiaro delle commissioni. Questo singolo cambiamento ha ridotto i ticket di supporto del 60% nel nostro ultimo progetto.`,
          authorName: 'Rebeka Galic',
          createdAt: '2025-04-05',
        },
      ],
    },
  },
};
