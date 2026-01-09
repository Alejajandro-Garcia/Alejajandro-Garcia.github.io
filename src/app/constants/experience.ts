import { Experience } from "../types/types";

export const experience: Experience[] = [
  {
    company: "Lightspeed",
    title: "Software Developer",
    start: "April 2025",
    end: "November 2025",
    bullets: [
      "Provided 10+ tech documents and data models to ease the acquisition and translate from Bytekitchen onto Lightspeed’s suite of products in Hospitality",
      "Created a web application repository in React/Next.js for executing tasks for a business location’s employees, which was also integrated within the company’s Circle CI/CD pipelines and developmental environments via Docker and Kubernetes clusters",
      "Utilized AI tools and models, React/Next.js, and typescript in order to develop the foundation of ByteKitchen features in Lightspeed and using React Query to cache and fetch data and configurations per business location",
      "Created the foundation of ByteKitchen features in Lightspeed’s mobile application via React Native that executes the web application above through a web view and interaction between mobile app and web app",
    ],
    images: [
      "Alejandro-Garcia-Portfolio/backoffice-login.png",
      "Alejandro-Garcia-Portfolio/backoffice.png",
      "Alejandro-Garcia-Portfolio/backoffice-accounting.png",
    ],
    mobile: false,
  },
  {
    company: "Byte Kitchen",
    title: "Full Stack Developer",
    start: "November 2024",
    end: "April 2025",
    bullets: [
      "Sole full stack developer of ByteKitchen that led development for both the frontend and backend of 4 products and 2 mobile applications utilized by 20 restaurants for operations",
      "Oversaw the acquisition of ByteKitchen via reducing 450 vulnerabilities and licensing issues to zero, providing 20+ tech documents for software architecture, and led code walkthroughs for the entire suite of products",
      "Created CRON jobs on Firebase as typescript functions that used AI to analyze email orders, use Sendo and Twilio SendGrid integrations for alerts, and recurring creation of data instances in Firestore for restaurant management",
      "Iterated on the UI for 4 different web apps hosted on Vercel for restaurant operations via React, Next.js, and Typescript which allows for configurations for employment, task management, recipe preparation, and catering orders along with displaying live reports for all locations of a business",
      "Developed UI for KDS systems utilizing React Native and Expo for employees to execute tasks for restaurant management, time and attendance management, and recipe preparation",
      "Created several tRPC functions as REST APIs per application for CRUD operations to Firestore database along with integrating external APIs such as Square, Gmail, and 10+ catering channels",
    ],
    images: [
      "Alejandro-Garcia-Portfolio/bytecheck-image.png",
      "Alejandro-Garcia-Portfolio/bytecater-image.png",
      "Alejandro-Garcia-Portfolio/byteshift-image.png",
      "Alejandro-Garcia-Portfolio/byteprep-image.png",
    ],
    mobile: false,
  },
  {
    company: "Nisum Technologies",
    title: "Full Stack Developer",
    start: "July 2022",
    end: "June 2024",
    bullets: [
      "Architected and maintained 10+ cloud systems tailored for extracting from relational databases, data processing and transformation, and loading to NoSQL databases of 15,000,000+ Safeway products utilizing Spark, Kafka, Azure, Java, MongoDB, and PostgreSQL",
      "Cleaned up 2,000,000+ outdated production-level records hosted on non-relational databases like MongoDB, resulting in a 20% increase in data accuracy by developing Python scripts on Azure",
      "Improved the Safeway catalog RESTful API utilized by other microservices and teams, which led to 14% error rate reduction in development, by utilizing Java, Kafka, Spark, Spring Boot, and cross-team collaboration",
      "Created an Inventory Management System based on client-feedback by leading 15 other junior engineers via code reviews, design patterns, and development frameworks such as Agile/SCRUM (Jira, Confluence, React, Spring Boot, Java)",
      "Automated tests by implementing unit testing and TDD / BDD best practices, which increased use-case coverage from 65 to 90% for the entire project through Junit and Cucumber",
    ],
    images: [],
    mobile: false,
  },
  {
    company: "Ride_Share",
    title: "Full Stack Developer",
    start: "July 2022",
    end: "June 2024",
    bullets: [
      "Crafted a user interface utilizing React Native and Figma, designing and implementing 10+ pages and components for delivering a list of carpooling posts tailored to location, destination, and scheduling requirements",
      "Collaborated with a team in a disciplined agile development environment using Jira, researching algorithms for over 20 use cases in system design, digital innovation, and UI/UX design",
      "Integrated backend functionality for handling account creation and storing rider/driver posts, implementing over 7 API endpoints and ensuring efficient data management in the system database using MongoDB, Node.js, and Express",
    ],
    images: [
      "Alejandro-Garcia-Portfolio/login.png",
      "Alejandro-Garcia-Portfolio/rider-or-driver.png",
      "Alejandro-Garcia-Portfolio/rider-homepage-no-query.png",
    ],
    mobile: true,
  },
  {
    company: "Cooking with Crumbs",
    title: "Frontend Engineer",
    start: "July 2022",
    end: "June 2024",
    bullets: [
      "Engineered numerous pages and components using mobile development technologies such as React Native and Expo, rendering content based on 5000+ recipes from the spoonacular API and filtering based on user's dietary preferences and real-time ingredient inventory",
      "Conceptualized and designed 25+ use case designs using Figma for software architecture, employing iterative design techniques and refining the interface based on peer feedback",
    ],
    images: [
      "Alejandro-Garcia-Portfolio/cooking-dashboard.png",
      "Alejandro-Garcia-Portfolio/home-shreya.png",
      "Alejandro-Garcia-Portfolio/saved-recipes.png",
    ],
    mobile: true,
  },
  {
    company: "IntElect",
    title: "Frontend Engineer/Data Scraper",
    start: "July 2022",
    end: "June 2024",
    bullets: [
      "Learned React.js and Selenium, in order to help develop and debug 20+ reusable UI components through a modular testing framework to ensure TDD and quality.",
      "Extracted skill information of 4,000+ LinkedIn/Indeed job postings to recommend students, increasing keyword extraction efficiency and reducing manual data extraction by 15% by prototyping machine learning models, Scrapy, and Selenium.",
    ],
    images: [],
    mobile: false,
  },
];
