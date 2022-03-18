import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from 'next-auth/react'


export default async (req:NextApiRequest,res:NextApiResponse)=>{

    if(req.method === 'POST'){

        const session = await getSession({req})

        const stripeCustomer= await stripe.customers.create({
            email:session.user.email
        })

        const stripeCheckoutSession =await stripe.checkout.sessions.create({
            customer:stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection:'required',
            line_items:[
                {
                    price:'price_1Ke12eHFh58xo4SfYVU5g1Hr',
                    quantity:1,
                }
            ],
            mode:'subscription',
            allow_promotion_codes:true,
            success_url:'http://localhost:3000/posts',
            cancel_url:'http://localhost:3000/'

        })

        return res.status(200).json({sessionId: stripeCheckoutSession.id})
    }else{
        res.setHeader('Allow','POST')
        res.status(405).end('Method not alowed')
    }

}