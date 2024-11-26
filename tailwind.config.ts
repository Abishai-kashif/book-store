import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				"black-100": "#424242",
				teal: "#48CFCB",
				"teal-dark": "#229799",
				white: "#F5F5F5",
			},
		},
	},
	plugins: [],
} satisfies Config;
