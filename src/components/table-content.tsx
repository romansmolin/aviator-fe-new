import React from "react";
import { Dices } from "lucide-react";
import type { TableContentItem } from "@/types";
import NavigationLink from "./navigation-link";

interface TableContentProps {
	content: TableContentItem[];
}

const TableContent: React.FC<TableContentProps> = ({ content }) => {

	return (
		<div className="flex flex-col px-3 lg:sticky lg:top-[65px] lg:max-w-96 border border-dashed rounded-xl h-fit py-2">
			<h3 className="font-bold">Table Of Content</h3>
			<ul>
				{content.map((item) => (
					<li key={item.heading}>
						<NavigationLink 
							href={`#${item.linkId}`}
							label={item.heading}
							icon={<Dices className="w-5 h-5 flex-shrink-0"/>}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TableContent;
