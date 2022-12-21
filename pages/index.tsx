import type { NextPage } from "next";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import BriefMemberProfile from "../components/BriefMemberProfile";
import BriefCapsuleInfo from "../components/BriefCapsuleInfo";
import { AiFillSetting } from "react-icons/ai";
import { Capsule } from "@prisma/client";
import React from "react";
import { ResponseType as CapsuleResponse } from "./api/capsule";


const Home: NextPage = () => {
	const [isCapsuleMode, setIsCapsuleMode] = useState(false);
	const [capsuleClick, setCapsuleClick] = useState(false);

	const [capsulesInlab, setCapsulesInlab] = useState<Capsule[]>([]);
	// const [capsulesInlab, setCapsulesInlab] = useState([11,12])

	useEffect(() => {
		console.log("now we fetch all capsule");

		fetch("/api/capsule?find=instoke", {
			method: "GET",
		})
			.then((response) => {
				console.log(response)

				return response.json()
			})
			.then((data:CapsuleResponse) => {
				console.log(data);
				data.capsules && setCapsulesInlab(data.capsules);
			});
	}, []);

	const toogleMode = () => {
		setIsCapsuleMode((prev) => !prev);
	};

	const HiddenCapsuleInfo = () => setCapsuleClick(false);




  const capsuleInfoMode = () => {
    //setCapsuleClick()
    //캡슐 버튼 누르면 array번호로 부여
  }
  const ShowCapsuleInfo = () => setCapsuleClick(true)

  const visibleBtn =
    "text-[#F3B562] px-2 my-5 font-semibold hover";

  const invisibleBtn =
    "opacity-30 text-[#5C4B51] px-2 my-5 font-semibold";



  const capsuleInfo = () => {
    console.log("자세한 캡슐 정보가 나와야합니다.")
  }

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
      <div className="bg-[#F5EFDF] flex justify-center">
        <button
          onClick={() => setIsCapsuleMode(false)}
          className={!isCapsuleMode ? visibleBtn : invisibleBtn}>
          지금 있는 캡슐은
        </button>
        <button
          onClick={() => setIsCapsuleMode(true)}
          className={isCapsuleMode ? visibleBtn : invisibleBtn}>
          위시리스트
        </button>
      </div>
      {!isCapsuleMode ? (
        <div>
          {
            capsulesInlab.map((capsule, index) => {
              console.log("capsule is ", capsule)
              console.log("index is ", index)
              return (
                <BriefCapsuleInfo key={index} capsuleColor={capsule.color} capsuleName={capsule.capsuleName} />
              )

            })

          }

        </div>
      )

        : <div className="flex flex-col items-center px-10 pb-20 bg-[#F5EFDF] opacity-33 h-[420px]">
          <div className="py-5 flex w-[280px] justify-between">
            <label className=" text-[#5C4B51] font-semibold">
              캡슐 이름
            </label>
            <input className="bg-white" />
          </div>
          <div className="py-5 flex w-[280px] justify-between">
            <label className="text-[#5C4B51] font-semibold">
              브랜드
            </label>
            <input className="bg-white" />
          </div>
          <div className="pt-5 pb-20 flex w-[280px] justify-between">
            <label className="text-[#5C4B51] font-semibold">
              URL
            </label>
            <input className="bg-white" />
          </div>
          <button className="bg-[#F3B562] rounded-full w-[150px] text-[20px] py-3 font-bold text-[#5C4B51]">SUBMIT</button>
        </div>}
      <div
        style={{ visibility: !capsuleClick ? 'hidden' : 'visible' }}
      >
        <div>뿅 나는 캡슐 정보</div>
        <button onClick={HiddenCapsuleInfo}>X</button>
      </div>
      <div>
        <h1 className="text-4xl flex justify-center pt-10 pb-10 text-[#5C4B51] font-bold italic">members</h1>
        <div className="grid grid-cols-4 pt-8j items-center content-center">
          <BriefMemberProfile name={"Sangsu"} position={"Boss"} backgroundColor={"#5C4B51"} />
          <BriefMemberProfile name={"Song ha"} position={"manager"} backgroundColor={"#F3B562"} />
          <BriefMemberProfile name={"Soon i"} position={"part-timer"} backgroundColor={"#EF6061"} />
          <BriefMemberProfile name={"Bung Bung"} position={"partner"} backgroundColor={"#8CBEB1"} />
          {/* <div className="flex flex-col justify-center items-center bg-[#F3B562] py-12 rounded-t-[75px]"> <div className="bg-white h-24 w-24 rounded-full"></div> <h1 className="flex text-[#FDFDFA] font-bold pt-5 italic">Song-ha</h1> <h1 className="flex text-[#FDFDFA] font-thin italic text-sm">manager</h1>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#EF6061] py-12 rounded-t-[75px]">
            <div className="bg-white h-24 w-24 rounded-full"></div>
            <h1 className="flex text-[#FDFDFA] font-bold pt-5 italic">Soon i</h1>
            <h1 className="flex text-[#FDFDFA] font-thin italic text-sm">part-timer</h1>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#8CBEB1] py-12 rounded-t-[75px]">
            <div className="bg-white h-24 w-24 rounded-full"></div>
            <h1 className="flex text-[#FDFDFA] font-bold pt-5 italic">Bung-Bung</h1>
            <h1 className="flex text-[#FDFDFA] font-thin italic text-sm">partner</h1>
          </div> */}
        </div>
      </div>
      <div className="flex justify-centerß">
        <Link href="https://ipd.unist.ac.kr/contact">
          <a className="px-1 py-2 text-[#F3B562] font-bold">JOIN US</a>
        </Link>
      </div>
    </div>
  )
}

export default Home;
