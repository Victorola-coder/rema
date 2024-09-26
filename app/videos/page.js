
import CtaBtn from "@/app/_components/cta";
import Header from "@/app/_components/header";
import VideoPlayer from "@/app/_components/videoPlayer";

export const metadata = {
  title: "🎥 Videos",
};

export default function Page() {
  return (
    <section className="px-8 flex flex-col gap-8 pb-12 py-4 justify-between h-full w-full bg-rema">
      <Header text="music video" />

      <VideoPlayer/>

      <CtaBtn text="watch on youtube" />
    </section>
  );
}
