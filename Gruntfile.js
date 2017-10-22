module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
	less: {
		dist: {
			options: {
				strictMath: true
			},
			src: '_assets/less/style.less',
			dest: 'assets/css/style.css'
		}
	},
	autoprefixer: {
		options: {
			browsers: [
				"Android 2.3",
				"Android >= 4",
				"Chrome >= 31",
				"Firefox >= 30",
				"Explorer >= 8",
				"iOS >= 6",
				"Opera >= 20",
				"Safari >= 6"
			]
		},
		dist: {
			src: 'assets/css/style.css'
		}
	},
	cssmin: {
		options: {
			compatibility: 'ie8',
			keepSpecialComments: '*',
			advanced: false
		},
		dist: {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.min.css'
		}
	},
	uglify: {
		dist: {
			files: {
				'assets/js/scripts.min.js': [
					'_assets/js/jquery.min.js',
					'_assets/js/bootstrap.min.js',
					'_assets/js/search.js',
					'_assets/js/analytics.js'
				]
			}
		}
	},
	watch: {
		less: {
			files: ['_assets/less/**/*.less'],
			tasks: ['style']
		},
		js: {
			files: ['_assets/js/**/*.js'],
			tasks: ['script']
		}
	},
	clean: {
		dist: [
			'assets/css/style.min.css',
			'assets/js/scripts.min.js'
		]
	}
	});
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('style', ['less', 'autoprefixer', 'cssmin']);
	grunt.registerTask('script', ['uglify']);

	grunt.registerTask('default', ['clean', 'style', 'script']);
	grunt.registerTask('dev', ['watch']);
};
