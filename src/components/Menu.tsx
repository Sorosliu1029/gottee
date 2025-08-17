import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  isPopular?: boolean;
  isRemoved?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Espresso",
    description: "Rich, bold single shot of our signature blend",
    price: "N/A",
    category: "Espresso",
    isRemoved: true,
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: "N/A",
    category: "Milk Coffee",
    isPopular: true,
    isRemoved: true,
  },
  {
    name: "Latte",
    description: "Smooth espresso with steamed milk",
    price: "$3.00",
    category: "Milk Coffee",
    isPopular: true,
  },
  {
    name: "Flat White",
    description: "Double shot espresso with silky steamed milk",
    price: "$4.00",
    category: "Milk Coffee",
  },
  {
    name: "Americano",
    description: "Espresso shots with hot water for a clean, bold taste",
    price: "$2.00",
    category: "Black Coffee",
  },
  {
    name: "AeroPress Americano",
    description: "Espresso-style shots with AeroPress® for a flavorful, lighter taste",
    price: "$2.00",
    category: "Black Coffee",
  },
  {
    name: "Caramel Macchiato",
    description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
    price: "N/A",
    category: "Milk Coffee",
    isPopular: true,
    isRemoved: true,
  },
  {
    name: "Mocha",
    description:
      "Rich chocolate and espresso with steamed milk and whipped cream",
    price: "N/A",
    category: "Milk Coffee",
    isRemoved: true,
  },
  {
    name: "Cold Brew",
    description: "Smooth, naturally sweet coffee brewed cold for 24 hours",
    price: "N/A",
    category: "Black Coffee",
    isRemoved: true,
  },
  {
    name: "Iced Latte",
    description: "Chilled espresso with cold milk over ice",
    price: "$4.75",
    category: "Milk Coffee",
    isRemoved: true,
  },
  {
    name: "Coffee Making",
    description: "Learn the art of brewing coffee with the host",
    price: "FREE",
    category: "Teaching",
  },
  {
    name: "CS Related",
    description: "Consult Computer Science topics/problems with the host",
    price: "$20/h",
    category: "Teaching",
  },
];

export function Menu() {
  const categories = ["Milk Coffee", "Black Coffee", "Teaching"];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with the finest beans and attention to detail, our menu
            offers something for every coffee lover.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => item.category === category)
                .filter((item) => !item.isRemoved)
                .map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        {item.isPopular && (
                          <Badge className="bg-amber-600 text-white">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-800">
                          {item.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
