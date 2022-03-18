import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface subscribeButtonProps{
    priceId:string;

}


export function SubscribeButton({priceId}:subscribeButtonProps){

    const { data : session}=useSession()

    function handleSubscribe(){
        if(!session){
            signIn('github')
            return
        }

        //Criação da checkout session

    }

    return(
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe Now
        </button>
    )

}



