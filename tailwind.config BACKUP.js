/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	container: {
  		center: true,
  		padding: '24px'
  	},
  	extend: {
  		fontFamily: {
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primaryIconColor: '#0f766e',
  			secondaryIconColor: '#0d9488',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			bgPrimary: '#fff',
  			bgSecondary: '#fbfbfb',
  			bgThird: '#a9c3b619',
  			darkPrimaryIconColor: '#e2e8f0',
  			darkPrimary: '#cbd5e1',
  			darkSecondary: '#94a3b8',
  			bgDarkPrimary: '#0f172a',
  			bgDarkSecondary: 'rgba(15,23,42,0.99)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		dropShadow: {
  			mdCustom: '0 2px 2px #dbeafe'
  		},
  		boxShadow: {
  			lg: [
  				'0 9px 15px -3px #e2e8f0',
  				'0 4px 6px -4px #e2e8f0'
  			],
  			portfolioImg: '7px 8px 4px 0px rgb(0 0 0 / 0.2)'
  		},
  		letterSpacing: {
  			titleSpacing: '6px'
  		},
  		screens: {
  			'2xl': '1320px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}