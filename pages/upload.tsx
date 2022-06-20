import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form"
import "tailwindcss/tailwind.css";

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

const Upload: NextPage = () => {
    const { watch, register, handleSubmit, reset } = useForm()
    //console.log(watch())

    const onValid = (data: any) => {
        fetch("/api/capsule", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        reset()
    }

    return (
        <div className={styles.container}>
            캡슐정보 입력해!!!!!!!!!!!!!!!!!!
            <form>
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
                        placeholder='산미를 입력해주세요'
                        type="number"
                        {...register("acidy")}
                    />
                </div>
                <div>
                    <label>
                        바디감
                    </label>
                    <input
                        type="number"
                        {...register("body")}
                    />
                </div>
                <div>
                    <label>
                        추천하는 레시피
                    </label>
                    <input
                        {...register("receipt")}
                    />
                </div>
                <div>
                    <label>
                        구매링크
                    </label>
                    <input
                        type="url"
                        {...register("URL")}
                    />
                </div>
                <div>
                    <label>
                        캡슐컬러
                    </label>
                    <input
                        type="color"
                        {...register("color")}
                    />
                </div>
                <button
                    onClick={handleSubmit(onValid)}
                >
                    업로드</button>
            </form>
        </div>
    )
}

export default Upload
