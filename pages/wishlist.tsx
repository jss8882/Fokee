import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { wishListUploadType } from "./api/wishlist";

const tempData = [
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

	const onSubmit = (data: any) => {
		const capsules = tempData.slice(0, +data.number);
		console.log(capsules);

		fetch("/api/wishlist", {
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
		</>
	);
};

export default WishList;
