import React from 'react';
import './Login.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

export const Login = () => {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                });
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return (
        <div className="login">
            <div className="login__logo">
                {/* facebbok logo below */}
                {/* <img src="" /> */}
                {/* facebook logo text 2.53.05*/}
                {/* <img  src="" /> */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <FacebookIcon style={{ color: "blue", fontSize: "200" }}/>
                </div>
                <p>Facebook</p>

                <button type="submit" onClick={signIn}>SIGN IN</button>
            </div>
        </div>
    )
}
