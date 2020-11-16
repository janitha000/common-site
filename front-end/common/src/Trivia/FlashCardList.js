import React from 'react'
import './FlashCardList.css'

import FlashCard from './FlashCard'

const FlashCardList = ({ questions }) => {
    return (
        <div className="cards-grid">
            {questions?.map(question => (
                <FlashCard flashcard={question} key={question?.id} />
            ))}
        </div>
    )
}

export default FlashCardList
