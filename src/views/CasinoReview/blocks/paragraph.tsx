import React from "react";

interface ParagraphProps {
  reviewText: TextItem[];
}

type TextItem = {
    bold: boolean
    text: string
}

const Paragraph: React.FC<ParagraphProps> = ({ reviewText }) => {
  return (
    <div>
      {reviewText.map((item, index) => (
        <span key={index} style={item.bold ? { fontWeight: 'bold' } : undefined}>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Paragraph;