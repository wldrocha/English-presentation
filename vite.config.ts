import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginImp from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      // Desactiva los plugins que no necesitas
      gifsicle: false,
      optipng: false,
      mozjpeg: false,
      pngquant: false,
      svgo: false,
      // Activa y configura el plugin webp
      webp: {
        quality: 75
      }
    })
  ],
  base: 'https://wldrocha.github.io/english-presentation/'
})
