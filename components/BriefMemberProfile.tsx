import { NextComponentType, NextPage } from 'next';
import * as React from 'react';

interface BreifMemberProfileType{
    name:string;
    position:string;
    backgroundColor:string;
}

const BriefMemberProfile:NextPage<BreifMemberProfileType> = ({name, position,backgroundColor}) =>{


    return(

        <div className={`flex flex-col justify-center items-center py-12 bg-[${backgroundColor}] rounded-t-[75px]`}
        >
            <div className="bg-white h-24 w-24 rounded-full"></div>
            <h1 className="flex text-[#FDFDFA] font-bold pt-5 italic">{name}</h1>
            <h1 className="flex text-[#FDFDFA] font-thin italic text-sm">{position}</h1>
        <style jsx>{`
            .bgColor {
                color:${backgroundColor};
            }
        `}</style>
        </div>
    )


};


export default BriefMemberProfile