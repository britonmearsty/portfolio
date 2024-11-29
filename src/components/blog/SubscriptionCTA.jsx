export default function SubscriptionCTA() {
  return (
    <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
      <p className="mb-4">Subscribe to my blog for weekly tech tips!</p>
      <form className="space-y-4">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 text-gray-700 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
}
