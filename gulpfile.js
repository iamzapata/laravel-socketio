var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
 * Bower Root
 */
var bower = 'resources/assets/bower/';

/*
 * Assets Root
 */
var root = 'resources/assets/';

/*
 * Utilities Directory
 */
var utils = root + 'js/utils/';

var socketio = 'public/vendor/socketio/';
var react = 'public/vendor/react/';

/*
 * Assets Output
 */
var css = 'public/assets/css/';
var js = 'public/assets/js/';

elixir(function(mix) {
    mix.sass('app.scss');

    mix.copy(bower + 'socket.io.client/dist/socket.io-1.3.5.js', socketio)
       .copy(bower + 'react/react.js', react)
        .copy(bower + 'react/react-dom.js', react);

    mix.browserify('app.js');

});