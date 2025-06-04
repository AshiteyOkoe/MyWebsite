import React from "react";
import { Icon } from "@iconify/react";

export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-8 bg-white rounded-3xl shadow-2xl mt-8 mb-12 border border-blue-100 animate__animated animate__fadeInUp animate__faster">
      <div className="flex flex-col items-center mb-8">
        <Icon icon="mdi:cookie" className="text-5xl text-amber-500 mb-2" aria-label="Cookie Icon" />
        <h1 className="text-3xl font-bold mb-2 text-center">Cookie Policy</h1>
        <p className="text-gray-500 text-center text-base">Last updated: June 3, 2025</p>
      </div>
      <p className="mb-4 text-lg">
        At <span className="font-semibold text-blue-700">Docel-Star Ghana Ltd.</span>, we are committed to protecting your privacy and ensuring transparency about how we use cookies and similar technologies on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:help-circle-outline" className="text-blue-500 text-xl" /> What Are Cookies?
      </h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device when you visit a website. They help us enhance your browsing experience, remember your preferences, and analyze site traffic.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:cookie-cog-outline" className="text-amber-500 text-xl" /> How We Use Cookies
      </h2>
      <ul className="mb-4 divide-y divide-blue-50">
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:lock-outline" className="text-blue-600 text-xl mt-1" />
          <div><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off in our systems.</div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:chart-bar" className="text-emerald-600 text-xl mt-1" />
          <div><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:tune-variant" className="text-purple-600 text-xl mt-1" />
          <div><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, more personalized features.</div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:bullseye-arrow" className="text-pink-600 text-xl mt-1" />
          <div><strong>Targeting/Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.</div>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:account-cog-outline" className="text-emerald-600 text-xl" /> Your Choices
      </h2>
      <p className="mb-4">
        You can manage your cookie preferences at any time by adjusting your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:account-multiple-outline" className="text-blue-600 text-xl" /> Third-Party Cookies
      </h2>
      <p className="mb-4">
        We may use third-party services, such as analytics and advertising partners, that may also place cookies on your device. We encourage you to review their privacy and cookie policies for more information.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:update" className="text-purple-600 text-xl" /> Updates to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services. Please review this page regularly for the latest information.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:email-outline" className="text-emerald-700 text-xl" /> Contact Us
      </h2>
      <p>
        If you have any questions about our Cookie Policy or how we use cookies, please contact us at <a href="mailto:info@docelstar.com" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">info@docelstar.com</a>.
      </p>
    </div>
  );
}
