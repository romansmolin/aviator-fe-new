import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

const Faq = () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2><div className="space-y-4">
                <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-md">
                        <h3 className="text-lg font-medium">What is the warranty on this product?</h3>
                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                        All of our products come with a 1-year warranty against any manufacturing defects. If you experience any
                        issues, please  hesitate to contact our support team.
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-md">
                        <h3 className="text-lg font-medium">How do I care for this product?</h3>
                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                        To keep your product in top condition, we recommend gently wiping it down with a soft, damp cloth. Avoid
                        using any harsh chemicals or abrasives, as they may damage the finish.
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-md">
                        <h3 className="text-lg font-medium">Do you offer any discounts or promotions?</h3>
                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                        Yes, we offer a variety of discounts and promotions throughout the year. Be sure to check our website or
                        sign up for our newsletter to stay up-to-date on the latest offers.
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </>
    )
}

export default Faq