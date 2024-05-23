import prisma from "@/app/libs/prismadb";

export interface IListingParams {
  userId?: string;
}

export default async function getListing(params: IListingParams) {
  try {
    const { userId } = params;
    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        created_At: "desc",
      },
    });

    //to avoid Date data type warning : server to client data pass
    const safeListings = listings.map((listing) => ({
      ...listing,
      created_At: listing.created_At.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
