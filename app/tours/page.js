import CtaBtn from "@/app/_components/cta";
import Header from "@/app/_components/header";

export const metadata = {
  title: "Tours",
};

export default function Page() {
  return (
    <section className="px-8 flex flex-col gap-8 pb-12 py-4 justify-between h-full w-full bg-rema">
      <Header text="tours" />


      <CtaBtn text="book your tickets" />
    </section>
  );
}
