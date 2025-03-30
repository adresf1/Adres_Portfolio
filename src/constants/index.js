import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "JS", icon: "https://w7.pngwing.com/pngs/113/458/png-transparent-javascript-logo-comment-html-markup-language-analitycs-angle-text-rectangle-thumbnail.png" },
  { title: ".Net", icon: "https://img.icons8.com/color/600/net-framework.png" },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "SQL", icon: "https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-sql-data-database-512.png" },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "C", icon: c},
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: java },
  { name: "git", icon: git },
  { name: ".Net", icon: "https://img.icons8.com/color/600/net-framework.png" },
  { name: "DevOps", icon: "https://kongwp.imgix.net/wp-content/uploads/2021/08/partial-devops-lifecycle.png?auto=compress%2Cformat" },

];

export const experiences = [
  {
    title: "Via Universty college",
    company_name: "Software Engineering",
    icon: "https://nyuddannet.dk/images/dynamic/company/logo/32443",
    iconBg: "#c0c0c0",
    date: "aug 2023 - jan 2027",
    points: [
      "As a Software Engineering student, I learn to design, develop, and maintain software systems. I study programming, algorithms, system architecture, databases, networking, security, and testing to build reliable and efficient applications. I also explore topics like embedded systems, distributed computing, and cloud technologies. With a passion for technology, I strive to create innovative and high-quality software solutions.",
    ],
  },
  {
    title: "Fredericia gymnasium",
    company_name: "Math A, Samf A",
    icon: "https://cdn.theorg.com/b0479a4e-2342-41f5-9823-67ff9fc0317a_small.jpg",
    iconBg: "#ffffff",
    date: "aug. 2020 - jun 2023",
    points: [
      ,
    ],
  },
  
];

export const projects = [
  {
    name: "Greenhouse (Embedded) (Currently Working On)",
    description:
      "Designing IoT solutions with CI/CD, hardware programming, cloud backend, and DevOps. Developing an IoT-based greenhouse integrated with machine learning and a frontend solution.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "CI/CD", color: "green-text-gradient" },
      { name: "DevOps", color: "pink-text-gradient" },
      { name: "Cloud", color: "yellow-text-gradient" },
      { name: "Machine Learning", color: "yellow-text-gradient" },
      { name: "React, Js", color: "blue-text-gradient" },
    ],
    image: "https://www.boltiot.com/hs-fs/hubfs/Projects%20images%20and%20videos/Smart%20Green%20House%20System%20Using%20Bolt%20IoT/cover%20image.jpg?width=600&name=cover%20image.jpg",
    source_code_link: "https://github.com/adresf1/Sep4_M/tree/main/TestProject1",
  },
  {
    name: "Car Rental System",
    description:
      "Focused on the design and implementation of distributed systems, security risks, and version control. Developed a car rental system using a microservices architecture with REST and gRPC for communication, Hibernate for the relational database, and .NET with Blazor for the frontend. Implemented JWT authentication.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "Blazor", color: "pink-text-gradient" },
      { name: "REST", color: "pink-text-gradient" },
      { name: "gRPC", color: "pink-text-gradient" },
      { name: "Hibernate", color: "pink-text-gradient" },
      { name: "JWT ", color: "pink-text-gradient" },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvmhPp_k2rV3OWmj_wVU0BZYiiY6skxBY3MpYorWYEz41I2_kbZ0NImuflMt0HWOfhY4&usqp=CAU",
    source_code_link: "https://github.com/HiroshikunDK/VIA-SEP3-GRP3-Biludljening",
  },
  {
    name: "Online Shopping Cart",
    description:
      "Developed client/server systems with a focus on UML, SQL, unit testing, and Scrum. As a team, we built an online shopping cart system based on SOLID principles for maintainability and scalability.",
    tags: [
      { name: "Java, JavaFX, Design Patterns (Observer, Multiton, MVVM), Sockets/Client-Server System.", color: "blue-text-gradient" },
      
    ],
    image: "https://www.europarl.europa.eu/resources/library/images/20160609PHT31661/20160609PHT31661_original.jpg",
    source_code_link:
      "https://github.com/adresf1/indk-bssystem",
  },
  {
    name: "Project Management - Single-User System",
    description:
      "For a construction company, the system monitors project progress and expenses while providing a website that displays real-time updated data",
    tags: [
      { name: "Java, JavaFX, JavaScript, XML, HTML", color: "blue-text-gradient" },
    ],
    image: "https://www.adm.ee/wordpress/wp-content/uploads/2023/08/JAVA.png",
    source_code_link: "https://github.com/adresf1/Sep1",
  },

];
