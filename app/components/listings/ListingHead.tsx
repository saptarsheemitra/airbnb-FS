"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/type";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps{
    title:string;
    imageSrc:string;
                locationValue: string
                id:string;
                currentUser?: SafeUser | null;
}

const ListingHead = ({title, imageSrc, locationValue, id, currentUser}:ListingHeadProps) => {
    const {getByValue} = useCountries();
    const location = getByValue(locationValue);
  return (
    <>
    <Heading
    title={title}
    subtitle={`${location?.region}, ${location?.label}`}
    />
    <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
        <Image 
        className="object-cover w-full"
        alt="Image"
        src={imageSrc}
        fill
        />
        <div className="absolute top-5 right-5">
             <HeartButton  listingId={id} currentUser={currentUser}/> 
        </div>
    </div>

    </>
  )
}

export default ListingHead;