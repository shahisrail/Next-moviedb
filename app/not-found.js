"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();

  return (
    <div>
      <h2 className="text-center text-3xl ">Not Found 🙁😢</h2>
      <p className="text-center text-3xl ">
        Could not find requested this movie {pathName} resource from length{" "}
      </p>
      <div className="flex justify-center">
        <Link href="/">
          <button className="text-center text-3xl text-green-500">
            {" "}
            Return Home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
