import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <section className="py-8 container">
      <Header />
      <EventList />
    </section>
  );
}
