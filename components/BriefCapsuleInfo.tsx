import * as React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';

interface BriefCapsuleInfoType{
    capsuleName:string;
    capsuleColor:string;
}

const BriefCapsuleInfo:NextPage<BriefCapsuleInfoType> = ({capsuleColor,capsuleName}) => {
    const [capsuleVote, setCapsuleVote] = useState<number>(0);

    const GoodButton_click = () => setCapsuleVote(capsuleVote + 1);


    const capsulesWrapCSS =
        "grid grid-cols-3 gap-10 px-10 py-10 bg-[#F5EFDF] opacity-33 overscroll-auto h-[420px]"

    const capsuleInfoCSS =
        "flex justify-items-center items-center bg-[#FDFDFA] flex-col px-10 py-10 rounded-3xl h-[230px]"

    return (
        <div className={capsulesWrapCSS}>
            <h1 className={capsuleInfoCSS}>
                <div className={`w-20 h-20 bg-[${capsuleColor}] rounded-3xl`}/>
                <div className="text-xs mt-5 flex justify-center">{capsuleName}</div>
                <button onClick={GoodButton_click} className="bg-[#5C4B51] w-20 h-5 text-white text-xs mt-3 rounded-full">좋아요 {capsuleVote}</button>
            </h1>
        </div>
    )


};


export default BriefCapsuleInfo