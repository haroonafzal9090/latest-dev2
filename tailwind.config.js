module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Default Tailwind screens
      'xs': '480px',   // Extra small screens
      'xxs': '375px',
      'xsm':'520px',  // Extra extra small screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'lg2': '990px',
      '2xl': '1440px',
      '3xl':'1520px', // 2xl screens
    },
    extend: {
      spacing: {
        // Define custom spacing values if needed
      },
    },
  },
  plugins: [],
};