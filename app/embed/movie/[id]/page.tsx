import { MvRes } from "./interfaces/mvkexres";
import VideoPlayer from "@/app/components/VideoPlayer";

async function getRes(id:string) {
  const res = await fetch(`https://moviekex.online/movie/${id}`)

  return res.json()
}

interface params{
  id :string
}

export default async function PostId({params}:params){
  const id :string = params.id
  const res:MvRes = await getRes(id)

  const video = {
    sourceUrl:res.m3u8[0],
  };

  return <div>
    <VideoPlayer
    video={video}
    key={1}
    >

    </VideoPlayer>
  </div>
  
}
