import { Icon } from "@iconify/react";

const products = [
	{
		name: "Classic Navy Blazer",
		description: "Tailored fit, wool blend, perfect for formal occasions.",
		price: "₵120",
		image: "/img/docel1.jpg",
	},
	{
		name: "Summer Floral Dress",
		description: "Lightweight, breathable fabric, vibrant floral print.",
		price: "₵75",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Slim Fit Chinos",
		description: "Stretch cotton, modern cut, available in 5 colors.",
		price: "₵60",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Denim Jacket",
		description: "Classic blue, button front, two chest pockets.",
		price: "₵85",
		image: "/img/docel4.jpeg",
	},
	{
		name: "White Oxford Shirt",
		description: "100% cotton, wrinkle-resistant, timeless style.",
		price: "₵45",
		image: "/img/docel5.jpeg",
	},
	{
		name: "Black Leather Boots",
		description: "Genuine leather, slip-resistant sole, ankle height.",
		price: "₵110",
		image: "/img/docel6.jpg",
	},
	{
		name: "Striped Polo T-Shirt",
		description: "Soft jersey, regular fit, contrast collar.",
		price: "₵35",
		image: "/img/docel1.jpg",
	},
	{
		name: "Pleated Midi Skirt",
		description: "Chiffon, elastic waistband, elegant drape.",
		price: "₵55",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Wool Blend Overcoat",
		description: "Double-breasted, knee length, warm and stylish.",
		price: "₵150",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Casual Sneakers",
		description: "Lightweight, cushioned insole, lace-up design.",
		price: "₵65",
		image: "/img/docel4.jpeg",
	},
	{
		name: "Silk Scarf",
		description: "Hand-rolled edges, vibrant print, 100% silk.",
		price: "₵40",
		image: "/img/docel5.jpeg",
	},
	{
		name: "High-Waisted Jeans",
		description: "Stretch denim, skinny fit, faded wash.",
		price: "₵50",
		image: "/img/docel6.jpg",
	},
	{
		name: "Linen Button-Up Shirt",
		description: "Breathable, relaxed fit, perfect for summer.",
		price: "₵48",
		image: "/img/docel1.jpg",
	},
	{
		name: "Faux Fur Coat",
		description: "Plush texture, open front, cozy winter wear.",
		price: "₵130",
		image: "/img/docel2.jpeg",
	},
	{
		name: "Athletic Joggers",
		description: "Moisture-wicking, tapered leg, zip pockets.",
		price: "₵42",
		image: "/img/docel3.jpeg",
	},
	{
		name: "Embroidered Kurta",
		description: "Traditional design, cotton blend, side slits.",
		price: "₵55",
		image: "/img/docel4.jpeg",
	},
	{
		name: "Double-Breasted Suit",
		description: "Slim fit, peak lapel, matching trousers.",
		price: "₵220",
		image: "/img/docel5.jpeg",
	},
	{
		name: "Printed Maxi Dress",
		description: "Boho style, adjustable straps, side pockets.",
		price: "₵80",
		image: "/img/docel6.jpg",
	},
	{
		name: "Cable Knit Sweater",
		description: "Chunky yarn, crew neck, ribbed cuffs.",
		price: "₵60",
		image: "/img/docel1.jpg",
	},
	{
		name: "Classic Fedora Hat",
		description: "Wool felt, wide brim, grosgrain ribbon.",
		price: "₵38",
		image: "/img/docel2.jpeg",
	},
];

export default function Category2() {
	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-blue-900">
				<Icon
					icon="mdi:hanger"
					className="text-emerald-600 text-4xl"
					aria-label="Fashion Icon"
				/>
				Fashion Wear
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.map((product, idx) => (
					<div
						key={idx}
						className="bg-white/90 border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300 flex flex-col group focus-within:ring-2 focus-within:ring-emerald-400"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
						<div className="p-4 flex-1 flex flex-col">
							<h2 className="text-lg font-semibold mb-2 text-emerald-700 flex items-center gap-2">
								<Icon
									icon="mdi:tshirt-crew"
									className="text-emerald-400 text-xl"
									aria-label="Product Icon"
								/>
								{product.name}
							</h2>
							<p className="text-gray-600 text-sm mb-4 flex-1">
								{product.description}
							</p>
							<div className="flex items-center justify-between mt-auto">
								<div className="text-xl font-bold text-amber-600">
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
