import movieList from "@/app/Data/data";
export async function GET() {
  return Response.json(movieList);
}
