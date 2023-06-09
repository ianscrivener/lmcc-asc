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

    // L.marker([-33.06738, 151.58848]).addTo(map).bindPopup("Wangi RSL Jetty");

	// const overlays = {
	// 	'Cities': cities
	// };

	const layerControl = L.control.layers(baseLayers).addTo(map);

    // mooring style
    var mooringStyle = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };

    // add moorings
    var mooringStyle = {
            color:          '#050',
            fillColor:      '#199900',
            fillOpacity:    1,
            radius:         6
        };

    const geojsonLayer = new L.GeoJSON.AJAX("data/moorings.geojson",{
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, mooringStyle);
        },
        onEachFeature: function (feature, layer) {
            // console.log('ff');
            layer.bindPopup('<h1>'+feature.properties.name+'</h1>');
        },
    });       
    geojsonLayer.on('data:loaded', function(){
        // console.log(geojsonLayer);
        // geojsonLayer.addTo(map);
    });

    
    // const wharves = new L.GeoJSON.AJAX("data/geojson/all_wharves.geojson");
    // wharves.on('data:loaded', function(){
    //     // console.log(geojsonLayer);
    //     // wharves.addTo(map);
    // });


    // new L.GeoJSON.AJAX("data/geojson/wharves/wangi_rsl_wharf.geojson").addTo(map);

    // papa parse Google Sheet csv
    var gURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNyTy4XruChW8t5cDKK-WNbMJ3k_1pKp_OYhBjKVxypBr3HOAUpKggYiHYxtMGOgjY9l2F4xLETEXO/pub?gid=995759205&single=true&output=csv';

    var papa_cb = function(results){
        if(results.errors.length !== 0){
            // handle errors
        }
        else{
            // console.log(results.data);
        }
    }    

    var data = Papa.parse(gURL, {
        download: true,
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        escapeChar: '"',
        header: true,
        preview: 10,
        worker: false,
        comments: false,
        skipEmptyLines: true,
        complete: papa_cb
    })


    // create legend
    // const legend = L.control({ position: "bottomleft" });

    // legend.onAdd = function () {
    //     let div = L.DomUtil.create("div", "description");
    //     L.DomEvent.disableClickPropagation(div);
    //     const text =
    //     "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...";
    //     div.insertAdjacentHTML("beforeend", text);
    //     return div;
    // };

    // legend.addTo(map);


    L.control.scale().addTo(map);
