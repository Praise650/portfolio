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
    skill: ["Flutter", "Dart", "Bloc", "Provider", "Hive", "Stacked", "Firebase", "Node.js", "React.js", "Next.js", "Zustand", "Express.js", "MongoDB", "Laravel", "SQL", "Github Actions",],
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
  experiences: [
    {
      company: "Accessivo(TechitCheap)",
      role: "Mobile Developer",
      startDate: "April 2025",
      endDate: "June 2025",
      location: "Kwara, NG",
      description: `At TechitCheap, I served as a Mobile Developer leading the turnaround of a long-delayed fintech application project. 
      I modernized and deployed the app using Flutter, introducing robust architectural patterns (MVVM with Provider), 
      advanced data visualization (using fl_chart), and optimized API handling (with the http package). 
      My contributions significantly improved performance, stability, and user experience, while aligning technical solutions 
      with business goals and stakeholder expectations.`,
      achievements: [
        "Led development of a fintech app in Flutter, implementing time-based graph and cashflow analysis using fl_chart and receipt generation, successfully deploying the project after a two-year delay from previous developers.",
        "Reduced bug reports by 30% through systematic debugging, robust error handling, and code optimization, delivering a stable and reliable fintech application.",
        "Optimized API interactions using http package, streamlining data retrieval and improving response times for a seamless user experience in a high-stakes fintech environment.",
        "Built dynamic financial visualization features with fl_chart, enabling users to analyze cashflow and transaction data across daily, weekly, monthly, and yearly timeframes, improving financial decision-making."
      ],
      technologies: ["Fluter", "Dart", "fl_charts", "Provider", "Git", "Github Actions", "CI/CD"]
    },
    {
      company: "Klama",
      role: "Full Stack Developer",
      startDate: "March 2024",
      endDate: " May 2025",
      location: "Lagos NG",
      description: "At Klama, I contributed to multiple high-impact projects across fintech, logistics, and real estate domains. I led mobile app redevelopment efforts using Flutter and extended into full-stack web development using Laravel and Next.js. I focused on enhancing user experience, system reliability, and performance optimization while managing deployment and security across platforms.",
      achievements: [
        {
          project: "QuickConnect (Bills Payment App):",
          items: [
            "Rebuilt a legacy Flutter-based app with poor usability, resolving critical issues in navigation and payment failures.",
            "Redesigned UI/UX with a modern and intuitive interface, improving accessibility for a broader user base.",
            "Optimized backend payment APIs and improved integration reliability for secure, seamless transactions.",
            "Collaborated with UX designers and stakeholders, implementing user feedback that led to increased user trust and positive app reviews."
          ]
        },
        {
          project: "Enviable Logistics (ELA App):",
          items: [
            "Designed and developed ELA, a cross-platform logistics app using Flutter, achieving a 30% reduction in API response times through optimized data handling.",
            "Ensured smooth performance across iOS and Android by integrating platform-specific features.",
            "Integrated RESTful APIs for real-time data sync and managed source control with Git for efficient collaboration."
          ]
        },
        {
          project: "Abuja Rommates (Shortlet Service):",
          items: [
            "Developed the backend using Laravel, implementing secure REST APIs for property listing, booking, and user management.",
            "Built the frontend using Next.js, delivering a responsive web app, admin dashboard, and landing page.",
            "Handled full deployment on Namecheap (including APIs, admin panel, and frontend), ensuring system-wide security and accessibility."
          ]
        }
      ],
      technologies: ["Flutter", "Laravel", "Tailwind CSS", "SQL", "Stacked", "Next.js", "Postman"]
    },
    {
      company: "Aipalbot",
      role: "Mobile Developer",
      startDate: "Aug 2022",
      endDate: "June 2024",
      location: "San Francisco, USA",
      description: "Developed and maintained mobile application using Flutter, focusing on user experience optimization and robust architecture implementation.",
      achievements: [
        "Built intuitive UI screens with Flutter, boosting user engagement by 25% based on feedback analytics.",
        "Integrated RESTful APIs and SOAP web services, streamlining authentication and data rendering across platforms.",
        "Designed MVVM architecture for UI components, improving code maintainability and scalability.",
        "Leveraged Android Studio, Git, and GitHub for development and version control."
      ],
      technologies: ["Dart", "Flutter", "Firebase"]
    },
    // {
    //   company: "Aipalbot",
    //   role: "Mobile Developer",
    //   startDate: "Feb 2022",
    //   endDate: "Apr 2022",
    //   location: "Noida, IN",
    //   technologies: ["Java", "Apex lightning", "SOQL"]
    // },
  ],
  projectData: [
    {
      name: "GeoTaask",
      title: "GeoTaask",
      results: [
        { title: "This is an app that lets you create location-based tasks or reminders displayed on a map." },
        { title: "Remind users to buy groceries when near a store." },
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