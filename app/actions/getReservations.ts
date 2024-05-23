import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {

  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    } else if (userId) {
      query.userId = userId;
    } else if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // const safeReservations = reservations.map((reservation) => {
    //   return {
    //     ...reservation,
    //     createdAt: reservation.createdAt.toISOString(),
    //     startDate: reservation.startDate.toISOString(),
    //     endDate: reservation.endDate.toISOString(),
    //     listing: {
    //       ...reservation.listing,
    //       created_At: reservation.listing.created_At.toISOString(),
    //     },
    //   };
    // });

    // return safeReservations;
    return reservations;
    
  } catch (error: any) {
    throw new Error(error);
  }
}
