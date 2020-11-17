import React, { useEffect, useRef, useState } from 'react'
import './Trivia.css'
import axios from 'axios'

import FlashCardList from './FlashCardList'

const Trivia = () => {
    const [questions, setQuestions] = useState([])
    const [categories, setCategories] = useState([])

    const categoryEl = useRef();
    const amountRef = useRef();

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php')
            .then(res => {
                setCategories(res.data.trivia_categories)
            })
    }, [])

    useEffect(() => {

    }, [])

    const decodeHtml = (str) => {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str;
        return textArea.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('https://opentdb.com/api.php?amount=10', {
            params: {
                amount: amountRef.current.value,
                category: categoryEl.current.value
            }
        })
            .then(res => {

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
    }

    return (
        <div className="trivia">
            <form className="trivia-form" onSubmit={handleSubmit}>
                <div className="form-option">
                    <label htmlFor="category">Category</label>
                    <select id="category" ref={categoryEl}>
                        {categories.map(category => (
                            <option value={category.id} key={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-option">
                    <label htmlFor="amount">Number of Questions</label>
                    <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountRef} />
                </div>
                <div className="form-option">
                    <button className="form-btn">Generate</button>
                </div>
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
