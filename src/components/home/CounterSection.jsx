import { useInView } from "react-intersection-observer";
import CounterCard from "../cards/CounterCard";

const CounterSection = () => {
  const cards = [
    {
      number: 100,
      title: "Satisfied Customer",
      icon: "/home/person_play.png",
      suffix: "%"
    },
    {
      number: 1500,
      title: "Happy Customer",
      icon: "/home/family_star.png",
      suffix: "+"
    },
    {
      number: 10,
      title: "Professional Team",
      icon: "/home/group.png",
      suffix: "+"
    },
    {
      number: 12,
      title: "Corporate Partner",
      icon: "/home/handshake.png",
      suffix: "+"
    },
  ];

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  return (
    <section ref={ref}>
      <div className="flex gap-4 flex-col md:flex-row justify-around items-center p-8">
        {cards.map((card, index) => (
          <CounterCard
            key={index}
            icon={card.icon}
            title={card.title}
            number={card.number}
            suffix={card.suffix}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
