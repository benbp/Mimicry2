(function(window, Util, PhotoSwipe){
	
	Util.Events.domReady(function(e){
		
		var instance;
		
		instance = PhotoSwipe.attach(
			[
				{ url: 'images/batesian/mimic-octopus-smooth.jpg', caption: 'Mimic Octopus - normal'},
				{ url: 'images/batesian/mimic-octopus-rough.jpg', caption: 'Mimic Octopus - imitating sea sponge, '},
				{ url: 'images/batesian/mimic-octopus-lionfish.jpg', caption: 'Mimic Octopus - imitating lionfish'},
				{ url: 'images/batesian/texas-wasp-moth.jpg', caption: 'Texas Wasp Moth'},
				
			],
			{
				target: window.document.querySelectorAll('#batesiangallery')[0],
				preventHide: true,
				getImageSource: function(obj){
					return obj.url;
				},
				getImageCaption: function(obj){
					return obj.caption;
				}
			}
		);
		instance.show(0);	
	});
}(window, window.Code.Util, window.Code.PhotoSwipe));