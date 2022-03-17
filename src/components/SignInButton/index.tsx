import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, useSession,signOut } from "next-auth/react"

export function SignInButton(){

    const { data: session } = useSession()


    return session ?  (  
        <button type="button" className={styles.button} >
        <FaGithub  color="#04D361"/> {session.user?.name}
        <FiX  color="#737380" onClick={() => signOut()}/>
        </button>
    ):(
        <button type="button" className={styles.button} onClick={()=>signIn('github')}>
            <FaGithub  color="#FFB800"/>Sign in With Github
        </button>
    )
}