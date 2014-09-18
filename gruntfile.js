module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        javascripts: ['frontend/javascripts/**/*.js'],
        server_js: ['*.js'],
        views: ['frontend/views/**/*.jade'],
        stylesheets: ['frontend/styles/**/*.styl'],

        jshint: {
            client: ['Gruntfile.js', '<%= javascripts %>', '!frontend/javascripts/libs/**/*.js'],
            server: ['<%= server_js %>'],
            options: {
                sub: true,
                smarttabs: true,
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['<%= javascripts %>'],
                tasks: ['javascripts']
            },
            server_js: {
                files: ['<%= server_js %>'],
                tasks: ['jshint:server'],
                options: {
                    livereload: false
                }
            },
            styles: {
                files: ['<%= stylesheets %>'],
                tasks: ['stylus']
            },
            jade: {
                files: ['<%= views %>'],
                tasks: ['jade']
            }
        },
        jade: {
            compile: {
                options: {
                    debug: false,
                    pretty: true
                },
                files: {
                    'public/index.html': 'frontend/views/index.jade',
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    'include css': true,
                    'paths': ['frontend/styles/'],
                    'compress': true
                },
                files: {
                    'public/styles/style.css': ['<%= stylesheets %>']
                }
            }
        },

        open: {
            dev: {
                path: 'http://localhost:3000/'
            }
        },

        copy: {
            libs: { files: [{ expand: false, src: ['bower_components/requirejs/require.js'], dest: 'public/javascripts/libs/require.js' }] },
            js: { files: [{ expand: true, cwd: 'frontend/javascripts/', src: ['**'], dest: 'public/javascripts/' }] },
            assets: { files: [{ expand: true, cwd: 'frontend/assets/', src: ['**'], dest: 'public/assets/' }] },
            images: { files: [{ expand: true, cwd: 'frontend/images/', src: ['**'], dest: 'public/images/' }] },
            // temp copy
            html: { files: [{ expand: true, cwd: 'frontend/', src: ['*.html'], dest: 'public/' }] },
            css: { files: [{ expand: true, cwd: 'frontend/styles/', src: ['*.css'], dest: 'public/styles/' }] }
        },

        clean: {
            public_js: { src: ['public/javascripts'] },
            public_html: { src: ['public/*.html'] }
        },

        requirejs: {
            options: {
                baseUrl: '.',
                appDir: 'frontend/javascripts',
                mainConfigFile: 'frontend/javascripts/main.js',
                optimize: 'uglify2',
                generateSourceMaps: false,
                preserveLicenseComments: false,
                useStrict: true,
                removeCombined: false,
                modules: [{
                    name: 'main'
                }]
            },

            main: {
                options: {
                    dir: 'public/javascripts'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('common', ['jshint', 'jade'/*, 'stylus', 'clean'*/]);
    grunt.registerTask('frontend', ['jshint', 'clean', 'jade', 'copy']);
    grunt.registerTask('default', ['common', 'open', 'copy']);
    //grunt.registerTask('release', ['common', 'requirejs', 'copy:libs', 'copy:images', 'copy:resources']);
};