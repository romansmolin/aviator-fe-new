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
    <div id={id}>
      {reviewText.map((item, index) => (
        <span key={item.text} style={item.bold ? { fontWeight: 'bold' } : undefined}>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Paragraph;