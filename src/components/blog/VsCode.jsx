import React from "react";

const VsCode = () => {
  const extensions = [
    { name: "Prettier", description: "Code formatter for consistent style." },
    { name: "ESLint", description: "Identifies and fixes coding issues." },
    { name: "GitLens", description: "Enhances Git capabilities in VS Code." },
    {
      name: "Bracket Pair Colorizer",
      description: "Colors matching brackets for readability.",
    },
    {
      name: "Path IntelliSense",
      description: "Auto-completes file paths in your code.",
    },
    {
      name: "Live Server",
      description: "Launches a local server with live reload.",
    },
    {
      name: "Code Spell Checker",
      description: "Checks spelling errors in your code.",
    },
    {
      name: "VSCode Icons",
      description: "Adds intuitive icons to your file explorer.",
    },
    {
      name: "Markdown Preview Enhanced",
      description: "Improves Markdown editing and previews.",
    },
    {
      name: "Thunder Client",
      description: "Lightweight REST API client for testing APIs.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Ten VS Code Extensions Every Developer Should Have
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Boost your productivity and improve your development workflow with these
        essential VS Code extensions.
      </p>
      <ul className="space-y-4">
        {extensions.map((ext, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-blue-500">
              {index + 1}. {ext.name}
            </h2>
            <p className="text-gray-700">{ext.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VsCode;
