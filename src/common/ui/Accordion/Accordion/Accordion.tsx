import { useEffect, useRef, useState } from 'react'
import ArrowIcon from '@assets/icons/arrow.svg'
import { classNames } from '@classNames/classNames'
import './Accordion.scss'

interface IAccordionProps {
  className?: string
  title: string
  content: string
  name: string
  isChecked?: boolean
  tag?: 'div' | 'li'
  onlyOne?: boolean
  onToggle: () => void
}

export const Accordion = (props: IAccordionProps) => {
  const {
    className,
    title,
    name,
    content,
    isChecked,
    onToggle,
    tag: Tag = 'div',
    onlyOne,
  } = props

  const [contentHeight, setContentHeight] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight)
  }, [])

  const iconMods = { 'accordion__icon--active': isChecked }
  const wrapperMods = { 'accordion__wrapper--active': isChecked }

  return (
    <Tag className={classNames('accordion', {}, [className])}>
      <input
        className="accordion__input"
        id={title}
        name={name}
        value={title}
        ref={inputRef}
        checked={isChecked}
        type={onlyOne ? 'radio' : 'checkbox'}
        onChange={() => {}}
      />
      <label className="accordion__label" htmlFor={title} onClick={onToggle}>
        <p className="accordion__title">{title}</p>
        <img src={ArrowIcon} className={classNames('accordion__icon', iconMods)} />
      </label>
      <div
        className={classNames('accordion__wrapper', wrapperMods)}
        style={{ height: isChecked ? contentHeight : 0 }}
      >
        <p ref={contentRef}>{content}</p>
      </div>
    </Tag>
  )
}
