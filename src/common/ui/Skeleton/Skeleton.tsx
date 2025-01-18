import { classNames } from '@classNames/classNames'
import { CSSProperties, memo } from 'react'
import './Skeleton.scss'

interface ISkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  radius?: string
}

export const Skeleton = memo((props: ISkeletonProps) => {
  const { className, height, width, radius } = props

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: radius
  }
  return (
    <div
      className={classNames('skeleton', {}, [className])}
      style={styles}
      data-testid="skeleton"
    ></div>
  )
})
