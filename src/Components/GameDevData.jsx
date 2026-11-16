import lomiDash1 from '../Assets/images/GameDev/Lomi Dash/1.webp'
import lomiDash2 from '../Assets/images/GameDev/Lomi Dash/2.webp'
import lomiDash3 from '../Assets/images/GameDev/Lomi Dash/3.webp'
import lomiDash4 from '../Assets/images/GameDev/Lomi Dash/4.webp'
import lomiDash5 from '../Assets/images/GameDev/Lomi Dash/5.webp'
import lomiDash6 from '../Assets/images/GameDev/Lomi Dash/6.webp'
import lomiDash7 from '../Assets/images/GameDev/Lomi Dash/7.webp'
import lomiDash8 from '../Assets/images/GameDev/Lomi Dash/8.webp'
import lomiDash9 from '../Assets/images/GameDev/Lomi Dash/9.webp'
import lomiDash10 from '../Assets/images/GameDev/Lomi Dash/10.webp'

const lomiDashImg = [lomiDash1, lomiDash2, lomiDash3,
    lomiDash4, lomiDash5, lomiDash6, lomiDash7,
    lomiDash8, lomiDash9, lomiDash10]

import deadElev1 from '../Assets/images/GameDev/Dead Elev/1.webp'
import deadElev2 from '../Assets/images/GameDev/Dead Elev/2.webp'
import deadElev3 from '../Assets/images/GameDev/Dead Elev/3.webp'
import deadElev4 from '../Assets/images/GameDev/Dead Elev/4.webp'
import deadElev5 from '../Assets/images/GameDev/Dead Elev/5.webp'
import deadElev6 from '../Assets/images/GameDev/Dead Elev/6.webp'

const deadElevImg = [deadElev1, deadElev2, deadElev3,
    deadElev4, deadElev5, deadElev6]

import HvT1 from '../Assets/images/GameDev/HeroesVsTitans/1.webp'
import HvT2 from '../Assets/images/GameDev/HeroesVsTitans/2.webp'
import HvT3 from '../Assets/images/GameDev/HeroesVsTitans/3.webp'
import HvT4 from '../Assets/images/GameDev/HeroesVsTitans/4.webp'

const HvTImg = [HvT1, HvT2, HvT3, HvT4, HvT1]

import IoL1 from '../Assets/images/GameDev/Island of the Lost/1.webp'
import IoL2 from '../Assets/images/GameDev/Island of the Lost/2.webp'
import IoL3 from '../Assets/images/GameDev/Island of the Lost/3.webp'
import IoL4 from '../Assets/images/GameDev/Island of the Lost/4.webp'
import IoL5 from '../Assets/images/GameDev/Island of the Lost/5.webp'
import IoL6 from '../Assets/images/GameDev/Island of the Lost/6.webp'

const IoLImg = [IoL1, IoL2, IoL3, IoL4, IoL5, IoL6]

import theBear1 from '../Assets/images/GameDev/The Bear/1.webp'
import theBear2 from '../Assets/images/GameDev/The Bear/2.webp'
import theBear3 from '../Assets/images/GameDev/The Bear/3.webp'
import theBear4 from '../Assets/images/GameDev/The Bear/4.webp'

const theBearImg = [theBear1, theBear2, theBear3, theBear4, theBear1]

import disColored1 from '../Assets/images/GameDev/Discolored/1.webp'
import disColored2 from '../Assets/images/GameDev/Discolored/2.webp'
import disColored3 from '../Assets/images/GameDev/Discolored/3.webp'
import disColored4 from '../Assets/images/GameDev/Discolored/4.webp'
import disColored5 from '../Assets/images/GameDev/Discolored/5.webp'

const disColoredImg = [disColored1, disColored2, disColored3, disColored4, disColored5, disColored1]

import STA1 from '../Assets/images/GameDev/SecondsToAsh/1.webp'
import STA2 from '../Assets/images/GameDev/SecondsToAsh/2.webp'
import STA3 from '../Assets/images/GameDev/SecondsToAsh/3.webp'
import STA4 from '../Assets/images/GameDev/SecondsToAsh/4.webp'
import STA5 from '../Assets/images/GameDev/SecondsToAsh/5.webp'
import STA6 from '../Assets/images/GameDev/SecondsToAsh/6.webp'


const STAImg = [STA1, STA2, STA3, STA4, STA5, STA6]


