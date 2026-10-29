import GameDevData from './GameDevData.jsx'
import { ImageSlider } from './ImageSlider.jsx'

export default function GameDevelopment() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center-safe">


            {/* Column 1 */}
            <div class="grid content-start gap-3">
                <GameDevCard data={GameDevData[0]} />
                <GameDevCard data={GameDevData[1]} />
                <GameDevCard data={GameDevData[2]} />
            </div>
            {/*Column 2 */}
            <div class="grid content-start gap-3">
                <GameDevCard data={GameDevData[5]} />
                <GameDevCard data={GameDevData[4]} />
                <GameDevCard data={GameDevData[3]} />
            </div>
        </div>
    )
}

function GameDevCard({ data }) {
    return (
        <div class="bg-neutral-primary-soft block  m-5 p-6 
        border border-neutral-300 rounded-lg shadow-md text-left" >
             <ImageSlider imageUrls={data.images}/>
            <h5 class="mt-6 text-2xl font-semibold tracking-tight text-heading"> {data.title} </h5>
            <div class="flex flex-wrap gap-2 mb-4">
                {data.tags.map((tag, index) => (
                    <span key={index} class="bg-neutral-100 text-neutral-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
            <div class="ml-4">
                <p class="text-body whitespace-pre-wrap text-justify">&#9;{data.description}</p>
            </div>
            <div class=" mt-4">
                <p class="text-lg"> Contributed to: </p>
                <ul class="ml-6 list-disc">
                    {data.contrib.map((c, i) =>
                    (
                        <li key={i}>
                            <p>{c}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>
            {
                data.link ?
                    <div class="flex justify-end">
                        <a href={data.link} target="_blank" rel="noopener noreferrer" class=" inline-flex items-center text-body bg-neutral-secondary-medium border shadow-xs font-medium leading-5 rounded-md text-sm mt-6 px-4 py-2.5 hover:bg-red-500 hover:text-white">
                            PLAY
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4l-4 4" />
                            </svg>
                        </a>
                    </div>
                    :
                    null
            }
        </div >
    )
}