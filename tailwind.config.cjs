/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,cjs}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "float-up": "float-up .55s cubic-bezier(.38,0,.64,1) both",

        "slide-up": "slide-up .5s ease-out both",

        "slide-down": "slide-down .5s ease-out both",

        "saturate-in": "saturate-in 1.32s ease-in-out both",

        "scale-up": "scale-down .34s cubic-bezier(.38,0,.64,1) reverse both",

        "scale-down": "scale-down .5s cubic-bezier(.38,0,.64,1) both",

        "fade-in": "fade-in .67s cubic-bezier(.38,0,.64,1) both",

        "fade-out": "fade-in .5s cubic-bezier(.38,0,.64,1) reverse both",

        "fade-in-left": "fade-in-left .7s cubic-bezier(.38,0,.64,1) both",

        "fade-in-right": "fade-in-right .7s cubic-bezier(.38,0,.64,1) both",

        "fade-out-left":
          "fade-in-left .7s cubic-bezier(.38,0,.64,1) reverse both",

        "fade-out-right":
          "fade-in-right .7s cubic-bezier(.38,0,.64,1) reverse both",

        "fade-in-out": "fade-in-out 5s cubic-bezier(.38,0,.64,1) infinite both",

        "center-testimonial":
          "center-testimonial 5s cubic-bezier(.38,0,.64,1) infinite both",

        "far-right-testimonial":
          "far-right-testimonial 5s cubic-bezier(.38,0,.64,1) infinite both",

        "left-testimonial":
          "left-testimonial 5s cubic-bezier(.38,0,.64,1) infinite both",

        "right-testimonial":
          "right-testimonial 5s cubic-bezier(.38,0,.64,1) infinite both",
      },

      keyframes: {
        "float-up": {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-150%)" },
        },

        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(25%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-25%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        "saturate-in": {
          "0%, 20%": { filter: "saturate(20%)" },
          "100%": { filter: "saturate(100%)" },
        },

        "fall-down": {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(100vh)" },
        },

        "scale-down": {
          "0%": {
            opacity: 1,
            transform: "scale(100%)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(50%)",
          },
        },

        "fade-in": {
          "0%": { opacity: 0, visibility: "hidden" },
          "25%": { opacity: 0, visibility: "visible" },
          "100%": { opacity: 1, visibility: "visible" },
        },

        "fade-in-out": {
          "0%": { opacity: 0 },
          "5%, 80%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },

        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "67%": { opacity: 1 },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        "fade-in-right": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "67%": { opacity: 1 },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        "center-testimonial": {
          "0%, 80%": {
            filter: "blur(0)",
            transform: "scale(1) translate(0, 0)",
          },
          "95%": {
            filter: "blur(6px)",
          },
          "100%": {
            filter: "blur(6px)",
            transform: "scale(.65) translate(-17.6rem, 4.5rem)",
          },
        },

        "right-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translate(0, 0)",
          },
          "95%": {
            filter: "blur(0px)",
          },
          "100%": {
            filter: "blur(0)",
            transform: "scale(1.516) translate(-9.6rem, -1.95rem)",
          },
        },

        "left-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": { opacity: 0, transform: "translateX(-11.5rem)" },
        },

        "far-right-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 0,
            transform: "translateX(13.5rem)",
          },
          "100%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },

      transitionTimingFunction: {
        "custom-ease-in-out": "cubic-bezier(.38,0,.64,1)",
        "custom-ease-out": "cubic-bezier(0,.7,1,1)",
      },
    },
  },
  plugins: [],
};
