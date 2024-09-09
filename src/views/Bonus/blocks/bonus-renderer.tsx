import React from "react";
import Paragraph from "@/views/CasinoReview/blocks/paragraph";
import { StrapiContent } from "@/types";

interface ReviewComponentProps {
    bonusData: StrapiContent[]
}

const BonusRenderer: React.FC<ReviewComponentProps> = ({ bonusData }) => {
    return (
        <div className="flex flex-col rounded-xl py-6 border border-dashed gap-5 w-[100%] bg-clip-border px-5">
            {bonusData.map((item: any, index: number) => {
                if (item.type === "heading") {
                    return <h3 key={index} id={item.children[0].text} className="text-4xl scroll-my-14 font-bold">{item.children[0].text}</h3>;
                } else if (item.type === "paragraph") {
                    return <Paragraph key={item.children.text} id={item.children.text} reviewText={item.children}/>;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default BonusRenderer;