"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

export default function Mitra() {
  const MitraPartner = [
    {
      name: "1",
      image:
        "https://i.pinimg.com/originals/8c/99/28/8c992817370af5183f95ce718d88ec5c.png",
    },
    {
      name: "2",
      image:
        "https://i.pinimg.com/originals/8c/99/28/8c992817370af5183f95ce718d88ec5c.png",
    },
  ];
  return (
    <section className="pt-20">
      <div className="text-center mx-40 text-gray-600 text-wrap my-10">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-5 text-primary">
          Mitra Partner
        </h1>
        <p>
          Kami berkomitmen untuk mendukung proyek-proyek yang berkualitas dan
          bertujuan yang berbeda. Dengan bergabung dengan Mitra Partner kami,
          kami dapat meningkatkan kemampuan kami dalam meningkatkan
          produktivitas dan
        </p>
      </div>

      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {MitraPartner.map((item) => (
              <MarqueeItem className="h-32 w-32" key={item.name}>
                <img
                  alt={`Placeholder ${item.name}`}
                  className="overflow-hidden rounded-full"
                  src={item.image}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
