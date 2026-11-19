/* ==========================================================================
   Aicha Atki Portfolio - JavaScript Application Logic
   Interactive Brain Neural particle canvas, GitHub/LinkedIn integrations,
   standalone live demo router, terminal CLI, & typewriter effect.
   ========================================================================== */

// --- DATA STORE ---
const PORTFOLIO_DATA = {
  profile: {
    name: "Aicha Atki",
    username: "RadiantVixen",
    title: "Machine Learning & AI Engineer",
    campus: "42 Network",
    email: "aichaatki@gmail.com",
    linkedin: "https://linkedin.com/in/aicha-atki",
    github: "https://github.com/RadiantVixen",
    bio: "Computer Science student at 42 Network with projects across data science and machine learning, web and mobile development, Web3, DevOps, algorithms, C/C++ systems programming, and infrastructure."
  },

  skills: [
    {
      category: "AI & Machine Learning",
      icon: "cpu",
      items: [
        { name: "Neural Networks (Multilayer Perceptrons)", level: 92 },
        { name: "Reinforcement Learning (Q-Learning / RL)", level: 90 },
        { name: "One-Vs-All Logistic & Linear Regression", level: 95 },
        { name: "Heuristic Search & Minimax Algorithms", level: 94 },
        { name: "EEG Signal Processing & Brainwave Analysis", level: 90 },
        { name: "Python (NumPy, Pandas, Data Analysis)", level: 94 }
      ]
    },
    {
      category: "Software & Web Engineering",
      icon: "code",
      items: [
        { name: "C & C++ (C++98 to C++20)", level: 95 },
        { name: "Mobile (Flutter & Supabase)", level: 85 },
        { name: "Backend (Django, NestJS, REST APIs)", level: 88 },
        { name: "Frontend (React, WebSockets, HTML/CSS)", level: 88 }
      ]
    },
    {
      category: "Tools & Systems",
      icon: "tool",
      items: [
        { name: "Git, GitHub & Version Control", level: 95 },
        { name: "Docker & Container Infrastructure", level: 90 },
        { name: "Linux Systems, Shell & Scripting", level: 92 },
        { name: "Networking, Security & OAuth 2.0", level: 86 }
      ]
    }
  ],

  projects: [
    {
      id: "bci-vortex",
      title: "Total Perspective Vortex — Brain-Computer Interface",
      category: "data-ml",
      date: "Nov 2026",
      shortDesc: "Brain-computer interface research using machine learning and EEG signals.",
      fullDesc: "Explores a brain-computer interface using EEG data and machine learning, combining signal processing and brainwave analysis.",
      tags: ["Python", "Machine Learning", "EEG", "BCI"],
      github: "https://github.com/RadiantVixen/Total-perspective-vortex",
      hasLiveDemo: true,
      demoType: "bci-vortex"
    },
    {
      id: "uber",
      title: "Uber — Taxi Demand Forecasting",
      category: "data-ml",
      date: "Nov 2026",
      shortDesc: "Forecast taxi demand from historical time-series data.",
      fullDesc: "Analyzes temporal patterns in taxi demand and compares forecasting approaches. The project explores stationarity, moving averages, exponential smoothing, SARIMA, AIC-based model selection, validation, and MAE evaluation.",
      tags: ["Python", "Pandas", "Time Series", "Forecasting", "SARIMA"],
      github: "https://github.com/RadiantVixen/Uber"
    },
    {
      id: "understanding-customer",
      title: "Understanding Customer — Intent Classification",
      category: "data-ml",
      date: "Nov 2026",
      shortDesc: "Classify the intent expressed in customer messages using NLP.",
      fullDesc: "An NLP project focused on text preprocessing, sequence representation, and intent classification. The assignment covers recurrent and transformer-based architectures; this description does not assume every architecture was implemented.",
      tags: ["Python", "NLP", "Text Classification", "Deep Learning"],
      github: "https://github.com/RadiantVixen/Understanding-customer"
    },
    {
      id: "myspotify",
      title: "mySpotify — Music Recommendation",
      category: "data-ml",
      date: "Nov 2026",
      shortDesc: "Explore recommendation strategies for music discovery.",
      fullDesc: "A recommender-systems project exploring music recommendations, including non-personalized, content-based, and collaborative-filtering approaches.",
      tags: ["Python", "Recommender Systems", "Content-Based Filtering", "Collaborative Filtering"],
      github: "https://github.com/RadiantVixen/Myspotify"
    },
    {
      id: "churn-prediction",
      title: "Churn Prediction",
      category: "data-ml",
      date: "Oct 2026",
      shortDesc: "Predict whether a customer is likely to stop using a service.",
      fullDesc: "Customer analytics project using classification to estimate churn from customer data. Focus areas include preprocessing, feature engineering, and model evaluation without assuming a specific classifier.",
      tags: ["Python", "Neural Networks", "Classification", "Customer Analytics"],
      github: "https://github.com/RadiantVixen/Churn-prediction"
    },
    {
      id: "tweets",
      title: "Tweets — Sentiment Analysis",
      category: "data-ml",
      date: "Oct 2026",
      status: "Deprecated",
      shortDesc: "Deprecated project in the data science history; retained in the archive.",
      fullDesc: "An archived social-media data project. The exact implementation and techniques should be confirmed from the repository before describing them in a CV.",
      tags: ["Jupyter Notebook", "NLP", "Archived"],
      github: "https://github.com/RadiantVixen/Tweets"
    },
    {
      id: "multilayer-perceptron",
      title: "Multilayer Perceptron",
      category: "data-ml",
      date: "Aug 2026",
      shortDesc: "Implement a feedforward neural network from scratch.",
      fullDesc: "Builds a multilayer perceptron from mathematical foundations, including forward propagation, backpropagation, activation functions, loss calculation, and training.",
      tags: ["Python", "NumPy", "Neural Networks", "Backpropagation"],
      github: "https://github.com/RadiantVixen/Multilayer-Perceptron",
      hasLiveDemo: true,
      demoType: "mlp"
    },
    {
      id: "learn2slither",
      title: "Learn2Slither — Reinforcement Learning",
      category: "data-ml",
      date: "Aug 2026",
      shortDesc: "Train an agent to play Snake through interaction and trial and error.",
      fullDesc: "A reinforcement-learning agent for a Snake environment. The project works with Q-learning, state representation, reward design, and exploration-versus-exploitation strategies.",
      tags: ["Python", "Reinforcement Learning", "Q-Learning", "AI Agent"],
      github: "https://github.com/RadiantVixen/Learn2Slither",
      hasLiveDemo: true,
      demoType: "slither"
    },
    {
      id: "dslr",
      title: "DSLR — Hogwarts House Classifier",
      category: "data-ml",
      date: "Jul 2026",
      shortDesc: "Predict a Hogwarts house with a from-scratch One-vs-All classifier.",
      fullDesc: "A data-science classification project using One-vs-All logistic regression to predict a Hogwarts house from student data. Includes feature analysis, standardization, optimization, and evaluation.",
      tags: ["Python", "Data Science", "Logistic Regression", "Classification"],
      github: "https://github.com/RadiantVixen/Logistic-Regression",
      hasLiveDemo: true,
      demoType: "dslr"
    },
    {
      id: "ft-linear-regression",
      title: "ft_linear_regression",
      category: "data-ml",
      date: "Jan 2026",
      shortDesc: "Implement univariate linear regression and gradient descent from scratch.",
      fullDesc: "Predicts car prices from mileage with a from-scratch linear regression implementation. Covers the cost function, gradient-descent parameter updates, feature scaling, and prediction evaluation.",
      tags: ["Python", "Machine Learning", "Gradient Descent", "Regression"],
      github: "https://github.com/RadiantVixen/ft_linear_regression",
      hasLiveDemo: true,
      demoType: "linear-regression"
    },
    {
      id: "music-room",
      title: "Music-room",
      category: "web-mobile",
      date: "May 2026",
      shortDesc: "Collaborative playlist application spanning mobile, backend, and REST API work.",
      fullDesc: "A collaborative-playlist application involving mobile development, backend development, and REST API creation.",
      tags: ["Python", "Mobile", "Backend", "REST API"],
      github: "https://github.com/RadiantVixen/music-room"
    },
    {
      id: "tokenizeart",
      title: "TokenizeArt — NFT Project",
      category: "web-mobile",
      date: "Mar 2026",
      shortDesc: "Create a non-fungible token and explore Web3 fundamentals.",
      fullDesc: "A Web3 learning project focused on creating an NFT. The repository is the source of truth for the implementation details and technology choices.",
      tags: ["Web3", "NFT", "Blockchain"],
      github: "https://github.com/RadiantVixen/TokenizerART"
    },
    {
      id: "tokenizer",
      title: "Tokenizer — Ethereum Token",
      category: "web-mobile",
      date: "Mar 2026",
      shortDesc: "Build a token smart contract for deployment to the Sepolia test network.",
      fullDesc: "A Web3 project to create a token smart contract and prepare it for deployment to the Sepolia Ethereum test network.",
      tags: ["Web3", "Ethereum", "Smart Contracts", "Sepolia"],
      github: "https://github.com/RadiantVixen/Tokenizer"
    },
    {
      id: "ft-transcendence",
      title: "ft_transcendence — Real-Time Web Application",
      category: "web-mobile",
      date: "Jan 2025",
      shortDesc: "Full-stack multiplayer Pong application with real-time features.",
      fullDesc: "A 42 Network capstone web application centered on multiplayer Pong, with frontend and backend architecture, real-time communication, authentication, and persistent data.",
      tags: ["React", "NestJS", "PostgreSQL", "WebSockets", "OAuth"],
      github: "https://github.com/RadiantVixen/ft-transcendence"
    },
    {
      id: "inception-of-things",
      title: "Inception of Things",
      category: "devops",
      date: "Mar 2026",
      shortDesc: "Learn container orchestration and infrastructure deployment.",
      fullDesc: "A DevOps project exploring Kubernetes-related deployment, virtual machines, container orchestration, cluster configuration, and infrastructure workflows.",
      tags: ["Kubernetes", "K3s", "K3d", "Vagrant", "DevOps"],
      github: "https://github.com/RadiantVixen/INCEPTION_OF_THINGS"
    },
    {
      id: "inception",
      title: "Inception",
      category: "devops",
      date: "Mar 2024",
      shortDesc: "Build and configure a multi-service Docker infrastructure.",
      fullDesc: "Creates a small containerized infrastructure and configures its services to work together, covering Docker, networking, volumes, and service configuration.",
      tags: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB"],
      github: "https://github.com/RadiantVixen/inception"
    },
    {
      id: "matrix",
      title: "Matrix — Linear Algebra",
      category: "algorithms",
      date: "May 2026",
      shortDesc: "Implement vector and matrix operations to explore linear algebra.",
      fullDesc: "A mathematical programming project focused on vector and matrix manipulation, dimensions, transformations, and numerical computation.",
      tags: ["Python", "Linear Algebra", "Matrices", "Numerical Computing"],
      github: "https://github.com/RadiantVixen/Matrix"
    },
    {
      id: "ready-set-boole",
      title: "Ready Set Boole",
      category: "algorithms",
      date: "May 2026",
      shortDesc: "Explore Boolean algebra, set theory, and discrete-math problems.",
      fullDesc: "A programming project focused on mathematical and logical exercises, including Boolean expressions, truth tables, set operations, and related discrete-mathematics concepts.",
      tags: ["Python", "Boolean Algebra", "Set Theory", "Discrete Mathematics"],
      github: "https://github.com/RadiantVixen/Ready_Set_Bool"
    },
    {
      id: "gomoku",
      title: "Gomoku — Game AI",
      category: "algorithms",
      date: "Aug 2026",
      shortDesc: "Build an AI opponent for Gomoku using adversarial search.",
      fullDesc: "A C++ game AI project using Minimax-style search and heuristic board evaluation to choose moves in Gomoku.",
      tags: ["C++", "Game AI", "Minimax", "Search"],
      github: "https://github.com/RadiantVixen/Gomoku",
      hasLiveDemo: true,
      demoType: "gomoku"
    },
    {
      id: "push-swap",
      title: "push_swap",
      category: "algorithms",
      date: "Feb 2023",
      shortDesc: "Sort integers with two stacks and a restricted operation set.",
      fullDesc: "Designs a sorting strategy for two stacks using a restricted set of operations, with attention to reducing the operation count.",
      tags: ["C", "Algorithms", "Stacks", "Optimization"],
      github: "https://github.com/RadiantVixen/push_swap"
    },
    {
      id: "ft-irc",
      title: "ft_irc",
      category: "systems",
      date: "Apr 2024",
      shortDesc: "Implement an IRC server for multiple clients.",
      fullDesc: "A C++ server project centered on the IRC protocol, client connections, channels, and multi-client communication.",
      tags: ["C++", "Networking", "TCP/IP", "IRC"],
      github: "https://github.com/RadiantVixen/irc"
    },
    {
      id: "cub3d",
      title: "cub3d",
      category: "systems",
      date: "Oct 2023",
      shortDesc: "Create a Wolfenstein-3D-style game using raycasting.",
      fullDesc: "A graphical project using raycasting to render a 3D-like view from a 2D map, with movement, map parsing, and collision handling.",
      tags: ["C", "Raycasting", "Computer Graphics", "MiniLibX"],
      github: "https://github.com/RadiantVixen/cub3d"
    },
    {
      id: "netpractice",
      title: "NetPractice",
      category: "systems",
      date: "Aug 2023",
      shortDesc: "Solve network configuration exercises and build valid topologies.",
      fullDesc: "A networking exercise project covering IPv4 addressing, subnet masks, CIDR, routing, gateways, and network troubleshooting.",
      tags: ["Networking", "IPv4", "Subnetting", "Routing"],
      github: "https://github.com/search?q=user%3ARadiantVixen+NetPractice&type=repositories",
      githubLabel: "Search GitHub"
    },
    {
      id: "philosophers",
      title: "Philosophers",
      category: "systems",
      date: "Jul 2023",
      shortDesc: "Explore concurrency and synchronization through the Dining Philosophers problem.",
      fullDesc: "A C concurrency project focused on threads, shared resources, synchronization, race conditions, deadlocks, and timing.",
      tags: ["C", "Concurrency", "Threads", "Synchronization"],
      github: "https://github.com/RadiantVixen/Philosophers"
    },
    {
      id: "minishell",
      title: "minishell",
      category: "systems",
      date: "Jun 2023",
      shortDesc: "Build a simplified Unix shell with parsing and command execution.",
      fullDesc: "Recreates core shell behavior, including command parsing and execution, pipes, redirections, environment variables, signals, and built-in commands.",
      tags: ["C", "Unix", "Processes", "Shell"],
      github: "https://github.com/RadiantVixen/minishell"
    },
    {
      id: "pipex",
      title: "pipex",
      category: "systems",
      date: "Mar 2023",
      shortDesc: "Reproduce shell pipes and redirections using Unix system calls.",
      fullDesc: "Implements shell-style pipelines and redirections using processes, pipes, file descriptors, and command execution.",
      tags: ["C", "Unix", "Pipes", "File Descriptors"],
      github: "https://github.com/RadiantVixen/pipex"
    },
    {
      id: "so-long",
      title: "so_long",
      category: "systems",
      date: "Jan 2023",
      shortDesc: "Create a 2D game with a map, collectibles, and an exit.",
      fullDesc: "A small graphical game project involving map parsing, player movement, item collection, keyboard input, and game state.",
      tags: ["C", "MiniLibX", "Game Development", "Graphics"],
      github: "https://github.com/RadiantVixen/so_long"
    },
    {
      id: "born2beroot",
      title: "Born2beroot",
      category: "systems",
      date: "Nov 2022",
      shortDesc: "Set up and administer a Linux virtual machine.",
      fullDesc: "A system-administration project involving Linux installation and configuration, users and permissions, SSH, firewall setup, monitoring, and virtualization.",
      tags: ["Linux", "System Administration", "Virtualization", "Security"],
      github: "https://github.com/search?q=user%3ARadiantVixen+Born2beroot&type=repositories",
      githubLabel: "Search GitHub"
    },
    {
      id: "get-next-line",
      title: "get_next_line",
      category: "systems",
      date: "Nov 2022",
      shortDesc: "Read a file descriptor one line at a time.",
      fullDesc: "Implements buffered line-by-line reading from a file descriptor, with attention to persistent state, memory allocation, and edge cases.",
      tags: ["C", "File I/O", "Memory Management", "Buffers"],
      github: "https://github.com/RadiantVixen/get_next_line"
    },
    {
      id: "ft-printf",
      title: "ft_printf",
      category: "systems",
      date: "Nov 2022",
      shortDesc: "Reimplement printf formatting and variadic argument handling.",
      fullDesc: "A C library project that recreates printf-style formatted output, including format parsing and variadic arguments.",
      tags: ["C", "Variadic Functions", "Parsing", "Library"],
      github: "https://github.com/RadiantVixen/printf"
    },
    {
      id: "libft",
      title: "Libft",
      category: "systems",
      date: "Oct 2022",
      shortDesc: "Build a C utility library by implementing standard functions.",
      fullDesc: "Creates a reusable C library of standard-style utility functions, covering strings, memory operations, character checks, and data structures.",
      tags: ["C", "Pointers", "Memory Management", "Data Structures"],
      github: "https://github.com/RadiantVixen/libft"
    },
    {
      id: "cpp-module-00",
      title: "CPP Module 00",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "C++ fundamentals and object-oriented programming.",
      fullDesc: "Introduces C++ syntax and object-oriented fundamentals, including classes, member functions, standard I/O, initialization, and encapsulation.",
      tags: ["C++98", "Classes", "OOP", "Encapsulation"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-01",
      title: "CPP Module 01",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Memory allocation, references, pointers, and object lifetime.",
      fullDesc: "Explores stack and heap allocation, new and delete, references, pointers to members, and resource handling.",
      tags: ["C++98", "Memory Management", "References", "Pointers"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-02",
      title: "CPP Module 02",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Ad-hoc polymorphism, fixed-point numbers, and operator overloading.",
      fullDesc: "Covers fixed-point numbers, Orthodox Canonical Form, constructors, copy assignment, and arithmetic or comparison operator overloading.",
      tags: ["C++98", "Operator Overloading", "Class Design"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-03",
      title: "CPP Module 03",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Inheritance and class relationships.",
      fullDesc: "Practices base and derived classes, access modifiers, and class hierarchies as tools for reuse and object-oriented design.",
      tags: ["C++98", "Inheritance", "OOP"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-04",
      title: "CPP Module 04",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Subtype polymorphism, abstract classes, and interfaces.",
      fullDesc: "Explores virtual functions, abstract classes, runtime dispatch, deep copies, and polymorphic class design.",
      tags: ["C++98", "Polymorphism", "Virtual Functions", "Abstraction"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-05",
      title: "CPP Module 05",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Exception handling and structured error management.",
      fullDesc: "Practices try, catch, and throw, custom exception types, and robust error handling in C++.",
      tags: ["C++98", "Exceptions", "Error Handling"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-06",
      title: "CPP Module 06",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "C++ type conversions and casts.",
      fullDesc: "Studies scalar conversions, static, reinterpret, const, and dynamic casts, and runtime type identification.",
      tags: ["C++98", "Type Conversions", "Casts", "RTTI"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-07",
      title: "CPP Module 07",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Function and class templates for generic programming.",
      fullDesc: "Introduces generic functions and classes, template instantiation, and compile-time abstraction.",
      tags: ["C++98", "Templates", "Generic Programming"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-08",
      title: "CPP Module 08",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Templated containers, iterators, and algorithms.",
      fullDesc: "Works with STL containers, iterators, algorithms, and custom container behavior.",
      tags: ["C++98", "STL", "Containers", "Iterators"],
      github: "https://github.com/RadiantVixen/cpp"
    },
    {
      id: "cpp-module-09",
      title: "CPP Module 09",
      category: "cpp",
      date: "Nov 2023 – Jan 2024",
      shortDesc: "Apply STL containers and algorithms to larger problems.",
      fullDesc: "Applies STL containers and algorithms to substantial problem-solving tasks, with attention to data organization and performance.",
      tags: ["C++98", "STL", "Algorithms", "Data Structures"],
      github: "https://github.com/RadiantVixen/cpp"
    }
  ],

  timeline: [
    {
      date: "2025 - Present",
      title: "Darkey — Founder & Mobile Developer",
      desc: "Building a startup mobile app for rental discovery using Flutter, Supabase backend, and AI-assisted engineering workflows."
    },
    {
      date: "Jan 2026",
      title: "Backend Development Internship",
      desc: "Completed professional software development internship building Django REST API backend infrastructure within a software engineering team."
    },
    {
      date: "2022 - Present",
      title: "42 Network — Computer Science",
      desc: "Project-based curriculum in software engineering, algorithms, AI models, data science, and low-level systems programming."
    },
    {
      date: "2019 - 2022",
      title: "Polydisciplinary Faculty of Safi — Math & CS (SMI)",
      desc: "University foundation in pure mathematics, linear algebra, computer science, and scientific computing."
    },
    {
      date: "2019",
      title: "Baccalaureate — Mechanical Engineering",
      desc: "Graduated with specialization in mechanical systems, engineering fundamentals, and physics."
    }
  ]
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Prevent browser auto-scroll on load
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  initParticleCanvas();
  initTypewriter();
  renderSkills();
  renderProjects("all");
  renderTimeline();
  initTerminal();
  initEventListeners();
  initScrollObserver();
  initScrollToTop();
  updateGitHubRepositoryCount();
});

// --- BRAIN NEURONAL NETWORK SIMULATION CANVAS ---
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, active: false };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  const neuronCount = Math.min(Math.floor((width * height) / 18000), 75);
  const neurons = [];
  const pulses = [];

  for (let i = 0; i < neuronCount; i++) {
    const isPrimary = i % 4 === 0;
    neurons.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: isPrimary ? Math.random() * 2 + 3 : Math.random() * 1.5 + 1.5,
      energy: Math.random() * 0.5,
      color: isPrimary ? { r: 255, g: 119, b: 0 } : (i % 2 === 0 ? { r: 168, g: 85, b: 247 } : { r: 56, g: 189, b: 248 })
    });
  }

  setInterval(() => {
    if (neurons.length > 0) {
      const srcIdx = Math.floor(Math.random() * neurons.length);
      fireActionPotential(srcIdx);
    }
  }, 400);

  function fireActionPotential(fromIdx) {
    const from = neurons[fromIdx];
    from.energy = 1.0;

    neurons.forEach((to, toIdx) => {
      if (fromIdx !== toIdx) {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 165) {
          pulses.push({
            fromX: from.x,
            fromY: from.y,
            toX: to.x,
            toY: to.y,
            toIdx: toIdx,
            progress: 0,
            speed: 0.02 + Math.random() * 0.02,
            color: from.color
          });
        }
      }
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const n1 = neurons[i];
        const n2 = neurons[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 165) {
          const alpha = (1 - dist / 165) * 0.18 * Math.max(0.3, n1.energy + n2.energy);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${n1.color.r}, ${n1.color.g}, ${n1.color.b}, ${alpha})`;
          ctx.lineWidth = 0.8 + Math.max(n1.energy, n2.energy) * 0.6;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }
    }

    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;

      const currentX = p.fromX + (p.toX - p.fromX) * p.progress;
      const currentY = p.fromY + (p.toY - p.fromY) * p.progress;

      ctx.beginPath();
      ctx.arc(currentX, currentY, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${1 - p.progress * 0.5})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgb(${p.color.r}, ${p.color.g}, ${p.color.b})`;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (p.progress >= 1.0) {
        neurons[p.toIdx].energy = 0.8;
        pulses.splice(i, 1);
      }
    }

    neurons.forEach((n, idx) => {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      if (mouse.active) {
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100) {
          n.energy = Math.min(1.0, n.energy + 0.05);
          if (Math.random() < 0.08) fireActionPotential(idx);
        }
      }

      n.energy *= 0.94;

      const glowRadius = n.radius * (1 + n.energy * 1.5);
      ctx.beginPath();
      ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${0.15 + n.energy * 0.4})`;
      ctx.shadowBlur = 12 * (1 + n.energy);
      ctx.shadowColor = `rgb(${n.color.r}, ${n.color.g}, ${n.color.b})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = n.energy > 0.4 ? "#ffffff" : `rgb(${n.color.r}, ${n.color.g}, ${n.color.b})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- TYPEWRITER EFFECT ---
function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const phrases = [
    "AI Engineering Models.",
    "Deep Neural Networks.",
    "Reinforcement Learning Agents.",
    "Low-Level C / C++ Systems.",
    "Full-Stack Web & Mobile Apps."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// --- SKILLS RENDERER ---
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skills-category glass-card">
      <h3 class="skills-category-title">${cat.category}</h3>
      <div class="skill-list">
        ${cat.items.map(skill => `
          <div class="skill-item">
            <div class="skill-item-header">
              <span>${skill.name}</span>
              <span class="text-orange font-mono">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// --- PROJECTS RENDERER & FILTER ---
const PROJECT_CATEGORY_LABELS = {
  "data-ml": "Data Science & Machine Learning",
  "web-mobile": "Web, Mobile & Web3",
  devops: "DevOps & Infrastructure",
  algorithms: "Algorithms & Mathematics",
  systems: "Systems & Networking",
  cpp: "C++ Modules"
};

function escapeHtml(value) {
  return String(value === null || value === undefined ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function updateGitHubRepositoryCount() {
  try {
    const response = await fetch("https://api.github.com/users/RadiantVixen/repos?per_page=100&sort=updated");
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

    const repos = await response.json();
    const repositoryCount = document.getElementById("github-repo-count");
    if (repositoryCount) repositoryCount.textContent = String(repos.length);

    const knownUrls = new Set(
      PORTFOLIO_DATA.projects
        .map(project => project.github)
        .filter(Boolean)
        .map(url => url.toLowerCase())
    );

    let addedProjects = 0;

    repos.forEach(repo => {
      if (!repo.html_url || repo.name === "RadiantVixen") return;
      if (knownUrls.has(repo.html_url.toLowerCase())) return;

      const name = repo.name || "Untitled Project";
      const lowerName = name.toLowerCase();
      const language = repo.language ? String(repo.language) : "";
      const topics = Array.isArray(repo.topics) ? repo.topics : [];
      const description = repo.description
        ? String(repo.description).trim()
        : `A public ${language || "software"} project by Aicha Atki. Implementation details are available in the GitHub repository.`;

      let category = "web-mobile";
      if (/(uber|customer|spotify|churn|tweet|mlp|slither|dslr|vortex|linear|langgraph|chatbot|scraper|machine|data|ai|neural)/.test(lowerName)) {
        category = "data-ml";
      } else if (/(docker|inception|k3|k8|devops)/.test(lowerName)) {
        category = "devops";
      } else if (/(matrix|boole|gomoku|push|swaps|pool|python_pool)/.test(lowerName)) {
        category = "algorithms";
      } else if (/(cpp|c\+\+|corewar)/.test(lowerName)) {
        category = "cpp";
      } else if (/(shell|irc|minishell|pipex|philosopher|cub3d|libft|printf|line|born|netpractice|inception)/.test(lowerName)) {
        category = "systems";
      }

      const tags = [];
      if (language) tags.push(language);
      topics.slice(0, 4).forEach(topic => {
        if (!tags.includes(topic)) tags.push(topic);
      });
      if (tags.length === 0) tags.push("GitHub Project");

      const createdDate = repo.created_at ? new Date(repo.created_at) : null;
      const date = createdDate && !Number.isNaN(createdDate.getTime())
        ? createdDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
        : "GitHub Project";

      PORTFOLIO_DATA.projects.push({
        id: `github-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
        title: name,
        category,
        date,
        shortDesc: description,
        fullDesc: `${description} This repository contains the source and implementation details for the project.`,
        tags,
        github: repo.html_url,
        status: repo.archived ? "Archived" : undefined
      });

      knownUrls.add(repo.html_url.toLowerCase());
      addedProjects += 1;
    });

    if (addedProjects > 0) {
      renderProjects("all");
    }
  } catch (error) {
    console.warn("Could not update GitHub repository count:", error);
  }
}

function renderProjects(filterCategory = "all", searchQuery = "") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  let filtered = PORTFOLIO_DATA.projects;

  if (filterCategory !== "all") {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;" class="text-muted">
        <p>No projects found matching your criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const categoryLabel = PROJECT_CATEGORY_LABELS[p.category] || p.category;
    return `
      <div class="project-card glass-card">
        <div class="project-card-header">
          <span class="project-date">${escapeHtml(p.date)}</span>
          <span class="project-grade-badge">${escapeHtml(categoryLabel)}</span>
        </div>
        <h3 class="project-title" onclick="openProjectModal('${escapeHtml(p.id)}')">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.shortDesc)}</p>
        <div class="project-tags" style="margin-bottom: 1.25rem;">
          ${p.tags.map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
          ${p.hasLiveDemo ? `
            <a href="demo.html?project=${p.id}" class="btn btn-gradient btn-sm" style="display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none;">
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Run Live Demo Page
            </a>
          ` : ""}
          ${p.status ? `<span class="tag-pill">${escapeHtml(p.status)}</span>` : ""}
          ${p.homepage ? `
            <a href="${escapeHtml(p.homepage)}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient btn-sm" style="display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none;">
              Live Website
            </a>
          ` : ""}
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${escapeHtml(p.id)}')">Details</button>
          ${p.github ? `
            <a href="${escapeHtml(p.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 0.4rem;">
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              ${escapeHtml(p.githubLabel || "GitHub Repository")}
            </a>
          ` : ""}
        </div>
      </div>
    `;
  }).join("");
}

// --- TIMELINE RENDERER ---
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-card">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

// --- PROJECT DETAILS MODAL ---
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;
  openProjectModalFromData(project);
}

function openProjectModalFromData(project) {

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
        <span class="badge badge-cyber">${escapeHtml(PROJECT_CATEGORY_LABELS[project.category] || project.category)}</span>
        ${project.status ? `<span class="project-grade-badge">${escapeHtml(project.status)}</span>` : ""}
        <span class="text-dim font-mono" style="font-size: 0.85rem;">${escapeHtml(project.date)}</span>
      </div>
      <h2 style="font-size: 2rem; font-weight: 800;" class="text-gradient">${escapeHtml(project.title)}</h2>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7;">
      ${escapeHtml(project.fullDesc)}
    </p>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.9rem; font-family: var(--font-mono); color: var(--color-orange); margin-bottom: 0.75rem; text-transform: uppercase;">Technologies & Topics:</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.tags.map(t => `<span class="badge badge-accent">${escapeHtml(t)}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; flex-wrap: wrap;">
      ${project.hasLiveDemo ? `
        <a href="demo.html?project=${project.id}" class="btn btn-gradient">
          <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Open Dedicated Live Demo Page
        </a>
      ` : ""}
      ${project.homepage ? `
        <a href="${escapeHtml(project.homepage)}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient">
          Live Website
        </a>
      ` : ""}
      ${project.github ? `
        <a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          ${escapeHtml(project.githubLabel || "GitHub Repository")}
        </a>
      ` : ""}
      <button class="btn btn-outline" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.remove("hidden");
}

function closeProjectModal() {
  document.getElementById("project-modal").classList.add("hidden");
}

// --- INTERACTIVE TERMINAL CLI ---
function initTerminal() {
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  if (!input || !output) return;

  const commands = {
    help: () => `Available Commands:
  <span class="command-highlight">cat bio.txt</span>  - Display Machine Learning & AI profile summary
  <span class="command-highlight">skills</span>       - List ML, AI & software engineering skills
  <span class="command-highlight">projects</span>     - List top projects & scores
  <span class="command-highlight">linkedin</span>     - Open LinkedIn profile URL
  <span class="command-highlight">github</span>       - Open GitHub profile URL
  <span class="command-highlight">contact</span>      - Display email & social links
  <span class="command-highlight">clear</span>        - Clear terminal screen`,

    "cat bio.txt": () => `<span class="output-info">${PORTFOLIO_DATA.profile.name} (@${PORTFOLIO_DATA.profile.username})</span>
${PORTFOLIO_DATA.profile.title}
LinkedIn: <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" class="text-orange">${PORTFOLIO_DATA.profile.linkedin}</a>
GitHub: <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-cyan">${PORTFOLIO_DATA.profile.github}</a>
Email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="text-cyan">${PORTFOLIO_DATA.profile.email}</a>
${PORTFOLIO_DATA.profile.bio}`,

    skills: () => `<span class="output-success">Verified Engineering Competencies:</span>
• Machine Learning & AI (Neural Networks, Q-Learning RL, Linear/Logistic Regression, EEG Signal Processing)
• Algorithms & Systems (Minimax Alpha-Beta, C/C++, POSIX Unix Shell, 3D Raycasting)
• Software Engineering (Python, Flutter, Supabase, Django, React, NestJS)
• Tools & Infrastructure (Git, Docker, Linux, REST APIs, WebSockets)`,

    projects: () => `<span class="output-success">All ${PORTFOLIO_DATA.projects.length} projects by category:</span>
${Object.keys(PROJECT_CATEGORY_LABELS).map(category => `<span class="command-highlight">${PROJECT_CATEGORY_LABELS[category]}</span>
${PORTFOLIO_DATA.projects.filter(project => project.category === category).map(project => `• <a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" class="text-cyan">${escapeHtml(project.title)}</a>`).join("\n")}`).join("\n\n")}`,

    linkedin: () => `Opening LinkedIn profile <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" class="text-orange">${PORTFOLIO_DATA.profile.linkedin}</a>`,
    github: () => `Redirecting to <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-cyan">${PORTFOLIO_DATA.profile.github}</a>`,

    contact: () => `<span class="output-info">Direct Contact:</span>
Email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="text-cyan">${PORTFOLIO_DATA.profile.email}</a>
LinkedIn: <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" class="text-orange">${PORTFOLIO_DATA.profile.linkedin}</a>
GitHub: <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-cyan">${PORTFOLIO_DATA.profile.github}</a>`
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      input.value = "";

      if (cmd === "") return;

      const line = document.createElement("div");
      line.className = "terminal-line";

      if (cmd === "clear") {
        output.innerHTML = "";
        return;
      }

      const promptHtml = `<span class="prompt-user">aatki@ai-engine</span>:<span class="prompt-dir">~</span>$&nbsp;${cmd}<br>`;

      if (commands[cmd]) {
        line.innerHTML = promptHtml + commands[cmd]();
      } else {
        line.innerHTML = promptHtml + `<span class="output-error">zsh: command not found: ${cmd}. Type <span class="command-highlight">help</span> for commands.</span>`;
      }

      output.appendChild(line);
      const body = document.getElementById("terminal-body");
      body.scrollTop = body.scrollHeight;
    }
  });
}

// --- EVENT LISTENERS & UI INTERACTION ---
function initEventListeners() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    // Close mobile nav when any nav link is clicked
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });

    // Close mobile nav when clicking outside of it
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("mobile-open");
      }
    });
  }

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      const searchQuery = document.getElementById("project-search")?.value || "";
      renderProjects(category, searchQuery);
    });
  });

  const searchInput = document.getElementById("project-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "ai-ml";
      renderProjects(activeFilter, e.target.value);
    });
  }

  document.getElementById("modal-close")?.addEventListener("click", closeProjectModal);
  document.getElementById("project-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "project-modal") closeProjectModal();
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });


  // ─── EMAIL JS INIT ──────────────────────────────────────────────────────────
  // Replace the three EMAILJS_* placeholders below with your actual EmailJS IDs.
  // See: https://www.emailjs.com/docs/sdk/installation/
  const EMAILJS_PUBLIC_KEY  = "sMHz3cJOmLgzdO73W";   // Account → API Keys
  const EMAILJS_SERVICE_ID  = "service_abc123";   // Email Services tab
  const EMAILJS_TEMPLATE_ID = "template_sybwtcd";  // Email Templates tab

  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  const contactForm   = document.getElementById("contact-form");
  const submitBtn     = document.getElementById("contact-submit");
  const btnText       = document.getElementById("contact-btn-text");
  const btnSpinner    = document.getElementById("contact-btn-spinner");
  const statusEl      = document.getElementById("contact-status");

  function setStatus(msg, color) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.style.color = color;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name    = document.getElementById("contact-name").value.trim();
      const email   = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject")?.value.trim() || "Portfolio Inquiry";
      const msg     = document.getElementById("contact-message").value.trim();

      // Basic validation
      if (!name || !email || !msg) {
        setStatus("Please fill in all required fields.", "#f87171");
        return;
      }

      // If EmailJS is not yet configured, fall back to mailto:
      if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        const mailtoUrl = `mailto:aichaatki@gmail.com?subject=${encodeURIComponent(subject + " — " + name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(msg)}`;
        window.open(mailtoUrl, "_blank");
        showToast("Opening your email client…");
        contactForm.reset();
        return;
      }

      // Show loading state
      if (submitBtn)  submitBtn.disabled = true;
      if (btnText)    btnText.style.display    = "none";
      if (btnSpinner) btnSpinner.style.display = "inline";
      setStatus("", "");

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: name,
          reply_to:  email,
          subject:   subject,
          message:   msg,
          to_email:  "aichaatki@gmail.com",
        });

        setStatus("✅ Message sent! I'll get back to you soon.", "#34d399");
        showToast("Message sent to aichaatki@gmail.com!");
        contactForm.reset();
      } catch (err) {
        console.error("EmailJS error:", err);
        const detail = err?.text || err?.message || JSON.stringify(err);
        setStatus(`❌ Error: ${detail}`, "#f87171");
      } finally {
        if (submitBtn)  submitBtn.disabled = false;
        if (btnText)    btnText.style.display    = "inline";
        if (btnSpinner) btnSpinner.style.display = "none";
      }
    });
  }
}


// --- TOAST NOTIFICATION ---
function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}


// --- SCROLL OBSERVER & NAV ACTIVE ---
function initScrollObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  // Use IntersectionObserver for accurate active nav tracking
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
}

// --- SCROLL-TO-TOP BUTTON ---
function initScrollToTop() {
  const btn = document.getElementById("scroll-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
