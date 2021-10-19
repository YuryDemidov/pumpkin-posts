import React from 'react'
import { CSSTransition } from 'react-transition-group'
import cn from 'classnames'

import Button from '../Button/Button'
import classes from './Modal.module.scss'

const Modal = ({ content, setContent }) => {
  const closeModal = () => setContent('')

  return (
    <CSSTransition in={!!content} timeout={300} classNames='modal'>
      <div className={cn(classes.modal, { [classes.active]: !!content })} onClick={closeModal}>
        <CSSTransition in={!!content} timeout={300} classNames='modal-content'>
          <div className={classes.content} onClick={evt => evt.stopPropagation()}>
            <Button
              buttonType='close'
              className={classes.close}
              aria-label='Закрыть модальное окно'
              onClick={closeModal}
            />
            {content}
          </div>
        </CSSTransition>
        <div className={classes.background} />
      </div>
    </CSSTransition>
  )
}

export default Modal
