import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback] = useState([
        {
            id: 1,
            text: 'This is a test feedback',
            rating: 9
        },
        {
            id: 2,
            text: 'This is a good product',
            rating: 8
        },
        {
            id: 3,
            text: 'Me Likeyyyyyy!!<3',
            rating: 10
        },
        {
            id: 3,
            text: 'kia wahiyaat product banaya hai yaar',
            rating: 1
        }
    ]);

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((feedback) => feedback.id !== id))   
        }
        
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=> item.id === id ? { ...item, ...updItem} : item ))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    
}

export default FeedbackContext
