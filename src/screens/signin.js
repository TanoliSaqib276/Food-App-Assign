import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useHistory } from 'react-router';
import { auth, signInWithEmailAndPassword } from '../configs/firebase';
import './signup.css';


function SignIn() {
    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // To Signup As Restraunt

    function registerAsRest(e) {
        console.log("dasdasdas");
        //***********************  TO CLEAR INPUT FIELD ****************************

        e.preventDefault();

        // clearing the values
        setEmail("");
        setPassword("");


    };

    // To change screen 

    function signUpBtn() {
        history.push('signup')
    };

    // To Signin As User

    function registerAsUser(e) {
        console.log("dasdasdas");
        //***********************  TO CLEAR INPUT FIELD ****************************

        e.preventDefault();

        // clearing the values
        setEmail("");
        setPassword("");

    }
    // const signin = async () => {
    //     await signInWithEmailAndPassword(auth, email, password);
    //     console.log('user')
    // }

    return (
        <div className="main-div" style={{ height: "350px", width: "325px", marin: "auto" }}>

            <h2 className='header'>Login Here:</h2><br />
            <label>Email:<br />
                <input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label><br />
            <label>Password:<br />
                <input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label><br />
            <div className="outer">
                <button className="inner" onClick={registerAsUser}>Register As User</button>
                <button className="inner" onClick={registerAsRest}>Register As Restraunt</ button>
            </div><br />
            <p>Don't have an account?<button className="actBtb" onClick={signUpBtn}>Sign Up Now</button></p>

        </div>
    )
}

export default SignIn;