import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      // },
      colors: {
        default: 'var(--default)',
        'gray-1': 'var(--gray-1)',
        'gray-2': 'var(--gray-2)',
        'gray-3': 'var(--gray-3)',
        'gray-3-op': 'var(--gray-3-op)',
        'gray-4': 'var(--gray-4)',
        fail: 'var(--fail)',
        'fail-2': 'var(--fail-2)',
        main: 'var(--main)',
        'sub-1': 'var(--sub-1)',
        'sub-2': 'var(--sub-2)',
        'sub-3': 'var(--sub-3)'
      },
      fontWeight: {
        medium: '500px'
      }
    }
  },
  plugins: []
};
export default config;
