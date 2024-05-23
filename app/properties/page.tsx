
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import PropertiesClient from "./PropertiesClient";
import getListing from "../actions/getListing";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login " />;

  const listings = await getListing({ userId: currentUser.id });
  console.log(listings)

  if (listings.length === 0)
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you dont have any property."
      />
    );

  return (
<PropertiesClient propertyListings={listings} currentUser={currentUser} />
  );
};

export default PropertiesPage;
 

