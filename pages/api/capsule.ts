// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

interface uploadFormType {
	brand: string;
	capsuleName: string;
	flavor?: string;
	body?: number;
	acidy?: number;
	color?: string;
	recommendation: string;
	url: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	console.log(req.headers);
	console.log(req.method);
	console.log(req.body);

	if (req.method === "POST") {
		const inputCapsule: uploadFormType = req.body;
		const newCapsule = await client.capsule.create({
			data: {
				capsuleName: inputCapsule.capsuleName,
				brand: inputCapsule.brand,
				color: inputCapsule.color,
				flavor: inputCapsule.flavor ? inputCapsule.flavor : "",
				body: inputCapsule.body ? +inputCapsule.body : null,
				acidy: inputCapsule.acidy ? +inputCapsule.acidy : null,
				recommendation: inputCapsule.recommendation,
				url: inputCapsule.url,
			},
		});
		console.log("at capsule api");
		res.status(200).json({ name: "John Doe" });
	} else if (req.method === "GET") {
		console.log("GET REQUEST");

		const requestedCapsule = await client.capsule.findUnique({
			where: {
				id: 1,
			},
		});

		console.log(requestedCapsule);

		res.status(200).json(requestedCapsule);
	}
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../prisma/client';

interface uploadFormType  {
    capsuleName:string;
    brand:string;
    flavor?: string;
    body?:number;
    acidy?:number;
    receipt:string;
    URL:string;
    color:string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    //console.log(req.headers)
    console.log(req.method)
    console.log(req.body)
    const inputCapsule: uploadFormType = req.body;
    console.log("capsule api")
    const newCapsule = await client.capsule.create({
        data:{
            capsuleName: inputCapsule.capsuleName,
            brand: inputCapsule.brand,
            flavor: inputCapsule.flavor?inputCapsule.flavor:"",
            acidy: inputCapsule.acidy?+inputCapsule.acidy:null,
            body: inputCapsule.body?+inputCapsule.body:null,
            color: inputCapsule.color,
            recommendation: inputCapsule.receipt,
            url: inputCapsule.URL
        }
    })

>>>>>>> 8962bfde4323b3fbe63cf5483a5240d5524520fe
}
