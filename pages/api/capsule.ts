// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../prisma/client'


interface UploadInputFormType {
    brand: string;
    capsuleName: string;
    flavor?: string;
    body?: number;
    acidy?: number;
    color: string;
    recommendation: string;
    url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse

) {

    const newCapsuleInfo: UploadInputFormType = req.body
    console.log("The data in my body: ", newCapsuleInfo)
    console.log("The data in my body: ", newCapsuleInfo.brand)

    const newCapsule = await client.capsule.create({
        data: {
            brand: newCapsuleInfo.brand,
            capsuleName: newCapsuleInfo.capsuleName,
            flavor: newCapsuleInfo.flavor,
            body: +newCapsuleInfo.body,
            acidy: +newCapsuleInfo.acidy,
            recommendation: newCapsuleInfo.recommendation,
            url: newCapsuleInfo.url
        }
    })

    res.status(200).json({ name: 'John Doe' })
}
