export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.dest.html}`,
    },
    notify: false,
    port: 3000,
  });
};