const GameDevData = [
    {
        title: "Lomi Dash",
        description: "A casual mobile game about Batangueño culture through a fast-paced Lomi cooking gameplay.",
        tags: ["Unity", "C#", "2.5D", "Mobile", "Android", "Isometric", "Procedural", "Cooking Game", "Cultural", "UGC", "Thesis"],
        link: "https://drive.google.com/file/d/1TwCK016K6-ojexHnA29HAeuhX6kniMeD/view?usp=sharing",
        code: "https:/github.com/artanddev/Lomi-Dash",
        contrib: [
            "Candidate for Best Thesis Award",
            "Won Best Thesis Award (Silver)",
            "Led a 3-man group project from planning, research, ideation, production, testing and release as both leader and main developer",
            "Architected and implemented full-stack features between Unity (C#) and Firebase, supporting real-time data synchronization (player data and leaderboards) among playtesters.",
            "General Development of functional User Interface and Gameplay Screens",
            "Player movement, customer manipulation and cooking mechanics via mobile-first haptic input",
            "Implemented Hierarchical Task Networks (HTN) and Procedural Content Generation (PCG) to model gameplay features (customers, orders and level generation, and cooking gameplay) as modular, reusable components.",
            "Almanac entry unlock mechanic that serves as an informational database for players to serve educational goals",
            "Implemented a User-Generated Content mechanic where players can design their lomi dishes and share it on social media platoforms.",
        ],
        images: lomiDashImg,
    },

    {
        title: "Dead Elevator",
        description: "A narrative-driven point-and-click horror detective game where a player gets stuck in an elevator with 3 different ghosts, one of which they must exorcise by finding clues.",
        tags: ["Construct", "Horror", "2D", "Game Jam", "Visual Novel", "Point-and-Click", "Detective"],
        link: "https://linhuuuu.itch.io/dead-elevator?secret=uDrMX91JeFlslSeH3MSH5N91oY",
        code: null,
        contrib: [
            "Graphical Assets (Backgrounds, Sprites, UI, Icons)",
            "Sound Design",

        ],
        images: deadElevImg,
    },

    {
        title: "Heroes vs Titans",
        description: "An incremental idle Game created as a tech demo for Animation systems, UI screen logic, and lootbox mechanics.",
        tags: ["Unity", "C#", "2D", "Tech Demo", "UI Demo", "Idle", "AFK", "Incremental", "Solo Jam", "Lootbox", "Gacha"],
        link: "https://linhuuuu.itch.io/kingmaker-test?secret=xUk6FwWAJmH41ciVoRhdcm7g8",
        code: "https://github.com/artanddev/HeroesVSTitans",
        contrib: [
            "Internship requirement",
            "Reusable Unity components practicing modular OOP principles",
            "A Character unit upgrade system with a responsive UI screen",
            "A gacha/lootbox/lottery system for new character acquisition",
            "A flexible, functional, editable, and responsive party system with (Read and Update Operations)",
            "Custom UI assets designed based on unity's native UI standards",
            "Locally encrypted player data saving and loading system",
            "An incremental/numerical damage system that updates in real player time",
            "Endless idle/afk gameplay",
        ],
        images: HvTImg,
    },

    {
        title: "Seconds To Ash",
        description: "A 2D isometric top-down shooter revolving around a countdown mechanic",
        tags: ["Unity", "C#", "2D", "Isometric", "Game Jam", "Pixel", "Top-Down Shooter", "Tactical"],
        link: null,
        code: "https://github.com/Giiiiiiin/SecondsToAshes_GMTK2026",
        contrib: [
            "Official Submission to GMTK 2026 Game Jam",
            "General Game Design, Planning, and Management",
            "Background Tileset",
            "Stage Design (Tilesheet Placement, Lighting, Enemy Placement",
            "Animation Library/Sprite Atlas Configuration",
            "Countdown Logic",
            "Attack Unit Logic (Deal and Recieving damage Logic)"
        ],
        images: STAImg,
    },

    {
        title: "Island of the Lost",
        description: "A rougelite turn-based RPG inspired by gambling mechanics. You, the player, must gamble your way in the forbidden casino island where debtors fight to reclaim their wealth.",
        tags: ["Unity", "C#", "2D", "Game Jam", "Turn-based", "Rougelite", "Procedural"],
        link: null,
        code: null,
        contrib: [
            "General Game Design",
            "C# Code Development",
            "Procedural Generation of Stages, Enemies and Buffs",
            "Player and Enemy HP, Attack, and Buff Logic",
            "Player, Enemy, Buffs, and Stage object definition",
            "Graphical Assets (Backgrounds, UI, Sprites)",
        ],
        images: IoLImg,
    },

    {
        title: "The Bear",
        description: "A short horror drag-and-drop game set in the wilds where the player must sacrifice a bear by mixing and matching different elements in his inventory.",
        tags: ["Unity", "C#", "Drag-And-Drop", "Mix-and-Match", "Little Alchemy", "Horror", "Solo Jam"],
        link: "https://drive.google.com/file/d/1A9hzk6yo3jO53kd-VnXMmOq30ethgkaT/view?usp=sharing",
        code: null,
        contrib: [
            "General Game Design",
            "C# Code Development",
            "Graphical Assets (Backgrounds, UI, Sprites)",
            "Sound Design"
        ],
        images: theBearImg,
    },

    {
        title: "Discolored",
        description: "A surreal narrative-driven 3D walking simulator where the recounts their mental trauma by coming home and figuratively picking up the pieces from the litter.",
        tags: ["Unity", "C#", "3D", "Game Jam", "Walking Simulator", "Point-and-Click", "Visual Novel", "Surreal"],
        link: "https://drive.google.com/file/d/1jK1JHYrhjie5sGa9d7FNGoRuF0bA579L/view?usp=sharing",
        code: "https://github.com/artanddev/discolored",
        contrib: [
            "Official Submission to Sikaptala 2026 Game Jam",
            "General Game Design and Planning",
            "Level Design (Object Placement, Lighting, Stage Design)",
            "Memory Shard Mechanic utilizing Point-and-Click and Scriptable Object Logic",
            "Panic and Manic Mechanic Logic",
            ],
        images: disColoredImg,
    },
];

export default GameDevData;