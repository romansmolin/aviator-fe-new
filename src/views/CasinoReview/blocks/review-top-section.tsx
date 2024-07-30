import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import RatingCircle from "@/components/rating-circle";
import { Button } from "@/components/ui/button";

interface ReviewTopSectionProps {
    mainBonus: string;
    logo: string;
    casinoName: string;
    features: string[];
    rating: number;
}

type ReadableFeatures = {
    [key: string]: string;
};

const readableFeatures: ReadableFeatures = {
    crypto_casino:
        "Bet with the future! Enjoy seamless transactions with cryptocurrency.",
    no_deposit_bonus_available:
        "Winning starts before you even deposit! Claim your bonus without spending a dime.",
    support_available:
        "Never play alone! Get instant support whenever you need it.",
    valid_license:
        "Play with peace of mind! Our casino is fully licensed and regulated.",
    aviator_game_available:
        "Take flight to big wins! Explore our exhilarating aviator games.",
    vip_available:
        "Elevate your gaming experience! Unlock exclusive perks with our VIP program.",
};

const ReviewTopSection: React.FC<ReviewTopSectionProps> = ({
    mainBonus,
    logo,
    casinoName,
    features,
    rating
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 mt-6">
            {/* Card With Logo And Bonus */}
            <div
                className=" flex lg:max-w-96 flex-col rounded-xl  
                 bg-clip-border border border-dashed py-6 gap-3"
            >
                <div className="bg-primary shadow-blue-gray-500/40 mx-4 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg flex justify-center items-center">
                    <Image src={logo} alt="card-image" width={200} height={200} />
                </div>

                <div className="flex justify-center my-3">
                    <div className="rounded-lg bg-slate-300 p-2">
                        <h5 className="text-blue-gray-900 block text-center font-sans text-l font-bold leading-snug antialiased">
                            NO DEPOSIT BONUS
                        </h5>
                    </div>
                </div>
                <h5 className="block text-center font-sans text-3xl font-bold leading-snug antialiased">
                    {" "}
                    {mainBonus}
                </h5>

                <div className=" pt-0 m-auto mt-5">
                    <Button className="text-white">
                        Play Now
                    </Button>
                </div>
            </div>

            {/* Main Info */}
            <div className="flex flex-col w-[100%] bg-clip-border  py-6 px-5">
                <h1 className="text-4xl text-gradient font-bold pb-4 border-b-2">
                    {casinoName}
                </h1>

                <div className="mt-5 flex flex-col sm:flex-row justify-between gap-5 lg:gap-12 ">
                    <div>
                        <ul className="space-y-4 text-left">
                            {features?.map((feature) => (
                                <li key={feature} className="flex text-justify items-center space-x-3 rtl:space-x-reverse">
                                    <Check />
                                    <span>{readableFeatures[feature]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-0 flex flex-col gap-2 items-center justify-center">
                        <RatingCircle
                            rating={rating}
                            className="size-44"
                            textClass="text-3xl"
                        />
                        <span className="text-2xl font-bold text-primary-400">Rating</span>
                    </div>
                </div>

                <div className="flex-grow flex flex-col justify-end mt-6 text-primary-600 font-bold">
                    <span className="text-sm">
                        Terms & Conditions Apply. You must be at least 18 years old to visit
                        this casino. Gamble Responsibly!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReviewTopSection;