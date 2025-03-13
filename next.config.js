/** @type {import('next').NextConfig} */
//const nextConfig = {
  //output: 'export',
  //eslint: {
    //ignoreDuringBuilds: true,
  //},
  //images: { unoptimized: true },
  //transpilePackages: ['three'],
//};

//module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint durante el build
  },
  images: { 
    unoptimized: true // Desactiva la optimización de imágenes, útil con next export
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript en tiempo de build
  },
  transpilePackages: ['three'],
};

module.exports = nextConfig;
