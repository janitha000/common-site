import React, { useEffect, useState } from 'react'
import './Trivia.css'
import axios from 'axios'

import FlashCardList from './FlashCardList'

const Trivia = () => {
    const [questions, setQuestions] = useState(SAMPLE)

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10')
            .then(res => {
                debugger
                setQuestions(res.data.results.map((item, index) => {
                    let { question, correct_answer, incorrect_answers } = item;
                    correct_answer = decodeHtml(correct_answer)
                    incorrect_answers.map(a => decodeHtml(a))
                    return {
                        id: `${index}-${Date.now()}`,
                        question: decodeHtml(question),
                        options: [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5),
                        answer: correct_answer
                    }
                }))
            })
    }, [])

    const decodeHtml = (str) => {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str;
        return textArea.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="trivia">
            <form className="trivia-form" onSubmit={handleSubmit}>

            </form>
            <div className="trivia-container">
                <FlashCardList questions={questions} />
            </div>

        </div>
    )
}

const SAMPLE = [
    {
        id: 1,
        question: "what is 2+2?",
        answer: '4',
        options: ['2', '4', '6', '8']
    },
    {
        id: 2,
        question: "what is 2+3?",
        answer: '4',
        options: ['2', '4', '6', '8']
    },
    {
        id: 3,
        question: "what is 2+4?",
        answer: '4',
        options: ['2', '4', '6', '8']
    }
]

export default Trivia
