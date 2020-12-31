import React from 'react';
import './Login.css';
import FacebookIcon from '@material-ui/icons/Facebook';

export const Login = () => {

    const signIn = () => {

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
