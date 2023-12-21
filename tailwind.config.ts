import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1274px",
      },
      width: {
        custom: "90%",
      },
      fontFamily: {
        sans: ['"Nunito"', "sans-serif"],
      },
      colors: {
        text_dark_1: "rgb(5, 5, 5)",
        text_grey_1: "#A1A1A8",
        text_grey_2:"#E0E1E4",

        text_blue_1: "#0a85d1",
        text_dark_2: "rgb(18, 18, 18)",
        custom_1: "#171818",

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
