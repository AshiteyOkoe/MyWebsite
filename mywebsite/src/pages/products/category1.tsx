import { Icon } from "@iconify/react";

const products = [
	{
		name: "Apple iPhone 15 Pro Max",
		description:
			"6.7-inch display, A17 Pro chip, 256GB, Triple Camera, 5G.",
		price: "₵1,299",
		image: "/img/docel1.jpg",
	},
	{
		name: "Samsung Galaxy S24 Ultra",
		description:
			"6.8-inch QHD+ AMOLED, Snapdragon 8 Gen 3, 512GB, 200MP Camera.",
		price: "₵1,199",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Sony WH-1000XM5 Headphones",
		description:
			"Industry-leading noise cancellation, 30hr battery, Bluetooth 5.2.",
		price: "₵399",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Apple MacBook Pro 16”",
		description:
			"M3 Pro chip, 16GB RAM, 1TB SSD, Liquid Retina XDR display.",
		price: "₵2,499",
		image: "/img/docel4.jpeg",
	},
	{
		name: "Samsung 65” QLED 8K TV",
		description:
			"Quantum HDR, 8K AI Upscaling, Smart TV, 120Hz refresh.",
		price: "₵3,499",
		image: "/img/docel5.jpeg",
	},
	{
		name: "Apple iPad Pro 12.9”",
		description:
			"M4 chip, 512GB, Liquid Retina XDR, Wi-Fi + Cellular.",
		price: "₵1,399",
		image: "/img/docel6.jpg",
	},
	{
		name: "DJI Mini 4 Pro Drone",
		description:
			"4K camera, 34min flight, 3-axis gimbal, obstacle sensing.",
		price: "₵899",
		image: "/img/docel1.jpg",
	},
	{
		name: "Canon EOS R8 Mirrorless Camera",
		description:
			"24.2MP, 4K60p video, Dual Pixel AF, Wi-Fi, Touchscreen.",
		price: "₵1,499",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Apple Watch Ultra 2",
		description:
			"49mm, Titanium, GPS + Cellular, 36hr battery, WR100 water resistance.",
		price: "₵799",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Bose SoundLink Revolve+ II",
		description:
			"Portable Bluetooth speaker, 17hr playtime, 360° sound.",
		price: "₵329",
		image: "/img/docel4.jpeg",
	},
	{
		name: "Microsoft Surface Laptop 6",
		description:
			"13.5” PixelSense, Intel Core Ultra 7, 16GB RAM, 512GB SSD.",
		price: "₵1,599",
		image: "/img/docel5.jpeg",
	},
	{
		name: "GoPro HERO12 Black",
		description:
			"5.3K60 Ultra HD, HyperSmooth 6.0, Waterproof, Wi-Fi.",
		price: "₵499",
		image: "/img/docel6.jpg",
	},
	{
		name: "Kindle Scribe 10.2”",
		description:
			"300ppi, 64GB, Pen included, Adjustable warm light.",
		price: "₵369",
		image: "/img/docel1.jpg",
	},
	{
		name: "JBL Charge 5 Speaker",
		description:
			"Waterproof, 20hr battery, Bluetooth 5.1, Powerbank feature.",
		price: "₵179",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Apple AirPods Pro (2nd Gen)",
		description:
			"Active Noise Cancellation, MagSafe, 6hr battery, H2 chip.",
		price: "₵249",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Samsung Galaxy Tab S9 Ultra",
		description:
			"14.6” AMOLED, Snapdragon 8 Gen 2, 512GB, S Pen included.",
		price: "₵1,199",
		image: "/img/docel4.jpeg",
	},
	{
		name: "Logitech MX Master 3S Mouse",
		description:
			"Ergonomic, 8K DPI, Quiet Clicks, USB-C, Bluetooth.",
		price: "₵129",
		image: "/img/docel5.jpeg",
	},
	{
		name: "Anker 737 Power Bank",
		description:
			"24,000mAh, 140W USB-C, Fast Charging, LCD Display.",
		price: "₵159",
		image: "/img/docel6.jpg",
	},
	{
		name: "Sony PlayStation 5 Console",
		description:
			"Ultra HD Blu-ray, 1TB SSD, DualSense, 4K HDR gaming.",
		price: "₵599",
		image: "/img/docel1.jpg",
	},
	{
		name: "Apple HomePod (2nd Gen)",
		description:
			"Smart speaker, Siri, Room sensing, Spatial audio, Wi-Fi 4.",
		price: "₵299",
		image: "/img/docel2.jpeg",
	},
];

export default function Category1() {
	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-4xl font-extrabold text-blue-900 mb-10 text-center flex items-center justify-center gap-2">
				<Icon icon="lucide:cpu" className="text-blue-700 text-3xl" />
				Electronic Gadgets
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.map((product, idx) => (
					<div
						key={idx}
						className="bg-white rounded-2xl shadow-xl hover:shadow-blue-200 transition-all duration-200 flex flex-col group border border-blue-100"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
						<div className="p-5 flex-1 flex flex-col">
							<h2 className="text-lg font-bold mb-2 text-blue-800 flex items-center gap-2">
								<Icon
									icon="lucide:tag"
									className="text-emerald-600 text-lg"
								/>
								{product.name}
							</h2>
							<p className="text-gray-500 text-base mb-4 flex-1 min-h-[48px]">
								{product.description}
							</p>
							<div className="flex items-center justify-between mt-auto">
								<div className="text-xl font-bold text-amber-600 flex items-center gap-1">
									<Icon
										icon="lucide:dom"
										className="text-amber-500 text-lg"
									/>
									{product.price}
								</div>
								<a
									href={`https://wa.me/233548544775?text=I'm%20interested%20in%20buying%20the%20${encodeURIComponent(
										product.name
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="ml-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-full shadow flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
									aria-label={`Buy ${product.name} on WhatsApp`}
								>
									<Icon
										icon="lucide:shopping-cart"
										className="text-white text-base"
									/>
									BUY ME
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
