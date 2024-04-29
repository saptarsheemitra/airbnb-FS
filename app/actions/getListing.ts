import prisma from "@/app/libs/prismadb";

export default async function getListing() {
  try {
    const listings = await prisma.listing.findMany({
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
