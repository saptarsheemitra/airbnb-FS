// *************Actions***************
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
// *************Components***************
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your property"
      />
    );

  return (
    <>
      <ReservationClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </>
  );
};

export default ReservationPage;
