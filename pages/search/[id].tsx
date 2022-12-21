import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    console.log(router)
    return (
        <div>
        <div className="bg-[#F5EFDF] flex justify-between">
            <button
                className="text-[#5C4B51] px-2 my-5 font-semibold"
            >Back</button>
            <label className="text-[#F3B562] px-2 my-5 font-semibold">
                COFFEE CAPSULE
            </label>
            <a className="text-[#F5EFDF] px-2 my-5 font-semibold">
                Back</a>
        </div>
        <div className="bg-[#5C4B51] text-[#FFFFFF] flex justify-center h-50">
            고른 브랜드 로고
        </div>
        <div className="grid grid-cols-6 gap-y-10 py-5 mx-5 justify-items-center">
            <button
                className="bg-[#ffffff] w-20 h-20 rounded-full">
                캡슐 1
            </button>
            <button
                className="bg-[#ffffff] w-20 h-20 rounded-full">
                캡슐 2
            </button>
            <button
                className="bg-[#ffffff] w-20 h-20 rounded-full">
                캡슐 3
            </button>
            <button
                className="bg-[#ffffff] w-20 h-20 rounded-full">
                캡슐 4
            </button>
            <button
                className="bg-[#ffffff] w-20 h-20 rounded-full">
                캡슐 5
            </button>
            <a
                onClick={()=>{
                    if (confirm("제출하시겠습니까?") == true) {
                        alert("제출되었습니다.")
                        //카트로 넣고, 새페이지
                    }
                else alert("취소되었습니다.")}}
                className="bg-[#ffffff] w-20 h-20 rounded-full flex justify-center items-center">
                캡슐 6
            </a>
        </div>
    </div>

    )
}