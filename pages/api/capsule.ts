// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Capsule } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

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

export interface ResponseType {
	ok:boolean;
	capsules?:Capsule[]
}

export type Find = "all" | "bybrand" | "instock";
export type Brand = "starbucks" | "EDIYA" | "굿맛";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
	const { headers, body, method} = req;
	const find: Find = req.query.find as Find;
	const brand: Brand = req.query.brand as Brand;

	console.log(headers);
	console.log(method);
	console.log(body);
	console.log(find, brand);

	if (req.method === "POST") {

// cosnt b = await client.cart.upsert({
// 	where:{
// 		id
// 	},
// 	create:{
// 		data:[
// 			...
// 		]
// 	},
// 	update:{}
// })

		const inputCapsule: uploadFormType = req.body;
		console.log("capsule api");
		const newCapsule = await client.capsule.create({
			data: {
				capsuleName: inputCapsule.capsuleName,
				brand: inputCapsule.brand,
				flavor: inputCapsule.flavor ? inputCapsule.flavor : "",
				acidy: inputCapsule.acidy ? +inputCapsule.acidy : null,
				body: inputCapsule.body ? +inputCapsule.body : null,
				color: inputCapsule.color,
				recommendation: inputCapsule.recommendation,
				url: inputCapsule.url,
			},
		});
	} else if (method === "GET") {
		// const allCapsules = await client.capsule.findMany({
		// 	where:{
		// 		brand:{
		// 			equals:
		// 		}

		// 	}
		// })
		if(find === "all"){
			const allCapsules = await client.capsule.findMany()
			return res.json({ ok: true, capsules:  allCapsules});
		}

		else if(find === "bybrand"){
			const capsulesByBrand = await client.capsule.findMany({
				where: {
					brand: brand,
				},
			})
			return res.json({ok: true, capsules: capsulesByBrand})
		}

		else if(find === "instock"){
			const capsulesInStock = await client.capsule.findMany({
				where: {
					inStock: true
				}
			})
			return res.status(200).json({ok: true, capsules: capsulesInStock})
		}


		return res.status(400).json({ ok: false});
	}
}
