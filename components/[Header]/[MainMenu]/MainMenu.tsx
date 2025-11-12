"use client";

import MenuItem from './[MenuItem]/MenuItem';

export default function MainMenu() {

  const items = [
    { _id: "1", title: "The Matrix", year: 1999 },
    { _id: "2", title: "Inception", year: 2010 },
    { _id: "3", title: "Interstellar", year: 2014 },
  ];

  return (
    <div className="flex w-full py-3 px-3">
      <ul className="ml-auto flex gap-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
