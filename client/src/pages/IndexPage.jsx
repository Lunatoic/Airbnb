import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import img4 from '../assets/pic4.jpg'
import img5 from '../assets/pic5.jpg'
import img6 from '../assets/pic6.jpg'
import img7 from '../assets/pic7.jpg'
import img8 from '../assets/pic8.jpg'
import img9 from '../assets/pic9.jpg'
import img10 from '../assets/pic10.jpg'
import img11 from '../assets/pic11.jpg'
import img12 from '../assets/pic12.jpg'

export default function IndexPage() {
  const places = [
    {
      _id:"1h2fh1",
      name: 'Forde',
      photos: img2,
      address : 'Forde Norway',
      title : 'sea side',
      price : '350'

    },
    {
      _id:"1h2fh2",
      name: 'jumaji',
      photos: img3,
      address : 'Gul Newyork',
      title : 'Bird View',
      price : '1700'

    },
    {
      _id:"1h2fh3",
      name: 'palaca',
      photos: img4,
      address : 'friesland, netherland',
      title : 'waddan',
      price : '1999'

    },
    {
      _id:"1h2fh4",
      name: 'palaca2',
      photos: img5,
      address : 'columbia',
      title : 'luxury suit',
      price : '700'

    },
    {
      _id:"1h2fh5",
      name: '',
      photos: img6,
      address : 'Jamui, khaiara',
      title : 'grih Parvesh',
      price : '359'

    },
    {
      _id:"1h2fh6",
      name: 'athihi palaca',
      photos: img7,
      address : 'Jamui, khaiara',
      title : 'grih Parvesh',
      price : '700'

    },
    {
      _id:"1h2fh7",
      name: 'athihi palaca',
      photos: img8,
      address : 'tokyo',
      title : 'tokyo drift',
      price : '239'

    },
    {
      _id:"1h2fh8",
      name: 'athihi palaca',
      photos: img9,
      address : 'Jamui, khaiara',
      title : 'grih Parvesh',
      price : '500'

    },
    {
      _id:"1h2fh9",
      name: 'faa',
      photos: img10,
      address : 'kumba',
      title : 'maldivees',
      price : '450'

    },
    {
      _id:"1h2fh10",
      name: 'himachal',
      photos: img11,
      address : 'Himachal pradesh',
      title : 'Rohtang Valley',
      price : '149'

    },
    {
      _id:"1h2fh11",
      name: 'Lorem, ipsum',
      photos: img12,
      address : 'Jamui, khaiara',
      title : 'Lorem, ipsum',
      price : '700'

    },
  ]

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 && places.map(place => (
        <Link to={'/place/' + place._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {place.photos && (
              <img className="rounded-2xl object-cover aspect-square" src= {place.photos} alt="ghar" />
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  );
}
