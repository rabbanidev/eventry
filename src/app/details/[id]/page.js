import EventBanner from "@/components/details/EventBanner";
import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";

export default function EventDetailsPage() {
  return (
    <>
      <EventBanner />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
}
