"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { Section } from "lucide-react";
// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/1.jpg",
    name: "John Doe",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/1.jpg",
    name: "John Doe",
  },
];

export default function MarqueeSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="text-center px-40 py-10 flex flex-col items-center gap-4">
        <span className="inline-block bg-lime-100 text-lime-800 text-sm font-semibold px-4 py-1 rounded-full">
          ABOUT US
        </span>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Tanggapan Mereka tentang Kami
        </h2>

        {/* Paragraf Deskripsi */}
        <p className="text-gray-600 mt-4 text-base">
          Green Power is a leading provider of solar energy solutions, dedicated
          to empowering individuals and businesses with clean, renewable energy.
          We believe in the power of solar energy to transform lives and
          communities.
        </p>
      </div>

      <Marquee className="" >
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent >
          {data.map((item, index) => (
            <MarqueeItem key={index}>
              <Card className="max-w-[400px] mx-2 bg-white">
                <CardHeader className="flex gap-3 items-center">
                  <img
                    alt="heroui logo"
                    height={40}
                    //   radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-md">{item.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
      <Marquee className="pt-5">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="right">
          {data.map((item, index) => (
            <MarqueeItem key={index}>
              <Card className="max-w-[400px] mx-2 bg-white">
                <CardHeader className="flex gap-3 items-center">
                  <img
                    alt="heroui logo"
                    height={40}
                    //   radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-md">{item.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                  {/* <CardDescription>{item.description}</CardDescription> */}
                </CardContent>
              </Card>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
