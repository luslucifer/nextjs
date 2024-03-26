import Image from "next/image";
import VideoPlayer from './components/VideoPlayer'; // Import the VideoPlayer component


export default function Home() {
  // Define the video source URL
  const video = {
    sourceUrl: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* Render the VideoPlayer component and pass the video prop */}
      <div className="jw-player" style={{ width: '40%', minWidth: '400px' }}>
        <VideoPlayer video={video}/>

      </div>

    </main>
  );
}
