// *************Actions***************
import getCurrentUser from "../actions/getCurrentUser";
import getListing from "../actions/getListing";
// *************Components***************
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login " />;

  const listings = await getListing({ userId: currentUser.id });

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
