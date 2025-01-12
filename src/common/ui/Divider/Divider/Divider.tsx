import './Divider.scss'

interface IDividerProps {
  content: string | number
}

export const Divider = (props: IDividerProps) => {
  const { content } = props

  return (
    <div className="divider">
      <span className="divider__content">{content}</span>
      <hr className="divider__item" />
    </div>
  )
}
