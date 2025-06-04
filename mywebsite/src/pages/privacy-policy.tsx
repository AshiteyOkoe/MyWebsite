import { Icon } from "@iconify/react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-8 bg-white rounded-3xl shadow-2xl mt-8 mb-12 border border-blue-100 animate__animated animate__fadeInUp animate__faster">
      <div className="flex flex-col items-center mb-8">
        <Icon icon="mdi:shield-account" className="text-5xl text-blue-600 mb-2" aria-label="Privacy Icon" />
        <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-gray-500 text-center text-base">Last updated: June 3, 2025</p>
      </div>
      <p className="mb-4 text-lg">
        At <span className="font-semibold text-blue-700">Docel-Star Ghana Ltd.</span>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:account-search-outline" className="text-blue-500 text-xl" /> Information We Collect
      </h2>
      <ul className="mb-4 divide-y divide-blue-50">
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:account" className="text-blue-600 text-xl mt-1" />
          <div><strong>Personal Information:</strong> Such as your name, email address, phone number, and any other information you voluntarily provide to us through forms or communications.</div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:web" className="text-emerald-600 text-xl mt-1" />
          <div><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, device information, and pages visited.</div>
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:cookie-outline" className="text-amber-600 text-xl mt-1" />
          <div><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage. See our <a href="/cookie-policy" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">Cookie Policy</a> for more details.</div>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:clipboard-list-outline" className="text-blue-500 text-xl" /> How We Use Your Information
      </h2>
      <ul className="mb-4 divide-y divide-blue-50">
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:check-circle-outline" className="text-green-600 text-xl mt-1" /> To provide, operate, and maintain our website and services.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:check-circle-outline" className="text-green-600 text-xl mt-1" /> To improve, personalize, and expand our offerings.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:check-circle-outline" className="text-green-600 text-xl mt-1" /> To communicate with you, including responding to your inquiries and sending updates.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:check-circle-outline" className="text-green-600 text-xl mt-1" /> To analyze usage and trends to enhance user experience.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:check-circle-outline" className="text-green-600 text-xl mt-1" /> To comply with legal obligations and protect our rights.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:share-variant-outline" className="text-blue-500 text-xl" /> How We Share Your Information
      </h2>
      <ul className="mb-4 divide-y divide-blue-50">
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:close-circle-outline" className="text-red-500 text-xl mt-1" /> We do not sell your personal information.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:account-multiple-check-outline" className="text-blue-600 text-xl mt-1" /> We may share information with trusted third-party service providers who assist us in operating our website and delivering services, subject to confidentiality agreements.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:alert-outline" className="text-amber-600 text-xl mt-1" /> We may disclose information if required by law or to protect our rights and safety.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:shield-lock-outline" className="text-blue-600 text-xl" /> Data Security
      </h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:account-key-outline" className="text-emerald-600 text-xl" /> Your Rights & Choices
      </h2>
      <ul className="mb-4 divide-y divide-blue-50">
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:account-edit-outline" className="text-blue-600 text-xl mt-1" /> You have the right to access, update, or delete your personal information.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:email-remove-outline" className="text-amber-600 text-xl mt-1" /> You may opt out of receiving marketing communications at any time.
        </li>
        <li className="flex items-start gap-3 py-2">
          <Icon icon="mdi:cookie-outline" className="text-emerald-600 text-xl mt-1" /> You can manage your cookie preferences in your browser settings.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:account-child-outline" className="text-blue-600 text-xl" /> Children's Privacy
      </h2>
      <p className="mb-4">
        Our website is not intended for children under 13. We do not knowingly collect personal information from children.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:update" className="text-purple-600 text-xl" /> Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Please review this page regularly for the latest information.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2">
        <Icon icon="mdi:email-outline" className="text-emerald-700 text-xl" /> Contact Us
      </h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@docelstar.com" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">info@docelstar.com</a>.
      </p>
    </div>
  );
}
