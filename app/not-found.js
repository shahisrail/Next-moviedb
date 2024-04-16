import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-center text-3xl ">Not Found 🙁😢</h2>
      <p className="text-center text-3xl ">
        Could not find requested this movie resource from length{" "}
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
