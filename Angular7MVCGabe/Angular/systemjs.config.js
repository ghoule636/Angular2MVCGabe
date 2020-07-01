/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../../node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
          'EmployeeTestApp': '../Angular/Admin/EmployeeTestApp',
          'CompanyTestApp': '../Angular/Admin/CompanyTestApp',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'tslib':                      'npm:tslib/tslib.js',
            'rxjs':                       'npm:rxjs',
            'rxjs/operators':             'npm:rxjs/operators/index.js',
            '@uirouter/angular':          'npm:@uirouter/angular/_bundles/ui-router-ng2.js',
            '@uirouter/core':             'npm:@uirouter/core/_bundles/ui-router-core.js',
            '@uirouter/rx':               'npm:@uirouter/rx/_bundles/ui-router-rx.js',
            '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
          EmployeeTestApp: {
                main: 'main.js', defaultExtension: 'js'
          },
          CompanyTestApp: {
            main: 'main.js', defaultExtension: 'js'
          },
          rxjs: {
                main: 'index.js', defaultExtension: 'js'
          },
          "": {
            defaultExtension: 'js'
          }
        }
    });
})(this);
