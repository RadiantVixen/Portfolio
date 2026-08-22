# Neuro-AI / Cognitive Explorer: Brand Theme & Design Tokens

This theme is tailored for **Aicha Atki**, transitioning her portfolio into a specialized showcase at the intersection of computer science, machine learning, and brain-computer interfaces. It is inspired by biological neural systems, synaptic action potentials, and computational cognitive models.

---

## 🧬 Theme Philosophy: The Digital Synapse
*   **The Baseline (Dark Myelin):** High-contrast, velvety blacks representing the quiet, deep structure of the neural cortex.
*   **The Synaptic Pathways (Axons & Dendrites):** Deep, cool purples and slates that construct the architectural bones of the interface.
*   **The Action Potential (Electric Impulses):** High-voltage, bioluminescent teals and electric cyans that spark only at interactive junctions (buttons, active terminal text, and live run states).
*   **The Neurotransmitters (Chemical Signal):** Deep violet gradients that soften the hard mathematical boundaries, symbolizing the flow of information.

---

## 🎨 Design Tokens

Here are the tokens formatted for direct copy-pasting into your CSS, Tailwind Config, or JSON system.

### 1. Raw HEX Codes
| Token Name | Value | Purpose | Neural Analogy |
| :--- | :--- | :--- | :--- |
| `background-obsidian` | `#030307` | Deepest base canvas background | The quiet baseline of the brain |
| `surface-cortex` | `#0A0A12` | Main sections and primary card backdrops | Dense cortical layers |
| `surface-synapse` | `#121222` | Hovered cards, popup dialogs, inputs | Synaptic junctions where signals meet |
| `accent-potential` | `#00F0FF` | Primary active elements, interactive icons | Action Potential (Electrical firing) |
| `accent-chemical` | `#BD53ED` | Secondary highlights, gradient blends, links | Neurotransmitters (Chemical bridge) |
| `text-myelin` | `#F1F0FF` | Primary headers and high-contrast text | Myelin sheath (Fast, clear conduction) |
| `text-dendrite` | `#8C8BA5` | Muted descriptions, labels, and timestamps | Muted dendritic branches receiving signals |
| `border-axon` | `#1C1B30` | Structural card borders, dividers | Axonal pathways guiding connections |

---

### 2. CSS Custom Properties (`:root` Variables)
Copy and paste this into your global CSS stylesheet (e.g., `globals.css` or `styles.css`):

```css
:root {
  /* Core Backgrounds */
  --bg-obsidian: #030307;
  --bg-cortex: #0a0a12;
  --bg-synapse: #121222;

  /* Interactive Accents */
  --action-potential: #00f0ff;
  --neurotransmitter: #bd53ed;
  --action-potential-glow: rgba(0, 240, 255, 0.15);
  --neurotransmitter-glow: rgba(189, 83, 237, 0.15);

  /* Typography */
  --text-myelin: #f1f0ff;
  --text-dendrite: #8c8ba5;

  /* Structural Borders */
  --border-axon: #1c1b30;
  
  /* Synaptic Glow Shadows */
  --glow-synapse: 0 0 20px rgba(0, 240, 255, 0.3);
}
```

---

### 3. Tailwind CSS Configuration
If your GitHub Pages portfolio is built with Tailwind, update your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        neuro: {
          obsidian: '#030307',
          cortex: '#0a0a12',
          synapse: '#121222',
          potential: '#00f0ff',
          chemical: '#bd53ed',
          myelin: '#f1f0ff',
          dendrite: '#8c8ba5',
          axon: '#1c1b30',
        }
      },
      boxShadow: {
        'synapse-glow': '0 0 15px rgba(0, 240, 255, 0.25)',
        'pulse-glow': '0 0 25px rgba(189, 83, 237, 0.2)',
      }
    },
  },
}
```

---

## ✨ Neural UI Visual Effects

### A. The "Synaptic Firing" Hover (CSS)
Apply this transition to your clickable project cards or terminal buttons to mimic an electrical spark when hovered:

```css
.project-card {
  background-color: var(--bg-cortex);
  border: 1px solid var(--border-axon);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  background-color: var(--bg-synapse);
  border-color: var(--action-potential);
  box-shadow: var(--glow-synapse);
  transform: translateY(-2px);
}
```

### B. The Neuro-Gradient (Hero Header Background)
Use this gradient behind your main "Aicha Atki" hero header to evoke neural networks communicating:

```css
.neuro-hero-gradient {
  background: radial-gradient(
    circle at top right,
    rgba(189, 83, 237, 0.08) 0%,
    rgba(0, 240, 255, 0.05) 50%,
    rgba(3, 3, 7, 0) 100%
  );
}
```

---

*This design kit was generated for **Aicha Atki**, bridging Computer Science @ 42 Network and Neuro-AI specialized software engineering.*
