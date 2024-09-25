import Header from "@/app/_components/header";
import YouTube from 'react-youtube';
import Cta from "@/app/_components/cta";

export default function Page({videos}) {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [player, setPlayer] = useState(null);
    
    const onReady = (event) => {
    setPlayer(event.target);
    };
    
    const playNextVideo = useCallback(() => {
    if (currentVideoIndex < videos.length - 1) {
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
    }, [currentVideoIndex, videos.length]);
    
    const playPreviousVideo = useCallback(() => {
    if (currentVideoIndex > 0) {
    setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    }
    }, [currentVideoIndex]);
    
    useEffect(() => {
    if (player) {
    player.loadVideoById(videos[currentVideoIndex].id);
    }
    }, [currentVideoIndex, player, videos]);
    
    const isFirstVideo = currentVideoIndex === 0;
    const isLastVideo = currentVideoIndex === videos.length - 1;
    
  return (
    <section className="px-8 flex flex-col justify-between h-full bg-rema">
      <Header text="music video" />


    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="w-full aspect-video">
        <YouTube
          videoId={videos[currentVideoIndex].id}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={onReady}
        />
      </div>
      <div className="flex justify-between items-center w-full mt-4">
        <button
          onClick={playPreviousVideo}
          disabled={isFirstVideo}
          className={`p-2 rounded-full ${
            isFirstVideo ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
          }`}
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-semibold text-center">
          {videos[currentVideoIndex].title}
        </h2>
        <button
          onClick={playNextVideo}
          disabled={isLastVideo}
          className={`p-2 rounded-full ${
            isLastVideo ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
          }`}
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

      <Cta text="watch on youtube" />
    </section>
  );
}
