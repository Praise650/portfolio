export const BLUR_DELAY = 0.04

export const DATA = {
  personalData: {
    name: "Praise Afuwape",
    description: `Hi there!, I am a skilled full-stack developer based Nigeria, with a BSc in Computer Science.  
    Specializing in both mobile app and web development, I have successfully delivered several live projects that empower businesses and users.  
    With a strong command of modern technologies, I build seamless, innovative solutions tailored to real-world needs.  
    I am passionate about creating impactful tech for communities and enterprises.`,
    // description:"Hey there!. I enjoy creating kickass websites and web/mobile apps, ones that suit your desires and needs using latest technologies and cleanest design patterns.",
    image: '/hero.jpg',
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
    resume: "/PraiseAfuwape.pdf",
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
      company: "Accessivo",
      role: "Mobile Developer",
      startDate: "April 2025",
      endDate: "June 2025",
      location: "Kwara, NG",
      technologies: ["Fluter", "Dart", "fl_charts", "Provider", "Git", "Github Actions", "CI/CD"]
    },
    {
      company: "Klama",
      role: "Full Stack Developer",
      startDate: "March 2024",
      endDate: " May 2025",
      location: "Lagos NG",
      technologies: ["Flutter", "Laravel", "Tailwind CSS", "SQL", "Stacked", "Next.js", "Postman"]
    },
    {
      company: "Aipalbot",
      role: "Mobile Developer",
      startDate: "Aug 2020",
      endDate: "June 2024",
      location: "San Francisco, USA",
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
      image: '/project/shapexui.png',
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
      image: '/project/debate.png',
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
      image: '/project/noter.png',
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