/**
 * Created by admin on 2016/10/29.
 */
var version = version2 = window.version = '?version=' + '4444444';

(function (window) {

    var asset = window.asset = '',

        indexFile = (location.pathname.match(/\/(index[^\.]*\.html)/) || ['', ''])[1],
        rUrl = /(#!\/|api|guide|misc|tutorial|error|index[^\.]*\.html).*$/,
        baseUrl = location.href.replace(rUrl, indexFile),
        headEl = document.getElementsByTagName('head')[0],
        sync = true,
        debug = true;

    if (debug) {

        addTag('script', {src: asset + 'vendor/jquery/jquery.min.js'}, sync);
        addTag('script', {src: asset + 'vendor/angular/angular.min.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/angular-animate/angular-animate.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/angular-cookies/angular-cookies.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/angular-ui-router/angular-ui-router.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/oclazyload/ocLazyLoad.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/angular/ngstorage/ngStorage.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/modules/angularjs-toaster/toaster.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/modules/angular-swiper/angular-swiper.js' + version}, sync);
        addTag('script', {src: asset + 'vendor/modules/angular-swiper/swiper.min.js' + version}, sync);

        addTag('script', {src: asset + 'js/app.js' + version}, sync);
        addTag('script', {src: asset + 'js/config.js' + version}, sync);
        addTag('script', {src: asset + 'js/config.lazyload.js' + version}, sync);
        addTag('script', {src: asset + 'js/config.router.js' + version}, sync);
        addTag('script', {src: asset + 'js/main.js' + version}, sync);
        addTag('script', {src: asset + 'js/services/ui-load.js' + version}, sync);
        addTag('script', {src: asset + 'js/services/content/contentServices.js' + version}, sync);
    } else {
        addTag('script', {src: asset + 'dist/app.js' + version}, sync);
    }

})(window)

function getFileKey(user, fileName) {

    function randomString(size) {
        size = size || 6;
        var code_string = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var max_num = code_string.length + 1;
        var new_pass = '';
        while (size > 0) {
            new_pass += code_string.charAt(Math.floor(Math.random() * max_num));
            size--;
        }
        return new_pass;
    }

    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();

    function n2(n) {
        return (n < 10 ? '0' : '') + n;
    }

    var e = fileName.split('.').pop();
    var k = randomString(16);
    return [user, y, n2(m), n2(d), k + '.' + e].join('/');
}