import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
import "./About.scss";
import { images } from '../../constants'


const About = () => {
  return (
    <div className='app__about app__flex' id='about'>
        <div className='app__about-photo'>
          <img src={images.photo_remove}/>
        </div>
      <motion.div whileInView={{ x: [100, 0], opacity: [0, 1] }} transition={{ duration: 3 }} className='app__about-info'>

        <div className='app__about-badge'>

          <div className='tag-cmp'>
            <h1 className='head-text-main'>I spent eight years in finance, during which I learned how to collaborate with people around the globe,
            create processes and manage robust projects.</h1>
          </div>

          <div className='tag-cmp'>
            <p className="head-text-desc">After this period I was looking for new challenges and started coding. 
            I made my first scripts in Python, after which I discovered my interest in web development. I work with 
            Python, Django, HTML, CSS, JavaScript and React.</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__primarybg'
);