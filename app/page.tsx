import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import getListing from "./actions/getListing";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

const Home = async () => {
  const listings = await getListing();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <>
        <EmptyState showReset />
      </>
    );
  }

  return (
    <>
      {/* <ClientOnly> */}
      <Container>
        {/* <div className="pt-24 grid grid-col-4 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 xl:grid-col-5 2xl:grid-col-6 gap-8"> */}
        <div className="pt-24 flex flex-wrap gap-8">
          {listings.map((listing: any, index) => {
            return (
              <>
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
                {/* <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing} */}
                {/* /> */}
              </>
            );
          })}
        </div>
      </Container>
      {/* </ClientOnly>  */}
    </>
  );
};

export default Home;
