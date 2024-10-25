export const dynamic = "force-dynamic";

import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  // Await searchParams to safely access its properties
  const params = await searchParams; // Await the searchParams

  const startIndex = params.start || "1"; // Accessing start after awaiting
  const searchTerm = params.searchTerm; // Accessing searchTerm after awaiting

  // Check if searchTerm is provided
  if (!searchTerm) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No search term provided</h1>
        <p className="text-lg">
          Please provide a search term to continue.{" "}
          <Link href="/" className="text-blue-500">Home</Link>
        </p>
      </div>
    );
  }

  // Simulate a delay for demonstration
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Fetch web search results
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">Home</Link>
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}
