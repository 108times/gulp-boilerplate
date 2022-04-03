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
import { assets, clean, html, server } from './gulp/tasks/index.js';

// Наблюдатель за изменениями в файлах
const watcher = () => {
  gulp.watch(path.watch.assets, assets);
  gulp.watch(path.watch.html, html);
};
const mainTasks = gulp.parallel(assets, html);

// Построение сценариев выполнения задач
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));

// Сценарий по умолчанию
gulp.task('default', dev);
