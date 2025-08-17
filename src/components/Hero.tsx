import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1Mjc0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-black/20 rounded">
            Premium coffee
            <br />
            <span className="text-amber-400">by GT students</span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed bg-black/50 rounded">
            Discover the perfect blend of artisan coffee, cozy atmosphere, and
            exceptional (self-)service. From single-origin espresso to
            handcrafted specialty drinks. Feel like HOME!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <a href="#menu" className="w-full sm:w-auto">
                View Menu
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <a href="#contact" className="w-full sm:w-auto">
                Visit Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
