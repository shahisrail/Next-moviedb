import Image from "next/image";
import MovieList from "./Components/MovieList";
export default function Home() {
  return (
    <div>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <aside>
            <ul class="space-y-2">
              <li>
                <a
                  class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                  href="#"
                >
                  <Image src="./trending.svg" width="24" height="24" alt="" />
                  <span>Trending</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
                >
                  <Image src="./newRelease.svg" width="24" height="24" alt="" />
                  <span>New Releases</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
                >
                  <Image
                    src="./commingSoon.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                  <span>Coming Soon</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
                >
                  <Image src="./favourite.svg" width="24" height="24" alt="" />
                  <span>Favourites</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                  href="#"
                >
                  <Image src="./watchLater.svg" width="24" height="24" alt="" />
                  <span>Watch Later</span>
                </a>
              </li>
            </ul>
          </aside>
          <div>
            <MovieList />
          </div>
        </div>
      </main>
    </div>
  );
}
