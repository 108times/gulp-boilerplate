// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передача часто используемых данных в глобальную переменную
global.app = {
  path,
  gulp,
  plugins,
};

// Импорт задач
import { files, clean, html, server, scss, js, images } from './gulp/tasks/index.js';
import { otfToTtf, ttfToWoff, fontsStyles } from './gulp/tasks/fonts.js';

// Наблюдатель за изменениями в файлах
const watcher = () => {
  gulp.watch(path.watch.files, files);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyles);
gulp.task('fonts', fonts);

// Основные задачи
const mainTasks = gulp.series(fontsStyles, gulp.parallel(files, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));

// Сценарий по умолчанию
gulp.task('default', dev);
