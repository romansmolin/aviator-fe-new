import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { getUrlFriendlyString } from "@/shared/utils/getUrlFriendlyString"

interface BonusCardProps {
    casinoName: string,
    casinoLogo: string,
    bonusTitle: string,
    uuid: String,
    bonusType: String,
}

const BonusCard: React.FC<BonusCardProps> = ({ casinoName, casinoLogo, bonusTitle, uuid, bonusType }) => {
    return (
        <Card className="min-w-[305px] rounded-lg shadow-lg overflow-hidden bg-transparent">
            <div className="h-[170px] bg-primary p-4 rounded-xl flex items-center justify-center">
                <div className="w-full md:w-[150px] flex justify-center items-center">
                    <Image src={casinoLogo} alt="Bonus Image" width={150} height={150} />
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary">{casinoName}</h3>
                <p className="text-3xl font-bold text-secondary-foreground my-4">{bonusTitle}</p>
                <div className="bg-muted rounded-md px-4 py-2 text-muted-foreground font-medium mb-4">Bonus Code: ACME500</div>
                <div className="grid grid-cols-1 gap-y-4 text-left">
                    <div>
                        <h4 className="text-lg font-medium text-primary">Allowed Games</h4>
                        <p>Gates of Olympus Slot</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-primary">Max. Win. Amount</h4>
                        <p>€/$20</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-primary">Wagering</h4>
                        <p>x40</p>
                    </div>
                </div>
                <Button className="w-full mt-5" asChild>
                    <Link
                        href={{
                            pathname: `/${getUrlFriendlyString(bonusType as string)}/${getUrlFriendlyString(casinoName)}`,
                            query: {
                                id: uuid?.toString(),
                            },
                        }}
                    >
                        Review
                    </Link>
                </Button>
            </div>
        </Card>
    )
}

export default BonusCard