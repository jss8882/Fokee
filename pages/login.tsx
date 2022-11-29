import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useForm} from "react-hook-form"
import React from 'react'

interface LoginFormType {
    email:string;
    password:string;
}


const Signup: NextPage = () => {

    const {register, watch,handleSubmit, reset} = useForm()
    // console.log(watch())

    const onValid = (data:LoginFormType) =>{
        console.log(data)

        fetch("api/auth",{
            method:"POST",
            body:JSON.stringify({
                ...data,
                login:true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response=>response.json())
        .then(data=>{console.log(data)})

    }

    return (
        <div className={styles.container}>
            로그인 하기
            <form
                onSubmit={handleSubmit(onValid)}
            >
                <div>
                    <label>
                        이메일
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                    />
                </div>

                <div>
                    <label>
                        비밀번호
                    </label>
                    <input
                        {...register("password")}
                        type={"password"}
                    />
                </div>
                <button>
                    업로드
                </button>

            </form>
        </div>
    )
}

export default Signup