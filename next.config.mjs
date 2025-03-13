/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["firebasestorage.googleapis.com"], // Permite imágenes de Firebase Storage
      },
};

export default nextConfig;
