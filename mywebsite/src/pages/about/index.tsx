import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-large text-default-600 max-w-2xl mx-auto">
          Learn about our journey, mission, and the team behind our success.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            alt="About Us"
            className="object-cover rounded-lg"
            src="https://img.heroui.chat/image/ai?w=600&h=400&u=about-us"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-default-600">
            Founded in 2020, we've been at the forefront of innovation, helping
            businesses transform their digital presence. Our commitment to
            excellence and customer satisfaction has made us a trusted partner for
            companies worldwide.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardBody className="text-center shadow-2xl rounded-2xl">
                <Icon icon="lucide:users" className="text-2xl mx-auto mb-2" />
                <p className="font-semibold">500+</p>
                <p className="text-small text-default-500">Happy Clients</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="text-center shadow-2xl rounded-2xl">
                <Icon
                  icon="lucide:check-circle"
                  className="text-2xl mx-auto mb-2"
                />
                <p className="font-semibold">1000+</p>
                <p className="text-small text-default-500">Projects Completed</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-blue-100 relative overflow-hidden">
          {/* Decorative SVG background */}
          <svg className="absolute -top-10 -right-10 w-64 h-64 opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="100" rx="100" ry="80" fill="#3b82f6" fillOpacity="0.12" />
            <ellipse cx="60" cy="140" rx="40" ry="20" fill="#2563eb" fillOpacity="0.10" />
            <ellipse cx="160" cy="60" rx="30" ry="15" fill="#60a5fa" fillOpacity="0.13" />
            <polygon points="120,40 122,45 127,46 123,49 124,54 120,51 116,54 117,49 113,46 118,45" fill="#fff" opacity="0.7" />
          </svg>
          <div className="flex-1 space-y-4 z-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Why Partner With Us?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-3"><Icon icon="mdi:check-circle-outline" className="text-emerald-500 text-2xl" /> Proven track record of excellence and innovation</li>
              <li className="flex items-center gap-3"><Icon icon="mdi:check-circle-outline" className="text-emerald-500 text-2xl" /> Dedicated, expert team with global experience</li>
              <li className="flex items-center gap-3"><Icon icon="mdi:check-circle-outline" className="text-emerald-500 text-2xl" /> Transparent communication and support</li>
              <li className="flex items-center gap-3"><Icon icon="mdi:check-circle-outline" className="text-emerald-500 text-2xl" /> Tailored solutions for your unique business needs</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center z-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
              <Icon icon="mdi:award" className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Award-Winning Service</h3>
              <p className="text-gray-600 mb-4 text-center">Recognized for outstanding customer satisfaction and results.</p>
              <a href="/contact" className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold shadow hover:bg-blue-800 transition">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 rounded-3xl shadow-2xl border border-blue-100 p-10 relative overflow-hidden">
          {/* Decorative SVG background */}
          <svg className="absolute -bottom-10 -left-10 w-72 h-72 opacity-20 pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="150" rx="120" ry="80" fill="#3b82f6" fillOpacity="0.10" />
            <ellipse cx="80" cy="220" rx="50" ry="25" fill="#2563eb" fillOpacity="0.08" />
            <ellipse cx="220" cy="80" rx="40" ry="18" fill="#60a5fa" fillOpacity="0.10" />
            <polygon points="200,60 202,65 207,66 203,69 204,74 200,71 196,74 197,69 193,66 198,65" fill="#fff" opacity="0.7" />
          </svg>
          <div className="flex-1 space-y-4 z-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-2">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Icon icon="mdi:target-variant" className="text-blue-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Customer Focus</h3>
                  <p className="text-gray-700">We put our clients at the center of everything we do, ensuring their needs drive our solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon icon="mdi:lightbulb-on-outline" className="text-blue-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Innovation</h3>
                  <p className="text-gray-700">We embrace creativity and technology to deliver forward-thinking results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon icon="mdi:handshake-outline" className="text-blue-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Integrity</h3>
                  <p className="text-gray-700">We act with honesty, transparency, and respect in all our relationships.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon icon="mdi:account-group-outline" className="text-blue-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Collaboration</h3>
                  <p className="text-gray-700">We believe in teamwork and open communication to achieve shared goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center z-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
              <Icon icon="mdi:star-circle" className="text-5xl text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">What Sets Us Apart</h3>
              <ul className="text-gray-700 text-base space-y-2 mb-4">
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Personalized approach</li>
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Fast, reliable delivery</li>
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Measurable results</li>
              </ul>
              <a href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold shadow hover:bg-emerald-700 transition">Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl shadow-2xl border border-blue-100 p-10 relative overflow-hidden">
          {/* Decorative SVG background */}
          <svg className="absolute top-0 right-0 w-72 h-72 opacity-20 pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="150" rx="120" ry="80" fill="#3b82f6" fillOpacity="0.10" />
            <ellipse cx="80" cy="220" rx="50" ry="25" fill="#2563eb" fillOpacity="0.08" />
            <ellipse cx="220" cy="80" rx="40" ry="18" fill="#60a5fa" fillOpacity="0.10" />
            <polygon points="200,60 202,65 207,66 203,69 204,74 200,71 196,74 197,69 193,66 198,65" fill="#fff" opacity="0.7" />
          </svg>
          <div className="flex-1 space-y-4 z-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Icon icon="mdi:flag-variant" className="text-emerald-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Mission</h3>
                  <p className="text-gray-700">To empower businesses and individuals with innovative, reliable, and accessible digital solutions that drive growth and success.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon icon="mdi:eye-outline" className="text-blue-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Vision</h3>
                  <p className="text-gray-700">To be a global leader in digital transformation, recognized for our commitment to excellence, creativity, and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center z-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
              <Icon icon="mdi:rocket-launch-outline" className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Why We Stand Out</h3>
              <ul className="text-gray-700 text-base space-y-2 mb-4">
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Passion for innovation</li>
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Results-driven approach</li>
                <li className="flex items-center gap-2"><Icon icon="mdi:check" className="text-emerald-500" /> Lasting partnerships</li>
              </ul>
              <a href="/contact" className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold shadow hover:bg-blue-800 transition">Let's Work Together</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl shadow-2xl border border-blue-100 p-10 relative overflow-hidden">
          {/* Decorative SVG background */}
          <svg className="absolute right-0 top-0 w-72 h-72 opacity-20 pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="150" rx="120" ry="80" fill="#3b82f6" fillOpacity="0.10" />
            <ellipse cx="80" cy="220" rx="50" ry="25" fill="#2563eb" fillOpacity="0.08" />
            <ellipse cx="220" cy="80" rx="40" ry="18" fill="#60a5fa" fillOpacity="0.10" />
            <polygon points="200,60 202,65 207,66 203,69 204,74 200,71 196,74 197,69 193,66 198,65" fill="#fff" opacity="0.7" />
          </svg>
          <div className="flex-1 space-y-4 z-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Social Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 border border-blue-100">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:heart-outline" className="text-emerald-600 text-2xl" />
                  <span className="font-semibold">Community Projects</span>
                </div>
                <p className="text-gray-700">We support local education, health, and tech initiatives to give back and empower our communities.</p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 border border-blue-100">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:leaf" className="text-blue-600 text-2xl" />
                  <span className="font-semibold">Sustainability</span>
                </div>
                <p className="text-gray-700">We are committed to eco-friendly practices and sustainable business operations for a better future.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center z-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-blue-100">
              <Icon icon="mdi:emoticon-happy-outline" className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Join Our Mission</h3>
              <p className="text-gray-600 mb-4 text-center">Partner with us to make a positive impact in business and society.</p>
              <a href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold shadow hover:bg-emerald-700 transition">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-white via-blue-50 to-emerald-50 rounded-3xl shadow-2xl border border-blue-100 p-10 relative overflow-hidden">
          <svg className="absolute right-0 top-0 w-72 h-72 opacity-20 pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="150" rx="120" ry="80" fill="#3b82f6" fillOpacity="0.08" />
            <ellipse cx="220" cy="80" rx="40" ry="18" fill="#60a5fa" fillOpacity="0.08" />
            <polygon points="200,60 202,65 207,66 203,69 204,74 200,71 196,74 197,69 193,66 198,65" fill="#fff" opacity="0.5" />
          </svg>
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 z-10 relative">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10 relative">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition">
              <img src="/img/docel1.jpg" alt="Mark Dodzie" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h3 className="text-xl font-bold text-gray-900">Mark Dodzie</h3>
              <span className="text-blue-700 font-semibold mb-2">Founder & CEO</span>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition">
              <img src="/vite.svg" alt="Celestine Dodzie" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h3 className="text-xl font-bold text-gray-900">Celestine Dodzie</h3>
              <span className="text-blue-700 font-semibold mb-2">Co-Founder & CEO</span>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition">
              <img src="/img/docel1.jpg" alt="Jonathan Ashitey Okoe" className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h3 className="text-xl font-bold text-gray-900">Jonathan Ashitey Okoe</h3>
              <span className="text-blue-700 font-semibold mb-2">Operations Manager</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}