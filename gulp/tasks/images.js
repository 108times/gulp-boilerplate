import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () =>
  app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'IMAGES',
          message: `Error: ${error.message}`,
        })),
      ),
    )
    // webp
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    // imagemin
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationLevel: 3, // 0..7
      }),
    )
    .pipe(app.gulp.dest(app.path.build.images))
    // svg
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
