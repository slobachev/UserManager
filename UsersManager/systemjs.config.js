(function (global) {
    System.config({
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'app': './app',
            'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
            'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
            '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js'
        },
        packages: {
            'app': {
                main: 'main.js',
                defaultExtension: 'js'
            },

            '@angular/platform-browser': {
                main: 'bundles/platform-browser.umd.js'
            },

            '@angular/core': {
                main: 'bundles/core.umd.js'
            },

            '@angular/http': {
                main: 'bundles/http.umd.js'
            },

            '@angular/compiler': {
                main: 'bundles/compiler.umd.js'
            },

            '@angular/compiler-cli': {
                main: 'index.js'
            },

            '@angular/router': {
                main: 'bundles/router.umd.js'
            },

            '@angular/upgrade': {
                main: 'bundles/upgrade.umd.js'
            },

            '@angular/forms': {
                main: 'bundles/forms.umd.js'
            },

            '@angular/common': {
                main: 'bundles/common.umd.js',
                defaultExtension: 'js'
            },

            '@angular/platform-browser-dynamic': {
                main: 'bundles/platform-browser-dynamic.umd.js'
            },

            '@angular/platform-server': {
                main: 'bundles/platform-server.umd.js'
            },

            'rxjs': {
                defaultExtension: 'js'
            },

            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);