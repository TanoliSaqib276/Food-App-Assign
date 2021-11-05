import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, db, setDoc, doc } from '../configs/firebase';
import './signup.css';

function SignUp() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setNewName] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    // To change screen 

    function signInBtn() {
        history.push("/signin");
    };

    // To Signup As Restraunt

    function registerAsRest() {
        history.push("/signin");

    };

    // To Signup As User

    const registerAsUser = async (e) => {
        console.log(email);
        console.log(phone);
        console.log(password);
        console.log(name);
        
        try {
           
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            
            let dataRef = doc(db, 'users', user.uid);
            await setDoc(dataRef, {
                email: user.email,
                uid: user.uid,
            
    

            });

        } catch (err) {
           console.log("error found")
        }

        //***********************  TO CLEAR INPUT FIELD ****************************

        e.preventDefault();

        // clearing the values
        setEmail("");
        setPassword("");
        setNewName("");
        setPhone("");
    }




    return (
        <div className="main-div" >


            <h2 className='header'>REGISTRATION FORM</h2>
            <label>Restraunt/User:<br />
                <input type="text" value={name} onChange={(ev) => { setNewName(ev.target.value) }} /></label><br /><br />
            <label>Email:<br />
                <input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label><br /><br />
            <label>Password:<br />
                <input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label><br /><br />
            <label>Phone:<br />
                <input type="number" value={phone} onChange={(ev) => { setPhone(ev.target.value) }} /></label><br />


            <div className="outer">
                <button className="inner" onClick={registerAsUser}>Register As User</button>
                <button className="inner" onClick={registerAsRest}>Register As Restraunt</ button>
            </div><br />
            <p>Have an account? <button className="actBtb" onClick={signInBtn}>Sign In Now</button></p>
        </div>
    )
}

export default SignUp;