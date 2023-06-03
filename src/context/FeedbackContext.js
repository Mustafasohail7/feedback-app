import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback] = useState([]);

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch('https://mustafasohail7-special-waffle-rwr7g97q66wcp6x6-5000.preview.app.github.dev//feedback?_sort=id&order=desc')
        const data = await response.json()

        console.log(data)
    }

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
