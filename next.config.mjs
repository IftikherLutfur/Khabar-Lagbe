/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.pinimg.com","www.facebook.com", "scontent.fdac138-1.fna.fbcdn.net"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.ibb.co",
          },
        ], // Allow Pinterest images
      },

};

export default nextConfig;
