"use client"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"

export const GameCard = (props: {
    title: string,
    description: string,
    color: string,
    src: string,
    url: string
}) => {
    const { title, description, color, src, url } = props

    const classNames = {
        card: `
            w-full md:w-96 p-4
            bg-gradient-to-br from-${color}-100/50 to-default-50 md:hover:from-${color}-100/80
            shadow shadow-${color} md:hover:shadow-${color}-600
            select-none cursor-pointer
            md:hover:scale-[1.01] md:active:scale-[0.99] transition ease-in-out
        `,
        cardHeader: `
            min-h-28 flex justify-start items-start
        `,
        cardTitle: `
            text-3xl font-semibold line-clamp-1
        `,
        cardDescription: `
            text-default-400 leading-5 line-clamp-2
        `
    }

    return (
        <Card
            className={classNames.card}
            onPress={() => {
                window.open(url, "_blank")
            }}
        >
            <CardHeader className={classNames.cardHeader}>
                <div className="flex flex-col gap-1">
                    <p className={classNames.cardTitle}>
                        {title}
                    </p>
                    <p className={classNames.cardDescription}>
                        {description}
                    </p>
                </div>
            </CardHeader>
            <CardBody className="flex items-center">
                <Image src={src} alt={src} draggable={false} />
            </CardBody>
        </Card>
    )
}