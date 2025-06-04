
import { Icon } from "@iconify/react";

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-8 bg-white rounded-3xl shadow-2xl mt-8 mb-12 border border-blue-100 animate__animated animate__fadeInUp animate__faster">
      <div className="flex flex-col items-center mb-8">
        <Icon icon="mdi:comment-question-outline" className="text-5xl text-blue-600 mb-2" aria-label="FAQ Icon" />
        <h1 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions (FAQ)</h1>
        <p className="text-gray-500 text-center text-base">Last updated: June 4, 2025</p>
      </div>
      <div className="space-y-8">
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:lightbulb-on-outline" className="text-3xl text-blue-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">What services does Docel-Star Ghana Ltd. provide?</h2>
            <p>We offer innovative business solutions, including technology consulting, product sales, and support services tailored to help your business grow and succeed.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:headset" className="text-3xl text-emerald-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">How can I contact your support team?</h2>
            <p>You can reach our support team via the <a href="/contact" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">Contact Us</a> page or by emailing <a href="mailto:info@docelstar.com" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">info@docelstar.com</a>. We are available 24/7 to assist you.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:map-marker" className="text-3xl text-pink-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Where are you located?</h2>
            <p>Our headquarters are in Accra, Ghana, but we serve clients across the country and internationally.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:shield-check" className="text-3xl text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Do you offer product warranties?</h2>
            <p>Yes, all our products come with a standard warranty. Please refer to the product details or contact us for specific warranty information.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:clipboard-text-search-outline" className="text-3xl text-purple-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">How do I request a quote or consultation?</h2>
            <p>You can request a quote or schedule a consultation by visiting our <a href="/contact" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">Contact</a> page and filling out the form. Our team will respond promptly.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:shield-lock-outline" className="text-3xl text-emerald-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Is my data safe with Docel-Star Ghana Ltd.?</h2>
            <p>Absolutely. We take data privacy and security seriously. Please review our <a href="/privacy-policy" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">Privacy Policy</a> for more details on how we protect your information.</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow flex gap-4 items-start">
          <Icon icon="mdi:handshake-outline" className="text-3xl text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Can I partner with Docel-Star Ghana Ltd.?</h2>
            <p>We welcome partnership opportunities. Please reach out via our <a href="/contact" className="text-emerald-700 underline font-medium hover:text-emerald-900 transition">Contact</a> page to discuss potential collaborations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
