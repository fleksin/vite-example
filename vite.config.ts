import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    // rollupOptions: {
    //   input: './src/main.tsx', // 入口文件
    //   output: {
    //     dir: 'dist', // 打包后输出的目录
    //     entryFileNames: 'bundle.js', // 合并成一个名为 bundle.js 的文件
    //     format: 'iife', // 使用 iife 格式，适用于浏览器环境
    //   },

    // },
    minify: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser global
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  resolve: {
    alias: {
      buffer: 'buffer/',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    }
  },
  define: {
    global: 'globalThis',  // 使得 global 在浏览器中可用
  },

})
