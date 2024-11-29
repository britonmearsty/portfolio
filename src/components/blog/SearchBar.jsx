import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search articles"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
