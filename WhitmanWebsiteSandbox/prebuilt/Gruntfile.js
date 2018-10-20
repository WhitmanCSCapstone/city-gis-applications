/**********************************
	
OUR GLORIOUS GRUNT FILE

Notes
[-]		Here lies all settings for grunt to run on this probject.
[1]		Switched from grunt-contrib-sass to grunt-sass becuase 
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
					'v9/dist/css/wc-style.css' : 'v9/src/sass/wc-style.scss'
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
				src: 'v9/dist/css/wc-style.css'
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
				src: ['v9/dist/css/wc-style.css'],
				dest: 'v9/dist/css/wc-style-temp.css',
				options: {
					maxSelectors: 4000,
					maxPages: 2, /*[1]*/
					suppressSinglePage: true /*[2]*/
					//suffix: 'Page'
				}
			},
		},

        /***********************************
        Minifies our split css files
        ************************************/
		cssmin: {
		    options: {
		        shorthandCompacting: false,
		        roundingPrecision: -1
		    },
		    target: {
		        files: {
		            'v9/dist/css/wc-style_part_1.css': 'v9/dist/css/wc-style-temp_part_1.css',
		            'v9/dist/css/wc-style_part_2.css': 'v9/dist/css/wc-style-temp_part_2.css'
		        }
		    }
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
					'v9/dist/svg/svg-defs.svg': ['v9/src/svg/*.svg']
				}
			}
		},

		/**********************************
		Combines all of our JS into one file

		Notes
		[-] 	I don't think this throws an error if it doesn't find a file, so beware.
		[1]     Need to order these according to dependencies
		[2]		*IMPORTANT* remember to edit this list of files for uglify as well as concat
		[3] 	Polyfill we're using for es6 promises - https://github.com/stefanpenner/es6-promise
		[4] 	String templates, migrate away from this if we ever add babel
				- https://gist.github.com/WebReflection/8f227532143e63649804
		[5] 	Polyfill for Object.assign()
		**********************************/
		concat: {
			options: {
				separator: '\n',
				sourceMap: true
			},
			dist: {
				src: [ /*[1]*/ /*[2]*/
					'v9/src/plugins/modernizr/wc-modernizr.js',
					'v9/src/plugins/es6-promise/es6-promise.auto.min.js',/*[3]*/
					'v9/src/plugins/string.prototype.template.js',/*[4]*/
					'v9/src/plugins/object.assign.js',/*[5]*/
					'v9/src/plugins/jquery-throttle-debounce/jquery.ba-throttle-debounce.min.js',
					'v9/src/plugins/bootstrap-sass/assets/javascripts/bootstrap.js',
					'v9/src/plugins/slick.js/slick/slick.js',
                    'v9/src/plugins/fitvids/jquery.fitvids.js',
                    'v9/src/plugins/svg4everybody/dist/svg4everybody.js',
					'v9/src/plugins/jquery-visibility/jquery-visibility.min.js',
					'v9/src/plugins/fastclick/lib/fastclick.js',
					'v9/src/plugins/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
					'v9/src/plugins/imagesloaded/imagesloaded.pkgd.min.js',
					'v9/src/plugins/object-fit-images/dist/ofi.js',
					'v9/src/js/data_*.js',
					'v9/src/js/map/*.js',
					'v9/src/js/objects/*.js',
					'v9/src/js/modules/*.js',
					'v9/src/js/init.js'
				], 
				dest: 'v9/dist/js/wc-scripts.js'
			},
		},

		/**********************************
		Combines all of our JS into one file and compresses it (for production)

		Notes
		[1]     Need to order these according to dependencies
		[2]		*IMPORTANT* remember to edit this list of files for uglify as well as concat
		[3] 	Polyfill we're using for es6 promises - https://github.com/stefanpenner/es6-promise
		[4] 	String templates, migrate away from this if we ever add babel
				- https://gist.github.com/WebReflection/8f227532143e63649804
		[5] 	Polyfill for Object.assign()
		**********************************/
		uglify: {
			my_target: {
				files: {
					'v9/dist/js/wc-scripts.js':[ /*[1]*/ /*[2]*/
					'v9/src/plugins/modernizr/wc-modernizr.js',
					'v9/src/plugins/es6-promise/es6-promise.auto.min.js', /*[3]*/
					'v9/src/plugins/string.prototype.template.js',/*[4]*/
					'v9/src/plugins/object.assign.js',/*[5]*/
					'v9/src/plugins/jquery-throttle-debounce/jquery.ba-throttle-debounce.min.js',
					'v9/src/plugins/bootstrap-sass/assets/javascripts/bootstrap.js',
					'v9/src/plugins/slick.js/slick/slick.js',
					'v9/src/plugins/fitvids/jquery.fitvids.js',
					'v9/src/plugins/svg4everybody/dist/svg4everybody.js',
					'v9/src/plugins/jquery-visibility/jquery-visibility.min.js',
					'v9/src/plugins/fastclick/lib/fastclick.js',
					'v9/src/plugins/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
					'v9/src/plugins/imagesloaded/imagesloaded.pkgd.min.js',
					'v9/src/plugins/object-fit-images/dist/ofi.js',
					'v9/src/js/data_*.js',
					'v9/src/js/map/*.js',
					'v9/src/js/objects/*.js',
					'v9/src/js/modules/*.js',
					'v9/src/js/init.js'
					]
				}
			}
		},

		/**********************************
		Just copies files from one place to another.
		**********************************/
		copy: {
			main: {
				files: [
					{// jQuery
						expand:true,
						flatten:true,
						src: [
								'v9/src/plugins/jquery/dist/jquery.min.js',
								'v9/src/plugins/jquery/dist/jquery.min.map'
							],
						dest: 'v9/dist/js/'
					},
					{//Map
						expand:true,
						cwd: 'v9/src/map/',
						src :'**',
						dest: 'v9/dist/map/'
					},
					{// Instafeed 
						expand:true,
						flatten:true,
						src :'v9/src/plugins/instafeed/instafeed.min.js',
						dest: 'v9/dist/plugins/instafeed/'
					},
					{// Photoswipe
						expand:true,
						cwd: 'v9/src/plugins/photoswipe/dist/',
						src :'**',
						dest: 'v9/dist/plugins/photoswipe/'
					},
					{// Masonry
						expand:true,
						cwd: 'v9/src/plugins/masonry/',
						src :'**',
						dest: 'v9/dist/plugins/masonry/'
					},
					{// Datatables
						expand:true,
						cwd: 'v9/src/plugins/datatables/',
						src :'**',
						dest: 'v9/dist/plugins/datatables/'
					},
				],
			},
			prod:{//Only used when deploying to production server
				files: [
					{//Copies the whole dist folder
						expand:true,
						cwd:'v9/dist/',
						src: '**',
						dest: 'Z:/v9/dist/'
					}
				],
			}
		},

		/**********************************
		main and prod deletes the dist folder
        tempfiles deletes any files that contain "temp" in the name
		**********************************/
		clean: {
		    main: ["v9/dist/*"],
            tempfiles: ["v9/dist/css/*temp*"],
			prod:["Z:/v9/dist/*"] //Only used when deploying to the production server
		},

        /********************************
        removes empty files in the css dist folder
        **********************************/

		cleanempty: {
		    options: {},
		    src: ['v9/dist/css/*part*'],
		},


		/**********************************
		"Watches" the specified files, when something changes, 
		it runs the specified tasks
		**********************************/
		watch: {
			sass: {
				files: ['v9/src/sass/**/*.scss','v9/src/sass/*.css'], // which files to watch
				tasks: ['sass','autoprefixer','csssplit']
			},
			svg: {
				files: ['v9/src/svg/*.svg'],
				tasks: ['svgstore']
			},
			concat: {
				files: ['v9/src/js/**/*.js'],
				tasks: ['concat']
			},
			copy: {
				files: ['v9/src/plugins/**'],
				tasks: ['copy:main']
			},
			csssplit:{
				//files: ['src/plugins/**','src/images/**'],
				files: ['dist/css/*.css'],
				tasks: ['csssplit']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-cleanempty'),
	grunt.loadNpmTasks('grunt-sass'); /*[1]*/
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csssplit');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('dist', ['clean:main','copy:main','sass','autoprefixer','csssplit','cssmin','clean:tempfiles','cleanempty','concat','svgstore']);
	grunt.registerTask('dist_prod', ['clean:main','copy:main','sass','autoprefixer','csssplit','cssmin','clean:tempfiles','cleanempty','uglify','svgstore','prod_deploy']);
	grunt.registerTask('prod_deploy',['clean:prod','copy:prod']);
	grunt.registerTask('default', ['dist','watch']);
};