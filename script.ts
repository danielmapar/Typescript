// Important: about module resolution
// http://www.typescriptlang.org/docs/handbook/module-resolution.html

import * as $ from 'jquery';
// typescript 1.0
// typings install dt~jquery --global --save
// typescript 2.0
// npm install --save-dev @types/jquery


$("#app").css({"background-color": "green"})
