import SearchBar from "./SearchBar";
import CategoriesFilter from "./CategoriesFilter";
import SubscriptionCTA from "./SubscriptionCTA";

export default function Sidebar({ className }) {
  return (
    <aside className={className}>
      <SearchBar />
      <CategoriesFilter />
      <SubscriptionCTA />
    </aside>
  );
}
