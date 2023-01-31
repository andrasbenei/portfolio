import React from "react";
import "./Header.scss";
import { AppWrap } from '../../wrapper'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-info'>
        <div className='app__header-badge'>

          <TypeAnimation
            sequence={[
              'Hi,',
              1000,
              "Hi, I'm Andras",
            ]}
            wrapper="div"
            cursor={false}
            className='name'
          />

          <TypeAnimation
            sequence={[
              '',
              3000,
              "a software developer with a finance background.",
              1000,
              "a software developer with a finance background. My focus is on web development, especially React."
            ]}
            wrapper="div"
            cursor={false}
            className='description'
          />

          <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{ duration: 3, delay: 10 }} className='portfolio'>Scroll Down</motion.div>

        </div>
      </div>
    </div>
  )
}

export default AppWrap(Header, 'header');

