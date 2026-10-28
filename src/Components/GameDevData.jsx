import lomiDash1 from '../Assets/images/GameDev/Lomi Dash/1.png'
import lomiDash2 from '../Assets/images/GameDev/Lomi Dash/2.png'
import lomiDash3 from '../Assets/images/GameDev/Lomi Dash/3.png'
import lomiDash4 from '../Assets/images/GameDev/Lomi Dash/4.png'
import lomiDash5 from '../Assets/images/GameDev/Lomi Dash/5.png'
import lomiDash6 from '../Assets/images/GameDev/Lomi Dash/6.png'
import lomiDash7 from '../Assets/images/GameDev/Lomi Dash/7.png'
import lomiDash8 from '../Assets/images/GameDev/Lomi Dash/8.png'
import lomiDash9 from '../Assets/images/GameDev/Lomi Dash/9.png'
import lomiDash10 from '../Assets/images/GameDev/Lomi Dash/10.png'

const lomiDashImg = [lomiDash1, lomiDash2, lomiDash3, 
    lomiDash4, lomiDash5, lomiDash6, lomiDash7, 
    lomiDash8, lomiDash9, lomiDash10]

import deadElev1 from '../Assets/images/GameDev/Dead Elev/1.png'
import deadElev2 from '../Assets/images/GameDev/Dead Elev/2.png'
import deadElev3 from '../Assets/images/GameDev/Dead Elev/3.png'
import deadElev4 from '../Assets/images/GameDev/Dead Elev/4.png'
import deadElev5 from '../Assets/images/GameDev/Dead Elev/5.png'
import deadElev6 from '../Assets/images/GameDev/Dead Elev/6.png'

const deadElevImg = [deadElev1, deadElev2, deadElev3, 
    deadElev4, deadElev5, deadElev6]

import HvT1 from '../Assets/images/GameDev/HeroesVsTitans/1.png'
import HvT2 from '../Assets/images/GameDev/HeroesVsTitans/2.png'
import HvT3 from '../Assets/images/GameDev/HeroesVsTitans/3.png'
import HvT4 from '../Assets/images/GameDev/HeroesVsTitans/4.png'

const HvTImg = [ HvT1, HvT2, HvT3, HvT4]

import IoL1 from '../Assets/images/GameDev/Island of the Lost/1.png'
import IoL2 from '../Assets/images/GameDev/Island of the Lost/2.png'
import IoL3 from '../Assets/images/GameDev/Island of the Lost/3.png'
import IoL4 from '../Assets/images/GameDev/Island of the Lost/4.png'
import IoL5 from '../Assets/images/GameDev/Island of the Lost/5.png'
import IoL6 from '../Assets/images/GameDev/Island of the Lost/6.png'

const IoLImg = [ IoL1, IoL2, IoL3, IoL4, IoL5, IoL6]

import theBear1 from '../Assets/images/GameDev/The Bear/1.png'
import theBear2 from '../Assets/images/GameDev/The Bear/2.png'
import theBear3 from '../Assets/images/GameDev/The Bear/3.png'
import theBear4 from '../Assets/images/GameDev/The Bear/4.png'

const theBearImg = [theBear1, theBear2, theBear3, theBear4]

import disColored1 from '../Assets/images/GameDev/Discolored/1.png'
import disColored2 from '../Assets/images/GameDev/Discolored/2.png'
import disColored3 from '../Assets/images/GameDev/Discolored/3.png'
import disColored4 from '../Assets/images/GameDev/Discolored/4.png'
import disColored5 from '../Assets/images/GameDev/Discolored/5.png'

const disColoredImg = [disColored1, disColored2, disColored3, disColored4, disColored5]

const GameDevData = [
    {
        title: "Lomi Dash",
        description: "A casual game about Batangueno culture through a fast-paced cooking gameplay. Inspired by other ", 
        tags: ["Unity", "C#", "2.5D", "Thesis"],
        link: "https://linhuuss.itch.io/lomi-dash",
        contrib: ["I Did That"],
        images: lomiDashImg,
    },

    {
        title: "Dead Elev",
        description: "A Horror Detective Game",
        tags: ["Unity", "C#", "Point-and-Click"],
        link: null,
        contrib: ["Graphical Assets, including background, UI, and Character Sprites", "Sound Design"],
        images: deadElevImg,
    },

    {
        title: "Heroes vs Titans",
        description: "A Horror Detective Game",
        tags: ["Unity", "C#", "2D", "Tech Demo", "Auto-Play", "Incremental"],
        link: "https://linhuuss.itch.io/lomi-dash",
        contrib: ["Graphical Assets, including background, UI, and Character Sprites", "Sound Design"],
        images: HvTImg,
    },

    {
        title: "Island of the Lost",
        description:"A rouge-lite Turn-based RPG inspired by gambling mechanics. You, the player, must gamble your way in the forbidden casino island where debtors fight to reclaim their wealth.",
        tags: ["Unity", "C#"],
        link: null,
        contrib: ["Graphical Assets, including background, UI, and Character Sprites", "Code Development"],
        images: IoLImg,
    },

    {
        title: "The Bear",
        description: "A Horror Detective Game",
        tags: ["Unity", "C#"],
        link: null,
        contrib: ["Graphical Assets, including background, UI, and Character Sprites", "Sound Design"],
        images: theBearImg,
    },

    {
        title: "Discolored",
        description: "A Horror Detective Game",
        tags: ["Unity", "C#", "3D"],
        link: null,
        contrib: ["Coding"],
        images: disColoredImg,
    },
    
];

export default GameDevData;