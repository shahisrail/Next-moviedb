import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <Link href="/">
            <Image
              src="https://i.postimg.cc/4dpLX8zT/logo.png"
              width="139"
              height="26"
              alt=""
            />
          </Link>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  src="https://i.postimg.cc/Xq32qw8B/ring.png
"
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  src="https://i.postimg.cc/zXxdDHR3/sun.png
"
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <Image
                  src="https://i.postimg.cc/CxKQbsVj/shopping-cart.png
                  "
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
