import React, { useEffect, useRef, useState } from 'react'
import './FlashCard.css'

const FlashCard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState(100)

    const frontEl = useRef();
    const backEl = useRef();

    const getMaxHeight = () => {

        const frontElHeight = frontEl.current.getBoundingClientRect().height;
        const backElHeight = frontEl.current.getBoundingClientRect().height;
        setHeight(Math.max(frontElHeight, backElHeight, 100))
    }

    useEffect(() => {
        getMaxHeight();
    }, [flashcard?.question, flashcard?.answer, flashcard?.options])

    useEffect(() => {
        window.addEventListener('resize', getMaxHeight)
        return () => window.removeEventListener('resize', getMaxHeight);
    }, [])


    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
            style={{ height: height }}>

            <div className="flashcard-front" ref={frontEl}>
                {flashcard?.question}
                <div className="flashcard-options">
                    {flashcard?.options.map(option => (
                        <div className="flashcard-option">{option}</div>
                    ))}
                </div>
            </div>
            <div className="flashcard-back" ref={backEl}>
                {flashcard?.answer}
            </div>
        </div>
    )
}

export default FlashCard
