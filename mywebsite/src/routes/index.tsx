import React from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/home/index"));
const AboutPage = React.lazy(() => import("../pages/about/index"));
const ProductsPage = React.lazy(() => import("../pages/products/index"));
const ContactPage = React.lazy(() => import("../pages/contact/index"));
const Category1Page = React.lazy(() => import("../pages/products/category1"));
const Category2Page = React.lazy(() => import("../pages/products/category2"));
const CookiePolicyPage = React.lazy(() => import("../pages/cookie-policy"));
const PrivacyPolicyPage = React.lazy(() => import("../pages/privacy-policy"));
const FAQPage = React.lazy(() => import("../pages/faq"));

export function AppRoutes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/category1" element={<Category1Page />} />
        <Route path="/products/category2" element={<Category2Page />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </React.Suspense>
  );
}