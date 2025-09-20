import { getImagePath, getAssetPath } from '../lib/utils'; // Adjust the path based on your file structure

export const BLUR_DELAY = 0.04

export const DATA = {
  personalData: {
    name: "Praise Afuwape",
    description: `Hi there!, I am a skilled full-stack developer based Nigeria, with a BSc in Computer Science.  
    Specializing in both mobile app and web development, I have successfully delivered several live projects that empower businesses and users.  
    With a strong command of modern technologies, I build seamless, innovative solutions tailored to real-world needs.  
    I am passionate about creating impactful tech for communities and enterprises.`,
    // description:"Hey there!. I enjoy creating kickass websites and web/mobile apps, ones that suit your desires and needs using latest technologies and cleanest design patterns.",
    image: getImagePath("/hero.jpg"),
    skill: ["Flutter", "Dart", "Bloc", "Provider", "Hive", "Stacked", "Firebase", "React.js", "Next.js", "Zustand", "Laravel", "SQL", "Github Actions",],
    email: "ayokanmi1275@gmail.com",
    phone: "+234 8142602528",
    link: [
      {
        name: "github",
        url: "https://github.com/Praise650"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/praiseafuwape/"
      },
      {
        name: "x",
        url: "https://x.com/PraiseAfuwape"
      },
      {
        name: "instagram",
        url: "https://instagram.com/afuwape5"
      }
    ],
    resume: getAssetPath("/PraiseAfuwape.pdf"),
    aboutMe: `I am a full-stack and mobile developer based in Lagos, Nigeria,  
    with more than five years of experience crafting innovative digital solutions.  
    Holding a **BSc in Computer Science**, I specialize in building robust web and  
    mobile applications that address real-world challenges. With several live  
    projects actively in use, my work empowers communities and enterprises by  
    delivering seamless, user-centric technology.
    Driven by a commitment to impact, I leverage modern tools and frameworks to create  
    scalable, high-quality solutions that drive growth and transformation.  
    Aside from working hard, I tend to enjoy simple things like reading, petting cats,  
    playing the guitar, playing basketball, and other things we humans do. If any of  
    what I said seems interesting, then please do not hesitate to send me a message.`
  },
  educations: [
    // {
    //   id: 1,
    //   year: "2020-2024",
    //   title: "Master of Computer Applications (MCA)",
    //   school: "Noida Institute Of Engineering And Technology,Greater Noida",
    //   location: "UP. Greater Noida",
    //   field: "Computer Application"
    // },
    {
      id: 2,
      year: "2018 - 2024",
      title: "Bachelor of Science (B.Sc IT)",
      school: "Federal University of Technology Akure",
      location: "Ondo, Nigeria",
      field: "Computer Science"
    },
    {
      id: 3,
      year: "2013 - 2016",
      title: "Senior Secondary School Certificate(SSCE)",
      school: "Oyemekun Grammar School, Akure",
      location: "Akure, Ondo State",
      field: "Science"
    },
    {
      id: 4,
      year: "2011 - 2013",
      title: "Junior Secondary School Certificate(JSCE)",
      school: "Estate High School, Shagari",
      location: "Akure, Ondo State",
      field: "Regular"
    },
  ],
  // experiences: [
  //   {
  //     company: "Accessivo(TechitCheap)",
  //     role: "Mobile Developer",
  //     startDate: "April 2025",
  //     endDate: "June 2025",
  //     location: "Kwara, NG",
  //     description: `At TechitCheap, I served as a Mobile Developer leading the turnaround of a long-delayed fintech application project. 
  //     I modernized and deployed the app using Flutter, introducing robust architectural patterns (MVVM with Provider), 
  //     advanced data visualization (using fl_chart), and optimized API handling (with the http package). 
  //     My contributions significantly improved performance, stability, and user experience, while aligning technical solutions 
  //     with business goals and stakeholder expectations.`,
  //     achievements: [
  //       "Led development of a fintech app in Flutter, implementing time-based graph and cashflow analysis using fl_chart and receipt generation, successfully deploying the project after a two-year delay from previous developers.",
  //       "Reduced bug reports by 30% through systematic debugging, robust error handling, and code optimization, delivering a stable and reliable fintech application.",
  //       "Optimized API interactions using http package, streamlining data retrieval and improving response times for a seamless user experience in a high-stakes fintech environment.",
  //       "Built dynamic financial visualization features with fl_chart, enabling users to analyze cashflow and transaction data across daily, weekly, monthly, and yearly timeframes, improving financial decision-making."
  //     ],
  //     technologies: ["Fluter", "Dart", "fl_charts", "Provider", "Git", "Github Actions", "CI/CD"]
  //   },
  //   {
  //     company: "Klama",
  //     role: "Full Stack Developer",
  //     startDate: "March 2024",
  //     endDate: " May 2025",
  //     location: "Lagos NG",
  //     description: "At Klama, I contributed to multiple high-impact projects across fintech, logistics, and real estate domains. I led mobile app redevelopment efforts using Flutter and extended into full-stack web development using Laravel and Next.js. I focused on enhancing user experience, system reliability, and performance optimization while managing deployment and security across platforms.",
  //     achievements: [
  //       {
  //         project: "QuickConnect (Bills Payment App):",
  //         items: [
  //           "Rebuilt a legacy Flutter-based app with poor usability, resolving critical issues in navigation and payment failures.",
  //           "Redesigned UI/UX with a modern and intuitive interface, improving accessibility for a broader user base.",
  //           "Optimized backend payment APIs and improved integration reliability for secure, seamless transactions.",
  //           "Collaborated with UX designers and stakeholders, implementing user feedback that led to increased user trust and positive app reviews."
  //         ]
  //       },
  //       {
  //         project: "Enviable Logistics (ELA App):",
  //         items: [
  //           "Designed and developed ELA, a cross-platform logistics app using Flutter, achieving a 30% reduction in API response times through optimized data handling.",
  //           "Ensured smooth performance across iOS and Android by integrating platform-specific features.",
  //           "Integrated RESTful APIs for real-time data sync and managed source control with Git for efficient collaboration."
  //         ]
  //       },
  //       {
  //         project: "Abuja Rommates (Shortlet Service):",
  //         items: [
  //           "Developed the backend using Laravel, implementing secure REST APIs for property listing, booking, and user management.",
  //           "Built the frontend using Next.js, delivering a responsive web app, admin dashboard, and landing page.",
  //           "Handled full deployment on Namecheap (including APIs, admin panel, and frontend), ensuring system-wide security and accessibility."
  //         ]
  //       }
  //     ],
  //     technologies: ["Flutter", "Laravel", "Tailwind CSS", "SQL", "Stacked", "Next.js", "Postman"]
  //   },
  //   {
  //     company: "Aipalbot",
  //     role: "Mobile Developer",
  //     startDate: "Aug 2022",
  //     endDate: "June 2024",
  //     location: "San Francisco, USA",
  //     description: "Developed and maintained mobile application using Flutter, focusing on user experience optimization and robust architecture implementation.",
  //     achievements: [
  //       "Built intuitive UI screens with Flutter, boosting user engagement by 25% based on feedback analytics.",
  //       "Integrated RESTful APIs and SOAP web services, streamlining authentication and data rendering across platforms.",
  //       "Designed MVVM architecture for UI components, improving code maintainability and scalability.",
  //       "Leveraged Android Studio, Git, and GitHub for development and version control."
  //     ],
  //     technologies: ["Dart", "Flutter", "Firebase"]
  //   }
  // ],
  experiences: [
    {
      company: "Accessivo (TechitCheap)",
      role: "Senior Mobile Engineer",
      startDate: "April 2025",
      endDate: "June 2025",
      location: "Nigeria",
      description: `At TechitCheap, I served as a Mobile Developer leading the turnaround of a long-delayed fintech application project. 
      I modernized and deployed the app using Flutter, introducing robust architectural patterns (MVVM with Provider), 
      advanced data visualization (using fl_chart), and optimized API handling (with the http package). 
      My contributions significantly improved performance, stability, and user experience, while aligning technical solutions 
      with business goals and stakeholder expectations.`,
      achievements: [
        "Engineered dynamic financial visualizations with fl_chart, enabling users to track and analyze cash flow and transactions across daily, weekly, monthly, and yearly views, enhancing financial decision-making.",
        "Refactored a legacy, 2-year-stalled codebase into a clean, well-documented Provider architecture, resulting in a fully testable and maintainable app structure.",
        "Reduced bug reports by over 40% through systematic debugging, robust error handling, and code optimization, significantly improving app stability.",
        "Implemented a CI/CD pipeline using GitHub Actions to automate deployment, reducing release cycles from days to hours.",
        "Resolved critical bugs in biometric authentication and BVN verification, improving account access reliability and compliance with fintech regulations.",
        "Developed file upload functionality for account tier upgrades, enabling users to seamlessly increase banking limits.",
        "Implemented receipt generation features, allowing users to share proof of payment instantly, improving transaction transparency.",
        "Mentored an intern developer, guiding best practices in Flutter development and code quality."
      ],
      technologies: ["Flutter", "Dart", "Provider", "fl_chart", "GitHub Actions", "CI/CD"]
    },
    {
      company: "QuickConnect",
      role: "Senior Mobile Engineer",
      startDate: "December 2024",
      endDate: "May 2025",
      location: "Nigeria",
      description: `The QuickConnect Mobile App offers a seamless, user-friendly mobile experience for customers to purchase & vend data, airtime, cable subscription, electricity bills payment, education, and converting excess airtime to cash. 
      Developed and launched the complete mobile application with focus on secure payments and optimal user experience.`,
      achievements: [
        "Developed and launched the QuickConnect mobile application, enabling seamless bill payments and achieving 100+ downloads within the first month.",
        "Integrated secure multi-login options with Local Authentication and encrypted storage using flutter_secure_storage, safeguarding sensitive user data.",
        "Consumed and optimized REST API services via Dio client and Retrofit, implementing caching strategies that reduced data load times by up to 40%.",
        "Implemented Firebase push notifications to drive user engagement and increase return usage.",
        "Integrated in-app review functionality, streamlining user feedback collection and supporting continuous product improvement.",
        "Collaborated with designer and backend engineer to build the app to satisfy all user requirements.",
        "Implemented intuitive user interface ensuring seamless and smooth user experience."
      ],
      technologies: ["Flutter", "Dart", "Stacked", "Provider", "Dio", "Firebase", "flutter_secure_storage"]
    },
    {
      company: "Abuja Homes",
      role: "Full Stack Engineer",
      startDate: "September 2024",
      endDate: "December 2024",
      location: "Nigeria",
      description: `Abuja Homes is a property listing solution. Led full-stack development including backend API development, 
      frontend implementation, and deployment. Integrated payment systems and developed comprehensive admin management features.`,
      achievements: [
        "Engineered a scalable backend in Laravel, delivering secure REST APIs for property listings, bookings, and user management, enabling 100% uptime for core operations.",
        "Integrated Paystack payment gateway to process secure apartment bookings, resulting in a 30% increase in successful transactions within the first quarter of launch.",
        "Developed a responsive frontend in Next.js, including a dynamic admin dashboard and high-conversion landing page, improving user engagement by 40%.",
        "Implemented robust role-based access controls, strengthening data security and preventing unauthorized access incidents.",
        "Orchestrated full-stack deployment on Namecheap (APIs, admin panel, frontend), ensuring 99.9% availability and smooth user access.",
        "Integrated automated mailing functionality to boost user retention, contributing to a 20% rise in returning visitors."
      ],
      technologies: ["Laravel", "Next.js", "Paystack", "MySQL", "Namecheap", "REST APIs"]
    },
    {
      company: "Enviable Logistics",
      role: "Mobile Engineer",
      startDate: "August 2024",
      endDate: "January 2025",
      location: "Nigeria",
      description: `ELA, a cross-platform logistics app. Developed comprehensive mobile solution for logistics operations 
      with real-time tracking, location services, and seamless integration with web-based plugins.`,
      achievements: [
        "Developed the ELA mobile application using Flutter, delivering a robust logistics solution aligned with business and user needs.",
        "Collaborated with QA, designers, and product managers to ensure market-ready quality, achieving a 95% bug-free release rate after pre-launch testing.",
        "Consumed and optimized REST API services using dio client and retrofit to efficiently fetch, process, and display logistics data, reducing data load times through caching techniques.",
        "Applied MVVM architecture to ensure scalable, modular, and testable application design, enabling faster feature rollouts and simplified maintenance.",
        "Designed customer-facing app with real-time ordering system using StreamBuilder for live order tracking, with Google Places API for location services.",
        "Integrated Webview in the application to access SPA plugins from web developers.",
        "Implemented state management using Stacked and Provider, improving code maintainability and app performance."
      ],
      technologies: ["Flutter", "Dart", "MVVM", "Stacked", "Provider", "Dio", "Google Places API", "StreamBuilder"]
    },
    {
      company: "Consuma",
      role: "Flutter Engineer",
      startDate: "February 2024",
      endDate: "April 2024",
      location: "Nigeria",
      description: `Consuma is a food ordering app. Developed high-performance food ordering application from ground up, 
      focusing on user experience, secure payments, and location-based functionality.`,
      achievements: [
        "Developed a high-performance food ordering application from the ground up, delivering a smooth and intuitive user experience.",
        "Integrated push notifications, boosting user engagement and repeat orders using Firebase SDK.",
        "Implemented Supabase for secure authentication and scalable data storage, leveraging RPC capabilities to streamline data management and reduce API response times.",
        "Applied the Provider package for efficient state management, improving app responsiveness and maintainability.",
        "Integrated location-based functionality to auto-detect user address and curate location-specific content, enhancing personalization and order relevance.",
        "Integrated Paystack SDK to support secure payments via card, bank transfer, USSD transfer, increasing checkout success rate by 25%."
      ],
      technologies: ["Flutter", "Dart", "Supabase", "Provider", "Firebase", "Paystack", "Location Services"]
    },
    {
      company: "Aipalbot",
      role: "Flutter Developer",
      startDate: "August 2022",
      endDate: "June 2024",
      location: "San Francisco, USA",
      description: `Developed and maintained the Aipalbot mobile application for AI bot training and interaction. 
      Implemented advanced multimedia features and real-time communication capabilities using modern architecture patterns.`,
      achievements: [
        "Developed and maintained the Aipalbot mobile application, ensuring continuous feature delivery and platform stability.",
        "Integrated voice, video, and live camera recording capabilities to train AI bots, expanding user interaction possibilities.",
        "Built an in-app chat system, enabling real-time user-to-bot communication and enhancing engagement.",
        "Leveraged Firebase services for secure and scalable authentication, ensuring a seamless onboarding experience.",
        "Applied MVVM architecture to create a modular, maintainable, and testable codebase, accelerating feature rollouts and reducing technical debt.",
        "Consumed SOAP APIs to fetch and display dynamic data, streamlining cross-platform authentication and data rendering."
      ],
      technologies: ["Flutter", "Dart", "Firebase", "MVVM", "SOAP APIs", "Real-time Chat"]
    },
    {
      company: "KWIQ (KingCards)",
      role: "Flutter Developer",
      startDate: "April 2022",
      endDate: "June 2022",
      location: "Nigeria",
      description: `KWIQ is a technologically advanced app that helps users instantly convert Bitcoins, USDT, Ethereum and other Crypto to cash. 
      Focused on resolving critical authentication issues and developing admin management features for cryptocurrency operations.`,
      achievements: [
        "Resolved a critical authentication issue, improving login reliability and reducing failed login attempts, leading to smoother user onboarding.",
        "Developed and deployed user management interfaces in the admin app, enabling admins to manage user accounts more efficiently and reducing manual oversight.",
        "Implemented efficient pagination for large datasets in the admin panel, resulting in improved data load times and enhanced user experience for admin users.",
        "Designed and integrated giftcard management screens, allowing seamless card operations for admins and improving administrative control and transparency.",
        "Successfully deployed the app on Play Store and App Store.",
        "Designed and integrated trade management interfaces in the admin app enabling admin to manage incoming and outgoing trades and transactions.",
        "Integrated REST API endpoints into the app using Stacked and GetX for state management."
      ],
      technologies: ["Flutter", "Dart", "Stacked", "GetX", "REST APIs", "Cryptocurrency", "Payment Integration"]
    },
    {
      company: "Foresight Ridge",
      role: "Junior Flutter Developer",
      startDate: "June 2021",
      endDate: "July 2022",
      location: "Nigeria",
      description: `Shkula is a digital school management platform designed to strengthen the connection between schools and parents 
      through convenient, accessible communication channels. Contributed to end-to-end development lifecycle from planning to deployment.`,
      achievements: [
        "Spearheaded the development of key mobile app features, contributing to the end-to-end lifecycle from planning and requirement gathering to deployment on Google Play Store for beta testing.",
        "Designed and implemented intuitive attendance management screens for the teacher's app, reducing manual tracking time.",
        "Developed core UI screens for both parent and teacher applications, enhancing user experience and enabling seamless communication.",
        "Built daily child activity reporting screens, enabling real-time progress updates and improving parent engagement during beta trials.",
        "Integrated Firebase Cloud Storage for efficient, secure data handling, supporting scalable storage for thousands of records."
      ],
      technologies: ["Flutter", "Dart", "Firebase Cloud Storage", "UI/UX Design", "Beta Testing"]
    },
    {
      company: "Cholatrek",
      role: "Intern Instructor",
      startDate: "February 2021",
      endDate: "March 2022",
      location: "Nigeria",
      description: `Teaching and mentorship role focused on mobile development education. 
      Provided instruction on programming fundamentals and Flutter development while mentoring students on real-world projects.`,
      achievements: [
        "Taught fundamentals of Programming and Mobile development in the scope of Flutter framework and Dart programming language.",
        "Provided mentorship on real-life projects, helping students apply theoretical knowledge to practical applications.",
        "Mentored students in Flutter and Dart, guiding hands-on app development projects to reinforce mobile development skills.",
        "Introduced tools and best practices to make development easier and more efficient for new developers."
      ],
      technologies: ["Flutter", "Dart", "Programming Fundamentals", "Mentoring", "Project Management"]
    }
  ],
  projectData: [
    {
      name: "GeoTaask",
      title: "GeoTaask",
      results: [
        { title: "GeoTaask is a Flutter-based mobile application that revolutionizes task management by combining location awareness with smart reminders. Users can create location-specific tasks that automatically trigger when they enter predefined geographical areas, making it perfect for context-sensitive productivity and daily life management." },
        { title: "Developed location-based task management Flutter application using BLoC pattern for state management, enabling users to create and manage location-triggered reminders displayed on an interactive map interface" },
        { title: "Implemented geofencing functionality with automatic task triggering when users enter predefined geographical areas, enhancing productivity through context-aware notifications."},
        { title: "Include geofencing for automatic triggers." },
      ],
      link: "",
      code: "https://github.com/Praise650/geotaask",
      image: getImagePath("/project/shapexui.png"),
      tools: ['Flutter', 'Google Map', 'Google Places Api', 'Bloc'],
      role: 'Creator',
    },
    {
      name: "Queens-Tree",
      title: "Queens Tree",
      results: [
        { title: "Developed a plant identifier application" },
      ],
      code: "https://github.com/Praise650/queens-tree",
      link: "",
      image: getImagePath("/project/debate.png"),
      tools: ['Flutter', 'Plant.id', 'Firebase Auth', 'Cloud Storage', 'Firebase Storage'],
      role: 'Mobile Developer',
    },
    {
      name: "Note Now",
      title: "Note Now.",
      results: [
        { title: "A note taking app with remote backup." },
        { title: "Theme based design to switch between light and dark." },
        { title: "Voice and picture note." },
      ],
      link: "",
      code: "https://github.com/Praise650/note-now",
      image: getImagePath("/project/noter.png"),
      tools: ['Flutter', 'Firebase Auth', 'Cloud Storage', 'Firebase Storage'],
      role: 'Mobile Developer'
    },
    // {
    //   name: "PromptForAi",
    //   title: "Discover & Share AI Prompts.",
    //   results: [
    //     { title: "Discover AI Prompt and Share AI" },
    //     { title: "Create new prompt" },
    //     { title: "Also you can Search other people prompt" },
    //   ],
    //   link: "https://prompt-for-ai.vercel.app/",
    //   image: '/project/promtForAi.png',
    //   tools: ['NextJs', 'MongoDB', 'NextAuth'],
    //   role: 'Full Stack Developer',
    //   code: 'https://github.com/yogesh2104/promptForAI'
    // },
    // {
    //   name: "Smart Health Advisor",
    //   title: "Predicts Diseases Based On Symptoms",
    //   results: [
    //     { title: "Discover AI Prompt and Share AI" },
    //     { title: "Create new prompt" },
    //     { title: "Also you can Search other people prompt" },
    //   ],
    //   link: "https://smart-health-advisor.vercel.app/",
    //   image: '/project/health.png',
    //   tools: ['NextJs', 'Shadcn UI', 'Django', 'Python'],
    //   role: 'Frontend Developer',
    //   code: 'https://github.com/saurabhsharma104/Smart-Health-Advisor',
    // },
    // {
    //   name: "Coding InterView",
    //   title: "Coding-Interview-University Repo.",
    //   results: [
    //     { title: "This is simple static web page" },
    //     { title: "Simplified version of coding-interview-university github repo." },
    //   ],
    //   link: "https://yogesh2104.github.io/CodingInterView/",
    //   image: '/project/iViewer.png',
    //   tools: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    //   role: 'Frontend Developer',
    //   code: 'https://github.com/yogesh2104/CodingInterView',
    // },
    // {
    //   name: "ThreeJs Diamond",
    //   title: "ThreeJs Diamond Customizer.",
    //   results: [
    //     { title: "This is 3D Dimaond Renderer." },
    //     { title: "Allow to change ring and diamond color" },
    //   ],
    //   link: "https://threejsdesign.vercel.app/",
    //   image: '/project/threejs.png',
    //   tools: ['Nextjs', 'Javascript', 'ThreeJS', 'Zustand', 'Tailwind CSS'],
    //   role: 'Frontend Developer',
    //   code: null,
    // },
  ],
};