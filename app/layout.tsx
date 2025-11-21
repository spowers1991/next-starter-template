import "@/css/globals.css";
import { ThemeProvider } from "@/lib/themes/state/ThemeContext";
import Themes from "@/themes/Themes";
import Header from "@/components/[Header]/Header";
import Body from "@/components/[Body]/Body";
import Html from "@/components/[Html]/Html";
import { MoviesProvider } from "@/services/sanity/movies/state/MoviesContext";
import { getMovies } from "@/services/sanity/movies/queries/getMovies"; 
import { FiltersProvider } from "@/lib/filters/state/FiltersContext";
import { UserProvider } from "@/services/user/UserContext";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const movies = await getMovies();

  return (
    <UserProvider>
      <ThemeProvider themes={Themes}>
        <MoviesProvider initialMovies={movies}>
          <FiltersProvider>
            <Html>
              <Body>
                <Header />
                {children}
              </Body>
            </Html>
          </FiltersProvider>
        </MoviesProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
