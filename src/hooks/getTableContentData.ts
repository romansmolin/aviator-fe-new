import TableContent from "@/components/table-content";
import { StrapiContent } from "@/types";

type TableContentItem = {
    heading: string;
    linkId: string
}

export const getTableContentData = (contentData: [StrapiContent]) => {
    const tableContent: TableContentItem[] = []

    contentData.forEach(item => {
        if (item.type === 'heading') {
            tableContent.push({
                heading: item.children[0].text, 
                linkId: item.children[0].text
            })
        }
    })

    return tableContent
}