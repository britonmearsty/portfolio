import HeroSection from "../components/blog/HeroSection";
import FeaturedPosts from "../components/blog/FeaturedPosts";
import BlogList from "../components/blog/BlogList";
import Sidebar from "../components/blog/Sidebar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <FeaturedPosts />
            <BlogList />
          </div>
          <Sidebar className="lg:w-1/3" />
        </div>
      </main>
    </div>
  );
}
