
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";

const products = [
  {
    id: 1,
    name: "Product One",
    description: "Advanced features for growing businesses",
    price: "$99",
  },
  {
    id: 2,
    name: "Product Two",
    description: "Essential tools for small teams",
    price: "$49",
  },
  {
    id: 3,
    name: "Product Three",
    description: "Premium solutions for enterprises",
    price: "$199",
  },
  {
    id: 4,
    name: "Product Four",
    description: "Starter pack for beginners",
    price: "$29",
  },
  {
    id: 5,
    name: "Product Five",
    description: "Professional grade tools",
    price: "$149",
  },
  {
    id: 6,
    name: "Product Six",
    description: "Complete business suite",
    price: "$299",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-large text-default-600 max-w-2xl mx-auto">
          Discover our range of products designed to help your business grow.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="space-y-2 rounded-2xl bg-white shadow-2xl">
            <CardBody className="p-0">
              <Image
                alt={product.name}
                className="w-full h-48 object-cover"
                src={`https://img.heroui.chat/image/product?w=400&h=300&u=product-${product.id}`}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-default-500">{product.description}</p>
                <p className="text-large font-semibold">{product.price}</p>
              </div>
            </CardBody>
            <CardFooter>
              <Button className="bg-blue-500 text-amber-50 p-2 rounded-xl w-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}