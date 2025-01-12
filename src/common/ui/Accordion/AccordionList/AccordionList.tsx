import { useState } from 'react'
import { Accordion } from '../Accordion/Accordion'
import './AccordionList.scss'

interface IAccordionData {
  title: string
  content: string
}

interface IAccordionListProps {
  className?: string
  title?: string
  name: string
  data: IAccordionData[]
  onlyOne?: boolean
  parentForceUpdate?: () => void
}

export const AccordionList = (props: IAccordionListProps) => {
  const { className, title, name, data, onlyOne } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setActiveIndex(prevIndex => (onlyOne ? (prevIndex === index ? null : index) : index));
  };

  return (
    <>
      {title && <h3 className="accordion-list__title">{title}</h3>}
      <ul className={className}>
        {data.map(({ title, content }, index) => (
          <Accordion
            title={title}
            content={content}
            isChecked={activeIndex === index}
            name={name}
            key={title}
            tag="li"
            onToggle={() => handleAccordionToggle(index)}
          />
        ))}
      </ul>
    </>
  );
};
