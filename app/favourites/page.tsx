// *************Actions***************
import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
// *************Components***************
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClients";

const ListingPage = async () => {
  const favouriteListings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (favouriteListings.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listings"
      />
    );
  }

  return (
    <FavouritesClient
      favouriteListings={favouriteListings}
      currentUser={currentUser}
    />
  );
};

export default ListingPage;
