import Link, { LinkProps } from "next/link"
import { ReactElement,cloneElement } from "react";
import { useRouter } from "next/router"


interface ActiveLinkProps extends LinkProps{
    children:ReactElement;
    activeClass:string;
}

export function ActiveLink({children,activeClass, ...rest}:ActiveLinkProps){

    const { asPath } =useRouter()

    const className=asPath === rest.href ? activeClass : ''

    return(
        <Link {...rest}>
            {cloneElement(children,{
                className
            })}
        </Link>
    )
}