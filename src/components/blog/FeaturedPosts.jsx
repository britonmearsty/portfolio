import React from "react";
import { Link } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt:
      "Learn how to leverage React Hooks to build more efficient and maintainable components.",
    image:
      "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
    slug: "mastering-react-hooks",
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js",
    excerpt:
      "A comprehensive guide to creating scalable and secure RESTful APIs using Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
    slug: "building-restful-apis-nodejs",
  },
  {
    id: 3,
    title: "CSS Grid: A Complete Guide",
    excerpt:
      "Unlock the power of CSS Grid to create complex layouts with ease and flexibility.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
    slug: "css-grid-complete-guide",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/posts/${post.slug}`}
                className="text-blue-600 font-semibold hover:underline">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
