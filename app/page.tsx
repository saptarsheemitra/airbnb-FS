// *************Actions*************
import getCurrentUser from "./actions/getCurrentUser";
import getListing, { IListingParams } from "./actions/getListing";
// *************Components***************
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface IHomeParams {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: IHomeParams) => {
  const listings = await getListing(searchParams); 
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-24 flex flex-wrap gap-8">
        {listings.map((listing: any) => {
          return (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
