var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_KPU_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8081/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Marfis:KPU",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'KPU',
                            popuplayertitle: 'KPU',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KPU_1, 1]);

lyr_OSMStandard_0.setVisible(true);lyr_KPU_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KPU_1];
