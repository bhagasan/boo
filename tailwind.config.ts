import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        center: '0 0 25px rgba(255,255,255,0.2)',
      },
      fontFamily: {
        buda: ['Buda', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
