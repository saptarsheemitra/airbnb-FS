import prisma from "@/app/libs/prismadb";

interface Iparams{
    listingId?: string;
}

export default async function getListing(params:Iparams){
     try {
        const {listingId} = params;
        const listing = await prisma.listing.findUnique({
            where:{
                id:listingId,
            },
            include:{
                user:true,
            }
        })

        if(!listing){
            return null; 
        }
        return {
            ...listing,
            createdAt:listing.created_At.toISOString(),
            user:{
                ...listing,
                createdAt:listing.user.createdAt.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVarified: listing.user.emailVerified?.toISOString() || null,
            }
        }

     } catch (error:any) {
        throw new Error(error);
     }
}