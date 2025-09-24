/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "i.pinimg.com",
      "www.facebook.com",
      "scontent.fdac138-1.fna.fbcdn.net",
      "lh3.googleusercontent.com", // Add this line
      'st5.depositphotos.com',
      'res.cloudinary.com',
      'upload.wikimedia.org',
      'cdn.prod.website-files.com',
      'encrypted-tbn0.gstatic.com'
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // ✅ correct host for i.ibb.co
      },
    ],
  },
};

export default nextConfig;
