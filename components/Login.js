import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
    return (
        <div className='grid place-items-center'>
            <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit='contain' alt=''/>
            <h1 className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' onClick={signIn}>Login with Facebook</h1>
        </div>
    )
}

export default Login