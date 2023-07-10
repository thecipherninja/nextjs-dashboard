import React from 'react';
import {useSession, signIn, signOut} from 'next-auth/react';
import Signin from '../pages/Signin';

const Login = () => {
    const {data: session} = useSession();
    console.log(session);
    if (session) {
        return (
            <div>
                <p>{session.user.email}</p>
                <p>{session.user.name}</p>
                <img src={session.user.image} />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    } else {
        return (
            <div>
                <Signin />
            </div>
        )
    }
}

export default Login
