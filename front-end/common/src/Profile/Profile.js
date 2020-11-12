import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import './Profile.css'

function Profile() {
    const [updatedUser, setUpdatedUser] = useState({})
    const [{ user }, dispatch] = useStateValue();

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setUpdatedUser(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(updatedUser)
    }

    const handleSubmit = (e) => {
        console.log(updatedUser)
        console.log(user)
        let updatedUserToStore = { ...updatedUser, ...user }
        console.log(updatedUserToStore)
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_USER,
            user: updatedUserToStore
        })

    }



    return (
        <div className="profile" style={{ "margin-top": "50px" }}>
            <div className="profile__form">
                <form>
                    <div className="form__item">
                        <h3>Name</h3>
                        <input className='sender__input' value={updatedUser?.name} onChange={handleUserInput} name="name" placeholder={user?.name} />
                    </div>
                    <div className="form__item">
                        <h3>Email</h3>
                        <input className='sender__input' value={updatedUser?.email} onChange={handleUserInput} name="email" placeholder={user?.email} />
                    </div>
                    <div className="form__item">
                        <h3>Age</h3>
                        <input className='sender__input' value={user?.age} onChange={handleUserInput} name="age" placeholder={user?.age} />
                    </div>
                    <div className="form__item">
                        <h3>Github User Name</h3>
                        <input className='sender__input' value={user?.github} onChange={handleUserInput} name="github" placeholder={user?.github} />
                    </div>


                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Profile
