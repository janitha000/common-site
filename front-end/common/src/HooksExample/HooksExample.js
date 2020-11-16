import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload }
        case "DECREMENT":
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }

}


const HooksExample = () => {
    const [number, setNumber] = useState(2)
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    const [renderTimes, setRenderTimes] = useState(() => {
        console.log("Only run once when loaded, not on re reneder")
        return "Hello"
    })

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const renderCount = useRef(0)
    const inputRef = useRef();
    const prevName = useRef('')

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        prevName.current = name;
    })

    useEffect(() => {
        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    const handleWidth = () => {
        setwindowWidth(window.innerWidth)
    }

    const slowFunction = (number) => {
        // for (let index = 0; index < 1000000; index++) { }
        return number * 2
    }

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const focus = () => {
        inputRef.current.focus()
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementWithReducer = () => {
        dispatch({ type: "DECREMENT", payload: 2 })
    }

    const incrementWithReducer = () => {
        dispatch({ type: "INCREMENT", payload: 5 })
    }

    return (
        <>
            <div>
                <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
                <div>{doubleNumber}</div>
            </div>

            <div style={{ "margin": "20px 20px" }}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <span>{name}</span>
                <div>Prev name {prevName.current}</div>
                <div>Component rendered {renderCount.current} times</div>
            </div>

            <div style={{ "margin": "20px" }}>
                <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={focus}>Focus</button>
            </div>

            <div style={{ "margin": "20px" }}>
                <button onClick={decrementCount}>-</button>
                {count}
                <button onClick={incrementCount}>+</button>
            </div>

            <div style={{ "margin": "20px" }}>
                Window width is {windowWidth}
            </div>

            <div style={{ "margin": "20px" }}>
                <button onClick={decrementWithReducer}>-</button>
                {state.count}
                <button onClick={incrementWithReducer}>+</button>
            </div>
        </>
    )
}

export default HooksExample

