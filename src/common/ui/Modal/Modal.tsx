import { forwardRef, memo, ReactNode, Ref, useEffect, useState } from 'react'
import { classNames, Mods } from '@classNames/classNames'
import CloseIcon from '@assets/icons/close.svg'
import './Modal.scss'
import { Portal } from '../Portal/Portal'

interface IModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
  closeButton?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = memo(
  forwardRef((props: IModalProps, ref: Ref<HTMLButtonElement>) => {
    const { className, children, isOpen, onClose, lazy, closeButton } = props
    const [isClosing, setIsClosing] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      if (isOpen) {
        setIsMounted(true)
        setTimeout(() => {
          setIsOpened(true)
        }, 50)
      }
    }, [isOpen])

    useEffect(() => {
      if (isOpen) {
        window.addEventListener('keydown', onKeyDown)
        document.body.classList.add('modal-open')
      }

      return () => {
        document.body.classList.remove('modal-open')
        window.removeEventListener('keydown', onKeyDown)
      }
    })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler()
      }
    }

    const onCloseHandler = () => {
      if (onClose) {
        setIsClosing(true)
        setTimeout(() => {
          onClose()
          setIsClosing(false)
          setIsOpened(false)
        }, ANIMATION_DELAY)
      }
    }

    const mods: Mods = {
      'modal--opened': isOpened,
      'modal--closing': isClosing
    }

    if (lazy && !isMounted) {
      return null
    }

    return (
      <Portal>
        <div className={classNames('modal', mods, [className])}>
          <div className="modal__overlay" onClick={onCloseHandler}></div>
          <div className="modal__content">
            {children}
            {closeButton && (
              <button
                ref={ref}
                className="modal__close-button"
                onClick={onCloseHandler}
              >
                <img src={CloseIcon} />
              </button>
            )}
          </div>
        </div>
      </Portal>
    )
  })
)
