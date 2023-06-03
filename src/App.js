import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIcon from "./components/AboutIcon"
import About from './pages/About'
import { useState } from "react"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){

    const [feedback,setFeedback] = useState(FeedbackData)


    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
            <Routes>
            <Route exact path="/" element={
                <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList/>
                </>
            }> 
            </Route>
            <Route path='/about' element={<About/>}/>
            </Routes>
            <AboutIcon />
        </div>
        </Router>
        </FeedbackProvider>
    )

}

export default App