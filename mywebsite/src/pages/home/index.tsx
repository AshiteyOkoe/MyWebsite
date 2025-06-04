import { Card, CardBody, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SetStateAction, useEffect, useState, useRef } from "react";
import "animate.css";
import { send } from "@emailjs/browser";

// Intersection Observer hook for scroll animations
function useScrollAnimation(className = "animate__fadeInUp") {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let hasAnimated = false;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          node.classList.add("animate__animated", className, "animate__faster");
          hasAnimated = true;
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [className]);
  return ref;
}

// Animated StatCard component
function StatCard({ icon, label, value, suffix }: { icon: string; label: string; value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 1200 / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
      <Icon icon={icon} className="text-4xl text-blue-600 mb-2" />
      <span className="text-4xl font-extrabold text-gray-900">
        {count}
        {suffix}
      </span>
      <span className="text-lg text-gray-600 mt-1">{label}</span>
    </div>
  );
}


export default function HomePage() {
  const images = ["/img/docel1.jpg", "/img/docel2.jpeg", "/img/docel3.jpeg", "/img/docel4.jpeg", "/img/docel5.jpeg", "/img/docel6.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Function to set the current index when a button is clicked
  const goToImage = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  // Add scroll animation refs for cards
  const card1Ref = useScrollAnimation("animate__fadeInLeft");
  const card2Ref = useScrollAnimation("animate__fadeInUp");
  const card3Ref = useScrollAnimation("animate__fadeInRight");

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Logo with blurred background */}
      <div className="flex flex-col items-center mt-8 mb-4 relative w-full">
        <img
          src="/img/docellogo1.png"
          alt="Logo Blur Background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[320px] blur-2xl opacity-40 select-none pointer-events-none z-0"
          aria-hidden="true"
        />
        <a href="#" target="_parent" rel="noopener noreferrer" className="block z-10">
          <img src="/img/docellogo1.png" alt="Company Img" className="object-contain hover:scale-105 transition-transform duration-300 mx-auto mb-0 w-96 h-80 relative z-10" />
        </a>
      </div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">Welcome to Docel-Star</h1>
          <p className="text-2xl text-gray-600 max-w-2xl">
            We provide innovative solutions for your business needs. Discover how we can help you grow and succeed.
          </p>
          <div className="flex gap-4 justify-center md:justify-start text-xl py-4">
            <Button
              as={Link}
              href="/products"
              endContent={<Icon color="gray" icon="lucide:arrow-right" className="w-8 h-8"/>}
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-lg"
            >
              Explore Products
            </Button>
            <Button
              as={Link}
              href="/contact"
              endContent={<Icon icon="lucide:mail" />}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-700 text-blue-700 bg-white rounded-2xl shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <img
              src={images[currentIndex]}
              alt="Slideshow"
              className="object-cover w-full h-80 rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-4 h-2 rounded-full cursor-pointer transition-colors duration-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card ref={card1Ref} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-blue-100">
            <CardBody className="text-center space-y-4">
              <Icon icon="mdi:flash" className="text-4xl mx-auto text-blue-600 bg-blue-50 rounded-full p-2 shadow" />
              <h3 className="text-xl font-semibold">Fast Performance</h3>
              <p className="text-lg text-gray-500">
                Lightning-fast solutions that keep your business running efficiently.
              </p>
            </CardBody>
          </Card>
          <Card ref={card2Ref} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-blue-100">
            <CardBody className="text-center space-y-4">
              <Icon icon="mdi:shield-check" className="text-4xl mx-auto text-blue-600 bg-blue-50 rounded-full p-2 shadow" />
              <h3 className="text-xl font-semibold">Secure & Reliable</h3>
              <p className="text-lg text-gray-500">
                Your data is protected with enterprise-grade security measures.
              </p>
            </CardBody>
          </Card>
          <Card ref={card3Ref} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-blue-100">
            <CardBody className="text-center space-y-4">
              <Icon icon="mdi:headset" className="text-4xl mx-auto text-blue-600 bg-blue-50 rounded-full p-2 shadow" />
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-lg text-gray-500">
                Our dedicated team is always here to help you succeed. Get in touch with us anytime.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-8">
        <div className="space-y-4 order-2 md:order-1">
          <h2 className="text-2xl font-bold">About Docel-Star</h2>
          <p className="text-lg text-gray-600">
            We are committed to delivering the best solutions tailored to your business needs. Our team of experts is here to support you every step of the way. With years of experience and a passion for innovation, we help you achieve your goals efficiently and securely.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            alt="About Us"
            className="object-cover rounded-2xl w-full max-w-md h-72 shadow-xl border-4 border-white"
            src="/img/docel1.jpg"
          />
        </div>
      </section>
      
      {/* Testimonial/Client Logos Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {/* Example client logos - replace src with real client logos as needed */}
          <img src="/img/docellogo3.png" alt="Client 1" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/img/docellogo3.svg" alt="Client 2" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/img/docellogo1.png" alt="Client 3" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src="/img/docel1.jpg" alt="Client 4" className="h-16 w-auto object-cover rounded shadow grayscale hover:grayscale-0 transition duration-300" />
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-8 min-w-max px-2 py-4">
            {/* Example testimonials - replace with real testimonials as needed */}
            <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-xs mx-auto" ref={card1Ref}>
              <p className="text-gray-700 italic mb-2">“Docel-Star helped us scale our business with their innovative solutions. Highly recommended!”</p>
              <div className="flex items-center gap-2 mt-4">
                <Icon icon="mdi:user" className="text-blue-600" />
                <span className="font-semibold text-gray-900">Kwame A., CEO</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-xs mx-auto" ref={card2Ref}>
              <p className="text-gray-700 italic mb-2">“Professional, reliable, and always available. Their support is top-notch.”</p>
              <div className="flex items-center gap-2 mt-4">
                <Icon icon="mdi:user" className="text-blue-600" />
                <span className="font-semibold text-gray-900">Akosua B., Manager</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-xs mx-auto" ref={card3Ref}>
              <p className="text-gray-700 italic mb-2">“We trust Docel-Star for all our business needs. Their team is simply the best.”</p>
              <div className="flex items-center gap-2 mt-4">
                <Icon icon="mdi:user" className="text-blue-600" />
                <span className="font-semibold text-gray-900">Yaw M., Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Animated Stats/Highlights Section */}
      <section className="py-8 animate__animated animate__fadeInUp animate__faster">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
          <StatCard icon="mdi:award" label="Years Experience" value={5} suffix="+" />
          <StatCard icon="mdi:account-group-outline" label="Happy Clients" value={500} suffix="+" />
          <StatCard icon="mdi:briefcase-check-outline" label="Projects Delivered" value={120} suffix="+" />
          <StatCard icon="mdi:earth" label="Countries Served" value={3} suffix="" />
        </div>
      </section>
      {/* Services/Process Timeline Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative" ref={card2Ref}>
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 z-0 -translate-y-1/2"></div>
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 z-0 -translate-x-1/2"></div>
          {/* Timeline steps */}
          <div className="relative flex flex-col items-center text-center z-10 md:w-1/4 w-full mb-10 md:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4 shadow-lg border-4 border-blue-200">
              <Icon icon="mdi:magnify" className="text-3xl"/>
            </div>
            <h3 className="text-xl font-bold mb-2">Consultation</h3>
            <p className="text-gray-600 text-base">We listen to your needs and analyze your business goals.</p>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 md:-right-8">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
            <div className="block md:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="relative flex flex-col items-center text-center z-10 md:w-1/4 w-full mb-10 md:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4 shadow-lg border-4 border-blue-200">
              <Icon icon="mdi:lightbulb-on-outline" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Strategy</h3>
            <p className="text-gray-600 text-base">We craft a tailored solution and project roadmap.</p>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 md:-right-8">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
            <div className="block md:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="relative flex flex-col items-center text-center z-10 md:w-1/4 w-full mb-10 md:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4 shadow-lg border-4 border-blue-200">
              <Icon icon="mdi:rocket-launch-outline" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Implementation</h3>
            <p className="text-gray-600 text-base">Our team delivers and launches your solution efficiently.</p>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 md:-right-8">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
            <div className="block md:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <span className="inline-block w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="relative flex flex-col items-center text-center z-10 md:w-1/4 w-full mb-10 md:mb-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4 shadow-lg border-4 border-blue-200">
              <Icon icon="mdi:emoticon-happy-outline" className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-gray-600 text-base">We provide ongoing support and help you grow.</p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Stay Updated</h2>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}

// NewsletterSignup component
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // EmailJS credentials for docelstargh@gmail.com
      const SERVICE_ID = "service_id";
      const TEMPLATE_ID = "template_id";
      const PUBLIC_KEY = "public_key";
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 2500);
    } catch (error) {
      alert("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg transition"
          disabled={loading || success}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading || success}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {success && (
        <div className="flex items-center gap-2 animate__animated animate__fadeInDown animate__faster text-green-600 font-semibold mt-2">
          <Icon icon="mdi:check-circle-outline" className="text-2xl text-green-600" />
          Subscribed! Thank you.
        </div>
      )}
    </form>
  );
}