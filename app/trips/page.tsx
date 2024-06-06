
// *************Actions***************
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
// *************Components***************
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";

const TripPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login " />;

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you dont have any reserved any trips."
      />
    );

  return (<TripsClient reservations={reservations} currentUser={currentUser} />);
};

export default TripPage;
 