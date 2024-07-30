import React from "react";
import Paragraph from "./paragraph";
import { StrapiContent } from "@/types";

interface ReviewComponentProps {
    reviewData: StrapiContent[]
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ reviewData }) => {
    return (
        <div className="flex flex-col gap-5 w-[100%] bg-clip-border px-5">
            {reviewData.map((item: any, index: number) => {
                if (item.type === "heading") {
                    return <h3 key={index} className="text-4xl font-bold">{item.children[0].text}</h3>;
                } else if (item.type === "paragraph") {
                    // eslint-disable-next-line react/jsx-key
                    return <Paragraph reviewText={item.children}/>;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default ReviewComponent;