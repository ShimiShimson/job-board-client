import { Job } from "../types/job";

export let JOBS: Job[] = [
  {
    id: "1f6cdc26-1e05-48a7-b2c1-9d7d50e92f94",
    title: "Software Engineer",
    shortDesc: "Build and maintain our web applications",
    salary: "10000-20000",
    added: "01/10/23",
    longDesc:
      "As a Software Engineer at our company, you will be responsible for building and maintaining our web applications. You will work with a team of engineers to design, develop, and test new features, as well as fix bugs and improve performance. You will also work closely with product designers and other stakeholders to ensure that our applications meet the needs of our users.",
    requiredStack: ["JavaScript", "HTML", "CSS", "Node.js", "React"],
    location: {
      city: "San Francisco",
      country: "USA"
    },
    typeOfHiring: ["Onsite", "Remote", "Hybrid"]
  },
  {
    id: "459a9a48-2aa8-47c5-bf1a-b80f50c65b5e",
    title: "Product Designer",
    shortDesc: "Design and develop user interfaces for our products",
    salary: "7000-11000",
    added: "01/10/23",
    longDesc:
      "As a Product Designer at our company, you will be responsible for designing and developing user interfaces for our products. You will work closely with product managers and engineers to understand the needs of our users and create designs that are both user-friendly and visually appealing. You will also be responsible for prototyping and testing your designs to ensure that they work as expected.",
    requiredStack: ["Figma", "Sketch", "Adobe XD", "HTML", "CSS"],
    location: {
      city: "New York",
      country: "USA"
    },
    typeOfHiring: ["Remote", "Hybrid"]
  },
  {
    id: "620c2c3f-2123-4b10-ba5f-ffc297971de2",
    title: "Data Scientist",
    shortDesc:
      "Collect, analyze, and interpret data to drive business decisions",
    salary: "5000-10000",
    added: "20/09/23",
    longDesc:
      "As a Data Scientist at our company, you will be responsible for collecting, analyzing, and interpreting data to drive business decisions. You will use a variety of data science tools and techniques to identify trends, patterns, and outliers in our data. You will also be responsible for creating reports and presentations to communicate your findings to stakeholders.",
    requiredStack: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
    location: {
      city: "London",
      country: "UK"
    },
    typeOfHiring: ["Hybrid"]
  },
  {
    id: "d34497fe-da23-4ac1-86ef-89fa91bf1cce",
    title: "Marketing Manager",
    shortDesc:
      "Develop and execute marketing campaigns to promote our products and services",
    salary: "6000-9000",
    added: "30/09/23",
    longDesc:
      "As a Marketing Manager at our company, you will be responsible for developing and executing marketing campaigns to promote our products and services. You will work with a team of marketers to create and implement marketing strategies across a variety of channels, including online, offline, and social media. You will also be responsible for tracking and analyzing the results of your campaigns to ensure that they are meeting their objectives.",
    requiredStack: ["Google Ads", "Facebook Ads", "Twitter Ads", "SEO", "SEM"],
    location: {
      city: "Paris",
      country: "France"
    },
    typeOfHiring: ["Onsite", "Remote"]
  },
  {
    id: "e542cf97-cd1a-4b42-9e9d-47ffe883458e",
    title: "Front-End Developer",
    shortDesc: "Develop and maintain our user interfaces",
    salary: "8000-12000",
    added: "02/10/23",
    longDesc:
      "As a Front-End Developer at our company, you will be responsible for developing and maintaining our user interfaces. You will use a variety of front-end development technologies, such as HTML, CSS, and JavaScript, to create and implement responsive and user-friendly interfaces. You will also work with back-end developers to integrate the front-end with our server-side applications.",
    requiredStack: ["JavaScript", "HTML", "CSS", "React", "Vue.js"],
    location: {
      city: "Berlin",
      country: "Germany"
    },
    typeOfHiring: ["Remote", "Hybrid"]
  },
  {
    id: "52d7387d-4d0c-46c1-b39c-8a930e69944f",
    title: "Back-End Developer",
    shortDesc: "Develop and maintain our server-side applications",
    salary: "9000-13000",
    added: "02/10/23",
    longDesc:
      "As a Back-End Developer at our company, you will be responsible for developing and maintaining our server-side applications. You will use a variety of back-end development technologies, such as Java, Python, or Node.js, to create and implement scalable and reliable applications. You will also work with front-end developers to integrate the back-end with our user interfaces.",
    requiredStack: ["Java", "Python", "Node.js", "Spring Boot", "Express"],
    location: {
      city: "Bangalore",
      country: "India"
    },
    typeOfHiring: ["Onsite", "Remote", "Hybrid"]
  },
  {
    id: "32321fa3-a490-42d0-8cc0-b9744b3bd062",
    title: "Software Engineer",
    shortDesc: "Build and maintain our web applications",
    salary: "10000-20000",
    added: "01/10/23",
    longDesc:
      "As a Software Engineer, you will play a crucial role in developing and maintaining our web applications. You'll work closely with cross-functional teams to design, implement, and optimize software solutions. Your expertise will contribute to the success of our technology initiatives.",
    requiredStack: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"],
    location: {
      city: "San Francisco",
      country: "USA"
    },
    typeOfHiring: ["Onsite", "Remote", "Hybrid"]
  },
  {
    id: "fa293cab-4b72-45d1-b0e5-6e64b5305118",
    title: "Product Designer",
    shortDesc: "Design and develop user interfaces for our products",
    salary: "7000-11000",
    added: "01/10/23",
    longDesc:
      "As a Product Designer, you will be responsible for crafting intuitive and visually appealing user interfaces for our products. You'll collaborate with stakeholders to understand user needs and create design solutions that enhance the user experience.",
    requiredStack: [
      "UI/UX Design",
      "Sketch",
      "Adobe Creative Suite",
      "Prototyping Tools"
    ],
    location: {
      city: "New York",
      country: "USA"
    },
    typeOfHiring: ["Remote", "Hybrid"]
  },
  {
    id: "2e48a1e3-4a3a-4ff7-b45c-5b9f8a5bb8da",
    title: "Data Scientist",
    shortDesc:
      "Collect, analyze, and interpret data to drive business decisions",
    salary: "5000-10000",
    added: "20/09/23",
    longDesc:
      "Join our team as a Data Scientist and leverage your skills to collect, analyze, and interpret data that will drive critical business decisions. Your insights will have a direct impact on our strategy and help us stay competitive in the market.",
    requiredStack: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "SQL",
      "Data Visualization"
    ],
    location: {
      city: "London",
      country: "UK"
    },
    typeOfHiring: ["Hybrid"]
  },
  {
    id: "469f5487-af18-4d38-a3b7-c80e5398c972",
    title: "Marketing Manager",
    shortDesc:
      "Develop and execute marketing campaigns to promote our products and services",
    salary: "6000-9000",
    added: "30/09/23",
    longDesc:
      "As a Marketing Manager, you will lead the development and execution of marketing campaigns to promote our products and services. You'll work closely with the marketing team to create compelling strategies that reach our target audience and drive business growth.",
    requiredStack: [
      "Marketing Strategy",
      "Social Media Management",
      "Content Marketing",
      "Analytics Tools"
    ],
    location: {
      city: "Paris",
      country: "France"
    },
    typeOfHiring: ["Onsite", "Remote"]
  },
  {
    id: "832646b7-e729-4c03-b3ca-dd4f40656933",
    title: "Front-End Developer",
    shortDesc: "Develop and maintain our user interfaces",
    salary: "8000-12000",
    added: "02/10/23",
    longDesc:
      "Join our team as a Front-End Developer and take charge of developing and maintaining our user interfaces. Your expertise in web technologies will be instrumental in delivering seamless and engaging user experiences.",
    requiredStack: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Responsive Design",
      "Web Performance Optimization"
    ],
    location: {
      city: "Berlin",
      country: "Germany"
    },
    typeOfHiring: ["Remote", "Hybrid"]
  },
  {
    id: "2da0baee-91e2-4c77-bbc9-761c84c01f62",
    title: "Back-End Developer",
    shortDesc: "Develop and maintain our server-side applications",
    salary: "9000-13000",
    added: "02/10/23",
    longDesc:
      "As a Back-End Developer, you'll be responsible for developing and maintaining our server-side applications. Your work will ensure the reliability and performance of our systems, ultimately contributing to the success of our technology stack.",
    requiredStack: [
      "Node.js",
      "Express.js",
      "Database Management (e.g., SQL, MongoDB)",
      "API Design",
      "Security Best Practices"
    ],
    location: {
      city: "Bangalore",
      country: "India"
    },
    typeOfHiring: ["Onsite", "Remote", "Hybrid"]
  },
  {
    id: "cf3d3a07-74ab-4bff-ad1d-85056992fb48",
    title: "Quality Assurance Engineer",
    shortDesc: "Test and ensure the quality of our products",
    salary: "6000-10000",
    added: "03/10/23",
    longDesc:
      "Join us as a Quality Assurance Engineer and play a vital role in testing and ensuring the quality of our products. Your meticulous attention to detail and testing expertise will help maintain high-quality standards throughout our development process.",
    requiredStack: [
      "Manual Testing",
      "Automated Testing (e.g., Selenium, Cypress)",
      "Bug Tracking Tools",
      "Test Case Design"
    ],
    location: {
      city: "San Francisco",
      country: "USA"
    },
    typeOfHiring: ["Onsite", "Remote", "Hybrid"]
  },
  {
    id: "58017608-396f-46a0-80ec-56c5f569a797",
    title: "UX Designer",
    shortDesc: "Design user-centered experiences for our products",
    salary: "7000-11000",
    added: "03/10/23",
    longDesc:
      "As a UX Designer, you'll focus on designing user-centered experiences for our products. Your creative insights and user research will shape the way our users interact with our offerings, making their experience both intuitive and delightful.",
    requiredStack: [
      "UI/UX Design",
      "User Research",
      "Prototyping Tools",
      "Usability Testing"
    ],
    location: {
      city: "New York",
      country: "USA"
    },
    typeOfHiring: ["Remote", "Hybrid"]
  }
];