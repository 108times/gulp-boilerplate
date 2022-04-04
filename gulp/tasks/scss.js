import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () => {
  const ver = app.plugins.getVersion();

  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'SCSS',
          message: `Error: ${error.message}`,
        })),
      ),
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }),
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      }),
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true,
      }),
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename(
        (path) => {
          path.basename = 'style';
          path.extname = `.min.css`;
        }, //?_v=${ver}
      ),
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
