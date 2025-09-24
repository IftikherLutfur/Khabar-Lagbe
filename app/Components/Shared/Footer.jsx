const Footer = () => {
  return (
    <footer className="bg-white text-black py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Center Info */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1756801831/ChatGPT_Image_Sep_2_2025_02_29_35_PM_nlayqe.png" // Replace with your signature/logo
            alt="Logo"
            className="w-24"
          />
          <p className="max-w-xs text-gray-400 text-center mb-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <a href="#"><i className="fab fa-vimeo-v"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-2">Follow Me</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              "https://i.pinimg.com/1200x/f3/83/76/f38376539fc2581c756b70efdab73ec1.jpg",
              "https://i.pinimg.com/1200x/2a/76/1f/2a761f4512836be2bc6f40ad43b4514f.jpg",
              "https://i.pinimg.com/736x/7a/9c/c5/7a9cc59050a7645d79de7e1b6daeb6b7.jpg",
              "https://i.pinimg.com/736x/a2/92/27/a29227c339fbeffcd81c5d246f700818.jpg",
              "https://i.pinimg.com/736x/15/3f/68/153f687b05075210519731b39f3022a3.jpg",
              "https://i.pinimg.com/1200x/68/bf/37/68bf370d56037d6fb8dbdffc182d2580.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-20 object-cover rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-4 text-center md:text-left">
        <p className="">+8801966-984698</p>
        <p className="">hungryNaki@example.com</p>
        <p className="mb-0">Eighth Avenue 487, New York</p>
      </div>

      {/* Bottom copyright */}
      <div className="mt-2 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 HungryNaki? All Rights Reserved || Developed by{" "}
        <a href="https://my-portfolio-1a1bc.web.app/" className="text-pink-500 hover:underline">
          Abdullah
        </a>
      </div>
    </footer>
  );
};

export default Footer;
