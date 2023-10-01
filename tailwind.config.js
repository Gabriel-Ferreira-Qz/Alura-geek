/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'azul': '#2A7AE4',
        'azulClaro': '#EAF2FD',
        'branco': '#FFFFFF',  
        'brancoFumaca': '#F5F5F5',
        'preto': '#464646',
        'cinza': '#A2A2A2'
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '20px': '20px'
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      padding: {
        '70px': '4.375rem',
        '47px': '2.938rem',
      },

      backgroundImage: {
        'hero-pattern': "url('../../public/BannerMobile.svg')",
      },

      fontSize: {
        '22px': '1.375rem',
        '32px': '2rem',
        '52px': '3.25rem'
      },

      spacing: {
        'top24%': '24%',
        'right3%': '3%'
      },

      width: {
        '17px': '17px',
        '176px': '176px'
      },

      height: {
        '17px': '17px',
        '50vh': '50vh'
      },

      gridTemplateColumns: {
        '0.5fr': '0.5fr 1fr'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}