import { useInView } from "react-intersection-observer";
import CounterCard from "../cards/CounterCard";

const CounterSection = () => {
  const cards = [
    {
      number: 10000,
      title: "Satisfied Customer",
      icon: "/home/person_play.png",
    },
    { number: 100, title: "Services", icon: "/home/family_star.png" },
    { number: 20, title: "Experienced", icon: "/home/group.png" },
    { number: 4, title: "Rating on Google", icon: "/home/handshake.png" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-8 w-full">
        {cards.map((card, index) => (
          <CounterCard
            key={index}
            icon={card.icon}
            title={card.title}
            number={card.number}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
