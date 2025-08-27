// pages/Home.js
import React from "react";
import Hero from "../components/Hero/Hero";
import BrandSection from "../components/BrandSection/BrandSection";
import Features from "../components/Features/Features";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  // Sample product data with working image URLs
  const onipataProducts = [
    {
      id: 1,
      name: "Luxury Lingerie Set",
      description:
        "Handcrafted with the finest lace and silk for ultimate comfort.",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Premium Underwear",
      description:
        "Experience unmatched comfort with our signature collection.",
      price: "$35.99",
      image:
        "https://images.unsplash.com/photo-1568441556126-f36ae0900180?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpbmdlcmllfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Elegant Accessories",
      description: "Subtle pieces that complement your intimate style.",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1755536220753-2b414cfc527d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEVsZWdhbnQlMjBBY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const onigoldProducts = [
    {
      id: 1,
      name: "Gold Necklace",
      description:
        "24K gold necklace with intricate design and premium finish.",
      price: "$299.99",
      image:
        "https://plus.unsplash.com/premium_photo-1678730056371-eff9c5356a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29sZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Engagement Ring",
      description:
        "Exquisite diamond ring set in premium gold for that special moment.",
      price: "$1,299.99",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "Luxury Watch",
      description:
        "Elegant timepiece with gold accents and precision movement.",
      price: "$499.99",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
  ];

  return (
    <div className="home-page">
      <Hero />
      <BrandSection
        brand="onipata"
        title="AnikeOnipata"
        products={onipataProducts}
      />
      <BrandSection
        brand="onigold"
        title="AnikeOnigold"
        products={onigoldProducts}
        bgClass="luxury-bg"
      />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
