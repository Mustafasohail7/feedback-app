import React from 'react'
import Feedback from './Feedback'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0 ){
    return <p>No Feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((feed) => (
        <motion.div key={feed.id} initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <Feedback key={feed.id} item={feed} 
        />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((feed) => (
  //       <Feedback key={feed.id} item={feed} 
  //       handleDelete={handleDelete} 
  //       />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
