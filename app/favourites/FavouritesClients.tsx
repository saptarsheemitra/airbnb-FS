"use client";

// *************Types***************
import { Listing } from "@prisma/client";
import { SafeUser } from "../type";
// *************Components***************
import ListingCard from "../components/listings/ListingCard";
import Container from "../components/Container";
import Heading from "../components/Heading";

interface FavouritesClientsProps {
  favouriteListings: Listing[];
  currentUser?: SafeUser | null;
}

const FavouritesClient = ({
  favouriteListings,
  currentUser,
}: FavouritesClientsProps) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you have favourited"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favouriteListings.map((listing:any)=>(
            <ListingCard 
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            />
        ))}
      </div>
    </Container>
  );
};

export default FavouritesClient;
