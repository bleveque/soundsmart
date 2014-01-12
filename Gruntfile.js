module.exports = function(grunt) {
	grunt.initConfig({
		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'css/home.css': 'css/home.styl',
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: {
					'index.html': 'index.jade',
				}
			}
		},
		watch: {
			files: ['*.jade', 'html/*.jade', 'css/*.styl'],
			tasks: ['stylus', 'jade']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade', 'stylus']);
}