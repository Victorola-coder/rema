"use client"

import { useCallback, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PlayBtn from "@/app/_components/playBtn";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
  },
  {
    url: "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
    title: "HEYYEYAAEYAAAEYAEYAA",
  },
  // Add more videos as needed
];

export default function VideoPlayer() {
      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
      const [playing, setPlaying] = useState(false);
      const playerRef = useRef(null);

      const togglePlayPause = useCallback(() => {
        setPlaying((prevPlaying) => !prevPlaying);
      }, []);

      const playNextVideo = useCallback(() => {
        if (currentVideoIndex < videos.length - 1) {
          setCurrentVideoIndex((prevIndex) => prevIndex + 1);
          setPlaying(true);
        }
      }, [currentVideoIndex, videos.length]);

      const playPreviousVideo = useCallback(() => {
        if (currentVideoIndex > 0) {
          setCurrentVideoIndex((prevIndex) => prevIndex - 1);
          setPlaying(true);
        }
      }, [currentVideoIndex]);

      const handleEnded = useCallback(() => {
        playNextVideo();
      }, [playNextVideo]);

      const isFirstVideo = currentVideoIndex === 0;
    const isLastVideo = currentVideoIndex === videos.length - 1;
    
  return (
    <div className="flex relative flex-col mt-4 items-center rounded-3xl flex-grow w-full max-w-full mx-auto">
      <div className="w-full h-full rounded-3xl ">
        <ReactPlayer
          pip={false}
          light={true}
          ref={playerRef}
          url={videos[currentVideoIndex].url}
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
          onEnded={handleEnded}
        />
      </div>

      <div className="flex absolute top-[43.5%] justify-between items-center w-full px-12">
        <button
          onClick={playPreviousVideo}
          disabled={isFirstVideo}
          className={`p-2 ring-2 rounded-full ring-black ${
            isFirstVideo && "ring-opacity-50 cursor-not-allowed"
          }`}
          aria-label="Previous video"
        >
          <FaArrowLeft color="black" size={20} />
        </button>

        <PlayBtn
          action={togglePlayPause}
          styles="p-6 bg-opacity-75 hover:bg-opacity-100 transition-all"
          playing={playing}
        />

        <button
          onClick={playNextVideo}
          disabled={isLastVideo}
          className={`p-2 rounded-full ring-2 ring-black ${
            isLastVideo && "ring-opacity-50 cursor-not-allowed"
          }`}
          aria-label="Next video"
        >
          <FaArrowRight color="black" size={20} />
        </button>
      </div>
    </div>
  );
}
