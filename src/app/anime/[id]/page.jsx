import Image from "next/image"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"

//const { getAnimeResponse } = require("@/libs/api-libs")

const Page  = async ({ params : { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
        <div className="grid grid-cols-2 p-8 gap-6">
        <div className="col-span-2 container p-4 rounded-xl bg-color-secondary flex sm:flex-nowrap flex-wrap md:gap-6 text-color-primary">                
            <Image
            src = {anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className="w-60 max-h-80 rounded-xl object-cover" 
            />
            
            <div>
                <div className=" ">
                    <h3 className="text-3xl text-color-primary">{anime.data.title}</h3>
                    <h5>{anime.data.title_japanese}</h5>
                </div>

                <div className="p-8">
                    <ul className="list-disc marker:text-color-accent">
                        <li>Year : {anime.data.year}</li>
                        <li>Status : {anime.data.status}</li>
                        <li>Score : {anime.data.score}</li>
                        <li>Season : {anime.data.season}</li>
                        <li>Episodes : {anime.data.episodes}</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="  text-color-primary">
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>

        <div className="col-span-3 lg:container lg:mx-auto lg:mb-8 p-4 rounded-xl bg-color-secondary md:gap-6 text-color-primary">
        <h3 className="text-2xl mb-4">synopsis</h3>
        <p className="text-justify">{anime.data.synopsis}</p>
        </div>
        </div>     
        </>
    )
}

export default Page