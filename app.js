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
    bio: "Computer Science student at 42 Network focused on Machine Learning, Artificial Intelligence, and Software Engineering. Building intelligent systems—from AI algorithms and reinforcement learning agents to deep neural networks and data-driven models."
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
      title: "Total Perspective Vortex — Brainwave Signal Interface",
      category: "ai-ml",
      date: "Aug 2026",
      score: "125%",
      shortDesc: "Human-machine interface processing high-dimensional EEG brainwave signals into machine control actions.",
      fullDesc: "Processed high-dimensional EEG brainwave data to build a human-machine interface controlled directly through brain activity. Implemented computational signal processing methods, bandpass filtering, Fast Fourier Transform (FFT) power spectral density extraction, and intention decoding models at the intersection of AI, data science, and neuroscience.",
      tags: ["Python", "Machine Learning", "EEG Signal Processing", "Brainwave Interface", "AI"],
      github: "https://github.com/RadiantVixen",
      hasLiveDemo: true,
      demoType: "bci-vortex",
      featured: true
    },
    {
      id: "learn2slither",
      title: "Learn2Slither — Reinforcement Learning",
      category: "ai-ml",
      date: "Aug 2026",
      score: "101%",
      shortDesc: "Q-Learning agent capable of learning to navigate a dynamic Snake environment.",
      fullDesc: "Developed a Q-learning reinforcement learning agent. Designed compact state representations, custom reward systems, and ε-greedy exploration strategies to train the agent to master navigation through trial and error.",
      tags: ["Python", "Reinforcement Learning", "Q-Learning", "AI Agent"],
      github: "https://github.com/RadiantVixen/Learn2Slither",
      hasLiveDemo: true,
      demoType: "slither",
      featured: true
    },
    {
      id: "multilayer-perceptron",
      title: "Multilayer Perceptron — Neural Networks",
      category: "ai-ml",
      date: "Aug 2026",
      score: "100%",
      shortDesc: "Custom neural network implementation built from mathematical first principles.",
      fullDesc: "Implemented a multilayer perceptron from scratch to master the mathematical foundations of deep learning. Built forward propagation, activation functions (Sigmoid, Softmax), cross-entropy loss, and gradient backpropagation.",
      tags: ["Python", "Neural Networks", "Deep Learning", "Math"],
      github: "https://github.com/RadiantVixen/Multilayer-Perceptron",
      hasLiveDemo: true,
      demoType: "mlp",
      featured: true
    },
    {
      id: "ft_linear_regression",
      title: "ft_linear_regression — Machine Learning",
      category: "ai-ml",
      date: "Jan 2026",
      score: "125%",
      shortDesc: "Linear regression model implemented from scratch with gradient descent calculus.",
      fullDesc: "Validated with 125% grade. Built gradient descent parameter optimization from mathematical equations, implementing cost minimization (MSE), feature normalization, and hypothesis prediction.",
      tags: ["Python", "Machine Learning", "Gradient Descent", "Linear Regression"],
      github: "https://github.com/RadiantVixen/ft_linear_regression",
      hasLiveDemo: true,
      demoType: "linear-regression",
      featured: true
    },
    {
      id: "gomoku",
      title: "Gomoku — Artificial Intelligence",
      category: "ai-ml",
      date: "Aug 2026",
      score: "125%",
      shortDesc: "AI opponent for Gomoku using Minimax search and heuristic board evaluation.",
      fullDesc: "Developed an AI opponent for Gomoku in C++. Designed decision-making search trees with Minimax and Alpha-Beta pruning to evaluate board positions and select strategically optimal moves.",
      tags: ["C++", "Minimax", "Heuristic Search", "Game AI"],
      github: "https://github.com/RadiantVixen/Gomoku",
      hasLiveDemo: true,
      demoType: "gomoku",
      featured: true
    },
    {
      id: "dslr",
      title: "DSLR — Hogwarts House Sorting Predictor",
      category: "ai-ml",
      date: "Jul 2026",
      score: "125%",
      shortDesc: "Data science classification project ('Harry Potter & the Data Scientist') via One-Vs-All Logistic Regression.",
      fullDesc: "Validated with 125% score. Classifies Hogwarts students into Gryffindor, Slytherin, Ravenclaw, or Hufflepuff using One-Vs-All Logistic Regression, Z-Score standardization, and statistical data visualization.",
      tags: ["Python", "Data Science", "Logistic Regression", "Math"],
      github: "https://github.com/RadiantVixen/Logistic-Regression",
      hasLiveDemo: true,
      demoType: "dslr",
      featured: true
    },
    {
      id: "darkey",
      title: "Darkey — Rental Opportunity Mobile App",
      category: "mobile",
      date: "2025 - Present",
      score: "Founder",
      shortDesc: "Startup mobile application helping users discover rental opportunities built with Flutter & Supabase.",
      fullDesc: "Founder & Mobile Developer of Darkey. Translated product vision into a functional cross-platform mobile application using Flutter and Supabase backend. Leveraged AI-assisted development to accelerate prototyping, backend infrastructure design, and rapid iteration.",
      tags: ["Flutter", "Supabase", "Mobile Dev", "Startup", "AI-Assisted"],
      github: "https://github.com/RadiantVixen",
      hasLiveDemo: false,
      featured: true
    },
    {
      id: "django-internship",
      title: "Backend Development Internship",
      category: "fullstack",
      date: "Jan 2026",
      score: "Internship",
      shortDesc: "Professional backend engineering developing REST APIs and scalable architecture with Django.",
      fullDesc: "Validated professional internship as part of the 42 curriculum. Developed backend REST API architecture using Django and Python within an engineering team, implementing database models and enterprise web services.",
      tags: ["Django", "Python", "REST APIs", "Backend Engineering"],
      github: "https://github.com/RadiantVixen",
      hasLiveDemo: false,
      featured: true
    },
    {
      id: "ft_transcendence",
      title: "ft_transcendence — Real-Time Web Application",
      category: "fullstack",
      date: "Jan 2025",
      score: "100%",
      shortDesc: "Full-stack real-time multiplayer Pong platform with chat, matchmaking, and OAuth.",
      fullDesc: "Capstone project of 42 core curriculum. Built single-page web app with React, NestJS backend, PostgreSQL database, WebSockets real-time communication, and 42 Intra OAuth 2.0 authentication.",
      tags: ["React", "NestJS", "PostgreSQL", "WebSockets", "OAuth"],
      github: "https://github.com/RadiantVixen/ft-transcendence",
      hasLiveDemo: false,
      featured: true
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
  renderProjects("ai-ml"); // Default is AI & Machine Learning!
  renderTimeline();
  initTerminal();
  initEventListeners();
  initScrollObserver();
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
function renderProjects(filterCategory = "ai-ml", searchQuery = "") {
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
    const isPerfect = p.score === "125%" || p.score === "101%";
    return `
      <div class="project-card glass-card">
        <div class="project-card-header">
          <span class="project-date">${p.date}</span>
          <span class="project-grade-badge ${isPerfect ? 'perfect' : ''}">${p.score === 'Founder' || p.score === 'Internship' ? '⭐ ' + p.score : 'Grade: ' + p.score}</span>
        </div>
        <h3 class="project-title" onclick="openProjectModal('${p.id}')">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags" style="margin-bottom: 1.25rem;">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
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
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">Details</button>
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 0.4rem;">
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
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

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
        <span class="badge badge-cyber">${project.category.toUpperCase()}</span>
        <span class="project-grade-badge perfect">${project.score}</span>
        <span class="text-dim font-mono" style="font-size: 0.85rem;">${project.date}</span>
      </div>
      <h2 style="font-size: 2rem; font-weight: 800;" class="text-gradient">${project.title}</h2>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7;">
      ${project.fullDesc}
    </p>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.9rem; font-family: var(--font-mono); color: var(--color-orange); margin-bottom: 0.75rem; text-transform: uppercase;">Technologies & Topics:</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.tags.map(t => `<span class="badge badge-accent">${t}</span>`).join("")}
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
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub Repository
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

    projects: () => `<span class="output-success">Featured AI & Engineering Projects:</span>
1. Total Perspective Vortex  Python  • Brainwave Signal Interface [125%]
2. Learn2Slither ........... Python  • Q-Learning Snake Agent [101%]
3. Multilayer Perceptron ... Python  • Deep Neural Network [100%]
4. ft_linear_regression .... Python  • Gradient Descent Model [125%]
5. Gomoku AI ............... C++     • Minimax Alpha-Beta [125%]
6. Darkey App .............. Flutter • Rental Opportunity App [Founder]`,

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

  if (EMAILJS_PUBLIC_KEY !== "sMHz3cJOmLgzdO73W") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

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
        setStatus("❌ Something went wrong. Try emailing aichaatki@gmail.com directly.", "#f87171");
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
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
