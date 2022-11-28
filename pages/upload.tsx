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
