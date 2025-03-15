import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      scrollBar: {
        ".no-scrollbar": {
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
        },
      },
      colors: {
        soft: {
          black: "#1B1F1C",
          grey: "#e6e6e6",
          red: "#ffe1e1",
          yellow: "#fdffc2",
          blue: "#E4FCFF",
          pink: "#ffdaf0",
          purple: "#e0e1ff",
          orange: "#ffe7bb",
        },
        dark: {
          grey: "#767676",
          orange: "#df4e00",
        },
        hard: {
          green: "#10b510",
          purple: "#9900ff",
          bluePurple: "#2e03cd",
          grey: "#424242",
        },
        medium: {
          green: "#0acb00",
          blue: "#00b2ff",
          grey: "#999999",
        },
        light: {
          grey: "#f5f5f5",
          green: "#c3ffc3",
          yellow: "#fffeef",
        },
        main: {
          grey: "#cbcbcb",
          green: "#44f244",
          yellow: "#FFCC00",
          blue: "#0066ff",
          pink: "#ff00c8",
          bluePurple: "#c9d0ff",
          red: "#FF0000",
        },
        secondary: {
          blue: "#008CE2",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        green: {
          "0": "#C8FAE3",
          "1": "#EEFBF3",
          "2": "#D6F5E1",
          "3": "#AFEBC7",
          "4": "#7CD9A8",
          "5": "#46C185",
          "6": "#23A66B",
          "7": "#168B58",
          "8": "#116B46",
          "9": "#105539",
          "10": "#0E4630",
          "11": "#19734E",
          "12": "#1AD598",
          "13": "#15AA7A",
        },
        black: {
          "0": "#111111",
          "1": "#25272A",
          "2": "#050505",
          "3": "#33404A",
          "4": "#052B1E",
        },
        grey: {
          "0": "#667F93",
          "1": "#ACB3C7",
          "3": "#4D5F6E",
          "4": "#809FB8",
        },
        navShadow: "rgba(14, 255, 66, 0.33)",
        primaryBlack: "#212f3f",
        secondaryBlack: "#6c757d",
        primaryGray: "#303235",
        secondaryGray: "#f0f0f0",
        warningText: "#FF5656",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "foso-custom-gradient":
          "linear-gradient(0deg, #1AD598, #1AD598),radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        "blue-linear":
          "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
        "custom-gradient":
          "linear-gradient(to bottom, #00341D 10%, #0C9B5B, #29DA70)",
        "green-dark-to-light":
          "linear-gradient(to right,#00341D, #0C9B5B, #29DA70)",
        divider:
          "linear-gradient(0deg,hsla(210,4%,91%,0),#e6e7e8 31.5%,#e6e7e8 70%,hsla(210,4%,91%,0))",
        divide2: "linear-gradient(0deg, #fff, #dadada 50.45%, #fff)",
        breadcrump:
          "linear-gradient(270deg, #fff4f4 0%, rgba(255, 255, 255, 0.00) 100%)",
        breadcrump2:
          "linear-gradient(-270deg, #fff4f4 0%, rgba(255, 255, 255, 0.00) 100%)",
        buttonSearch:
          "linear-gradient(131deg, #75EABB 8.19%, #54DD9B 30%, #31BB79 73.63%, #168B58 95.44%)",
        borderGradient:
          "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
        langBox:
          "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
      },
      boxShadow: {
        normal: "0 1px 16px rgba(0,0,0,.06)",
        jobcard: "4px 4px 4px 0px #00000014",
        nav: "0px 4px 4px 0px #00000040 inset",
        navigation: "0px 4px 4px 0px #00000014",
        topNavigationBar: "0px 2px 4px 0px #00000014",
        jobCare: "0px 2px 4px 0px #0000001F",
        location: "0px 0px 8px 0px #00000014",
        searchJob: "0px 2px 4px 0px #00000014",
        appNavigation: "0px 4px 4px 0px #00000014",
        profileBar: "0px 4px 16px 0px #00000029",
        popup: "0px 4px 16px 0px rgba(0, 0, 0, 0.16)",
        navDetail: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        navButtonDetail: "0px -2px 4px 0px rgba(0, 0, 0, 0.08)",
        randomCompanyLogo: "0px 12px 24px -4px #919EAB29",
        "inset-light": "0px 2px 83.99px 0px #00000005 inset",
        "outer-soft": "-9px 20px 59.99px -24px #0000000D",
        "top-white": "1px -1px 0px 0px #FFFFFF",
        "bottom-gray": "-1px 1px 0px 0px #F0F0F0",
        reactionBox: "0px 1px 2px 0px #1212170F",
        reactionBoxPlus: "0px 1px 3px 0px #1212171A",
        glass:
          "0px 2px 83.99px 0px #00000005 inset, -9px 20px 59.99px -24px #0000000D, 1px -1px 0px 0px #FFFFFF, -1px 1px 0px 0px #F0F0F0",
      },
      backdropBlur: {
        "25": "24.997100830078125px",
      },
      lineClamp: {
        "8": "8",
      },
      height: {
        "1": "4px",
      },
      width: {
        "1": "4px",
      },
      scrollPaddingTop: {
        "100": "100px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
