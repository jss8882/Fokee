<<<<<<< HEAD
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

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

const upload: NextPage = () => {
	const { watch, register, handleSubmit, reset } = useForm();

	const onValid = (data: uploadFormType) => {
		fetch("api/capsule", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		reset();
	};

	// const onValid = (data: uploadFormType) => {
	// 	fetch("api/capsule", {
	// 		method: "GET",
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// 	reset();
	// };

	//console.log(watch());

	return (
		<div className={styles.container}>
			캡슐 정보를 입력 해보실까용?
			<form>
				<div>
					<label>캡슐 이름~</label>
					<input {...register("capsuleName")} required />
				</div>

				<div>
					<label>브랜~~~~드</label>
					<input {...register("brand")} />
				</div>

				<div>
					<label>음~</label>
					<input {...register("flavor")} />
				</div>

				<div>
					<label>아이고 시다~</label>
					<input placeholder="산미를 입력해줭" type="number" {...register("acidy")} />
				</div>

				<div>
					<label>바디감</label>
					<input placeholder="바디감을 입력해줭" type="number" {...register("body")} />
				</div>

				<div>
					<label>캡슐 컬러</label>
					<input placeholder="색깔이 좋아용" type="color" {...register("color")} />
				</div>

				<div>
					<label>레시피를 추천해줭~</label>
					<input placeholder="친절하게 써줘~" {...register("recommendation")} />
				</div>

				<div>
					<label>구매링크</label>
					<input placeholder="http://..." type="url" {...register("url")} />
				</div>

				<button onClick={handleSubmit(onValid)}>업로드</button>
			</form>
		</div>
	);
};

export default upload;
=======
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useForm} from "react-hook-form"
import React from 'react'

interface UploadInputFormType {
    brand:string;
    capsuleName:string;
    flavor?:string;
    body?:number;
    acidy?:number;
    color:string;
    recommendation:string;
    url:string
}


const Upload: NextPage = () => {

    const {register, watch,handleSubmit, reset} = useForm()
    // console.log(watch())

    const onValid = (data:UploadInputFormType) =>{
        console.log(data)

        fetch("api/capsule",{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    }

    return (
        <div className={styles.container}>
            캡슐 정보를 입력하세요
            <form
                onSubmit={handleSubmit(onValid)}
            >
                <div>
                    <label>
                        캡슐이름
                    </label>
                    <input
                        {...register("capsuleName")}
                    />
                </div>
                <div>
                    <label>
                        브랜드
                    </label>
                    <input
                        {...register("brand")}
                    />
                </div>
                <div>
                    <label>
                        향과 맛
                    </label>
                    <input
                        {...register("flavor")}
                    />
                </div>
                <div>
                    <label>
                        산미
                    </label>
                    <input
                        {...register("acidy")}
                        placeholder='산미 정도를 입력해 주세요'
                        type='number'
                    />
                </div>

                <div>
                    <label>
                        바디감
                    </label>
                    <input
                        {...register("body")}
                        placeholder='바디감의 정도를 입력해 주세요'
                        type='number'
                    />
                </div>
                <div>
                    <label>
                        캡슐컬러
                    </label>
                    <input
                        {...register("color")}
                    />
                </div>
                <div>
                    <label>
                        추천하는 레시피
                    </label>
                    <input
                        {...register("recommendation")}
                    />
                </div>
                <div>
                    <label>
                        구매링크
                    </label>
                    <input
                        {...register("url")}
                    />
                </div>

                <button>
                    업로드
                </button>

            </form>
        </div>
    )
}

export default Upload
<<<<<<< HEAD
>>>>>>> JYfront
>>>>>>> 8962bfde4323b3fbe63cf5483a5240d5524520fe
=======
>>>>>>> 29737310d4de46dae608d52826ea3db50f929376
