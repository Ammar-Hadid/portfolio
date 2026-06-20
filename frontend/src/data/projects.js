import workoutManagerImg from '../assets/images/projects/workout-manager.png';
import mafiaImg from '../assets/images/projects/mafia.png';
import studentPlannerImg from '../assets/images/projects/student-planner.png';
import wordAtlasImg from '../assets/images/projects/word-atlas.jpeg';

export const projects = [
    {
        id: "workout-manager",
        title: "Workout Manager",
        description: "Full stack MERN workout application with authentication, built for managing and tracking workout routines through a modern and responsive interface.",
        technologies: ["MERN", "Tailwind", "JWT Auth"],
        image: workoutManagerImg,
        liveUrl: 'https://workout-manager.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/workout-manager',
        categories: ["fullstack"],
        featured: true,
        wip: true,
        comingSoon: false,
        createdAt: "2026-05-10",
    },

    {
        id: "word-atlas",
        title: "Word Atlas",
        description: "Full stack dictionary application built for quickly searching, understanding, and hearing English words with suggestions, word details, examples, forms, phrases, and error handling.",
        technologies: ["React", "Express", "Merriam-Webster"],
        image: wordAtlasImg,
        liveUrl: "https://word-atlas.ammarhadid.com",
        githubUrl: "https://github.com/Ammar-Hadid/word-atlas",
        categories: ["fullstack"],
        featured: true,
        wip: false,
        comingSoon: false,
        createdAt: "2026-06-10",
    },

    {
        id: "mafia-game",
        title: "Mafia Game",
        description: "Multiplayer Mafia web game with peer-to-peer rooms, role assignment, voting, timers, and real-time game-state synchronization through an interactive browser interface.",
        technologies: ["JavaScript", "PeerJS"],
        image: mafiaImg,
        liveUrl: '',
        githubUrl: '',
        categories: ["frontend"],
        featured: true,
        wip: false,
        comingSoon: true,
        createdAt: "2025-07-15",
    },

    {
        id: "student-planner",
        title: "Student Planner",
        description: "React student planner for organizing tasks, tracking study progress, and managing subjects through a clean and protected dashboard.",
        technologies: ["React", "React Router"],
        image: studentPlannerImg,
        liveUrl: 'https://student-planner.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/student-planner',
        categories: ["frontend"],
        featured: true,
        wip: false,
        comingSoon: false,
        createdAt: "2026-03-05",
    },
];