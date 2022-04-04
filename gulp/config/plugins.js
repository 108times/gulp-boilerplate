import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import fs from 'fs';

export const plugins = {
  replace,
  notify,
  browserSync,
  plumber,
  newer,
  getVersion: () => JSON.parse(fs.readFileSync(app.path.version)).main,
};
