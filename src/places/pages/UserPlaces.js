import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eslamshahr City :)",
    description: "One of the Most famous Cities in Iran :)",
    // imageURL:"https://i.pinimg.com/564x/f8/a7/8c/f8a78c0859db7dc60bc8a1f70bfd171f.jpg",
    imageURL:"https://islamshahr.ostan-th.ir//Uploads/User/495/other/islamshahr/mn.jpg",
    address: "Iran ,Tehran ,Jadeh Saveh ,Namaz sq, kashani st, imam mohamad taghi st",
    location: {
      lat: 35.558039099999995,
      lng: 51.236116499999994,
    },
    creator: "uid2",
  },
  {
    id: "p2",
    title: "empire State Building",
    description: "One of the Most famous sky scrapers in the world!",
    imageURL:
      "https://i.pinimg.com/564x/31/9c/d0/319cd08487bc3a960cc91deb2dc02934.jpg",
    address: "United State America, NY St 34th w20",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "uid2",
  },
];

const UserPlace = () => {
    const uID = useParams().uID;
    const LoadedPlace = DUMMY_PLACES.filter(place =>{
      return place.creator === uID
    })
  return <PlaceList items={LoadedPlace} />;
};
export default UserPlace;
