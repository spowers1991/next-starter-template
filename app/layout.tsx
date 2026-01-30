import "@/css/globals.css";
import { ThemeProvider } from "@/lib/themes/state/ThemeContext";
import Themes from "@/themes/Themes";
import Header from "@/components/html/{Header}/Header";
import Body from "@/components/html/{Body}/Body";
import Html from "@/components/html/{Html}/Html";
import { UserProvider } from "@/services/[Users]/{User}/state/UserContext";
import { MoviesProvider } from "@/services/[Movies]/state/MoviesContext";
import { PersonsProvider } from "@/services/[Persons]/state/PersonsContext";
import { FiltersProvider } from "@/lib/filters/state/FiltersContext";
import { AnimationsProvider } from "@/lib/animations/state/AnimationsContext";
import { getMovies } from "@/services/[Movies]/queries/getMovies"; 
import { getPersons } from "@/services/[Persons]/queries/getPersons";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const movies = await getMovies();
  const persons = await getPersons();
  
  return (
    <UserProvider>
      <ThemeProvider themes={Themes}>
        <PersonsProvider initialPersons={persons}>
          <MoviesProvider initialMovies={movies}>
            <FiltersProvider>
              <AnimationsProvider>
                <Html>
                  <Body>
                    <Header />
                      {children}
                  </Body>
                </Html>
              </AnimationsProvider>
            </FiltersProvider>
          </MoviesProvider>
        </PersonsProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
