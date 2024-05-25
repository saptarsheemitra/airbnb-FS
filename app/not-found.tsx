'use client'; 

import EmptyState from "./components/EmptyState";

const NotFound = () => {
  return (
    <EmptyState
      title="Sorry, this page isn't available."
      subtitle="The link you followed may be broken, or the page may have been removed. "
    />
  );
};

export default NotFound;
