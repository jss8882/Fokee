// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Capsule } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../prisma/client';

interface uploadFormType {
    capsuleName: string;
    brand: string;
    flavor?: string;
    body?: number;
    acidy?: number;
    receipt: string;
    URL: string;
    color: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //console.log(req.headers)
    console.log(req.method)
    console.log(req.body)
    if (req.method === "POST") {
        const inputCapsule: uploadFormType = req.body;
        console.log("capsule api")
        const newCapsule = await client.capsule.create({
            data: {
                capsuleName: inputCapsule.capsuleName,
                brand: inputCapsule.brand,
                flavor: inputCapsule.flavor ? inputCapsule.flavor : "",
                acidy: inputCapsule.acidy ? +inputCapsule.acidy : null,
                body: inputCapsule.body ? +inputCapsule.body : null,
                color: inputCapsule.color,
                recommendation: inputCapsule.receipt,
                url: inputCapsule.URL
            }
        })
    }else if(req.method==="GET"){
        console.log("in get")

        const tempCapsule:Capsule = {
            id:53215234,
            capsuleName:"김캡슐",
            brand:"김브랜드",
            flavor:"맛있다",
            acidy:1,
            body:5,
            color: "#5C4B51",
            recommendation:"라뗴",
            url:"www.naver.com"

        }

        return res.json({ok:true, capsules:[tempCapsule]})

    }
}
