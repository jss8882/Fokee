// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../prisma/client'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const newCoffee = client.capsule.create({
  //   data:{
  //     brand:"234",
  //     capsuleName:"cc",
  //     flavor:"fdaf",
  //     body:11,
  //     acidy:12,
  //     recommendation:"dfasf",
  //     url:"fd412"
  //   }
  // }).then(data=>{
  //   console.log(data)
  // })

  console.log("HIHI")

  const requestedCoffee = client.capsule.findUnique({
    where:{
      id:1
    }
  }).then(data=>{
    console.log(data)
  })
    
  res.status(200).json({ name: 'John Doe' })
}
