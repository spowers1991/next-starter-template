"use client";

import ThemeSelector from '@/components/[ThemeSelector]/ThemeSelector';
import MenuItem from './[MenuItem]/MenuItem';
import { useMovies } from '@/services/Movies/state/MoviesContext';
import Link from 'next/link';

export default function MainMenu() {
const { movies } = useMovies();
const items = movies;

  return (
    <div className="flex w-full py-3 px-3">
      <div>
        <ThemeSelector />
      </div>
      <ul className="ml-auto flex gap-2">
        <li>
          <Link href="/movies">
            All Movies
          </Link>
        </li>
        {items.map((item, index) => (
          index < 5 &&
          <MenuItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
