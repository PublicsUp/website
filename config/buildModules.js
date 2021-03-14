import dotenv from "./modules/dotenv"
import colorMode from "./modules/colorMode"
import tailwindcss from "./modules/tailwindcss"
import googleAnalytics from "./modules/googleAnalytics"

export default [
  /*
    Will use this once it's stable
  */
  /* "nuxt-windicss", */
  "@nuxtjs/svg",
  "@nuxtjs/moment",
  ["@nuxtjs/dotenv", dotenv],
  ["@nuxtjs/color-mode", colorMode],
  ["@nuxtjs/tailwindcss", tailwindcss],
  ["@nuxtjs/google-analytics", googleAnalytics],
]
