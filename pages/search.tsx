import type { NextPage } from "next";
import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Capsule } from '@prisma/client';
import 'react-toastify/dist/ReactToastify.css';

import { AiFillSetting } from 'react-icons/ai';


type CapsuleBrand = "Ediya" | "Starbucks"

const Search: NextPage = () => {
    const [selectedBrand, setIsSelectedBrand] = useState<CapsuleBrand>("Ediya");
    const [searhStep, setIsSearchStep] = useState(false);
    const [capsulesInlab, setCapsulesInlab] = useState<Capsule[]>([])


    useEffect(() => {
        console.log("now we fetch all capsule")

        fetch("/api/capsule", {
            method: "GET",
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                setCapsulesInlab(data.capsules)
            })



    }, [])

    return (
        <div className="w-full h-full bg-[#F5EFDF]">
            <div className="flex items-center justify-end bg-[#FDFDFA] ">
                <Link href="/search">
                    <a className="px-1 py-2 text-[#ECC392] text-[20px] font-semibold">SEARCH</a>
                </Link>
                <Link href="/cart">
                    <a className="px-1 py-2 text-[#ECC392] text-[20px] font-semibold">CART</a>
                </Link>
                <Link href="/setting">
                    <a className="px-2 py-2 text-[#ECC392] text-[20px] font-light"><AiFillSetting /></a>
                </Link>
            </div>
            <Link href="/">
                <a
                    className="text-5xl flex justify-center pb-10 text-[#5C4B51] bg-[#FDFDFA]  font-black"
                >FOKEE
                </a>
            </Link>
            {!searhStep ? (
                <div>
                    <div className="bg-[#F5EFDF] flex justify-center">
                        <label className="text-[#F3B562] px-2 my-5 font-semibold">
                            COFFEE BRAND
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-y-10 py-5 mx-5 justify-items-center">
                        <button
                            onClick={() => setIsSearchStep(true)}
                            className="bg-[#F3B562] w-40 h-40 rounded-full">
                            브랜드 1
                        </button>
                        <button
                            onClick={() => setIsSearchStep(true)}
                            className="bg-[#8CBEB1] w-40 h-40 rounded-full">
                            브랜드 2
                        </button>
                        <button
                            onClick={() => setIsSearchStep(true)}
                            className="bg-[#EF6061] w-40 h-40 rounded-full">
                            브랜드 3
                        </button>
                        <button
                            onClick={() => setIsSearchStep(true)}
                            className="bg-[#EF6061] w-40 h-40 rounded-full">
                            브랜드 4
                        </button>
                        <button className="bg-[#b1b1b1] w-40 h-40 rounded-full">
                            +
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="bg-[#F5EFDF] flex justify-between">
                        <button
                            onClick={() => setIsSearchStep(false)}
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
                        <button
                            className="bg-[#ffffff] w-20 h-20 rounded-full">
                            캡슐 6
                        </button>
                    </div>
                </div>
                /*알람 모달 UI*/
            )
            }
        </div>
    );
}

export default Search;