import workoutManagerImg from '../assets/images/projects/workout-manager.png';
import mafiaImg from '../assets/images/projects/mafia.png';
import studentPlannerImg from '../assets/images/projects/student-planner.png';

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
        createdAt: "2026-05-10",
    },

    {
        id: "mafia-game",
        title: "Mafia Game",
        description: "Multiplayer Mafia web game with peer-to-peer rooms, role assignment, voting, timers, and real-time game-state synchronization through an interactive browser interface.",
        technologies: ["JavaScript", "PeerJS"],
        image: mafiaImg,
        liveUrl: 'https://mafia.ammarhadid.com',
        githubUrl: 'https://github.com/Ammar-Hadid/Mafia',
        categories: ["frontend"],
        featured: true,
        wip: false,
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
        createdAt: "2026-03-05",
    },
];