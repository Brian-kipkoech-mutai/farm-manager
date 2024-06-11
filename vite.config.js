 import path from "path";
 import react from "@vitejs/plugin-react";
 import { defineConfig } from "vite";
 import { VitePWA } from "vite-plugin-pwa";

 export default defineConfig({
   plugins: [
     react(),
     VitePWA({
       registerType: "autoUpdate",
       manifest: {
         name: "Farm manager",
         short_name: "Farm Manager",
         description: "A  farm tool to help  help ypu manage your employee !",
         theme_color: "#ffffff",
         icons: [
           {
             src: "/farm-manager-logo.jpg",
             sizes: "192x192",
             type: "image/png",
           },
           {
             src: "/farm-manager-logo.jpg",
             sizes: "512x512",
             type: "image/png",
           },
           {
             rel: "apple-touch-icon",
             sizes: "180x180",
             type: "image/png",
             src: "/farm-manager-logo.jpg",
           },
           {
             rel: "apple-touch-icon",
             sizes: "192x192",
             type: "image/png",
             src: "/farm-manager-logo.jpg",
           },
         ],
         start_url: ".",
         display: "standalone",
         background_color: "#ffffff",
       },
     }),
   ],
   resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
   },
   server: {
     watch: {
       usePolling: true,
     },
   },
 });
