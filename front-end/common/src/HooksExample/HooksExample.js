import React, { useEffect, useMemo, useRef, useState } from 'react'

const HooksExample = () => {
    const [number, setNumber] = useState(2)
    const [name, setName] = useState('')

    const renderCount = useRef(0)
    const inputRef = useRef();
    const prevName = useRef('')

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        prevName.current = name;
    })


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
        </>
    )
}

export default HooksExample

