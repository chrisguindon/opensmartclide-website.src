/*!
 * Copyright (c) 2021 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
*/

require('./node_modules/eclipsefdn-solstice-assets/webpack-solstice-assets.mix.js');
let mix = require('laravel-mix');
mix.EclipseFdnSolsticeAssets();

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less(
  './node_modules/eclipsefdn-solstice-assets/less/quicksilver/styles.less', 
  'static/css/styles.css'
);

mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/main.js'],
  './static/js/solstice.js'
);

mix.js(['./node_modules/eclipsefdn-solstice-assets/js/solstice/eclipsefdn.projects.js'], './static/js/eclipsefdn.projects.js');
