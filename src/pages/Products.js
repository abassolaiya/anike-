import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

// Default export a single React component per project convention
export default function Collections() {
  // --------------------- Product Data ---------------------
  const onipataProducts = [
    {
      id: "onipata-1",
      name: "Luxury Lingerie Set",
      description: "Handcrafted lace & silk for ultimate comfort and elegance.",
      priceNumber: 89.99,
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
      tags: ["new"],
      rating: 4.7,
      popularity: 95,
    },
    {
      id: "onipata-2",
      name: "Silk Chemise",
      description: "Smooth silk chemise with delicate trimmed edges.",
      priceNumber: 69.99,
      price: "$69.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOenpcQJ-7t2Uqad49Gh1CyUdwSEERrzRusw&s",
      tags: [],
      rating: 4.5,
      popularity: 80,
    },
    {
      id: "onipata-3",
      name: "Lace Bodysuit",
      description: "A timeless lace bodysuit that flatters every silhouette.",
      priceNumber: 79.99,
      price: "$79.99",
      image:
        "https://cdn-img.prettylittlething.com/2/8/2/5/2825b85bec5d9c8451cdc8788736705f0b498407_CNG8634_1_black_mesh_deep_plunge_crochet_lace_bodysuit.jpg",
      tags: ["featured"],
      rating: 4.8,
      popularity: 88,
    },
    {
      id: "onipata-4",
      name: "Comfort Bralette",
      description: "Light support, breathable fabric — everyday luxury.",
      priceNumber: 29.99,
      price: "$29.99",
      image:
        "https://images-cdn.ubuy.co.in/680ae2202ee802fac705c1d0-calvin-klein-women-s-invisibles-comfort.jpg",
      tags: [],
      rating: 4.3,
      popularity: 72,
    },
    {
      id: "onipata-5",
      name: "High-Waist Briefs",
      description: "Soft, flattering brief with medium coverage.",
      priceNumber: 24.99,
      price: "$24.99",
      image:
        "https://i5.walmartimages.com/seo/Joyspun-Women-s-Seamless-Sculpting-High-Waisted-Briefs-Sizes-S-to-3X_9156877f-a8e1-4042-a667-6ea63c2810a6.1b63a19322c2d77bb16b9117877abc84.jpeg",
      tags: [],
      rating: 4.2,
      popularity: 60,
    },
    {
      id: "onipata-6",
      name: "Sheer Robe",
      description:
        "Floaty, elegant robe — a statement piece for special nights.",
      priceNumber: 119.99,
      price: "$119.99",
      image:
        "https://images.unsplash.com/photo-1520975666650-3a7d8c8f1f6a?auto=format&fit=crop&w=900&q=60",
      tags: ["new"],
      rating: 4.9,
      popularity: 98,
    },
    {
      id: "onipata-7",
      name: "Satin Camisole",
      description: "Sleek satin camisole that layers or sleeps in style.",
      priceNumber: 44.99,
      price: "$44.99",
      image:
        "https://images.unsplash.com/photo-1520975915591-4d2c2a8608e8?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.4,
      popularity: 70,
    },
    {
      id: "onipata-8",
      name: "Bamboo Sleep Set",
      description: "Eco-friendly bamboo fabric, cool and soft to the touch.",
      priceNumber: 54.99,
      price: "$54.99",
      image:
        "https://images.unsplash.com/photo-1593032465175-9cbe5b8eb5f6?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.6,
      popularity: 76,
    },
    {
      id: "onipata-9",
      name: "Delicate Garter",
      description: "Finishing touch: intricate straps and subtle hardware.",
      priceNumber: 39.99,
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1585386959984-4b0713f9f0f0?auto=format&fit=crop&w=900&q=60",
      tags: ["featured"],
      rating: 4.5,
      popularity: 65,
    },
  ];

  const onigoldProducts = [
    {
      id: "onigold-1",
      name: "Gold Necklace",
      description: "24K gold necklace with intricate craftsmanship.",
      priceNumber: 299.99,
      price: "$299.99",
      image:
        "https://plus.unsplash.com/premium_photo-1678730056371-eff9c5356a48?auto=format&fit=crop&w=900&q=60",
      tags: ["featured"],
      rating: 4.9,
      popularity: 99,
    },
    {
      id: "onigold-2",
      name: "Engagement Ring",
      description:
        "Exquisite diamond ring set in premium gold for special moments.",
      priceNumber: 1299.99,
      price: "$1,299.99",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
      tags: ["new"],
      rating: 5.0,
      popularity: 100,
    },
    {
      id: "onigold-3",
      name: "Luxury Watch",
      description: "Timeless watch with golden accents and precision movement.",
      priceNumber: 499.99,
      price: "$499.99",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
      tags: [],
      rating: 4.8,
      popularity: 85,
    },
    {
      id: "onigold-4",
      name: "Gold Hoop Earrings",
      description: "Classic hoops with a modern finish.",
      priceNumber: 149.99,
      price: "$149.99",
      image:
        "https://images.unsplash.com/photo-1541534401786-9f28a9f33f3c?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.6,
      popularity: 78,
    },
    {
      id: "onigold-5",
      name: "Bracelet Bangle",
      description: "Hand-finished bangle with subtle textures.",
      priceNumber: 199.99,
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1548786817-3a76d70f1d2a?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.5,
      popularity: 74,
    },
    {
      id: "onigold-6",
      name: "Men's Signet Ring",
      description: "Bold, machine-polished signet with heritage styling.",
      priceNumber: 259.99,
      price: "$259.99",
      image:
        "https://images.unsplash.com/photo-1519741494641-1f9a4cf6f0a9?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.4,
      popularity: 66,
    },
    {
      id: "onigold-7",
      name: "Pendant Necklace",
      description: "Subtle pendant set on a delicate chain.",
      priceNumber: 179.99,
      price: "$179.99",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.7,
      popularity: 69,
    },
    {
      id: "onigold-8",
      name: "Diamond Studs",
      description: "Radiant-cut studs for everyday sparkle.",
      priceNumber: 899.99,
      price: "$899.99",
      image:
        "https://images.unsplash.com/photo-1520975666650-3a7d8c8f1f6a?auto=format&fit=crop&w=900&q=60",
      tags: ["featured"],
      rating: 4.9,
      popularity: 91,
    },
    {
      id: "onigold-9",
      name: "Gold Anklet",
      description: "Delicate anklet to finish any look.",
      priceNumber: 89.99,
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1532921187760-9e3f5c0d3f95?auto=format&fit=crop&w=900&q=60",
      tags: [],
      rating: 4.2,
      popularity: 55,
    },
  ];

  const allProducts = useMemo(
    () => [
      ...onipataProducts.map((p) => ({ ...p, brand: "AnikeOnipata" })),
      ...onigoldProducts.map((p) => ({ ...p, brand: "AnikeOnigold" })),
    ],
    []
  );

  // --------------------- UI State ---------------------
  const [brandFilter, setBrandFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [selected, setSelected] = useState(null); // quick view product
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // reset visible count when filters change so user sees top results
    setVisibleCount(9);
  }, [brandFilter, query, sort, minPrice, maxPrice]);

  useEffect(() => {
    // scroll to top when this page mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // --------------------- Filtering & Sorting ---------------------
  const filtered = useMemo(() => {
    let items = allProducts.slice();

    if (brandFilter !== "All") {
      items = items.filter((p) => p.brand === brandFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (minPrice) {
      const min = Number(minPrice);
      if (!Number.isNaN(min)) items = items.filter((p) => p.priceNumber >= min);
    }

    if (maxPrice) {
      const max = Number(maxPrice);
      if (!Number.isNaN(max)) items = items.filter((p) => p.priceNumber <= max);
    }

    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.priceNumber - b.priceNumber);
        break;
      case "price-desc":
        items.sort((a, b) => b.priceNumber - a.priceNumber);
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        items.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        // featured: show featured tags first, then popularity
        items.sort((a, b) => {
          const af = a.tags.includes("featured") ? 1 : 0;
          const bf = b.tags.includes("featured") ? 1 : 0;
          if (af !== bf) return bf - af;
          return b.popularity - a.popularity;
        });
    }

    return items;
  }, [allProducts, brandFilter, query, sort, minPrice, maxPrice]);

  // --------------------- UI Handlers ---------------------
  const formatPrice = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]
    );
  };

  const handleAddToCart = (product) => {
    // placeholder - integrate with cart logic
    console.log("Add to cart:", product);
    // small UI feedback could be added (toast)
    alert(`${product.name} added to cart`);
  };

  const handleLoadMore = () => setVisibleCount((v) => v + 6);

  // --------------------- Render ---------------------
  return (
    <main className="collections-page page-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <strong>Collections</strong>
      </nav>

      <header className="collections-hero">
        <div className="hero-inner">
          <h1>Collections</h1>
          <p className="lead">
            Curated pieces from <strong>AnikeOnipata</strong> and{" "}
            <strong>AnikeOnigold</strong>— refined materials, thoughtful design.
          </p>
        </div>
      </header>

      <section className="controls container">
        <div className="controls-left">
          <div className="brand-filters">
            <button
              className={`chip ${brandFilter === "All" ? "active" : ""}`}
              onClick={() => setBrandFilter("All")}
            >
              All
            </button>
            <button
              className={`chip ${
                brandFilter === "AnikeOnipata" ? "active" : ""
              }`}
              onClick={() => setBrandFilter("AnikeOnipata")}
            >
              AnikeOnipata
            </button>
            <button
              className={`chip ${
                brandFilter === "AnikeOnigold" ? "active" : ""
              }`}
              onClick={() => setBrandFilter("AnikeOnigold")}
            >
              AnikeOnigold
            </button>
          </div>

          <div className="quick-search">
            <input
              aria-label="Search products"
              placeholder="Search name or description..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="controls-right">
          <div className="price-range">
            <input
              aria-label="Min price"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>—</span>
            <input
              aria-label="Max price"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="sort-select">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="newest">Popularity</option>
              <option value="rating">Top rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="products container">
        <div className="products-meta">
          <div>{filtered.length} items</div>
          <div className="view-hint">
            Tap a product for quick view • Hover on desktop
          </div>
        </div>

        <div className="products-grid">
          {filtered.slice(0, visibleCount).map((product) => (
            <article
              key={product.id}
              className={`card ${
                product.brand === "AnikeOnigold" ? "gold" : ""
              }`}
            >
              <div className="card-media">
                <img src={product.image} alt={product.name} loading="lazy" />

                <div className="card-overlay">
                  <button
                    className="btn-icon"
                    aria-label={`Quick view ${product.name}`}
                    onClick={() => setSelected(product)}
                  >
                    Quick View
                  </button>

                  <button
                    className="btn-icon"
                    aria-label={`Add ${product.name} to cart`}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add
                  </button>
                </div>

                {product.tags.includes("new") && (
                  <span className="badge new">New</span>
                )}
                {product.tags.includes("featured") && (
                  <span className="badge featured">Featured</span>
                )}
              </div>

              <div className="card-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="card-footer">
                  <div className="price">
                    {formatPrice(product.priceNumber)}
                  </div>
                  <div className="actions">
                    <button
                      className={`fav ${
                        favorites.includes(product.id) ? "active" : ""
                      }`}
                      aria-pressed={favorites.includes(product.id)}
                      onClick={() => handleToggleFavorite(product.id)}
                      title="Add to favorites"
                    >
                      ♥
                    </button>
                    <button
                      className="add"
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <i className="fas fa-shopping-bag" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="load-more text-center">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="empty text-center">
            <p>No products match your filters. Try clearing search or range.</p>
            <button
              className="btn btn-outline"
              onClick={() => {
                setQuery("");
                setMinPrice("");
                setMaxPrice("");
                setBrandFilter("All");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Quick view modal */}
      {selected && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={() => setSelected(null)} />
          <div className="modal-panel">
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selected.image} alt={selected.name} />
              </div>
              <div className="modal-info">
                <h2>{selected.name}</h2>
                <p className="muted">{selected.brand}</p>
                <div className="modal-price">
                  {formatPrice(selected.priceNumber)}
                </div>
                <p className="modal-desc">{selected.description}</p>

                <div className="modal-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleAddToCart(selected);
                      setSelected(null);
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => alert("Added to wishlist (placeholder)")}
                  >
                    Save
                  </button>
                </div>

                <div className="modal-meta">
                  <div>Rating: {selected.rating} ★</div>
                  <div>Popularity: {selected.popularity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="cta container">
        <div className="cta-inner">
          <div>
            <h2>Have a question? Need a custom order?</h2>
            <p>
              Contact our concierge team for bespoke requests or product
              inquiries.
            </p>
          </div>
          <div>
            <Link to="/contact" className="btn btn-primary">
              Contact us
            </Link>
            <Link to="/" className="btn btn-outline">
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
