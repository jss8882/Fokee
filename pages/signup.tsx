import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useForm} from "react-hook-form"

interface SignupFormType {
    email:string;
    password:string;
    passwordCheck:string;
    firstName:string;
    lastName:string;
    position:string;
}


const Signup: NextPage = () => {

    const {register, watch,handleSubmit, reset} = useForm()
    // console.log(watch())

    const onValid = (data:SignupFormType) =>{
        console.log(data)

        fetch("api/auth",{
            method: "POST",
            body:JSON.stringify({
                ...data,
                login:false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response=>response.json())
        .then(data=>{console.log(data)})

    }

    return (
        <div className={styles.container}>
            회원가입하기
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

                <div>
                    <label>
                        비밀번호 확인
                    </label>
                    <input
                        {...register("passwordCheck")}
                        type={"password"}
                    />
                </div>

                <div>
                    <label>
                        이름
                    </label>
                    <input
                        {...register("firstName")}
                    />
                </div>

                <div>
                    <label>
                        성
                    </label>
                    <input
                        {...register("lastName")}
                    />
                </div>

                <div>
                    <label>
                        직위
                    </label>
                    <input
                        {...register("position")}
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