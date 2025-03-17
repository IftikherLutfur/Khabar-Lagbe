export default function HomeComponent() {
  return (
    <div
      className="relative h-[650px] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/ac/14/58/ac1458a21d856abc958485d2d414dd50.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase">
          HungryNaki Restaurant
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
        Welcome to our world of food! Experience a unique journey of fresh, delicious, and high-quality meals that will delight your taste buds and elevate your dining pleasure
        </p>
      </div>
    </div>
  );
}
