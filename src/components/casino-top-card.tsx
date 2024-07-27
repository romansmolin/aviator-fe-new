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

	const getUserFriendlyUrl = (name: string) => {
		return name
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^\w-]+/g, "");
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-4 p-5 lg:pr-2 items-center rounded-xl box-border border">
			{/* Logo */}
			<div className="md:col-span-1 h-[170px] bg-primary p-4 rounded-xl flex items-center justify-center">
				<div className="w-full md:w-[150px] h-full flex justify-center items-center">
					<Image src={logo} alt={`${name} Logo`} width={150} height={150} />
				</div>
			</div>

			{/* Text */}
			<div className="md:col-span-2 flex flex-col items-center justify-between p-4 leading-normal text-center md:text-left">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gradient">{name}</h5>
				<p className="mb-3 text-primary-400 text-center font-bold">{bonus}</p>
			</div>

			{/* Rating */}
			<div className="md:col-span-1">
				<div className="flex flex-col items-center my-auto">
					<RatingCircle rating={rating} />
					<span className="text-primary-400 font-bold">Rating</span>
				</div>
			</div>


			{/* Buttons */}
			<div className="md:col-span-1 flex justify-center w-full md:w-auto">
				<div className="flex flex-col gap-3 w-44">
					<Button>Play Now!</Button>
					<Button asChild>
						<Link
							href={{
								pathname: `/review/${getUserFriendlyUrl(name)}/`,
								query: {
									id: casinoId,
								},
							}}
						>
							Review
						</Link>
					</Button>
				</div>
			</div>
		</div>

	);
};
export default CasinoTopCard;