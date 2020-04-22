function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng();
	var mapOptions = {
		center: myLocation,
		zoom: 10,
		mapTypeId: google.maps.ControlPosition.BOTTOM_CENTER
		mapTypeControlOptions:{
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	
	var myMap = new google.maps.map(el,mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
	});
	
	var contentString = 'Weiners'
	
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	})
	
	google.maps.event.addListener(marker, 'mouseover', function(){
		InfoWindow.open(myMap,marker);
	});
	
	
	
	
}

google.maps.event.addDomListener(window, 'load', init);