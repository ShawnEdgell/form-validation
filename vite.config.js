import { defineConfig } from 'vite';
import ViteSvg from 'vite-plugin-svgr';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [ViteSvg(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          ["@babel/plugin-proposal-decorators", { "legacy": true }]
        ]
      }
    })
  ],
  base: '/form-validation/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext', 
    outDir: 'dist', 
    minify: 'terser',
    sourcemap: true
  },
  server: {
    port: 3000, 
    open: true,   
    strictPort: false, 
    cors: true,   
    https: false,  
    proxy: { 
    }
  },
  
});

