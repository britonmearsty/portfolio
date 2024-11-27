const categories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Career Advice",
  "Tools",
  "JavaScript",
  "React",
  "Node.js",
];

export default function CategoriesFilter() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button className="text-gray-700 hover:text-blue-600 transition duration-300">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
