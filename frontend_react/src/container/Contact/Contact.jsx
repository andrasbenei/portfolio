import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss'
import { FaCity, FaPhone, FaEnvelopeOpenText, FaGithub } from 'react-icons/fa'


const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: .4, staggerChildren: .1 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

const squareVariants = {
  initial: {
    opacity: 0,
    scale: .3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}

const Contact = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);

  const renderSquares = () => {
    const squares = ['yellow', 'green', 'blue', 'violet'];
    return squares.map((color, i) => (
      <motion.div 
        key={i}
        className={`square square--${color}`} 
        onClick={() => setSelectedSquare(color)}
        variants={squareVariants}
        transition={{ duration: .2, type: 'spring' }}
      >
        {color === 'yellow' && <FaEnvelopeOpenText className='square-icon'/>}
        {color === 'green' && <FaCity className='square-icon'/>}
        {color === 'blue' && <FaPhone className='square-icon'/>}
        {color === 'violet' && <FaGithub className='square-icon'/>}
      </motion.div>
    ));
  }
  return (
    <>
    <h1 className='contact-text'>Contact</h1>
    <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {selectedSquare 
          ? (
            <motion.div 
              className={`card card__wrapper card__wrapper--${selectedSquare}`}
              key="card"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="card__header">
                {selectedSquare === 'yellow' && <h2>Email</h2>}
                {selectedSquare === 'green' && <h2>Location</h2>}
                {selectedSquare === 'blue' && <h2>Phone</h2>}
                {selectedSquare === 'violet' && <h2>Social</h2>}
                <button onClick={() => setSelectedSquare(null)}>
                  Close
                </button>
              </div>
              <div className="card__content">
                <div className="card__img-placeholder">
                  {selectedSquare === 'yellow' && <FaEnvelopeOpenText className='square-icon'/>}
                  {selectedSquare === 'green' && <FaCity className='square-icon'/>}
                  {selectedSquare === 'blue' && <FaPhone className='square-icon'/>}
                  {selectedSquare === 'violet' && <FaGithub className='square-icon'/>}
                </div>
                <div className="card__text-placeholder">
                  {selectedSquare === 'yellow' && <p className='card__text-email'>ANDRAS.BENEI@GMAIL.COM</p>}
                  {selectedSquare === 'green' && <p className='card__text-location'>MUNICH, GERMANY</p>}
                  {selectedSquare === 'blue' && <p className='card__text-phone'>+49 176 3717 6816</p>}
                  {selectedSquare === 'violet' && 
                    <div className='card__text-placeholder-social'>
                      <a href='https://www.linkedin.com/in/andrasbenei/' target='_blank' rel='noreferrer'>LinkedIn</a>
                      <a href='https://github.com/andrasbenei' target='_blank' rel='noreferrer'>GitHub</a>
                    </div>
                  }
                </div>
              </div>
            </motion.div>
          )
          : (
            <motion.div 
              className="cp-transition__squares-wrapper"
              key="squares"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderSquares()}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__primarybg'
);