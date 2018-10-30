/**********************************
	
OUR GLORIOUS GRUNT FILE

Info
Here lies all settings for grunt to run on this probject.

Notes
[1]     Switched from grunt-contrib-sass to grunt-sass becuase 
		grunt-contrib-sass was SO slow. However, grunt-sass uses
		libsass and there are some features it doesn't currently
		support. Here's a list: http://sass-compatibility.github.io/

**********************************/
module.exports = function(grunt) {
	grunt.initConfig({
		/**********************************
		Compiles the sass into css
		**********************************/
		sass: {
			dist: {
				options: {
					sourceMap: true,
					outputStyle: 'compressed'
				},
				files: {
					// 'dist/css/wc-style.css' : 'src/sass/wc-style.scss',
					// 'dist/css/wc-high-contrast.css' : 'src/sass/wc-high-contrast.scss'
					'dist/css/wc-style.css' : '../prebuilt/v9/src/sass/wc-style.scss',
				}
			}
		},

		/**********************************
		Handles adding all of the browser prefixes to the css
		**********************************/
		autoprefixer: {
			options: {
				browsers: ['last 7 version'],
				map: true
			},
			dist: {
				src: ['dist/css/wc-style.css']
			}
		},

		/**********************************
		Breaks css into multiple files to deal with IE9's lovely 4096 css selector limit.

		Notes
		[1]     This is currently set up to make a copy of the file that's split into chunks of
				4000 selectors. But if it goes over the "maxPages" value it fails and outputs
				a warning instead. When it gets to that point we'll need to increase the maxPages
				value here and update the ieFixes() function in Globals.js accordingly.
		[2] 	If it would only produce one file (i.e. the total selectors is less than 4000) then
				do nothing.
		**********************************/
		csssplit: {
			your_target: {
				src: ['dist/css/wc-style.css'],
				dest: 'dist/css/wc-style.css',
				options: {
					maxSelectors: 4000,
					maxPages: 2, /*[1]*/
					suppressSinglePage: true /*[2]*/
					//suffix: 'Page'
				}
			},
		},

		/**********************************
		Pieces together the html.

		Notes
		[-]     This is for local development only, outside of ingeniux.
		**********************************/
		includes: {
		  html: {
			options: {
				// flatten:true,
				silent:true
			},
			files: [{
				cwd: 'src/html/',
				src: '*.html',
				dest: 'dist/',
			}],
		  },
		},

		/**********************************
		Combines all of our svg's into one svg sprite
		**********************************/
		svgstore: {
			options: {
				prefix : '', // This will prefix each <g> ID
				cleanup: ['fill']
			},
			default : {
				files: {
					'dist/images/svg/svg-defs.svg': ['../prebuilt/v9/src/svg/*.svg']
				}
			}
		},

		/**********************************
		Combines all of our JS into one file

		Notes
		[1]     Need to order these according to dependencies
		[2]		*IMPORTANT* for prebuilt's gruntile, remember to edit this list of files for uglify as well as concat
		[3] 	Polyfill we're using for es6 promises - https://github.com/stefanpenner/es6-promise
		[4] 	String templates, migrate away from this if we ever add babel
				- https://gist.github.com/WebReflection/8f227532143e63649804
		[5] 	Polyfill for Object.assign()
		**********************************/
		concat: {
			options: {
				separator: '\n\n',
				sourceMap: true
			},
			dist: {
				src: [
					'../prebuilt/v9/src/plugins/modernizr/wc-modernizr.js', /*[1]*/ /*[2]*/
					'../prebuilt/v9/src/plugins/es6-promise/es6-promise.auto.min.js', /*[3]*/
					'../prebuilt/v9/src/plugins/string.prototype.template.js',/*[4]*/
					'../prebuilt/v9/src/plugins/object.assign.js',/*[5]*/
					'../prebuilt/v9/src/plugins/jquery-throttle-debounce/jquery.ba-throttle-debounce.min.js',
					'../prebuilt/v9/src/plugins/bootstrap-sass/assets/javascripts/bootstrap.js',
					'../prebuilt/v9/src/plugins/slick.js/slick/slick.js',
					'../prebuilt/v9/src/plugins/fitvids/jquery.fitvids.js',
					'../prebuilt/v9/src/plugins/svg4everybody/dist/svg4everybody.js',
					'../prebuilt/v9/src/plugins/jquery-visibility/jquery-visibility.min.js',
					'../prebuilt/v9/src/plugins/fastclick/lib/fastclick.js',
					'../prebuilt/v9/src/plugins/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
					'../prebuilt/v9/src/plugins/imagesloaded/imagesloaded.pkgd.min.js',
					'../prebuilt/v9/src/plugins/object-fit-images/dist/ofi.js',
					'../prebuilt/v9/src/js/map/*.js',
					'../prebuilt/v9/src/js/objects/*.js',
					'../prebuilt/v9/src/js/modules/*.js',
					'../prebuilt/v9/src/js/init.js'
				], 	
				dest: 'dist/js/wc-scripts.js'
			},
		},


		/**********************************
		Combines all of our JS into one file and compresses it (for production)
		**********************************/
		// uglify: {
		// 	my_target: {
		// 		options: {
		// 			sourceMap: true
		// 		},
		// 		files: {
		// 			'dist/js/wc-scripts.js':[ /*[1]*/ /*[2]*/
		// 				'src/plugins/modernizr/wc-modernizr.js',
		// 				'src/plugins/jquery-throttle-debounce/jquery.ba-throttle-debounce.min.js',
		// 				'src/plugins/bootstrap-sass/assets/javascripts/bootstrap.js',
		// 				'src/plugins/slick.js/slick/slick.js',
		// 				'src/plugins/fitvids/jquery.fitvids.js',
		// 				'src/plugins/svg4everybody/dist/svg4everybody.js',
		// 				'src/plugins/jquery-visibility/jquery-visibility.min.js',
		// 				'src/plugins/fastclick/lib/fastclick.js',
		// 				'src/plugins/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
		// 				'src/js/map/*.js',
		// 				'src/js/modules/*.js',
		// 				'src/js/init.js'
		// 			]
		// 		}
		// 	}
		// },

		/**********************************
		Just copies files from one place to another.

		Notes
		[1] 	Making a separate folder for map images so we can still have grunt
				watch the images folder without the high cpu problems we were getting
				when that included the map tiles
		[2] 	Putting these images in the "map" folder inside of the images_map
				folder so it's consistent with the file structure in prebuilt
		**********************************/
		copy: {
			dev: {
				files: [
					{// jQuery
						expand:true,
						flatten:true,
						src: [
								'../prebuilt/v9/src/plugins/jquery/dist/jquery.min.js',
								'../prebuilt/v9/src/plugins/jquery/dist/jquery.min.map',
							],
						dest: 'dist/js/'
					},
					{//Images
						expand:true,
						cwd: 'src/images/',
						src :'**',
						dest: 'dist/images/'
					},
					{//Images - Map /*[1]*/
						expand:true,
						cwd: '../prebuilt/v9/images/map/', 
						src :'**',
						dest: 'dist/images_map/map/'/*[2]*/
					},
					{//Videos
						expand:true,
						cwd: 'src/videos/',
						src :'**',
						dest: 'dist/videos/'
					},
					{// Instalink
						expand:true,
						cwd: '../prebuilt/v9/src/plugins/instalink/',
						src :'**',
						dest: 'dist/plugins/instalink/'
					},
					{// Instafeed 
						expand:true,
						flatten:true,
						src :'../prebuilt/v9/src/plugins/instafeed/instafeed.min.js',
						dest: 'dist/plugins/instafeed/'
					},
					{// Photoswipe
						expand:true,
						cwd: '../prebuilt/v9/src/plugins/photoswipe/dist/',
						src :'**',
						dest: 'dist/plugins/photoswipe/'
					},
					{// Masonry
						expand:true,
						cwd: '../prebuilt/v9/src/plugins/masonry/',
						src :'**',
						dest: 'dist/plugins/masonry/'
					},
					{// Datatables
						expand:true,
						cwd: '../prebuilt/v9/src/plugins/datatables/',
						src :'**',
						dest: 'dist/plugins/datatables/'
					}
				],
			}
		},

		/**********************************
		Deletes the dist folder
		**********************************/
		clean: ["dist/*"],

		/**********************************
		"Watches" the specified files, when something changes, 
		it runs the specified tasks
		**********************************/
		watch: {
			sass: {
				files: ['../prebuilt/v9/src/sass/**/*.scss','../prebuilt/v9/src/sass/*.css'], // which files to watch
				tasks: ['sass','autoprefixer','csssplit']
			},
			includes:{
				files: ['src/html/**/*.html'],
				tasks: ['includes']
			},
			svg: {
				files: ['../prebuilt/v9/src/svg/inline/*.svg'],
				tasks: ['svgstore']
			},
			concat: {
				files: ['../prebuilt/v9/src/js/**/*.js','src/data/**/*.js'],
				tasks: ['concat']
			},
			copy: {
				files: ['../prebuilt/v9/src/plugins/datatables/**','src/images/**'],
				tasks: ['copy:dev']
			}
		},
		
		/**********************************
		Fancy server thing that refreshes the page when you save your changes. Not
		integrating this with "watch", so you'll need to run this in a separate terminal
		window ($grunt browsersync) instead of using the OSX python server.
		**********************************/
		browserSync: {
			bsFiles: {
				src : ['dist/*.html','dist/css/wc-style.css','dist/js/**']
			},
			options: {  
				server: {
					baseDir: "./dist/",
					logConnections: true
				},
				// https:true,
				ghostMode: {
					clicks: false,
					forms: false,
					scroll: false
				},
				ui: {
					port: 8080
				},
				reloadDelay: 500
			}
		}
	});
	
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass'); /*[1]*/
	grunt.loadNpmTasks('grunt-csssplit');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('bs',['browserSync']);
	grunt.registerTask('dist', ['clean','copy:dev','includes','sass','autoprefixer','csssplit','concat','svgstore']);
	grunt.registerTask('dist_prod', ['clean','copy:dev','includes','sass','autoprefixer','csssplit','uglify','svgstore']);
	grunt.registerTask('default', ['dist','watch']);
};