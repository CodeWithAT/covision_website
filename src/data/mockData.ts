import type { ServiceItem, EcommerceOffering, ClientPartner, CaseStudyItem, TestimonialItem, FaqItem } from '../types'


export const COVISION_PHILOSOPHY = {
  name: 'CoVision Technologies',
  tagline: 'Living Technology: Where Engineering, AI & Design Converge',
  subheadline: 'A premier digital engineering and enterprise cloud partner. We build scalable software ecosystems that adapt to market shifts, automate operations, and drive lasting business growth.',
  paradigms: [
    {
      number: '01',
      title: 'Intelligent Software That Learns & Adapts',
      description: 'We integrate cognitive intelligence to build platforms that learn from user behavior in real time, automate complex workflows, and scale dynamically as your organization expands.',
    },
    {
      number: '02',
      title: 'Connected Ecosystems Built for Growth',
      description: 'No system thrives in isolation. We architect unified digital ecosystems where your core ERP, mobile apps, web portals, and AI agents communicate seamlessly with zero bottlenecks.',
    },
  ],
  trifecta: [
    {
      title: 'Engineering',
      role: 'Scales Core Operations',
      desc: 'High-availability web applications, mobile platforms, enterprise ERPs, and distributed cloud microservices.',
      icon: 'Cpu',
    },
    {
      title: 'Artificial Intelligence',
      role: 'Automates Decision-Making',
      desc: 'Predictive forecasting, computer vision, autonomous customer support agents, and custom machine learning pipelines.',
      icon: 'Brain',
    },
    {
      title: 'Immersive Design',
      role: 'Captivates & Converts Customers',
      desc: 'Interactive 3D configurators, intuitive UX workflows, and responsive micro-animations that boost user retention.',
      icon: 'Sparkles',
    },
  ],
  synergySDLC: [
    { layer: 'Strategic Planning', aiContribution: 'Predictive capacity modeling, scope estimation, and smart sprint roadmap prioritization.' },
    { layer: 'Agile Engineering', aiContribution: 'Automated code quality auditing, continuous peer review, and preventative bug mitigation.' },
    { layer: 'Comprehensive QA', aiContribution: 'Automated end-to-end regression testing and cross-device visual validation.' },
    { layer: 'Zero-Downtime Deployment', aiContribution: 'Intelligent CI/CD pipelines, automated canary rollouts, and instant rollbacks.' },
    { layer: 'Proactive Telemetry', aiContribution: '24/7 real-time anomaly detection, user engagement tracking, and automated self-healing.' },
  ],
}

