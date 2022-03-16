import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton(){

    const isSession=true

    return isSession ? (
        <button type="button" className={styles.button}>
            <FaGithub  color="#FFB800"/>Sign in With Github
        </button>
    ):(
        <button type="button" className={styles.button}>
        <FaGithub  color="#04D361"/> Sawyo-Fernands
        <FiX  color="#737380" />
        </button>
    )
}