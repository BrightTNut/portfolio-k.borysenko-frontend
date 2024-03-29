import portfolio from '../images/projects/portfolio.png';
import proShop from '../images/projects/proshop.png';
import univer from '../images/projects/university.png';
import erato from '../images/projects/erato.png';
import todo from '../images/projects/todo.png';
import phoneBook from '../images/projects/phone-book.png';
import filmoteka from '../images/projects/filmoteka.png';
import { PORTFOLIO_CODE_URL, PORTFOLIO_DEMO_URL, PROSHOP_CODE_URL, PROSHOP_DEMO_URL, UNIVER_CODE_URL, UNIVER_DEMO_URL, ERATO_CODE_URL, ERATO_DEMO_URL, TODO_CODE_URL, TODO_DEMO_URL, PHONE_BOOK_CODE_URL, PHONE_BOOK_DEMO_URL, FILMOTEKA_CODE_URL, FILMOTEKA_DEMO_URL } from '../utils/urls.js';

export const projects = [
  {
    id: 1,
    title: 'This Project',
    path: portfolio,
    desc: "This React project is designed to showcase the Fullstack developer's professional skills and provides an interface for establishing contact with them for potential collaboration in the future.",
    techStack: ['react', 'react router dom V6', 'react hook form', 'yup', 'framer motion', 'node JS'],
    codeLink: PORTFOLIO_CODE_URL,
    demoLink: PORTFOLIO_DEMO_URL
  },
  {
    id: 2,
    title: 'ProShop',
    path: proShop,
    desc: 'ProShop is an eCommerce platform incorporating a shopping cart, product search, administrative panel, customer reviews, PayPal integration, and a streamlined multi-step checkout.',
    techStack: ['React', 'Node.js', 'Bootstrap', 'Express.js', 'Redux Toolkit', 'MongoDB', 'Paypal'],
    codeLink: PROSHOP_CODE_URL,
    demoLink: PROSHOP_DEMO_URL
  },
  {
    id: 3,
    title: 'University',
    path: univer,
    desc: 'A web application built with React / Redux in two languages for adding university tutors, managing branches (edit, delete), and city-based filtering, with Firebase authentication for secure data access.',
    techStack: ['react', 'react router dom V6', 'react hook form', 'yup', 'i18next', 'redux', 'redux thunk', 'firebase'],
    codeLink: UNIVER_CODE_URL,
    demoLink: UNIVER_DEMO_URL
  },
  {
    id: 4,
    title: 'Erato Hotel',
    path: erato,
    desc: 'A website for a guest house in Greece, where the owner offers short-term vacation rentals directly, featuring cost-effective rental options and providing detailed accommodation information. The website is designed with a responsive layout for various screen sizes.',
    techStack: ['Java Script', 'jQuery', 'CSS 3', 'HTML 5', 'BEM', 'PHP'],
    codeLink: ERATO_CODE_URL,
    demoLink: ERATO_DEMO_URL
  },
  {
    id: 5,
    title: 'Todo List',
    path: todo,
    desc: 'This React project helps you overcome forgetfulness and deadline struggles. It provides a centralized task management system, ensuring you never miss important tasks. Regain control of your productivity effortlessly.',
    techStack: ['react', 'react router dom V5', 'redux'],
    codeLink: TODO_CODE_URL,
    demoLink: TODO_DEMO_URL
  },
  {
    id: 6,
    title: 'Phone Book',
    path: phoneBook,
    desc: 'A React-based application with registration that allows users to create their own phonebook and simplifies contact searching by filtering through entered names. The application also supports both light and dark themes and is available in three languages.',
    techStack: ['react', 'react router dom V5', 'redux', 'i18next'],
    codeLink: PHONE_BOOK_CODE_URL,
    demoLink: PHONE_BOOK_DEMO_URL
  },
  {
    id: 7,
    title: 'Filmoteka',
    path: filmoteka,
    desc: 'An application that lets users watch trailers of new film releases, add popular movies to their library, and control the app using voice commands through the Web Speech API.',
    techStack: ['Java Script', 'CSS 3', 'SASS', 'HTML 5', 'Web Speech API'],
    codeLink: FILMOTEKA_CODE_URL,
    demoLink: FILMOTEKA_DEMO_URL
  },
];