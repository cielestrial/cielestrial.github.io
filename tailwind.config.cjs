/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,cjs}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "slide-up": "slide-up 1.5s ease both",

        "slide-down": "slide-down 1s ease-out both",

        "saturate-in": "saturate-in 1.25s ease-in-out both",

        "scale-up": "scale-up 0.5s cubic-bezier(.38,0,.64,1) both",

        "scale-down": "scale-down 0.5s cubic-bezier(.38,0,.64,1) both",

        "fade-in": "fade-in 0.5s cubic-bezier(.38,0,.64,1) both",

        "fade-out": "fade-in 0.5s cubic-bezier(.38,0,.64,1) reverse both",

        "fade-in-left": "fade-in-left 1.5s cubic-bezier(.38,0,.64,1) both",

        "fade-in-right": "fade-in-right 1.5s cubic-bezier(.38,0,.64,1) both",

        "fade-out-left":
          "fade-in-left 1.5s cubic-bezier(.38,0,.64,1) reverse both",

        "fade-out-right":
          "fade-in-right 1.5s cubic-bezier(.38,0,.64,1) reverse both",

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
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "50%": { opacity: 0, transform: "translateY(50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "50%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        "saturate-in": {
          "0%, 20%": { filter: "saturate(20%)" },
          "100%": { filter: "saturate(100%)" },
        },

        fall: {
          "0%": { transform: "translateY(-15%)" },
          "100%": { transform: "translateY(115%)" },
        },

        "scale-up": {
          "0%": {
            position: "absolute",
            "z-index": 20,
            "border-style": "none",
            transform: "scale(1) translateY(0)",
          },
          "100%": {
            position: "absolute",
            "z-index": 20,
            "border-style": "none",
            transform: "scale(3.33) translateY(-17.5%)",
          },
        },

        "scale-down": {
          "0%": {
            transform: "scale(1) translateY(0)",
          },
          "100%": {
            transform: "scale(0.33) translateY(35%)",
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
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        "fade-in-right": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        "center-testimonial": {
          "0%, 80%": {
            filter: "blur(0)",
            transform: "scale(1) translate(0, 0)",
          },
          "100%": {
            filter: "blur(6px)",
            transform: "scale(.67) translate(-261%, 75%)",
          },
        },

        "far-right-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 0,
            transform: "translateX(150%)",
          },
          "100%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translateX(-105%)",
          },
        },

        "left-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": { opacity: 0, transform: "translateX(-250%)" },
        },

        "right-testimonial": {
          "0%, 80%": {
            filter: "blur(4px)",
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            filter: "blur(0)",
            transform: "scale(1.515) translate(-167%, -50%)",
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
