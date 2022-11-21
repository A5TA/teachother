import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {FiBookOpen} from 'react-icons/fi'
import {IoCreateSharp} from 'react-icons/io5'
import {GiTeacher} from 'react-icons/gi'

const imageAnimate = {
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  rotate:[0,10,0],
  transition: {type:"spring",
  bounce:0.2,
  duration:1}
}
}

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.2,
  duration:1}
}

}

const Card = ({ image, h2, id }) => {
  return (
    <motion.div className={styles.card} id={id}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.3}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div      
        variants={imageAnimate}
      >
        <Image className={styles.image_container} 
          src={image}
          alt="People learning"
          width="450"
          height="300"
        />
      </motion.div>
      <motion.h2 className={styles.card_h2}
        variants={textAnimate}
      >{h2}</motion.h2>
    </motion.div>
  );
}

const SubCard = ({ image, h2, id, p }) => {
  return (
    <motion.div className={styles.card_sub} id={id}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.3}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className={styles.card_icon}    
        variants={textAnimate}
      >
      {image}
      </motion.div>
      <motion.h2 className={styles.card_h2} style={{margin: 0}}
        variants={textAnimate}
      >{h2}</motion.h2>
      <motion.p className={styles.card_p}
        variants={textAnimate}
      >{p}</motion.p>
    </motion.div>
  );
}


const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 60,
    restDelta: 0.001
  })

  const textForCard = [`TeachOther's goal is to deliver the most important computer science content to one another. 
  This will include anything from high-level mathematics like discrete mathematics and calculus to computer science 
  topics like data structures and algorithms. We will also present information on internships, interview preparation, 
  and developer tools and frameworks required for real-world applications.`,`Learn`,`Enhance your learning experience by watching the best Computer Science Videos`,
  `Practice`, `Apply what you learn by creating high-functioning meaningful projects`, `Teach`,`Learning via teaching may help learners develop their efficacy, confidence, and communication skills`]

  return (
    <div>
    <motion.div className={styles.progress_bar} style={{ scaleX }} />
    <div className={styles.heading}>
        <ul className={styles.heading_text}>
          <li>Welcome to TeachOther</li>
          <li>Create and/or Watch Educational Videos</li>
          <li>Together, Let's Create a Great Computer Science Curriculum</li>
        </ul>
      <Image className={styles.image_container}  src={"https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="coding" width={800} height={500} loading="lazy"/>
    </div>
   
    <Card image={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"} h2={textForCard[0]} />

    <div style={{display: 'flex', gap: '5%', justifyContent: 'center'}}>
      <SubCard image={<FiBookOpen size={65}/>} h2={textForCard[1]} p={textForCard[2]}/>
      <SubCard image={<IoCreateSharp size={65}/>} h2={textForCard[3]} p={textForCard[4]}/>
      <SubCard image={<GiTeacher size={65}/>} h2={textForCard[5]} p={textForCard[6]}/>
    </div>

    </div>
  )
}

export default HomePage