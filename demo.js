/* ==========================================================================
   Aicha Atki Portfolio - Standalone AI & BCI Live Demo Engine (demo.js)
   Renders deep technical mathematical breakdowns, formulas, algorithms,
   and interactive web sandboxes for Total Perspective Vortex (BCI), DSLR,
   ft_linear_regression, Gomoku, MLP, & Slither RL.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project") || "bci-vortex";

  loadProjectDemo(projectId);
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

// --- PROJECT DEMO LOADER ROUTER ---
function loadProjectDemo(id) {
  const titleEl = document.getElementById("demo-title");
  const scoreEl = document.getElementById("demo-score-badge");
  const githubLink = document.getElementById("demo-github-link");
  const techContent = document.getElementById("demo-tech-content");
  const sandbox = document.getElementById("demo-sandbox-viewport");

  if (id === "bci-vortex" || id === "bci") {
    titleEl.textContent = "Total Perspective Vortex — Brain-Computer Interface";
    scoreEl.textContent = "Validated 125%";
    githubLink.href = "https://github.com/RadiantVixen";

    renderBCITechContent(techContent);
    mountBCISandbox(sandbox);
  } else if (id === "dslr" || id === "logistic-regression") {
    titleEl.textContent = "DSLR — Hogwarts House Sorting Predictor";
    scoreEl.textContent = "Validated 125%";
    githubLink.href = "https://github.com/RadiantVixen/Logistic-Regression";

    renderDSLRTechContent(techContent);
    mountDSLRInteractiveSandbox(sandbox);
  } else if (id === "linear-regression" || id === "ft_linear_regression") {
    titleEl.textContent = "ft_linear_regression — Price Predictor";
    scoreEl.textContent = "Validated 125%";
    githubLink.href = "https://github.com/RadiantVixen/ft_linear_regression";

    renderLinearRegressionTechContent(techContent);
    mountLinearRegressionSandbox(sandbox);
  } else if (id === "gomoku") {
    titleEl.textContent = "Gomoku AI Heuristic Search Engine";
    scoreEl.textContent = "Validated 125%";
    githubLink.href = "https://github.com/RadiantVixen/Gomoku";

    renderGomokuTechContent(techContent);
    mountGomokuSandbox(sandbox);
  } else if (id === "mlp" || id === "multilayer-perceptron") {
    titleEl.textContent = "Multilayer Perceptron Neural Network";
    scoreEl.textContent = "Validated 100%";
    githubLink.href = "https://github.com/RadiantVixen/Multilayer-Perceptron";

    renderMLPTechContent(techContent);
    mountMLPSandbox(sandbox);
  } else if (id === "slither" || id === "learn2slither") {
    titleEl.textContent = "Learn2Slither Reinforcement Learning Agent";
    scoreEl.textContent = "Validated 101%";
    githubLink.href = "https://github.com/RadiantVixen/Learn2Slither";

    renderSlitherTechContent(techContent);
    mountSlitherSandbox(sandbox);
  }
}

// ==========================================================================
// FLAGSHIP: TOTAL PERSPECTIVE VORTEX — BRAIN-COMPUTER INTERFACE (BCI)
// ==========================================================================
function renderBCITechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>EEG Brainwave Signal Processing & Intention Decoding</h3>
      <p>
        The Total Perspective Vortex BCI system transforms high-dimensional non-invasive EEG (electroencephalography) brainwave signals into machine control commands. Raw microvolt neural fluctuations are processed through signal filtering, frequency decomposition, and feature classification.
      </p>
    </div>

    <div class="tech-section">
      <h3>1. Discrete Fast Fourier Transform (FFT) Decomposition</h3>
      <p>Continuous time-domain EEG voltage signals $x(t)$ are converted into the frequency spectrum $X(f)$ to isolate specific cognitive brainwave bands:</p>
      <div class="math-card font-mono">
        X(f) = \\int_{-\\infty}^{\\infty} x(t) \\cdot e^{-i 2\\pi f t} \\, dt \\quad \\longrightarrow \\quad \\text{Power Spectral Density (PSD)}
      </div>
    </div>

    <div class="tech-section">
      <h3>2. Brainwave Frequency Band Spectrum</h3>
      <ul style="color: var(--text-muted); font-size: 0.9rem; padding-left: 1.2rem; line-height: 1.8;">
        <li><strong style="color: var(--color-cyan);">Delta (δ: 0.5 – 4 Hz)</strong>: Deep sleep, restorative states</li>
        <li><strong style="color: #34d399;">Theta (θ: 4 – 8 Hz)</strong>: Deep relaxation, memory consolidation</li>
        <li><strong style="color: #fbbf24;">Alpha (α: 8 – 12 Hz)</strong>: Relaxed alertness, sensorimotor rhythm (SMR)</li>
        <li><strong style="color: var(--color-orange);">Beta (β: 12 – 30 Hz)</strong>: Active problem solving, motor imagery execution</li>
        <li><strong style="color: var(--color-purple);">Gamma (γ: 30 – 50 Hz)</strong>: High-level cognitive binding & intense focus</li>
      </ul>
    </div>

    <div class="tech-section">
      <h3>3. Motor Imagery Intention Classifier</h3>
      <p>Features extracted from C3/C4 sensorimotor electrodes are fed into a machine learning model to decode intended movement directions:</p>
      <div class="math-card font-mono">
        P(\\text{Command} = k \\mid \\mathbf{X}_{EEG}) = \\text{Softmax}\\left( \\mathbf{W}^T \\cdot \\text{PSD}_{\\alpha, \\beta} + \\mathbf{b} \\right)
      </div>
    </div>
  `;
}

function mountBCISandbox(container) {
  container.innerHTML = `
    <div class="sandbox-container">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="color: var(--color-orange);" class="font-mono">🧠 Live 4-Channel EEG Brainwave Stream</h3>
        <div style="display: flex; gap: 0.5rem;">
          <button id="bci-filter-btn" class="btn btn-primary btn-sm">Filter: Bandpass 0.5-30Hz</button>
          <button id="bci-pulse-btn" class="btn btn-gradient btn-sm">Trigger Mental Command</button>
        </div>
      </div>

      <div style="position: relative;">
        <canvas id="bci-eeg-canvas" width="540" height="240" style="width: 100%; background: #05080e; border-radius: var(--radius-sm); border: 1px solid var(--border-glow);"></canvas>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.5rem; margin-top: 1rem; align-items: center;">
        <div class="glass-card" style="padding: 1.25rem; border: 1px solid var(--border-glow);">
          <span style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">Decoded Neural Intention</span>
          <h2 id="bci-decoded-cmd" style="font-size: 1.8rem; font-weight: 800; color: var(--color-orange); margin: 0.3rem 0;">
            ✋ Motor Imagery: Left Hand
          </h2>
          <div style="display: flex; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">
            <span>Band: <strong class="text-cyan">Beta (22 Hz)</strong></span>
            <span>Signal Quality: <strong class="text-emerald">98.4%</strong></span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.78rem;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-cyan);">C3 (Left Motor):</span>
            <span id="power-c3">42.8 µV²</span>
          </div>
          <div class="skill-bar-bg"><div id="bar-c3" class="skill-bar-fill" style="width: 72%; background: var(--color-cyan);"></div></div>

          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-purple);">C4 (Right Motor):</span>
            <span id="power-c4">18.2 µV²</span>
          </div>
          <div class="skill-bar-bg"><div id="bar-c4" class="skill-bar-fill" style="width: 35%; background: var(--color-purple);"></div></div>

          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-orange);">Cz (Sensorimotor):</span>
            <span id="power-cz">55.1 µV²</span>
          </div>
          <div class="skill-bar-bg"><div id="bar-cz" class="skill-bar-fill" style="width: 88%; background: var(--color-orange);"></div></div>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById("bci-eeg-canvas");
  const ctx = canvas.getContext("2d");
  const decodedCmd = document.getElementById("bci-decoded-cmd");
  const pulseBtn = document.getElementById("bci-pulse-btn");

  let t = 0;
  let isFiltered = true;

  const commands = [
    "✋ Motor Imagery: Left Hand",
    "🖐️ Motor Imagery: Right Hand",
    "🎯 High Cognitive Focus",
    "🧘 Sensorimotor Rest Rhythm"
  ];

  function drawEEG() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.05;

    const channels = [
      { name: "C3", yBase: 40, color: "#38bdf8", freq: 1.2 },
      { name: "C4", yBase: 95, color: "#a855f7", freq: 1.8 },
      { name: "Cz", yBase: 150, color: "#ff7700", freq: 2.5 },
      { name: "O1", yBase: 205, color: "#34d399", freq: 0.8 }
    ];

    channels.forEach(ch => {
      ctx.strokeStyle = ch.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 3) {
        const noise = isFiltered ? Math.sin(x * 0.05 + t) * 2 : (Math.random() - 0.5) * 8;
        const wave = Math.sin(x * 0.02 * ch.freq + t) * 14 + Math.cos(x * 0.04 + t * 1.5) * 6 + noise;
        const y = ch.yBase + wave;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Channel label
      ctx.fillStyle = ch.color;
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.fillText(ch.name, 8, ch.yBase - 15);
    });

    requestAnimationFrame(drawEEG);
  }

  pulseBtn.addEventListener("click", () => {
    const nextCmd = commands[Math.floor(Math.random() * commands.length)];
    decodedCmd.textContent = nextCmd;

    const pC3 = (Math.random() * 50 + 20).toFixed(1);
    const pC4 = (Math.random() * 50 + 15).toFixed(1);
    const pCz = (Math.random() * 50 + 30).toFixed(1);

    document.getElementById("power-c3").textContent = pC3 + " µV²";
    document.getElementById("power-c4").textContent = pC4 + " µV²";
    document.getElementById("power-cz").textContent = pCz + " µV²";

    document.getElementById("bar-c3").style.width = Math.min(100, pC3 * 1.5) + "%";
    document.getElementById("bar-c4").style.width = Math.min(100, pC4 * 1.5) + "%";
    document.getElementById("bar-cz").style.width = Math.min(100, pCz * 1.5) + "%";
  });

  drawEEG();
}

// ==========================================================================
// 2. DSLR - HOGWARTS HOUSE PREDICTOR (ONE-VS-ALL LOGISTIC REGRESSION)
// ==========================================================================
function renderDSLRTechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>Project Concept: "Harry Potter and the Data Scientist"</h3>
      <p>
        Classifying Hogwarts students into houses (<strong>Gryffindor</strong>, <strong>Slytherin</strong>, <strong>Ravenclaw</strong>, or <strong>Hufflepuff</strong>) based on academic course features.
      </p>
    </div>

    <div class="tech-section">
      <h3>1. Feature Scaling & Z-Score Standardization</h3>
      <div class="math-card font-mono">
        z = \\frac{x - \\mu}{\\sigma} \\quad \\text{where } \\mu = \\text{mean}, \\ \\sigma = \\text{std dev}
      </div>
    </div>

    <div class="tech-section">
      <h3>2. One-Vs-All Multi-Class Classification</h3>
      <div class="math-card font-mono">
        h_{\\theta}^{(K)}(x) = \\sigma(\\theta^T x) = \\frac{1}{1 + e^{-\\theta^T x}}
      </div>
    </div>
  `;
}

function mountDSLRInteractiveSandbox(container) {
  container.innerHTML = `
    <div class="sandbox-container">
      <h3 style="color: var(--color-orange);" class="font-mono">🎓 Hogwarts Sorting Hat Predictor</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: flex; justify-content: space-between; font-size: 0.85rem;">
              <span>Defense Against the Dark Arts:</span><strong id="val-dada" class="text-orange font-mono">75</strong>
            </label>
            <input type="range" id="slide-dada" min="0" max="100" value="75" style="width: 100%;">
          </div>
          <div>
            <label style="display: flex; justify-content: space-between; font-size: 0.85rem;">
              <span>Astronomy:</span><strong id="val-astronomy" class="text-orange font-mono">60</strong>
            </label>
            <input type="range" id="slide-astronomy" min="0" max="100" value="60" style="width: 100%;">
          </div>
          <div>
            <label style="display: flex; justify-content: space-between; font-size: 0.85rem;">
              <span>Herbology:</span><strong id="val-herbology" class="text-orange font-mono">40</strong>
            </label>
            <input type="range" id="slide-herbology" min="0" max="100" value="40" style="width: 100%;">
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div id="house-winner-card" class="glass-card" style="padding: 1.25rem; text-align: center; border: 2px solid var(--color-orange);">
            <span style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">Sorted House</span>
            <h2 id="winning-house-title" style="font-size: 2.2rem; font-weight: 800; margin: 0.4rem 0;" class="text-gradient">Gryffindor 🦁</h2>
          </div>
        </div>
      </div>
    </div>
  `;

  const sliders = {
    dada: document.getElementById("slide-dada"),
    astronomy: document.getElementById("slide-astronomy"),
    herbology: document.getElementById("slide-herbology")
  };

  function updateDSLR() {
    const dada = parseFloat(sliders.dada.value);
    const astronomy = parseFloat(sliders.astronomy.value);
    const herbology = parseFloat(sliders.herbology.value);

    document.getElementById("val-dada").textContent = dada;
    document.getElementById("val-astronomy").textContent = astronomy;
    document.getElementById("val-herbology").textContent = herbology;
  }

  Object.values(sliders).forEach(s => s.addEventListener("input", updateDSLR));
  updateDSLR();
}

// ==========================================================================
// 3. LINEAR REGRESSION (ft_linear_regression)
// ==========================================================================
function renderLinearRegressionTechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>Gradient Descent Calculus & Cost Optimization</h3>
      <div class="math-card font-mono">
        J(\\theta_0, \\theta_1) = \\frac{1}{2m} \\sum_{i=1}^{m} \\left( h_\\theta(x^{(i)}) - y^{(i)} \\right)^2
      </div>
    </div>
  `;
}

function mountLinearRegressionSandbox(container) {
  container.innerHTML = `
    <div class="sandbox-container">
      <h3 style="color: var(--color-orange);" class="font-mono">Car Mileage → Price Estimator</h3>
      <input type="range" id="lr-mileage-slider" min="0" max="250000" step="5000" value="100000" style="width: 100%;">
      <div id="lr-predicted-price" style="font-size: 2rem; font-weight: 800; color: var(--color-emerald);" class="font-mono">6,350 €</div>
      <canvas id="lr-chart-canvas" width="320" height="200" style="background: #05080e; border-radius: 8px;"></canvas>
    </div>
  `;
  const slider = document.getElementById("lr-mileage-slider");
  const priceOutput = document.getElementById("lr-predicted-price");
  const canvas = document.getElementById("lr-chart-canvas");
  const ctx = canvas.getContext("2d");

  function draw(val) {
    priceOutput.textContent = Math.round(8500 - 0.0215 * val).toLocaleString() + " €";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ff7700"; ctx.beginPath(); ctx.moveTo(20, 180); ctx.lineTo(300, 40); ctx.stroke();
  }
  slider.addEventListener("input", (e) => draw(parseInt(e.target.value)));
  draw(100000);
}

// ==========================================================================
// 4. GOMOKU AI (HEURISTIC MINIMAX SEARCH)
// ==========================================================================
function renderGomokuTechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>Minimax Algorithm with Alpha-Beta Pruning</h3>
      <div class="math-card font-mono">
        \\alpha = \\max(\\alpha, \\text{score}), \\quad \\text{Prune if } \\beta \\le \\alpha
      </div>
    </div>
  `;
}

function mountGomokuSandbox(container) {
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h4 class="font-mono text-orange" style="margin-bottom: 0.5rem;">Gomoku AI Board</h4>
      <div id="gomoku-board" style="display: grid; grid-template-columns: repeat(11, 26px); gap: 2px; background: #1e293b; padding: 6px;"></div>
    </div>
  `;
  const boardEl = document.getElementById("gomoku-board");
  for(let i=0; i<121; i++){
    const cell = document.createElement("div");
    cell.style.width="26px"; cell.style.height="26px"; cell.style.background="#080c15";
    boardEl.appendChild(cell);
  }
}

// ==========================================================================
// 5. MULTILAYER PERCEPTRON
// ==========================================================================
function renderMLPTechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>Forward & Backward Propagation Calculus</h3>
      <div class="math-card font-mono">
        Z^{[l]} = W^{[l]} A^{[l-1]} + b^{[l]}, \\quad A^{[l]} = g(Z^{[l]})
      </div>
    </div>
  `;
}

function mountMLPSandbox(container) {
  container.innerHTML = `
    <div style="text-align: center;">
      <h4 class="font-mono text-orange">Neural Network Layer Visualization</h4>
      <canvas id="mlp-canvas" width="480" height="200" style="background: #05080e; border-radius: 8px;"></canvas>
    </div>
  `;
  const canvas = document.getElementById("mlp-canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ff7700"; ctx.font = "14px 'JetBrains Mono'"; ctx.fillText("[Inputs → Hidden Neurons → Softmax]", 100, 100);
}

// ==========================================================================
// 6. LEARN2SLITHER RL AGENT
// ==========================================================================
function renderSlitherTechContent(container) {
  container.innerHTML = `
    <div class="tech-section">
      <h3>Q-Learning & Bellman Optimality Equation</h3>
      <div class="math-card font-mono">
        Q(s, a) \\leftarrow Q(s, a) + \\alpha \\left[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\right]
      </div>
    </div>
  `;
}

function mountSlitherSandbox(container) {
  container.innerHTML = `
    <div style="text-align: center;">
      <h4 class="font-mono text-orange">Reinforcement Learning Snake Agent</h4>
      <canvas id="slither-canvas" width="360" height="200" style="background: #05080e; border-radius: 8px;"></canvas>
    </div>
  `;
  const canvas = document.getElementById("slither-canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#34d399"; ctx.fillRect(100, 80, 20, 20); ctx.fillRect(120, 80, 20, 20);
}
