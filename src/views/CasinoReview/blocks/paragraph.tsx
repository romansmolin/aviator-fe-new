import { cn } from "@/lib/utils";
import React from "react";

interface ParagraphProps {
  reviewText: TextItem[];
  id: string
}

type TextItem = {
    bold: boolean
    text: string
}

const Paragraph: React.FC<ParagraphProps> = ({ id, reviewText }) => {
  return (
    <div id={id} className="text-justify">
      {reviewText.map((item, index) => (
        <span key={item.text} className={cn(item.bold ? 'font-bold text-primary' : '')}>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Paragraph;