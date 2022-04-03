// Имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
  dest: {
    assets: `${buildFolder}/assets/`,
    html: `${buildFolder}/`,
  },
  src: {
    assets: `${srcFolder}/assets/**/*.*`,
    html: `${srcFolder}/*.pug`,
  },
  watch: {
    assets: `${srcFolder}/assets/**/*.*`,
    html: `${srcFolder}/**/*.pug`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
