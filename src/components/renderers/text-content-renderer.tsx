import React from "react";
import Paragraph from "../paragraph";
import { StrapiContent } from "@/types";
import { cn } from "@/shared/lib/cn";

interface TextContentRendererProps {
    contentData: StrapiContent[],
    className?: string
}

const TextContentRenderer: React.FC<TextContentRendererProps> = ({ contentData, className }) => {
    return (
        <div className={cn('flex flex-col rounded-xl py-6 border border-dashed leading-8 gap-3 w-[100%] bg-clip-border px-5', className)}>
            {contentData.map((item: any, index: number) => {
                if (item.type === "heading") {
                    return <h3 key={index} id={item.children[0].text} className="text-4xl scroll-my-14 font-bold break-words">{item.children[0].text}</h3>;
                } else if (item.type === "paragraph") {
                    return <Paragraph key={item.children.text} id={item.children.text} reviewText={item.children}/>;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default TextContentRenderer;