import auctusImg from '../assets/images/projects/auctus.webp';
import wordAtlasImg from '../assets/images/projects/word-atlas.webp';
import mafiaImg from '../assets/images/projects/mafia.webp';

export const projects = [
    {
        id: "auctus",
        title: "Auctus",
        type: "Full-stack web app",
        accent: "#D6F26B",
        lead: "A full-stack workout platform that turns training plans into measurable progress.",
        description: "It combines flexible workout programming, guided sessions with rest timers, detailed exercise tracking, and a clear progress dashboard in a polished, responsive interface. Secure passkey authentication protects real accounts, while an isolated showcase mode lets prospects explore the application with realistic sample data and their own temporary workspace.",
        stack: [
            { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript"] },
            { label: "UI", items: ["Tailwind CSS 4", "CSS Modules", "Radix UI", "Lucide icons"] },
            { label: "Backend", items: ["Next.js server routes", "Node.js 24", "Zod"] },
            { label: "Database", items: ["SQLite", "Drizzle ORM", "better-sqlite3"] },
            { label: "Authentication", items: ["Better Auth", "WebAuthn passkeys via SimpleWebAuthn"] },
            { label: "Notifications", items: ["Web Push", "Service workers"] },
            { label: "Testing", items: ["Vitest", "Playwright"] },
            { label: "Deployment", items: ["Docker Compose", "Linux VPS", "Caddy with HTTPS"] },
        ],
        image: auctusImg,
        liveUrl: "https://auctus.ammarhadid.com",
    },

    {
        id: "word-atlas",
        title: "Word Atlas",
        type: "Full-stack web app",
        accent: "#E9705A",
        lead: "Word Atlas is a full-stack dictionary built to feel like a premium editorial product.",
        description: "Every entry brings together definitions, pronunciation audio, etymology, first known use and real published quotations, merged from three data sources by a Node/Express backend that cleans and caches the raw API responses. The signature feature is an interactive semantic map: synonyms, related words and associations orbit the searched word in three rings, a custom collision-resolution layout keeps labels apart at any screen size, and every word is a doorway to the next. A ⌘K command palette, keyboard shortcuts, a personal library with CSV export, light and dark themes, and careful motion and accessibility work make it as fast to use as it is pleasant to read.",
        stack: [
            { label: "Frontend", items: ["React 19", "Vite", "React Router", "Tailwind CSS v4", "Motion", "Lucide icons"] },
            { label: "Backend", items: ["Node.js", "Express", "In-memory TTL caching"] },
            { label: "Data", items: ["Merriam-Webster Learner’s and Collegiate Dictionary APIs", "Datamuse API"] },
            { label: "Browser APIs", items: ["Web Speech API (pronunciation fallback)", "Clipboard and Web Share APIs", "localStorage"] },
            { label: "Graphics", items: ["A custom SVG data visualisation (the semantic map), with no charting library"] },
            { label: "Quality", items: ["ESLint with the React Hooks rules", "Responsive from phone to desktop", "Reduced-motion support", "Accessible search boxes"] },
        ],
        image: wordAtlasImg,
        liveUrl: "https://word-atlas.ammarhadid.com",
    },

    {
        id: "mafia",
        title: "Mafia",
        type: "Real-time multiplayer",
        accent: "#E5484D",
        lead: "Mafia rebuilds the classic party game of lies and late-night accusations for the phone in your pocket.",
        description: "Up to 16 players join from any browser with a five-letter code or a QR scan, with no app and no account. A real-time WebSocket server runs the whole game and sends each phone only what that player is allowed to know, so nobody can cheat by peeking at roles, not even the host. Players who lock their phone or lose signal rejoin their seat automatically, and hosting passes to someone else if the host leaves. Every role gets advice that changes with the situation, so the game coaches each player in character. Around that, the lighting shifts between night and day, all sound is generated live in the browser, and a narrator voice calls each phase. There are two modes: one for friends at the same table (press-and-hold role cards, silent night actions) and one for remote play (separate chats for the town, the Mafia and the dead). A solo mode lets visitors play a full round against bots in five minutes. The game is backed by automated tests, packaged with Docker, and served over HTTPS behind Caddy and Cloudflare.",
        stack: [
            { label: "Frontend", items: ["Svelte 5", "TypeScript", "Vite"] },
            { label: "Backend", items: ["Node.js", "WebSockets (ws)"] },
            { label: "Browser APIs", items: ["Web Audio API (procedural sound)", "Web Speech API (narrator)", "Screen Wake Lock API", "Vibration API"] },
            { label: "Testing", items: ["Vitest (unit tests and end-to-end multiplayer tests)", "svelte-check"] },
            { label: "Infrastructure", items: ["Docker", "Caddy (reverse proxy, automatic HTTPS)", "Cloudflare", "Ubuntu VPS"] },
            { label: "Design", items: ["Custom noir design system", "Self-hosted variable fonts (Fraunces, Inter Tight, JetBrains Mono)", "SVG iconography"] },
        ],
        image: mafiaImg,
        liveUrl: "https://mafia.ammarhadid.com",
    },
];
