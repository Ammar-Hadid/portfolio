import workoutManagerImg from '../assets/images/projects/workout-manager.webp';
import mafiaImg from '../assets/images/projects/mafia.webp';
import studentPlannerImg from '../assets/images/projects/student-planner.webp';
import wordAtlasImg from '../assets/images/projects/word-atlas.webp';

export const projects = [
    {
        id: "workout-manager",
        title: "Workout Manager",
        type: "Full-stack web app",
        description: "A full-stack MERN fitness app with secure authentication that lets users plan, log and track their workout routines through a fast, fully responsive interface.",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT Auth"],
        image: workoutManagerImg,
        liveUrl: 'https://workout-manager.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/workout-manager',
        wip: true,
        comingSoon: false,
    },

    {
        id: "word-atlas",
        title: "Word Atlas",
        type: "Full-stack web app",
        description: "A full-stack dictionary that helps users quickly search, understand and hear English words, with live suggestions, examples, word forms, phrases and robust error handling.",
        technologies: ["React", "Express", "Merriam-Webster API"],
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
