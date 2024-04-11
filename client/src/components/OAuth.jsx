
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { app } from '../firebase';


export default function OAuth() {
    const auth = getAuth(app);
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultsFromGoogle);
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
     <button type='button' className='gradient-duotone' onClick={handleGoogleClick}><FcGoogle className='google' />Continue with Google</button>
  )
}
