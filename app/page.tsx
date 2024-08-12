"use client"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { Gamepad } from "lucide-react";

export default function Home() {
  const Games = [
    (
      <Card
        key="BlackJack"
        className={`
            w-full md:w-96 p-4
            bg-gradient-to-br from-secondary-100/50 to-default-50 md:hover:from-secondary-100/80
            shadow shadow-secondary md:hover:shadow-secondary-600
            select-none cursor-pointer
            md:hover:scale-[1.01] md:active:scale-[0.99] transition ease-in-out
        `}
        isPressable
        onClick={() => {
          window.open("https://kiritorz.github.io/BlackJackOnline", "_blank")
        }}
      >
        <CardHeader className="min-h-28 flex justify-start items-start">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-semibold line-clamp-1">
              BlackJack
            </p>
            <p className="text-default-400 leading-5 line-clamp-2">
              Catch a hand value as close to 21 without exceeding it.
            </p>
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image src="/game-blackjack.png" alt="BlackJack" draggable={false} />
        </CardBody>
      </Card>
    ),
    (
      <Card
        key="TexasHoldem"
        className={`
            w-full md:w-96 p-4
            bg-gradient-to-br from-primary-100/50 to-default-50 md:hover:from-primary-100/80
            shadow shadow-primary md:hover:shadow-primary-600
            select-none cursor-pointer
            md:hover:scale-[1.01] md:active:scale-[0.99] transition ease-in-out
        `}
        isPressable
        onPress={() => {
          window.open("https://kiritorz.github.io/THG", "_blank")
        }}
      >
        <CardHeader className="min-h-28 flex justify-start items-start">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-semibold line-clamp-1">
              Taxes Hold&apos;em
            </p>
            <p className="text-default-400 leading-5 line-clamp-2">
              Bet and bluff your way to victory.
            </p>
          </div>
        </CardHeader>
        <CardBody className="flex items-center">
          <Image src="/game-texas-holdem.png" alt="Taxes Hold'em" draggable={false} />
        </CardBody>
      </Card>
    )
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
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {
          Games.map(Game => Game)
        }
      </div>
    </section>
  );
}
