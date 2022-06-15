// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../prisma/client'


interface SignupRequestType {
    email:string;
    password:string;
    passwordCheck:string;
    firstName:string;
    lastName:string;
    position:string;
    login:boolean
}

interface LoginRequestType {
    email:string;
    password:string;
    login:boolean
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    console.log(req.body)

    // 회원가입 요청인경우 (login값이 false)
    // {
    //     email: 'jss8882@unist.ac.kr',
    //     password: '12341234',
    //     passwordCheck: '12341234',
    //     firstName: '장',
    //     lastName: '상수',
    //     position: '학생',
    //     login: false
    //   }
    ////비밀번호와 비밀번호 확인이 같은지 비교한다
    //////틀리면 바로 return
    //////같으면 아래를 수행
    ////////Prisma에 새로운 USER를 추가한다.
    
    //로그인 요청인 경우(login 값이 true)
    // { email: 'jss8882@unist.ac.kr', password: '12341234', login: true }
    ////해당 이메일 가진 유저가 데이터베이스에 있는지 체크
    /////없으면 return res.json({ok:false, error:"no user please signup first"})
    /////있으면 비밀번호 가 동일한지 체크
    //////동일하면 return res.json({ok:true,error:"we are now logged in"})
    //////비밀번호가 다르면 return res.json({ok:false, error:"wrong password"})




    res.status(200).json({ name: 'John Doe' })
}
