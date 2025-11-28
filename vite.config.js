import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EcoMate/", // <--- TAMBAHKAN INI (Ganti EcoMate dengan nama repo Anda persis)
});
