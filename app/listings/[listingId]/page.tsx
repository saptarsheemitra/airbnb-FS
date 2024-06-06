// *************Actions***************
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListing from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
// *************Components***************
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listings = await getListing(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listings) {
    return <EmptyState />;
  }

  return (
    <div>
      <ListingClient
        listing={listings}
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ListingPage;
