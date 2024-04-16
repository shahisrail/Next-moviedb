import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                src="https://i.postimg.cc/13TJwxBQ/trending.png
"
                width="24"
                height="24"
                alt=""
              />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="https://i.postimg.cc/6Q2bm6qq/new-Release.png
"
                width="24"
                height="24"
                alt=""
              />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="https://i.postimg.cc/qBXbY5Js/comming-Soon.png
"
                width="24"
                height="24"
                alt=""
              />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="https://i.postimg.cc/nc2WswNF/favourite.png
"
                width="24"
                height="24"
                alt=""
              />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="https://i.postimg.cc/xdzgPspb/watch-Later.png
"
                width="24"
                height="24"
                alt=""
              />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
