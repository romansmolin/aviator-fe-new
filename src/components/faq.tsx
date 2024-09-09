import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

type Question = {
    label: string
    text: string
}
interface FaqProps {
    questions: Question[]
    heading?: string
}

const Faq: React.FC<FaqProps> = ({ questions, heading = "" }) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">{`Frequently Asked Question About ${heading}`}</h2><div className="space-y-4">
                {questions.map(question => (
                    <Collapsible key={question.label}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-md">
                            <h3 className="text-lg font-medium">{question.label}</h3>
                            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                            {question.text}
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </>
    )
}

export default Faq