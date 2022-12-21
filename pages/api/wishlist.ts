import { NextApiRequest, NextApiResponse } from "next";

export interface wishCapsule {
  capsuleName: string;
  brand: string;
  url?: string;
}

export interface wishListUploadType {
  wishcapsules: wishCapsule[]
}

export type Mode = "push" | "remove";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const {headers, body, method} = req;
  const mode = req.query.mode as Mode;

  if (method === "POST"){
    console.log(body)
  }
  else if (method === "GET"){

  }
}