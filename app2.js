    // const osmLink       = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    // const osmUrl        = "http://tile.openstreetmap.org/{z}/{x}/{y}.png";
    // const osmAttrib     = `&copy; ${osmLink} Contributors`;
    // const osmMap        = L.tileLayer(osmUrl, { attribution: osmAttrib });    

    //OSM base layer
	const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 20,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

    //Google base layer
    const google = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; <a href="https://www.google.com.au/maps">Google Maps</a>'
	});

    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: '&copy; <a href="https://www.google.com.au/maps">Google Maps</a>'
    });

    const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: '&copy; <a href="https://www.google.com.au/maps">Google Maps</a>'
    });

    /* carto styles
        light_all,
        dark_all,
        light_nolabels,
        light_only_labels,
        dark_nolabels,
        dark_only_labels,
        rastertiles/voyager,
        rastertiles/voyager_nolabels,
        rastertiles/voyager_only_labels,
        rastertiles/voyager_labels_under
    */
    const carto_style = "light_all";

    //cartoDB base layer
	const carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
		maxZoom: 20,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors & <a href="http://cartodb.com/attributions">CartoDB</a>'
	});    

    // BUILD MAP
	const map = L.map('map', {
		center: [-33.0673125,151.5811875],
		zoom: 12,
		layers: [osm]
	});

	const baseLayers = {
		'OpenStreetMap': osm,
		'CartoDB': carto,
        'Google Street': google,
        'Google Hybrid': googleHybrid,
        'Google Satellite': googleSat        
    	};
	const layerControl = L.control.layers(baseLayers).addTo(map);

    L.control.scale().addTo(map);


    console.log("Start all_wharves");
    const wharves = new L.GeoJSON.AJAX("data/geojson/all_wharves.geojson");
    wharves.on('data:loaded', function(){
        console.log("Loading all_wharves");
        wharves.addTo(map);
    });