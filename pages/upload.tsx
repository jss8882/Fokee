import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const upload: NextPage = () => {
    return (
        <div className={styles.container}>
            캡슐정보를 입력해주세요
            <form>

                <div>
                    <label>
                        캡슐명
                    </label>
                    <input />
                </div>


                <div>
                    <label>
                        산미
                    </label>
                    <input
                        placeholder='산미를 입력주세요'
                        type="number"
                    />
                </div>

                <button>업로드</button>
            </form>
        </div>
    )
}

export default upload;