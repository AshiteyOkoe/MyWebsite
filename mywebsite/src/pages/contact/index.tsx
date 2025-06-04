import React from "react";
import { Card, CardBody, Input, Textarea, Button,} from "@heroui/react";
import { Icon } from "@iconify/react";
import { send } from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Replace these with your actual EmailJS service/template/public key
      const SERVICE_ID = "your_service_id";
      const TEMPLATE_ID = "your_template_id";
      const PUBLIC_KEY = "your_public_key";
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 2500);
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
  
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-default-600 max-w-2xl mx-auto">
          Get in touch with us. We're here to help and answer any questions you
          might have on our product.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardBody className="space-y-6 w-auto shadow-2xl rounded-2xl bg-white h-full p-4">
            {/* Address */}
            <div className="flex items-center gap-4 group">
              <span className="bg-blue-100 rounded-full p-2">
                <Icon icon="mdi:map-marker" className="text-2xl text-blue-600" />
              </span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-default-500 text-gray-400">
                  Greater Accra, Tema<br />Community 25, Ghana.
                </p>
                <p className="text-default-500 text-gray-400 mt-1">
                  Western Region, Tarkwa<br />ICGC street, Ghana.
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <span className="bg-green-100 rounded-full p-2">
                <Icon icon="mdi:phone" className="text-2xl text-green-600" />
              </span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+233 (050) 883-7777" className="text-default-500 text-gray-400 hover:text-green-700 transition font-medium">+233 (050) 883-7777</a>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <span className="bg-amber-100 rounded-full p-2">
                <Icon icon="mdi:email" className="text-2xl text-amber-600" />
              </span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:docelstargh@gmail.com" className="text-default-500 text-gray-400 hover:text-amber-700 transition font-medium">docelstargh@gmail.com</a>
              </div>
            </div>
            {/* Business Hours */}
            <div className="flex items-center gap-4 group">
              <span className="bg-purple-100 rounded-full p-2">
                <Icon icon="mdi:clock-outline" className="text-2xl text-purple-600" />
              </span>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <div className="text-default-500 text-gray-400">
                  <div className="flex justify-between w-48">
                    <span>Mon - Fri :</span>
                    <span>8:00am - 6:00pm</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Saturday :</span>
                    <span>9:00am - 2:00pm</span>
                  </div>
                  <div className="flex justify-between w-48">
                    <span>Sunday :</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Post Office Box */}
            <div className="flex items-center gap-4 group">
              <span className="bg-pink-100 rounded-full p-2">
                <Icon icon="mdi:mailbox" className="text-2xl text-pink-600" />
              </span>
              <div>
                <h3 className="font-semibold">Post Office Box</h3>
                <p className="text-default-500 text-gray-400">
                  P.O. BOX Co 645,<br />Tema - Greater Accra,<br />Ghana.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8">
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name</label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg transition"
                  isRequired
                />
              </div>
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg transition"
                  isRequired
                />
              </div>
              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-gray-700 font-semibold mb-1">Subject</label>
                <Input
                  id="subject"
                  placeholder="Enter subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg transition"
                  isRequired
                />
              </div>
              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-700 font-semibold mb-1">Message</label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg transition min-h-[120px]"
                  isRequired
                />
              </div>
              {/* Submit Button */}
              <Button type="submit" disabled={loading || success} className="flex items-center justify-center w-full gap-2 p-3 bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed">
                <Icon icon="mdi:send" className="text-2xl" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && (
                <div className="flex flex-col items-center gap-2 animate__animated animate__fadeInDown animate__faster mt-4">
                  <Icon icon="mdi:check-circle" className="text-4xl text-green-500 animate__animated animate__bounceIn" />
                  <span className="text-green-700 font-semibold text-lg">Message sent! We'll get back to you soon.</span>
                </div>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
      {/* Embedded Google Map Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center mb-4">Find Us Here</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              title="Docel-Star Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.669964234956!2d-0.01655368467607344!3d5.712713495832342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1e2e2e2e2e%3A0x123456789abcdef!2sCommunity%2025%2C%20Tema%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1685790000000!5m2!1sen!2sgh"
              width="100%"
              height="350"
              className="border-0 w-full h-[350px]"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-center mt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Community+25%2C+Tema%2C+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition mt-2"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Contact Person Cards Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example team member 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-72 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <img src="/img/docellogo1.png" alt="John Doe" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Icon icon="mdi:account-tie" className="text-blue-600 text-xl" /> John Doe
            </h3>
            <span className="text-blue-700 font-semibold mb-2">Customer Support Lead</span>
            <div className="flex gap-3 mt-2">
              <a href="mailto:johndoe@docelstar.com" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition" title="Email John">
                <Icon icon="mdi:email" className="text-xl" />
              </a>
              <a href="tel:+233501234567" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition" title="Call John">
                <Icon icon="mdi:phone" className="text-xl" />
              </a>
            </div>
          </div>
          {/* Example team member 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-72 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <img src="/img/docel1.jpg" alt="Akosua Mensah" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Icon icon="mdi:account-tie-woman" className="text-blue-600 text-xl" /> Akosua Mensah
            </h3>
            <span className="text-blue-700 font-semibold mb-2">Sales Manager</span>
            <div className="flex gap-3 mt-2">
              <a href="mailto:akosua@docelstar.com" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition" title="Email Akosua">
                <Icon icon="mdi:email" className="text-xl" />
              </a>
              <a href="tel:+233509876543" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition" title="Call Akosua">
                <Icon icon="mdi:phone" className="text-xl" />
              </a>
            </div>
          </div>
          {/* Example team member 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-72 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <img src="/img/docellogo3.png" alt="Yaw Boateng" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Icon icon="mdi:account" className="text-blue-600 text-xl" /> Yaw Boateng
            </h3>
            <span className="text-blue-700 font-semibold mb-2">Technical Lead</span>
            <div className="flex gap-3 mt-2">
              <a href="mailto:yaw@docelstar.com" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition" title="Email Yaw">
                <Icon icon="mdi:email" className="text-xl" />
              </a>
              <a href="tel:+233507654321" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition" title="Call Yaw">
                <Icon icon="mdi:phone" className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}