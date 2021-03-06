import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useInput } from '../Hooks/useInput'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import './Profile.css'

function ProfileWithHook() {
    const [{ user }, dispatch] = useStateValue();
    const { value: name, bind: bindName } = useInput();
    const { value: age, bind: bindAge } = useInput();
    const { value: email, bind: bindEmail } = useInput();
    //const { value: github, bind: bindGithub } = useInput();
    const [github, setGithub] = useLocalStorage('github', '')



    const handleSubmit = (e) => {
        let updatedUser = {
            name: name || user?.name,
            age: age || user?.age,
            email: email || user?.email,
            github: github || user?.github
        }
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_USER,
            user: updatedUser
        })

        createUser(updatedUser);
    }

    const createUser = async (user) => {
        try {
            const url = 'https://cbmb5jis7g.execute-api.ap-southeast-1.amazonaws.com/dev/user'

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };
            const res = await fetch(url, requestOptions)
            const data = await res.json();
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="profile" style={{ "margin-top": "50px" }}>
            <div className="profile__form">
                <form>
                    <div className="form__item">
                        <h3>Name</h3>
                        <input className='sender__input' placeholder={user?.name} {...bindName} />
                    </div>
                    <div className="form__item">
                        <h3>Email</h3>
                        <input className='sender__input' placeholder={user?.email} {...bindEmail} />
                    </div>
                    <div className="form__item">
                        <h3>Age</h3>
                        <input className='sender__input' placeholder={user?.age} {...bindAge} />
                    </div>
                    {/* <div className="form__item">
                        <h3>Github User Name</h3>
                        <input className='sender__input' placeholder={user?.github} {...bindGithub} />
                    </div> */}
                    <div className="form__item">
                        <h3>Github User Name</h3>
                        <input className='sender__input' value={github} placeholder={github} onChange={e => setGithub(e.target.value)} />
                    </div>


                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ProfileWithHook
