export default {
  server: {
    proxy: {
      "/api": {
        target: "https://movies-api.accel.li",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};