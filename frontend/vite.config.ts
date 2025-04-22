import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.JPG'], // Include both lowercase and uppercase .jpg files
  resolve: {
    alias: {
      $src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'), // Map $src to the src directory
    },
  },
});