import { WishListCapsule } from "@prisma/client";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ResponseType, wishCapsule } from "./api/wishlist";

const tempData: wishCapsule[] = [
	{
		capsuleName: "adfhskhfkj",
		brand: "pando",
	},
	{ capsuleName: "holiday blend", brand: "stabucks" },
	{ capsuleName: "nomat", brand: "ediya" },
	{
		capsuleName: "sdfsdf",
		brand: "pando",
	},
	{ capsuleName: "monday blend", brand: "stabucks" },
	{ capsuleName: "yesmat", brand: "ediya" },
	{
		capsuleName: "qweqweqwe",
		brand: "pando",
	},
	{ capsuleName: "sunday blend", brand: "stabucks" },
	{ capsuleName: "nomarlmat", brand: "ediya" },
];

const WishList: NextPage = () => {
	const { register, handleSubmit, reset } = useForm();
	const [wishCapsules, setWishCapsules] = useState<WishListCapsule[]>();

	useEffect(() => {
		fetch("/api/wishlist", {
			method: "GET",
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data: ResponseType) => {
				console.log(data.wishcapsules);
				data.wishcapsules && setWishCapsules(data.wishcapsules);
			});
	}, []);

	const onSubmit = (data: any) => {
		const capsules = tempData.slice(0, +data.number);
		console.log(capsules);

		fetch("/api/wishlist?mode=push", {
			method: "POST",
			body: JSON.stringify(capsules),
			headers: {
				"Content-type": "application/json",
			},
		});

		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>캡슐 개수</label>
					<input placeholder="1~9" type="number" {...register("number")} required />
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>--------</div>
			{wishCapsules
				? wishCapsules.map((wishCapsule) => {
						return <div>{wishCapsule.capsuleName}</div>;
				  })
				: console.log("no capsules")}
		</>
	);
};

export default WishList;
