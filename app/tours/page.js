import CtaBtn from "@/app/_components/cta";
import Header from "@/app/_components/header";
import Tour from "@/app/_components/tour";

export const metadata = {
  title: "✈️ Tours",
};

const tours = [
  { city: "Ibadan", location: "Mapo Hall", date: "19-08-2025" },
  { city: "London", location: "Wembley", date: "29-08-2025" },
  { city: "Berlin", location: "Monarch", date: "29-08-2025" },
  { city: "Amsterdam", location: "Paradiso", date: "12-09-2025" },
  { city: "London", location: "The 100 Club", date: "19-09-2025" },
  { city: "New York", location: "Madison Square", date: "19-09-2025" },
];

export default function Page() {
  return (
    <section className="px-8 flex flex-col gap-8 pb-12 py-4 justify-between h-full w-full bg-black">
      <Header text="tours" />

      <ul className="flex flex-col justify-center items-center mb-8">
      {tours.map((el, i) => (
        <Tour key={i} location={el.location} city={el.city} date={el.date} />
      ))}
      </ul>

      <CtaBtn text="book your tickets" />
    </section>
  );
}
