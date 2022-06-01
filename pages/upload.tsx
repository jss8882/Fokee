import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useForm} from "react-hook-form"


const Upload: NextPage = () => {

    const {register, watch,handleSubmit, reset} = useForm()
    // console.log(watch())

    const onValid = (data) =>{
        console.log("제출된 데이터는",data)
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
                    <input/>
                </div>

                <div>
                    <label>
                        향과 맛
                    </label>
                    <input/>
                </div>

                <div>
                    <label>
                        산미
                    </label>
                    <input
                        placeholder='산미 정도를 입력해 주세요'
                        type='number'
                    />
                </div>

                <div>
                    <label>
                        바디감
                    </label>
                    <input/>
                </div>
                <div>
                    <label>
                        캡슐컬러
                    </label>
                    <input/>
                </div>
                <div>
                    <label>
                        추천하는 레시피
                    </label>
                    <input/>
                </div>
                <div>
                    <label>
                        구매링크
                    </label>
                    <input/>
                </div>

                <button>
                    업로드
                </button>

            </form>
        </div>
    )
}

export default Upload