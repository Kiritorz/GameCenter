"use client"
import { GameCard } from "@/components/game-card";
import { Gamepad } from "lucide-react";

export default function Home() {
  const Games = [
    {
      title: "BlackJack",
      description: "Catch a hand value as close to 21 without exceeding it.",
      color: "secondary",
      src: "/game-blackjack.png",
      url: "https://kiritorz.github.io/BlackJackOnline"
    },
    {
      title: "Taxes Hold'em",
      description: "Bet and bluff your way to victory.",
      color: "primary",
      src: "/game-texas-holdem.png",
      url: "https://kiritorz.github.io/THG"
    },
  ]

  const GameCenterHeader = (
    <div className="flex gap-4 justify-between md:justify-normal">
      <Gamepad className="hidden md:block size-10 my-auto" />
      <div className="text-2xl md:text-4xl text-left font-semibold flex flex-col md:flex-row gap-0 md:gap-3">
        <span>K1ssInn Lee&apos;s</span>
        <span className="text-warning">Game Center</span>
      </div>
      <Gamepad className="block md:hidden size-10 my-auto" />
    </div>
  )

  return (
    <section className="font-serif flex flex-col md:pt-6 gap-8 md:gap-16">
      {GameCenterHeader}
      <div className="mx-auto grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-8">
        {
          Games.map((game, index) =>
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              color={game.color}
              src={game.src}
              url={game.url}
            />)
        }
      </div>
    </section>
  );
}
