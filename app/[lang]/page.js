import MovieList from "../Components/MovieList";
import Sidebar from "../Components/Sidebar";
import { getDictionary } from "./disctionaries";
export default async function Home({ params: { lang, id } }) {
  // throw new Error("HEllo");
  const disctionary = await getDictionary(lang);
  return (
    <div>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar disctionary={disctionary} />
          <div>
            <MovieList />
          </div>
        </div>
      </main>
    </div>
  );
}
