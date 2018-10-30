/**********************************
#INSTAGRAM-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Instagram Gallery objects.
**********************************/
function InstagramGallery(params,$e){
	'use strict';

	var o = {};

	o.s = {
		resourcesLoaded:undefined,
		method:params.method,
		tagOptions:params.tagOptions,
		userOptions:params.userOptions,
		accessToken:params.accessToken,
		imageCount:params.imageCount,
		id:$.attr('id')
	};

	/**********************************
	Initialize

	Notes
	[1] 	After the resources for using instafeed have been loaded, get the images.
	[2] 	If it's using tags, and there's a list of users then filter by that list of users
	[3] 	Doing this to avoid posts with multiple photos since at this point they just come across as gray
			squares in the API. The feature is brand new though so it might be worth checking on this later. -meanspa 2.24.17
	**********************************/
	o.init = function(){
		var promises = $.grep(Globals.s.promises, function(p){ return p.name === 'InstafeedResources'; })
		if (promises.length === 0){
			var resources = ['../plugins/instafeed/instafeed.min.js']
			o.s.resourcesLoaded = Globals.getStuff(resources);
			var p = {
				name:'InstafeedResources',
				promise:o.s.resourcesLoaded
			}
			Globals.s.promises.push(p);
		}
		else {
			o.s.resourcesLoaded = promises[0].promise;
		}
		o.s.resourcesLoaded.then(function(){ /*[1]*/
			var successCallback = function(r){
				if(o.s.method === 'tag' && o.s.tagOptions.users && o.s.tagOptions.users.length > 0){ /*[2]*/
					o.s.results = $.grep(r.data,function(img,i){
						return o.s.tagOptions.users.indexOf(img.user.id) != -1;
					})
				}
				else{
					o.s.results = r.data;
				}
				o.s.imageCount = o.s.imageCount > o.s.results.length?o.s.results.length:o.s.imageCount;
				for (var i = 0; i < o.s.imageCount; i++) {
					var item = o.s.results[i];
					if (item.type === "video" && item.images.thumbnail.url.indexOf("null") >= 0) { /*[3]*/
						o.s.imageCount++;
					}
					else{
						var markup = '<a href="'+item.link+'" target="_blank" class="wc-instagram-thumbnail wc-card-link"><img src="'+item.images.low_resolution.url+'" alt="Instagram Image - '+item.caption.text.replace(/\"/g,'&quot;')+'" /></a>';
						$e.append(markup);
					}
				}
				$.publish('dom.newElements');
			}
			var options = {
				accessToken: o.s.accessToken,
				mock: true,
				success: successCallback
			};
			if(o.s.method === 'tag'){
				options.get = 'tagged';
				options.tagName = o.s.tagOptions.tag;
			}
			else if(o.s.method === 'user'){				
				options.get = 'user';
				options.userId = o.s.userOptions.userID;
			}
			o.s.feed = new Instafeed(options);
			o.s.feed.run();
		});
	}

	return o;
}