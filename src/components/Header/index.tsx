import { SignInButton } from "../SignInButton"
import styles from './style.module.scss'
import {ActiveLink} from '../activeLink'

export function Header(){


    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
               
            <img src="/images/logo.svg" alt="ig.news" />

            <nav>
               <ActiveLink activeClass={styles.active} href={'/'}>
                <a >Home</a>
               </ActiveLink>
                
                <ActiveLink activeClass={styles.active} href={"/posts"} prefetch>
                <a >Posts</a>
                </ActiveLink>
            </nav>

            <SignInButton/>

            </div>
        </header>
    )
}