import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import a1 from "../assets/images/a1.webp";
import a2 from "../assets/images/a2.webp";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.webp";


export const headlines = [
    "Hi, I'm Aicha.",
    "I'm a Software Developer",
    "Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/RadiantVixen/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub: null,
        description: 'A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'ChatGenius',
        image: chat,
        linkGithub: 'https://github.com/RadiantVixen/ChatGenius',
        linkOnline: 'https://chat-genius-puce.vercel.app/',
        description: 'A web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/RadiantVixen/History-Tracer',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
    {
        title: 'InstaWall',
        image: insta,
        linkGithub: 'https://github.com/RadiantVixen/InstaWall',
        linkOnline: null,
        description: 'InstaWall is a mobile application that allows users to discover, search, like, and share wallpapers from the Unsplash API.',
        techStack: ['Dart', 'Flutter', 'Firebase']
    },
    {
        title: 'PenX',
        image: pen,
        linkGithub: 'https://github.com/RadiantVixen/PenX',
        linkOnline: 'https://pen-x.vercel.app/',
        description: 'A blog application built with React. It allows users to create and publish blog posts, as well as view and comment on other users\' posts.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
];

export const skillsWork = [
    'Go',
    'Java',
    'NodeJS',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'AWS',
];

export const certificates = [
    'CompTIA  A+',
    'Jenkins',
    'Traefik',
    'GitHub Actions',
];

export const articles = [
    {
        title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
        resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
        url:
            "https://medium.com/@consolevexin/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-4430cb3feeda",
        image: a1
    },
    {
        title: "How AI can inherit our biases",
        resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
        url: "https://medium.com/@consolevexin/how-ai-can-inherit-our-biases-daf67407fe8d",
        image: a5
    },
    {
        title: "Google Search vs Local PC Search",
        resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
        url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
        image: a4
    },
    {
        title: "The JavaScript Universe: Imperfections and Essential Insights",
        resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
        url:
            "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
        image: a2
    },
];


export const metadata = {
    title: "Aicha Atki",
    description: "A collection of my work showcasing my skills and creativity.",
    imageURL: "data:image/webp;base64,UklGRn4FAABXRUJQVlA4IHIFAADwHACdASpYAHUAPpE8mUelo6KhLraLsLASCWMAyfjbEykRQAf5nEYWbvZvj0TyZceoiaaPpjkpF44l/TuqJjn96w48TqHmKfYj5nWGHwuBz06EqBfnSgQrWHNm8z1dX0TE8W2nRhXWBQYpOZ2DzG+wM+gNZBEsKbtii8ehiqHST/ITxt2xVCPz4PC+rDiPmWipHw2QFzIpdy0tblIWeVGZzpdAxRW0AdGKIds0ZM8CXT2MM/yosaj8OyZlhp2UvL60OIc62kkfbl8vjkE4zK0KihP8Cbh5i8LEBgG6YbxwTOiZz24XGhGPsJveOSY5cQAA/vqnsZ3OhicHn+3c/QDBPcfbCD/m+6KnFpn7vZUmQ+55q6JZZXboNJZZD++rmqtFdoV814QxPScvAoeVWkCbpne7Thrnov4NbHI7WABZsDOJ+uxRQtRCekACO/VlcvMlMJWT+jKItmVUDvWNLBbq7BXZaRMbVTPWCNnlohzD7YxC9MDHfShQGF5R7dfKGTRUayYVQ8F63MGnXjo2OxLTQcoU9dys7wmn2jzNHWK4gFZUcjbnNRRi+b1X/Rx/WaPGw8A5zhcg5rStbUxLqpD9qOMqLj7ApGyE7WIof03oJTNAc6MOct5NobjWzuQ6cwcmorGunzkdqx6xH1oHK0701HsxktHqNKkYooDUYJrP00/Pk6VZKrt67MmVCuHpqTSiAF280AaJBOxQKy2eUzm6Z8YR4qC34uuvKHaImz+s9bCeXy+PGMHYKtV7UaW72QObRA4uGt2i8KWhC1I0zqBWO5xnSO7Ajh2CRvn+nYxqXTgJvudQRZ3zsM9042O9Ewd7IcLZnMKWVMF40lYXdNE9ei6D6DQ0GB3wTbT6x/oOuqnIz62Kzip00thn5y/b5WARk7gmXjAcCtF6oUwKaGoF5m+1NdRq/GF96vGzfIbRjBc4gjDYfGAo1X9C3ynhH0zLJYkx58uH7Dk1cCa8hNa5TEX8dLDUcfGpdcXsaRbZWWSkZIap5rEi1FuU9kMDCegJDVw+HROUGtLh79BeI7xuuXnPOVf0Z/k1FMyf55+NpUxpYxLIsRBpPMAPkU3GLn9b98mJalwTbcADJYIHPpK1u1bTB9cUkbtCC5gnCwHlopVwr7LzaoT+3RCQI1Q78DeksokrbQlMjdElIwihVHFC/tVbV4NSxefhYOUQ8VLH711vS4ZymBLAfDvl7CnajbOdHUNXuGmI+KztHiYBa7mINWvgLjD+QbYQqENHbG9xO1JXAciEpWl74ZNQaTxvIwH1QTleMfIQ4QrlHAe6FnrksdMshFT+p8J35Kwcmmzf5W+uTuh8HXq/25iMIOs9DqaGlJGoWcl1FBpfWeEjzbyNtScd56JXzUMf5PB0HnZXAaevY8wbKwRT737QV5ZKn3S4EJe8iUIsyjaxdxyEJLsMv4JSekwOx3Z4rW+Ru6S1HgnFs2+j2JEI5aTgVzz2OJtcORksXR+7fD05gZRrbfXLybKM9XXIfJVEOabqoNoETlQBFmvsyQQaT/0PYilAcNWS1KpW58A+rJsHrkCsQgol8l8jYphy3CZo/HjxkrsD9aQanHAwrK+jG/uVlViJvTGKXACcc1w69fUykQTCf0XsidmEJJRVd4Ba01xhhcex1Pj0Vt436e4X5daeqG6uQWfhL0to0M1d+0OGSidcCh5n3exkVuEjyIx6S4ltaBQRyONUpkxGpeNAPTUEmoeOqt6vH0+r7OK4ZiomS3K6CSSYbcgB/gHcvQDIj3ipQAbSkUHmYrcNhC9DIE8AM2BTX/L7KiaNo3AaBGb9EmwBGvj0fO0cIMMrdAez9KrEZD7TDZaiywNbxvCd62LqgbB+RbcAAA==",
    pageUrl: "https://sprightly-duckanoo-aa94bf.netlify.app"
};

