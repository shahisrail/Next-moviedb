import MovieList from "./Components/MovieList";
import Sidebar from "./Components/Sidebar";
export default function Home() {
  // throw new Error("HEllo");
  return (
    <div>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <div>
            <MovieList />
          </div>
        </div>
      </main>
    </div>
  );
}
