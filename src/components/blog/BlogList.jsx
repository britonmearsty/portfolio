import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 VS Code Extensions Every Web Developer Needs",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions for web development.",
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww",
    date: "November 15, 2024",
    category: "Tools",
    tags: ["VS Code", "Productivity", "Web Development"],
    slug: "vscode-extensions-web-developers",
  },
  {
    id: 2,
    title: "Understanding Async/Await in JavaScript",
    excerpt:
      "Master asynchronous programming in JavaScript with this comprehensive guide to async/await.",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "November 10, 2024",
    category: "JavaScript",
    tags: ["Async", "JavaScript", "ES6"],
    slug: "understanding-async-await-javascript",
  },
  {
    id: 3,
    title: "Getting Started with Next.js 13",
    excerpt:
      "Learn how to build fast and SEO-friendly React applications with Next.js 13's new app directory.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    date: "November 5, 2024",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    slug: "getting-started-nextjs-13",
  },
];

export default function BlogList() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <img
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">
                <Link
                  to={`/posts/${post.slug}`}
                  className="hover:text-blue-600 transition duration-300">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {post.date} | {post.category}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/posts/${post.slug}`}
                className="text-blue-600 font-semibold hover:underline">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          Load More Posts
        </button>
      </div>
    </section>
  );
}
