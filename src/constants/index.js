
const navLinks = [
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 2, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Github Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Java\nDeveloper",
    modelPath: "/models/java-logo.glb",
    scale: 0.95,
    rotation: [1.2, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
    {
    name: "Flutter Developer",
    modelPath: "/models/flutter-logo.glb",
    scale: 0.95,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
];

const expCards = [
  {
  review: "Saifullah worked sincerely and diligently, actively involved in the projects and tasks assigned to him. we wish him success in his future endeavors.",
    // imgPath: "/images/exp1.png",
    name: "IMARA SOFTWARE SOLUTIONS (PVT) LTD",
    logoPath: "/images/logo11.png",
    title: "Software Integration Intern",
    date: "June 2024 - December 2024",
    responsibilities: [
      "Designed and implemented software integrations and automation workflows using Make.com and Zapier.",
      "Streamlined processes by automating repetitive tasks, improving operational efficiency.",
      "Ensured robust system performance through testing and continuous improvement.",
    ],
  },
  {
    review: "Saifullah’s work as a Flutter developer was exceptional. He consistently delivered high-quality, user-friendly mobile applications and approached every task with a strong problem-solving mindset.",
    // imgPath: "/images/exp2.png",
    name: "MBRYON TECH (PVT) LTD",
    logoPath: "/images/logo22.png",
    title: "Flutter Developer Intern",
    date: "October 2023 - March 2024",
    responsibilities: [
      "Developed cross-platform mobile applications using Flutter and Firebase, enhancing user experience.",
      "Contributed to the ROSCAS project, designing, developing, and deploying a mobile application.",
      "Integrated backend services and APIs with Flutter, ensuring seamless data exchange.",
    ],
  },
  {
    review: "Saifullah was a reliable and detail-oriented Administrator. He efficiently managed operational tasks, maintained excellent records, and supported the team with strong organizational and communication skills.",
    // imgPath: "/images/exp3.png",
    name: "IDEAL IT SOLUTIONS (PVT) LTD",
    logoPath: "/images/logo33.png",
    title: "Administrator",
    date: "November 2022 - September 2023",
    responsibilities: [
      "Managed daily operations, ensuring seamless communication and coordination across teams.",
      "Oversaw and maintained IT infrastructure, ensuring reliability and uptime.",
      "Provided administrative support, including scheduling, documentation, and reporting.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/saifullahhaaris",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/saifullahhaaris",
  },
  {
    name: "youtube",
    imgPath: "/images/youtube.png",
    url: "https://www.youtube.com/@saifullahhaaris",
  },
];

const educationCards = [
  {
    institute: "University of Westminster (IIT)",
    degree: "BEng.(Hons) Software Engineering",
    duration: "Jan 2022 - Present",
    highlights: [
      "Specialized in Java and Full-Stack Development.",
    ],
  },
  {
    institute: "Zahira College",
    degree: "GCE Advanced Level ",
    duration: "May 2018 - Nov 2020",
    highlights: [
      "successfully completed and passed all 3 subjects",,
    ],
  },
  {
    institute: "Nooraniya M.M.V.",
    degree: "GCE Ordinary Level",
    duration: "December 2017",
    highlights: [
      "Achieved 5A's and 4C including distinction in Mathematics and English.",
    ],
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
 educationCards,
};
