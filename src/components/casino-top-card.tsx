import React from "react";
import Image from "next/image";
import Link from "next/link";
import RatingCircle from "./rating-circle";
import { DollarSign } from "lucide-react";
import { Button } from "./ui/button";


interface CasinoCardProps {
	logo: any;
	name: string;
	bonus: string;
	rating: number;
	hasRegularOffers: boolean;
	hasLiveCasino: boolean;
	hasVIPProgram: boolean;
	hasLiveChat: boolean;
	casinoId: string;
}

const CasinoTopCard: React.FC<CasinoCardProps> = ({
	logo,
	name,
	bonus,
	rating,
	hasRegularOffers,
	hasLiveCasino,
	hasVIPProgram,
	hasLiveChat,
	casinoId,
}) => {
	const features = [
		{ text: "Regular Offers", active: hasRegularOffers, icon: DollarSign },
		{ text: "Live Casino", active: hasLiveCasino, icon: DollarSign },
		{ text: "Live Chat", active: hasLiveChat, icon: DollarSign },
		{ text: "VIP Program", active: hasVIPProgram, icon: DollarSign },
	];

	const getUserFriendlyUrl = (name: string) => {
		return name
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^\w-]+/g, "");
	};

	return (
		<div className="flex flex-col lg:pr-2 justify-between items-center rounded-xl border border-primary-200 bg-white md:flex-row">
			{/* Logo */}
			<div className="w-full md:w-[unset] h-[170px] main-gradient p-4 rounded-xl">
				<div className="w-full md:w-[170px] h-full flex justify-center items-center">
					<Image src={logo} alt={`${name} Logo`} width={150} height={150} />
				</div>
			</div>

			{/* Text */}
			<div className="flex flex-col w-[400px] justify-between p-4 leading-normal">
				<h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gradient">
					{name}
				</h5>
				<p className="mb-3 text-center text-primary-400 font-bold">{bonus}</p>
			</div>

			{/* Categories */}
			<div className="hidden lg:grid gap-2">
				{features.map(
					(feature, index) =>
						feature.active && (
							<div
								key={index}
								className={`rounded-lg text-sm whitespace-nowrap px-5 py-2 border border-primary-200 flex justify-center items-center gap-2 leading-none text-primary-500`}
							>
								<feature.icon />
								{feature.text}
							</div>
						)
				)}
			</div>

			<div className="flex gap-12">
				{/* Rating */}
				<div className="flex flex-col items-center my-auto">
					<RatingCircle rating={rating} />
					<span className="text-primary-400 font-bold">Rating</span>
				</div>

				{/* Buttons */}
				<div className="flex flex-col gap-3 w-44">
					<Button>Play Now!</Button>
					<Button asChild>
						<Link href={{
							pathname: `/review/${getUserFriendlyUrl(name)}/`,
							query: {
								'id': casinoId
							}
						}}>Review</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
export default CasinoTopCard;