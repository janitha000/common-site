import React from 'react'
import './CSSTricks.css'

const CSSTricks = () => {
    return (
        <>
            <div style={{ "display": "flex", "justifyContent": "space-around" }}>
                <div className="parent">
                    <div className="child"></div>
                </div>

                <div className="parent2">
                    <div className="child2"></div>
                </div>
            </div>


            <div style={{ "margin-top": "40px" }}>
                <input type="text"></input>
                <div>Div item</div>
                <div className="red">Div item with red</div>
                <div>
                    <span>
                        <b>This is inside div and span</b>
                    </span>
                </div>
                <span>Span Item</span>
                <ul>
                    <li >Item 1</li>
                    <li className="green">Item 2</li>
                    <li className="brown">Item 3</li>
                    <li >Item 4</li>
                    <li>Item 5</li>
                </ul>
                <p data-blue="123">Hello</p>
                <ul className="elements">
                    <li >Item 1</li>
                    <li >Item 2</li>
                    <li >Item 3</li>
                    <li >Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>

            <div classname="position" style={{ "margin-top": "40px" }}>
                <div className="parent-1">
                    Parent
                    <div className="child-1">Child 1</div>
                    <div className="child-2">Child 2</div>
                    <div className="child-3">Child 3</div>
                </div>

            </div>

            <div className="grid-container" >
                <div className="grid-1">Child 1</div>
                <div className="grid-2">Child 2</div>
                <div className="grid-3">Child 3</div>
                <div className="grid-4">Child 4</div>
                <div className="grid-5">Child 5</div>
            </div>

            <div className="grid-container2" >
                <div className="grid-12">Child 1</div>
                <div className="grid-22">Child 2</div>
                <div className="grid-32">Child 3</div>
                <div className="grid-42">Child 4</div>
                <div className="grid-52">Child 5</div>
            </div>
        </>
    )
}

export default CSSTricks
