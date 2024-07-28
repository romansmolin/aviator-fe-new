import { StrapiContent } from "@/types";

export const getTableContentData = (contentData: [StrapiContent]) => {
    const tableContent: string[] = []

    contentData.forEach(item => {
        if (item.type === 'heading') {
            tableContent.push(item.children[0].text)
        }
    })

    return tableContent
}