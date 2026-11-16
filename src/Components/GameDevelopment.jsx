import GameDevData from './GameDevData.jsx'
import { ImageSlider } from './ImageSlider.jsx'
import RelevantSkills from './RelevantSkills.jsx'
import resume from '../Assets/resume/De Silva Resume.pdf'

const skills = [
    "Unity",
    "Godot",
    "Firebase",
    "#C",
    "2D",
    "3D",
    "UI",
    "Asset Design",
    "Git/Github"
]
export default function GameDevelopment() {
    return (
        <>
        <RelevantSkills skills={skills} resume={resume}/>
        {/* <h1 className=" font-bold text-left"> Games </h1> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center-safe">
            {/* Column 1 */}
            <div class="grid content-start gap-3">
                <GameDevCard data={GameDevData[0]} />
                <GameDevCard data={GameDevData[1]} />
                <GameDevCard data={GameDevData[2]} />
            </div>
            {/*Column 2 */}
            <div class="grid content-start gap-3">
                <GameDevCard data={GameDevData[6]} />
                <GameDevCard data={GameDevData[5]} />
                <GameDevCard data={GameDevData[4]} />
                <GameDevCard data={GameDevData[3]} />
            </div>
        </div>
        </>
    )
}

function GameDevCard({ data }) {
    return (

        
        <div class="bg-neutral-primary-soft block  m-5 p-6 
        border border-neutral-300 rounded-lg shadow-md text-left" >
             <ImageSlider imageUrls={data.images}/>
             <small class="text-gray-400 block text-center"> Click image to zoom. </small>
            <h5 class=" text-2xl font-semibold tracking-tight text-heading"> {data.title} </h5>
            <div class="flex flex-wrap gap-2 mb-4">
                {data.tags.map((tag, index) => (
                    <span key={index} class="bg-neutral-100 text-neutral-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
            <div class="mx-4">
                <p class="text-body whitespace-pre-wrap text-justify">&#9;&#9;&#9;{data.description}</p>
            </div>
            <div class=" mt-4">
                <p class="text-lg"> Contributions & Achievements </p>
                <ul class="ml-6 list-disc">
                    {data.contrib.map((c, i) =>
                    (
                        <li key={i}>
                            <p class="whitespace-pre-wrap">{c}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div class="flex justify-end gap-2">
            {
                data.code ?
                    <div class="flex inline justify-end">
                        <a href={data.code} target="_blank" rel="noopener noreferrer" class=" inline-flex items-center text-body bg-neutral-secondary-medium border shadow-xs font-medium leading-5 rounded-md text-sm mt-6 px-4 py-2.5 hover:bg-red-500 hover:text-white">
                            Source Code
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4l-4 4" />
                            </svg>
                        </a>
                    </div>
                    :
                    null
            }
            {
                data.link ?
                    <div class="flex inline justify-end">
                        <a href={data.link} target="_blank" rel="noopener noreferrer" class=" inline-flex items-center text-body bg-neutral-secondary-medium border shadow-xs font-medium leading-5 rounded-md text-sm mt-6 px-4 py-2.5 hover:bg-red-500 hover:text-white">
                            Play Build
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4l-4 4" />
                            </svg>
                        </a>
                    </div>
                    :
                    null
            }
            </div>
        </div >
    )
}