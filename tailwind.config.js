/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    colors:{
      "eerine":{"50":"#E5EBEB","100":"#CBD7D7","200":"#98AFAF","300":"#668484","400":"#415353","500":"#181F1F","600":"#141A1A","700":"#0D1111","800":"#090B0B","900":"#040606","950":"#020303"},
      "figma":{"50":"#E5E8EB","100":"#CBD2D7","200":"#98A5AF","300":"#667784","400":"#414B53","500":"#181C1F","600":"#14171A","700":"#0D1011","800":"#090A0B","900":"#040506","950":"#020303"},
    }
  },

  daisyui: {
    themes: ["black"],
  },
  plugins: [require("daisyui")],
  
}
