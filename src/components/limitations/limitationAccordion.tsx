import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion"
import { AccordionText, AccordionTitle } from "./style"

export interface LimitationAccordionProps{
    title: string;
    children:React.ReactNode;
}

export const LimitationAccordion = ({title, children}: LimitationAccordionProps) => {
    return (
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <AccordionTitle>
                        {title}
                    </AccordionTitle>
                </AccordionTrigger>
                <AccordionContent>
                    <AccordionText>
                        {children}
                    </AccordionText>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}