export const IT_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-engineering',
    number: '01',
    title: 'Software Engineering',
    tagline: 'Elevate your business with custom software solutions',
    category: 'Software Engineering',
    description: 'Every business operates within its own operating system, shaped by its unique audience, processes, and objectives. We engineer tailored software solutions that align seamlessly with your business needs and goals.',
    detailedScope: [
      'Tailored Enterprise Solutions: Custom platforms engineered precisely around your workflows, proprietary processes, and revenue goals',
      'Apto PeopleCore HRMS: Automated talent management, attendance tracking, appraisal matrices, and employee self-service portals',
      'Apto Workforce OS: Enterprise-grade workforce planning, organizational hierarchy modeling, shift scheduling, and compliance automation',
      'Apto GlobalPay Engine: Multi-currency automated payroll calculation, statutory compliance, tax withholdings, and instant bank-grade disbursement',
      'Apto FlexPayroll Automation: Dynamic salary structures, automated overtime/bonus processing, benefits deductions, and digital pay-slips',
      'Unified ERP Platforms: Bring all your business operations under one umbrella with integrated ERP solutions spanning finance, inventory, and supply chain',
    ],
    sla: '99.99% Guaranteed Uptime • Enterprise Data Isolation • Sub-100ms API SLAs',
    metrics: [
      { label: 'Client Satisfaction', value: '99%' },
      { label: 'Operational Efficiency', value: '+42%' },
      { label: 'System Uptime SLA', value: '99.99%' },
    ],
    techStack: ['TypeScript', 'React', 'Go', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    iconName: 'Cpu',
    badgeText: '01 • Core Practice',
    image: '/images/services/software_engineering.jpg',
    hrmsSystems: [
      {
        name: 'Apto PeopleCore HRMS',
        desc: 'Comprehensive talent lifecycle management, biometric attendance sync, automated leaves, KPI evaluations, and self-service portals.',
      },
      {
        name: 'Apto Workforce OS',
        desc: 'Enterprise workforce planning, shift roster optimization, organizational hierarchy management, and statutory labor law compliance.',
      },
    ],
    payrollSystems: [
      {
        name: 'Apto GlobalPay Engine',
        desc: 'Multi-country automated payroll processing, statutory tax withholding, direct bank disbursement rails, and automated year-end tax returns.',
      },
      {
        name: 'Apto FlexPayroll Automation',
        desc: 'Dynamic incentive and overtime calculation, flexible benefits administration, automated pay-slip generation, and audit-ready ledger reporting.',
      },
    ],
    erpPoints: [
      'Bring all your business operations under one umbrella with ERP solutions.',
      'Unified financial ledger and multi-entity consolidation with real-time balance sheet reconciliation.',
      'End-to-end supply chain, procurement, inventory tracking, and warehouse automation.',
      'Role-based access control, granular audit logging, and automated compliance reporting.',
    ],
  },
  {
    id: 'app-development',
    number: '02',
    title: 'Application Development and Management',
    tagline: 'Turbo-charge your mobile app development with Covision',
    category: 'App Development',
    description: 'Wide array of mobile app development solutions engineered for startups to enterprise-level IT architectures, delivering fluid 60fps performance and mission-critical reliability.',
    detailedScope: [
      'Native App Development: High-performance iOS (Swift) and Android (Kotlin) applications utilizing native hardware acceleration and biometrics',
      'Cross-Platform App Development: High-velocity Flutter and React Native apps with single-codebase efficiency across iOS and Android',
      'Hybrid App Development: Modern web-containerized mobile architectures (Capacitor/Ionic) delivering rapid validation and cross-screen compatibility',
      'Progressive Web Apps (PWA): Zero-install browser apps with offline data access, push notifications, and desktop/mobile responsiveness',
      'Startup to Enterprise IT Architecture: Scalable architectures inspired by industry benchmark practices, from MVP launch to distributed cloud backends',
      'Full App Lifecycle Management: 24/7 SLA monitoring, zero-regression patches, OS updates, and continuous performance optimization',
    ],
    sla: 'Fluid 60fps Performance • Offline-First Reliability • App Store Approval Guarantee',
    metrics: [
      { label: 'Time-to-Market', value: '40% Faster' },
      { label: 'Code Reusability', value: 'Up to 92%' },
      { label: 'App Store Rating', value: '4.9 / 5' },
    ],
    techStack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Capacitor', 'Tailwind', 'Node.js'],
    iconName: 'Smartphone',
    badgeText: '02 • Mobile Practice',
    image: '/images/services/mobile_app_3d_podium.png',
    mobileSolutions: [
      {
        title: 'Native App Development',
        desc: 'Platform-optimized Swift (iOS) and Kotlin (Android) apps engineered for maximum hardware acceleration, camera/sensor integration, and uncompromising speed.',
        icon: 'Smartphone',
      },
      {
        title: 'Cross-Platform App Development',
        desc: 'Single-codebase efficiency using Flutter and React Native, achieving native-grade 60fps experiences with up to 90% shared code across iOS and Android.',
        icon: 'Layers',
      },
      {
        title: 'Hybrid App Development',
        desc: 'Cost-effective, versatile web-containerized mobile applications built with Capacitor and Ionic for rapid cross-device rollout and frictionless updates.',
        icon: 'Cpu',
      },
      {
        title: 'Progressive Web Apps',
        desc: 'Zero-install, instant-loading web apps with offline persistence, background sync, and push notifications, bypassing app store gatekeepers.',
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'data-analytics',
    number: '03',
    title: 'Data Analytics',
    tagline: 'Business Analytics & Predictive Intelligence • The Divine Weapon of E-Business',
    category: 'Data & AI',
    description: 'Analytics is not merely a tool for data analysis but it is a transformative force in e-business. It serves as a strategic weapon that decodes real-time events, uncovers actionable insights, and equips businesses to anticipate and shape future outcomes.',
    detailedScope: [
      'User Behaviour & Engagement: Customer journeys, interactions, and behavioural patterns',
      'Traffic Sources & Audience Insights: Acquisition channels, demographics, and audience characteristics',
      'E-Commerce & Conversion Performance: Sales funnels, conversion rates, and purchase behaviour',
      'Pricing, Discounts & Revenue Optimisation: Pricing strategies, promotional effectiveness, and revenue opportunities',
      'Fashion, Trends & Market Intelligence: Emerging trends, consumer preferences, and competitor activity',
      'Content & Campaign Performance: Content engagement, marketing effectiveness, and campaign outcomes',
      'Heatmaps & Session Recordings: On-page interactions, navigation patterns, and user experience',
      'Predictive & AI-Driven Analytics: Forecasting, intelligent recommendations, and opportunity identification',
      'Technical & Digital Performance: Website performance, technical issues, and digital experience metrics',
    ],
    sla: 'Real-Time Event Processing • Sub-Second Query Execution • Deterministic Reporting',
    metrics: [
      { label: 'Event Ingestion', value: '100k+ evt/s' },
      { label: 'Query Latency', value: 'Sub-Second' },
      { label: 'Conversion Lift', value: '+32%' },
    ],
    techStack: ['Google Analytics', 'Tableau', 'Qlik Sense', 'Mixpanel', 'ClickHouse', 'PostgreSQL', 'Python'],
    iconName: 'BarChart3',
    badgeText: '03 • Analytics Practice',
    image: '/images/services/data_analytics.jpg',
    analyticsArsenal: {
      leadText: 'At Covision, we harness an extensive arsenal of analytical tools and intelligent platforms, including Google Analytics, Microsoft Clarity, Crazy Egg, Mixpanel, HubSpot Analytics, Adobe Analytics, Shopify Analytics, Albert AI, Pricefx, Dynamic Yield, Persado, BuzzSumo, Stitch Fix algorithms, Google Trends, Qlik Sense, and Tableau. These technologies help businesses analyse critical performance indicators across key dimensions:',
      tools: [
        'Google Analytics',
        'Microsoft Clarity',
        'Crazy Egg',
        'Mixpanel',
        'HubSpot Analytics',
        'Adobe Analytics',
        'Shopify Analytics',
        'Albert AI',
        'Pricefx',
        'Dynamic Yield',
        'Persado',
        'BuzzSumo',
        'Stitch Fix algorithms',
        'Google Trends',
        'Qlik Sense',
        'Tableau',
      ],
      dimensions: [
        {
          title: 'User Behaviour & Engagement',
          desc: 'Customer journeys, interactions, and behavioural patterns.',
        },
        {
          title: 'Traffic Sources & Audience Insights',
          desc: 'Acquisition channels, demographics, and audience characteristics.',
        },
        {
          title: 'E-Commerce & Conversion Performance',
          desc: 'Sales funnels, conversion rates, and purchase behaviour.',
        },
        {
          title: 'Pricing, Discounts & Revenue Optimisation',
          desc: 'Pricing strategies, promotional effectiveness, and revenue opportunities.',
        },
        {
          title: 'Fashion, Trends & Market Intelligence',
          desc: 'Emerging trends, consumer preferences, and competitor activity.',
        },
        {
          title: 'Content & Campaign Performance',
          desc: 'Content engagement, marketing effectiveness, and campaign outcomes.',
        },
        {
          title: 'Heatmaps & Session Recordings',
          desc: 'On-page interactions, navigation patterns, and user experience.',
        },
        {
          title: 'Predictive & AI-Driven Analytics',
          desc: 'Forecasting, intelligent recommendations, and opportunity identification.',
        },
        {
          title: 'Technical & Digital Performance',
          desc: 'Website performance, technical issues, and digital experience metrics.',
        },
      ],
    },
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud and Infrastructure',
    tagline: 'Intelligent, Self-Optimizing & Predictive Digital Ecosystems',
    category: 'Cloud & Edge',
    description: 'cloud services are considered a powerful weapon in the arsenal of the digital business ecosystem. Fusion of AI with cloud engineering created intelligent, self-optimizing, and predictive digital ecosystems. Our strategic partnerships with leading hyperscalers—such as AWS, Microsoft Azure, and Google Cloud—enable us to leverage cutting-edge innovations to accelerate your digital transformation.',
    detailedScope: [
      'Cloud Strategy, Architecture, Consulting, and Design: Strategize smart. Transform fast.',
      'IT landscape assessment: Evaluate infrastructure and align with business goals',
      'Tailored Cloud Roadmaps: Designing scalable, secure, and cost-optimized cloud architectures ranging from cloud-native to hybrid and multi-cloud',
      'Cloud Migration Services: Application and data migration, lift-and-shift operations, cloud-to-cloud transitions, and legacy system modernization',
      'Foundational Architecture: Media & Content-Centric Cloud Engineering centralizing media operations and enabling real-time collaboration',
      'Cloud-Based Digital Asset Management (DAM): Scalable, secure repository to store, manage, and distribute multimedia assets via CDNs',
      'Built-in Intelligence: AI-Powered Metadata Tagging via Computer Vision and NLP that automatically tags and organizes uploaded assets',
      'Distribution & Engagement: AI-Based Recommendation Engines tracking viewer behaviour for hyper-personalized suggestions',
    ],
    sla: 'Sub-15ms Global Edge Response • 99.999% SLA • Automatic DDoS Mitigation',
    metrics: [
      { label: 'Bandwidth Savings', value: 'Up to 52%' },
      { label: 'Global PoPs', value: '120+' },
      { label: 'Peak Capacity', value: '80+ Gbps' },
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Kubernetes', 'Terraform'],
    iconName: 'Cloud',
    badgeText: '04 • Cloud Practice',
    image: '/images/services/cloud_infrastructure.jpg',
    cloudRoadmap: {
      strategyLead: 'Strategize smart. Transform fast.',
      strategyPoints: [
        {
          title: 'IT landscape assessment',
          desc: 'Evaluate infrastructure and align with business goals.',
        },
        {
          title: 'Tailored Cloud Roadmaps for cloud adoption and optimization',
          desc: 'It includes designing scalable, secure, and cost-optimized cloud architectures—ranging from cloud-native and microservices-based systems to hybrid and multi-cloud environments.',
        },
      ],
      migrationPoints: [
        'Application and data migration',
        'Lift-and-shift operations',
        'Cloud-to-cloud transitions',
        'Legacy system modernization',
      ],
      mediaCloudPoints: [
        {
          title: 'Foundational Architecture',
          headline: 'Media & Content-Centric Cloud Engineering',
          desc: 'The core infrastructure that centralizes your media operations and enables real-time global collaboration.',
        },
        {
          title: 'The Core Platform',
          headline: 'Cloud-Based Digital Asset Management (DAM) Systems',
          desc: 'The scalable, secure repository to store, manage, and distribute all your multimedia assets via CDNs.',
        },
        {
          title: 'Built-in Intelligence',
          headline: 'AI-Powered Metadata Tagging',
          desc: 'Cloud-integrated Computer Vision and NLP that automatically tags, transcribes, and organizes your assets the moment they are uploaded.',
        },
        {
          title: 'Distribution & Engagement',
          headline: 'AI-Based Recommendation Engines',
          desc: 'Smart data models hosted in the cloud that track viewer behaviour to deliver hyper-personalized content suggestions.',
        },
      ],
    },
  },
  {
    id: 'ai-ml-integration',
    number: '05',
    title: 'AI/ML Integration',
    tagline: 'Autonomous Cognitive Agents, Machine Learning & Vision Systems',
    category: 'Data & AI',
    description: 'Enterprise-grade artificial intelligence and machine learning pipelines engineered for autonomous decision-making, predictive modeling, and secure proprietary automation.',
    detailedScope: [
      'Predictive Business Intelligence: Real-time forecasting models predicting customer demand, churn, and revenue trends',
      'Computer Vision & Visual AI: Automated product defect detection, OCR document extraction, and facial recognition',
      'Conversational AI Agents: Intelligent 24/7 customer support assistants trained on your internal documentation',
      'Autonomous Workflow Automation: Smart bots that eliminate repetitive manual data entry and speed up approvals',
      'Private & Secure Data Governance: Zero data leakage policies with air-gapped models that never share proprietary training data',
    ],
    sla: 'Sub-200ms Inference Speed • Zero Proprietary Data Leaks • Enterprise SOC 2 Standards',
    metrics: [
      { label: 'Automation Accuracy', value: '99.4%' },
      { label: 'Process Acceleration', value: '10x Faster' },
      { label: 'Productivity ROI', value: '+300%' },
    ],
    techStack: ['PyTorch', 'TensorFlow', 'FastAPI', 'LangChain', 'Python', 'Qdrant'],
    iconName: 'Brain',
    badgeText: '05 • AI Practice',
    image: '/images/services/ai_ml.jpg',
  },
  {
    id: 'ux-ui-design',
    number: '06',
    title: 'UX/UI',
    tagline: 'ux/ui Design Is a Dialogue, Not Decoration—Creating Seamless Connections Between Brands and Users',
    category: 'UX/UI & CoVision Lattice™',
    description: 'At Covison, design is a dialogue, not decoration. Grounded in cognitive psychology and behavioural science, we design interfaces that think, react, and resonate with users.',
    detailedScope: [
      'Cognitive Science–Backed Design Thinking: Grounded in cognitive psychology and behavioural science to design interfaces that think, react, and resonate with users',
      'Our Own Design System — Covision Lattice/ monolith: An operational strategy that empowers to deliver exceptional, scalable, and user-centric products with unmatched efficiency and quality',
      'Cognitive Load Optimization: Clear visual hierarchy that guides user focus and accelerates task completion',
      'Fluid Micro-Animations: Interactive cues and 60fps motion that make digital interactions feel responsive and alive',
      'Accessibility & Usability Benchmarking: Rigorous compliance with WCAG standards and multi-device usability testing',
    ],
    sla: 'Pixel-Perfect Dev Fidelity • WCAG Accessibility Standards • 60fps Fluid Interactions',
    metrics: [
      { label: 'User Retention', value: '+45%' },
      { label: 'Dev Handoff Speed', value: '2.5x Faster' },
      { label: 'Usability Score', value: '98 / 100' },
    ],
    techStack: ['Covision Lattice', 'monolith', 'Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion'],
    iconName: 'Palette',
    badgeText: '06 • Design Practice',
    image: '/images/services/ux_ui_design.jpg',
    designSystem: {
      leadQuote: 'ux/ui Design Is a Dialogue, Not Decoration—Creating Seamless Connections Between Brands and Users.',
      cognitiveTitle: 'Cognitive Science–Backed Design Thinking',
      cognitiveText: 'At Covison, design is a dialogue, not decoration. Grounded in cognitive psychology and behavioural science, we design interfaces that think, react, and resonate with users.',
      systemName: 'Our Own Design System- Covision Lattice/ monolith',
      systemText: 'Covision Lattice/ monolith isn’t just a library; it’s an operational strategy—one that empowers to deliver exceptional, scalable, and user-centric products with unmatched efficiency and quality.',
    },
  },
]

export const ECOMMERCE_SUITE_DATA: EcommerceOffering[] = [
  {
    id: 'custom-platform-dev',
    title: 'Custom & Enterprise eCommerce Storefronts',
    subtitle: 'High-Converting Digital Storefronts Built for Scale',
    description: 'High-speed headless and platform-based stores engineered for rapid transaction velocity, sub-second checkout, and seamless global multi-currency operations.',
    capabilities: [
      'Shopify & Shopify Plus: Custom storefront themes, custom checkout extensions, and global payment setups',
      'Adobe Commerce (Magento): Robust enterprise architecture designed for high-volume catalogs and complex B2B rules',
      'Modern Headless Commerce: Sub-second checkout speeds built with modern React, Next.js, and edge caching',
      'Omnichannel Selling: Unified catalog and orders across Amazon, Instagram, and global digital storefronts',
      'Conversion Rate Optimization: Streamlined checkout flows designed to eliminate cart abandonment',
    ],
    platforms: ['Shopify Plus', 'Adobe Commerce (Magento)', 'BigCommerce', 'WooCommerce', 'Custom Headless'],
    iconName: 'ShoppingBag',
    badge: 'Flagship Commerce',
    image: '/senior_image_catalog/06_eCommerce_and_Retail/01_flagship_digital_retail_experien.jpg',
  },
  {
    id: 'ecommerce-migration',
    title: 'Zero-Downtime Storefront Migration',
    subtitle: 'Seamless Re-Platforming with 100% SEO & Data Preservation',
    description: 'Re-platform from legacy monoliths to modern architectures without a single lost order or drop in organic search traffic.',
    capabilities: [
      '100% SEO Preservation: Strict 301 redirect mapping to protect your organic search rankings and domain equity',
      'Zero Order Interruption: Live cutover protocols that allow sales to continue uninterrupted during database migration',
      'Customer & Order History Transfer: Complete migration of customer profiles, saved addresses, and past orders',
      'Payment & Shipping Alignment: Seamless reconfiguration of payment gateways and automated tax calculators',
      'Security & PCI Compliance: Verified against top-tier enterprise data protection standards',
    ],
    platforms: ['Magento to Shopify Plus', 'WooCommerce to BigCommerce', 'SAP Commerce to Composable', 'Salesforce Commerce Cloud'],
    iconName: 'RefreshCw',
    badge: 'Zero Downtime',
    image: '/senior_image_catalog/06_eCommerce_and_Retail/06_zero-downtime_e-commerce_cutover.jpg',
  },
  {
    id: 'ecommerce-integration',
    title: 'eCommerce Integrations & Middleware',
    subtitle: 'Real-Time ERP, CRM, Payment & Logistics Sync',
    description: 'Reliable bi-directional middleware connecting your storefront directly into SAP, NetSuite, Salesforce, Stripe, and global logistics carriers.',
    capabilities: [
      'ERP System Synchronization: Real-time bi-directional sync with SAP, Oracle NetSuite, and Microsoft Dynamics',
      'Automated Accounting: Seamless financial reconciliation with QuickBooks, Xero, and corporate ledger tools',
      'Global Payment Gateways: Instant integration with Stripe, PayPal, Apple Pay, Google Pay, and localized gateways',
      'Logistics & Shipping Pipelines: Automated fulfillment workflows with FedEx, DHL, UPS, and ShipStation',
      'Unified Product Catalog (PIM): Centralized product data syndication across all digital sales channels',
    ],
    platforms: ['SAP S/4HANA', 'Oracle NetSuite', 'Salesforce CRM', 'Stripe Connect', 'FedEx / DHL APIs'],
    iconName: 'Layers',
    badge: 'Real-Time Sync',
    image: '/senior_image_catalog/19_API_Gateways_and_Integration/04_bi-directional_sap_and_salesforc.jpg',
  },
  {
    id: 'creative-content-production',
    title: 'Creative & Immersive Visuals',
    subtitle: '3D Product Rendering, AR Previews & Visual Storytelling',
    description: 'Interactive 3D product visualizers, augmented reality try-ons, and high-fidelity brand photography that increase conversions by up to 40%.',
    capabilities: [
      '3D Interactive Product Models: 360-degree interactive product turntables that increase shopper engagement',
      'Augmented Reality (AR) Previews: Allow shoppers to view products in their physical room before buying',
      'High-Resolution Commercial Imagery: Clean, brand-aligned catalog photography and digital retouching',
      'Dynamic Video & Motion Graphics: High-converting social video assets and animated product demonstrations',
    ],
    platforms: ['Blender 4.0', 'Unreal Engine 5', 'Three.js / WebGL', 'Adobe Creative Suite', 'WebXR'],
    iconName: 'Camera',
    badge: 'Visual Experience',
    image: '/senior_image_catalog/17_3D_WebGL_and_Virtual/03_photorealistic_real-time_webgl_v.jpg',
  },
  {
    id: 'business-process-services',
    title: 'eCommerce Operations & Warehouse Sync',
    subtitle: 'Automated Order Management, Barcode RFID & Inventory Tracking',
    description: 'Operational software infrastructure managing end-to-end product catalogs, warehouse barcode/RFID tracking, and dynamic pricing rules.',
    capabilities: [
      'Order Management System (OMS): Centralized multi-warehouse order routing and automated refund handling',
      'Warehouse Barcode & RFID Tracking: Real-time stock counts that eliminate overselling and fulfillment delays',
      'Automated Stock Alerts: Predictive inventory thresholds that prevent out-of-stock lost revenue',
      'Dynamic Pricing Engines: Automated rule-based discounts and promotional campaign scheduling',
    ],
    platforms: ['Akeneo PIM', 'Zebra RFID Hardware', 'NetSuite OMS', 'Elasticsearch Vector', 'Kafka Streaming'],
    iconName: 'CheckCircle2',
    badge: 'Operations Hub',
    image: '/senior_image_catalog/16_Supply_Chain_and_Logistics/01_automated_high-bay_distribution_.jpg',
  },
]

export const TECHNOLOGY_SPECTRUM = {
  languages: [
    'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'Go', 'Rust', 'Swift', 'Kotlin', 'Dart', 'Java', 'PHP', 'C++', 'C', 'Ruby', 'SQL', 'Solidity', 'Bash', 'Scala', 'Julia', 'R'
  ],
  frameworks: [
    'React.js', 'Next.js', 'TanStack Query', 'Vue.js', 'Angular.js', 'Flutter', 'React Native', 'SwiftUI', 'Android SDK', 'Ionic', 'Django', 'Express.js', 'Spring Boot', 'Laravel', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Ethereum', 'Hyperledger Fabric', 'Unity', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'MongoDB', 'Cassandra', 'AWS IoT', 'Cloudflare', 'Resend'
  ],
  tools: [
    'Figma', 'Midjourney', 'GitHub Actions', 'Xcode', 'Android Studio', 'Jupyter Notebook', 'Google Colab', 'MetaMask', 'Remix IDE', 'Ganache', 'CI/CD Pipelines', 'Google Data Studio', 'Postman', 'Adobe XD', 'Blender', 'Adobe After Effects', 'Stripe', 'AWS CLI', 'Google Cloud Console', 'Azure CLI'
  ],
}

export const PILLAR_CLIENTS: ClientPartner[] = [
  { name: 'Banking and Financial Services', category: 'FinTech & Core Banking', featuredProject: 'Go microservices & zero-downtime Kubernetes failover handling $1.2B daily.', logoText: 'BANKING & FINTECH' },
  { name: 'Puma', category: 'Retail & Sportswear', featuredProject: 'Omnichannel mobile app experience & high-load catalog acceleration.', logoText: 'PUMA' },
  { name: 'Human Resource', category: 'Enterprise HR & Workforce', featuredProject: 'Automated global workforce management, payroll & compliance suite.', logoText: 'HUMAN RESOURCE' },
  { name: 'E-Commerce Industry', category: 'Omnichannel Retail', featuredProject: 'Headless multi-store architecture with automated PIM catalog sync.', logoText: 'E-COMMERCE' },
  { name: 'Education & Training', category: 'EdTech & Digital Media', featuredProject: 'Interactive PWA learning ecosystem with offline sync and assessments.', logoText: 'EDUCATION & TRAINING' },
  { name: 'Silver Maharaja', category: 'Jewelry & Luxury', featuredProject: 'Luxury e-commerce storefront with multi-currency checkout.', logoText: 'SILVER MAHARAJA' },
  { name: 'Fila', category: 'Global Footwear', featuredProject: 'Custom eCommerce storefront & 3D product visualizer.', logoText: 'FILA' },
  { name: 'Mango', category: 'Fashion & Apparel', featuredProject: 'Multi-region cloud infrastructure & headless checkout pipeline.', logoText: 'MANGO' },
  { name: 'Bertelsmann Group', category: 'Media & Publishing', featuredProject: 'Enterprise DAM & AI-powered metadata tagging engine.', logoText: 'BERTELSMANN' },
  { name: 'Estée Lauder Companies', category: 'Luxury Beauty', featuredProject: 'AR virtual try-on integration & personalized recommendation AI.', logoText: 'ESTÉE LAUDER' },
  { name: 'Rugs USA', category: 'Home & Living', featuredProject: 'High-throughput inventory synchronization & ERP integration.', logoText: 'RUGS USA' },
  { name: 'HMD Global', category: 'Consumer Devices', featuredProject: 'Global supply chain telemetry & warranty registration platform.', logoText: 'HMD' },
  { name: 'NovaPay Global', category: 'FinTech Rails', featuredProject: 'Mission-critical transaction routing & edge tokenization.', logoText: 'NOVAPAY' },
  { name: 'Aura Health AI', category: 'MedTech', featuredProject: 'HIPAA-compliant private RAG diagnostic intelligence.', logoText: 'AURA HEALTH' },
]

export const ABOUT_US_DETAILS = {
  vision: 'To empower global enterprises with resilient Living Technology—transforming how modern businesses build, scale, and deliver digital experiences through the convergence of custom software, AI intelligence, and interactive media.',
  mission: 'To deliver mission-critical digital systems that eliminate operational bottlenecks, unlock new revenue streams, and empower our clients to outpace competition with confidence.',
  values: [
    { title: 'Customer Commitment', desc: 'Client outcomes define our success. We partner as dedicated technical co-founders with personalized service and transparent milestones.' },
    { title: 'Quality Excellence', desc: 'Uncompromising engineering standards, 100% test coverage, and clean, modular architectures that scale effortlessly.' },
    { title: 'Collaborative Teamwork', desc: 'Cross-functional pods of senior architects, product designers, and DevOps engineers operating as an agile extension of your in-house team.' },
    { title: 'Winning Spirit', desc: 'Relentless pursuit of innovation, rapid sprint delivery, and market-leading craftsmanship that delivers clear commercial advantage.' },
    { title: 'Pragmatism & Relevance', desc: 'We build what drives business revenue and efficiency—prioritizing practical, scalable solutions over unnecessary technical complexity.' },
    { title: 'Responsiveness & Accountability', desc: 'Direct Slack communication with lead engineers, sub-2-hour SLA response, and 100% intellectual property ownership from day one.' },
  ],
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'novapay-global',
    client: 'NovaPay Global',
    industry: 'FinTech & Payments',
    headline: 'Modernizing core transaction engine to handle $1.2B daily throughput',
    summary: 'Re-architected monolithic banking rails into distributed Go microservices with TanStack dashboards, Kafka event bus, and zero-downtime Kubernetes failover.',
    challenge: 'Legacy system suffered 1.4-second checkout latency during peak sales and lacked multi-region data compliance.',
    solution: 'Designed an event-driven architecture with edge tokenization, TanStack Query state caching, and Anycast CDN origin shielding.',
    results: [
      { metric: '78ms', label: 'P99 Latency (down from 1.4s)' },
      { metric: '99.999%', label: 'Yearly Platform Availability' },
      { metric: '$4.2M', label: 'Cloud Infrastructure Savings' },
    ],
    technologies: ['TypeScript', 'TanStack', 'Kubernetes', 'Anycast CDN', 'Go', 'Kafka'],
    accentColor: '#0052cb',
    bunnyCdnUsed: true,
    image: '/senior_image_catalog/10_FinTech_and_Banking/01_wall_street_algorithmic_trading_.jpg',
  },
  {
    id: 'puma-omnichannel',
    client: 'Puma Retail Suite',
    industry: 'Sportswear & eCommerce',
    headline: 'Sub-60fps mobile catalog and headless checkout transformation',
    summary: 'Constructed an omnichannel mobile shopping experience with 3D product visualizations, instant inventory sync, and real-time POS connection.',
    challenge: 'High cart abandonment rate on mobile devices and inventory desynchronization across 140 retail outlets.',
    solution: 'Built a cross-platform Flutter and React Native application with global Anycast edge asset optimization and custom middleware sync.',
    results: [
      { metric: '38%', label: 'Mobile Conversion Increase' },
      { metric: '0s', label: 'Inventory Lag Across Stores' },
      { metric: '4.9/5', label: 'App Store Customer Rating' },
    ],
    technologies: ['Flutter', 'React Native', 'Anycast CDN', 'TypeScript', 'Node.js', 'Redis'],
    accentColor: '#0052cb',
    bunnyCdnUsed: true,
    image: '/senior_image_catalog/06_eCommerce_and_Retail/02_sub-second_contactless_payment_p.jpg',
  },
  {
    id: 'aura-health-ai',
    client: 'Aura Health AI',
    industry: 'HealthTech & Telemedicine',
    headline: 'HIPAA-compliant autonomous clinical triage & document extraction',
    summary: 'Engineered a private generative AI medical diagnostic assistant with hybrid vector search and sub-200ms clinician query response.',
    challenge: 'Physicians spent 4.2 hours daily on chart notes and clinical coding with high manual error rates.',
    solution: 'Fine-tuned medical LLMs with RAG on de-identified EHR records, running inside a private cloud enclave with Resend alerting.',
    results: [
      { metric: '68%', label: 'Physician Admin Time Cut' },
      { metric: '99.4%', label: 'Diagnostic Extraction Accuracy' },
      { metric: '100%', label: 'HIPAA & SOC 2 Compliance' },
    ],
    technologies: ['PyTorch', 'vLLM', 'Qdrant', 'TypeScript', 'Resend', 'Docker'],
    accentColor: '#0284c7',
    bunnyCdnUsed: false,
    image: '/senior_image_catalog/15_Healthcare_IT_and_Medical/01_physician_clinical_diagnostic_ta.jpg',
  },
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'CoVision engineered our entire payments architecture and mobile retail suite from scratch. Their mastery of Living Technology, TypeScript, and TanStack allowed us to pass strict audits and scale revenue by 38% in record time.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'FinGlobal Technologies (London)',
    rating: 5,
    avatarUrl: '/images/avatars/marcus_vance.jpg',
    verifiedEnterprise: true,
  },
  {
    quote: 'When we integrated the custom 360° eCommerce Suite and global edge acceleration built by CoVision, our global API latency dropped from 280ms to 18ms. Their engineers do not just write code—they think like business owners.',
    author: 'Dr. Elena Rostova',
    role: 'VP of Engineering',
    company: 'Synapse AI Systems (San Francisco)',
    rating: 5,
    avatarUrl: '/images/avatars/elena_rostova.jpg',
    verifiedEnterprise: true,
  },
  {
    quote: 'The level of craftsmanship, CoVision Lattice™ design fidelity, and performance obsession is unmatched. Every single interaction on our enterprise dashboard is silky smooth, and the automated CI/CD pipeline cut our release cycle to 10 minutes.',
    author: 'Siddharth Mehta',
    role: 'Head of Infrastructure',
    company: 'LogiCore Global (Singapore)',
    rating: 5,
    avatarUrl: '/images/avatars/siddharth_mehta.jpg',
    verifiedEnterprise: true,
  },
]

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How does CoVision structure intellectual property (IP) and client confidentiality?',
    category: 'Security & NDA',
    answer: 'We provide 100% intellectual property transfer to your company upon milestone completion. Before any code is viewed or scoping begins, we execute a legally binding Mutual Non-Disclosure Agreement (MNDA). All repositories, AWS/GCP accounts, and secrets remain under your direct corporate ownership.',
  },
  {
    question: 'What is the "Living Technology" philosophy at CoVision?',
    category: 'Architecture',
    answer: 'Covision: Technology That Connects Business and Creativity. We engineer proprietary software products, SaaS platforms, enterprise applications, and cloud infrastructure built for evolving business demands through the synergy of agile execution, DevOps automation, and autonomous AI integrations.',
  },
  {
    question: 'What is included in the 360° eCommerce Suite?',
    category: 'Architecture',
    answer: 'Our 360° eCommerce Suite covers the complete lifecycle: custom headless & platform builds (Shopify, Adobe Commerce/Magento, WooCommerce, BigCommerce), zero-downtime migrations, ERP/CRM middleware integrations, our creative content production wing (AI photography, 3D modeling, AR/VR), and business process operations (PIM, OMS, warehouse barcode/RFID).',
  },
  {
    question: 'How do you ensure zero downtime during eCommerce and cloud migrations?',
    category: 'Engagement',
    answer: 'We use automated data replication, strict 301 SEO URL preservation, payment gateway sandbox pre-validation, and parallel traffic routing with automated health checks so your customers never experience a single minute of downtime.',
  },
  {
    question: 'What is your post-launch SLA and incident response guarantee?',
    category: 'Pricing',
    answer: 'Every deployment includes 60 days of complimentary hypercare support. For ongoing operations, our Managed 24/7 SRE SLA guarantees a 15-minute response time for P1 critical incidents with automated escalation and continuous uptime monitoring.',
  },
]

