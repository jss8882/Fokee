import { prisma, Prisma, PrismaClient, WishListCapsule } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

export interface wishCapsule {
  capsuleName: string;
  brand: string;
  url?: string|null;
}

export interface ResponseType {
  ok: boolean;
  wishcapsules: WishListCapsule[];
}

export type Mode = "push" | "remove";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const {headers, body, method} = req;
  const mode = req.query.mode as Mode;

  if (method === "POST"){
    if(mode === "push"){
      const wishCapsules: wishCapsule[] = body;

      await Promise.all(
        wishCapsules.map(async (wishCapsule)=>{
          const newWishListAndCapsules = await client.wishList.upsert({
            where: {
              email: "akrso8987@gmail.com"
            },
            update: {
              capsules: {
                connectOrCreate: {
                  where: {
                    capsuleName: wishCapsule.capsuleName
                  },
                  create: {
                    capsuleName: wishCapsule.capsuleName,
                    brand: wishCapsule.brand,
                    url: wishCapsule.url
                  }
                }
              }
            },
            create: {
              email: "akrso8987@gmail.com",
              capsules: {
                connectOrCreate: {
                  where: {
                    capsuleName: wishCapsule.capsuleName
                  },
                  create: {
                    capsuleName: wishCapsule.capsuleName,
                    brand: wishCapsule.brand,
                    url: wishCapsule.url
                  }
                }
              }
            }
          })
        })
      )
    }
    else if(mode === "remove"){}
  }
  else if (method === "GET"){
    const allCapsulesInWishList = await client.wishListCapsule.findMany();
    return res.json({ok: true, wishcapsules: allCapsulesInWishList})
  }
}