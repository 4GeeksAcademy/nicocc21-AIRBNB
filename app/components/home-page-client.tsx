"use client";

import { useEffect, useMemo, useState } from "react";
import { categoryOptions, listingsData } from "@/app/lib/listings-data";
import { HomeListingsSection } from "@/app/components/home-listings-section";
import { HomeNavbar } from "@/app/components/home-navbar";
import { HomeSearchPanel } from "@/app/components/home-search-panel";

/*
Componente: HomePageClient
Props:
- Sin props.
Relacion de layout:
- Vista Home completa.
- Incluye navbar, busqueda con useState, filtros por categoria y grid responsive.
*/
export const HomePageClient = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [items, setItems] = useState<typeof listingsData>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(listingsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => {
    return items.filter((item) => {
      const byCategory = activeCategory === "all" || item.category === activeCategory;
      const bySearch = item.title.toLowerCase().includes(query.toLowerCase());
      return byCategory && bySearch;
    });
  }, [activeCategory, items, query]);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#222]">
      <HomeNavbar />
      <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-5 min-[786px]:px-8">
        <HomeSearchPanel
          query={query}
          activeCategory={activeCategory}
          categories={categoryOptions}
          onQueryChange={setQuery}
          onCategoryChange={setActiveCategory}
        />
        <HomeListingsSection loading={loading} listings={visibleListings} />
      </main>
    </div>
  );
};
