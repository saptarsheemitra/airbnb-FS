import getCurrentUser from '@/app/actions/getCurrentUser';
import getListing from '@/app/actions/getListingById';
import EmptyState from '@/app/components/EmptyState';

import ListingClient from './ListingClient';

interface IParams{
listingId?:string;
}

const page = async ({params} : {params: IParams}) => {
    const listing = await getListing(params)
    const currentUser = await getCurrentUser()

    if (!listing){
        return <EmptyState/>
    }

  return (
    <div>
        <ListingClient
        listing={listing}
        currentUser = {currentUser}
        />
    </div>
  )
}

export default page;  