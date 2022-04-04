// Имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css`,
    images: `${buildFolder}/images`,
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/style.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.{pug, html}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp, svg, ico}`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  version: nodePath.resolve('gulp/version.json'),
  ftp: ``,
};
