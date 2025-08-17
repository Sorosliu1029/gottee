import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Espresso",
    description: "Rich, bold single shot of our signature blend",
    price: "$3.50",
    category: "Espresso",
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: "$4.25",
    category: "Espresso",
    isPopular: true,
  },
  {
    name: "Flat White",
    description: "Double shot espresso with silky steamed milk",
    price: "$4.75",
    category: "Espresso",
  },
  {
    name: "Americano",
    description: "Espresso shots with hot water for a clean, bold taste",
    price: "$3.75",
    category: "Espresso",
  },
  {
    name: "Caramel Macchiato",
    description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
    price: "$5.50",
    category: "Specialty",
    isPopular: true,
  },
  {
    name: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and vanilla syrup",
    price: "$4.95",
    category: "Specialty",
  },
  {
    name: "Mocha",
    description: "Rich chocolate and espresso with steamed milk and whipped cream",
    price: "$5.25",
    category: "Specialty",
  },
  {
    name: "Cold Brew",
    description: "Smooth, naturally sweet coffee brewed cold for 24 hours",
    price: "$4.50",
    category: "Cold Coffee",
  },
  {
    name: "Iced Latte",
    description: "Chilled espresso with cold milk over ice",
    price: "$4.75",
    category: "Cold Coffee",
  },
  {
    name: "Frappé",
    description: "Blended ice coffee with your choice of flavor",
    price: "$5.75",
    category: "Cold Coffee",
  },
];

export function Menu() {
  const categories = ["Espresso", "Specialty", "Cold Coffee"];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with the finest beans and attention to detail, our menu offers something for every coffee lover.
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
                .map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        {item.isPopular && (
                          <Badge className="bg-amber-600 text-white">Popular</Badge>
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