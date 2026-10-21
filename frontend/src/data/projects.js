import auctusImg from '../assets/images/projects/auctus.webp';
import mafiaImg from '../assets/images/projects/mafia.webp';
import studentPlannerImg from '../assets/images/projects/student-planner.webp';
import wordAtlasImg from '../assets/images/projects/word-atlas.webp';

export const projects = [
    {
        id: "auctus",
        title: "Auctus",
        type: "Full-stack web app",
        description: "A full-stack training journal for building programs, logging every set with rest timers and following strength and volume over time, designed to feel just as good on a phone in the gym as on desktop.",
        technologies: ["Next.js", "React", "Node.js", "Tailwind"],
        image: auctusImg,
        liveUrl: 'https://auctus.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/Auctus',
        wip: true,
        comingSoon: false,
    },

    {
        id: "word-atlas",
        title: "Word Atlas",
        type: "Full-stack web app",
        description: "A full-stack dictionary for exploring English words in depth, with pronunciation audio, etymology and real-world examples, an interactive constellation of related words and a personal library to save and revisit them.",
        technologies: ["React", "Express", "Tailwind", "Motion", "Merriam-Webster API", "Datamuse API"],
        image: wordAtlasImg,
        liveUrl: "https://word-atlas.ammarhadid.com",
        githubUrl: "https://github.com/Ammar-Hadid/word-atlas",
        wip: false,
        comingSoon: false,
    },

    {
        id: "mafia-game",
        title: "Mafia Game",
        type: "Real-time multiplayer",
        description: "A multiplayer browser game with peer-to-peer rooms, role assignment, voting, timers and real-time game-state synchronization between players.",
        technologies: ["JavaScript", "PeerJS", "WebRTC"],
        image: mafiaImg,
        liveUrl: '',
        githubUrl: '',
        wip: false,
        comingSoon: true,
    },

    {
        id: "student-planner",
        title: "Student Planner",
        type: "Frontend app",
        description: "A protected React dashboard that helps students organize tasks, manage subjects and track study progress in one clean, focused place.",
        technologies: ["React", "React Router"],
        image: studentPlannerImg,
        liveUrl: 'https://student-planner.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/student-planner',
        wip: false,
        comingSoon: false,
    },
];
