// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

interface SignupRequestType {
	email: string;
	password: string;
	passwordCheck: string;
	firstName: string;
	lastName: string;
	position: string;
	login: boolean;
}

interface LoginRequestType {
	email: string;
	password: string;
	login: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body);
	const { login } = req.body;
	// const login = req.body.login
	console.log(login);
	if (login) {
		// const foundCapsule = await client.capsule.findUnique({
		//     where:{
		//         id: 5
		//     }
		// })
		const userInfo: LoginRequestType = req.body;
		const userCheck = await client.user.findUnique({
			where: {
				email: userInfo.email,
			},
		});
		if (userCheck) {
			if (userInfo.password === userCheck.password) {
				console.log("성공~");
				console.log(userCheck);
				return res.json({ ok: true, message: "we are now logged in", user: { ...userCheck } });
			} else {
				console.log("비밀번호틀렷따");
				return res.json({ ok: false, error: "wrong password" });
			}
		} else {
			console.log("아이디업따");
			return res.json({ ok: false, error: "no user; please sign up first" });
		}
	} else {
		// const foundCapsule = await client.capsule.findUnique({
		//     where:{
		//         id: 5
		//     }
		// })

		const newUserInfo: SignupRequestType = req.body;
		const userCheck = await client.user.findUnique({
			where: {
				email: newUserInfo.email,
			},
		});
		console.log(userCheck);
		if (userCheck) {
			return res.json({ ok: false, error: "you already have signed up" });
		} else if (newUserInfo.password === newUserInfo.passwordCheck) {
			//console.log("wow");
			const newUser = await client.user.create({
				data: {
					email: newUserInfo.email,
					password: newUserInfo.password,
					firstName: newUserInfo.firstName,
					lastName: newUserInfo.lastName,
					position: newUserInfo.position,
				},
			});
			return res.json({ ok: true, message: "성공!!" });
		} else {
			return res.json({ ok: false, error: "bimilbunhoga darda" });
		}
	}

	// res.status(200).json({ name: "John Doe" });
}
