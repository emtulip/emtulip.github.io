var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 0.613000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_centreline_arterial_segments_scored_1 = new ol.format.GeoJSON();
var features_centreline_arterial_segments_scored_1 = format_centreline_arterial_segments_scored_1.readFeatures(json_centreline_arterial_segments_scored_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centreline_arterial_segments_scored_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centreline_arterial_segments_scored_1.addFeatures(features_centreline_arterial_segments_scored_1);
var lyr_centreline_arterial_segments_scored_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centreline_arterial_segments_scored_1, 
                style: style_centreline_arterial_segments_scored_1,
                popuplayertitle: "centreline_arterial_segments_scored",
                interactive: true,
    title: 'centreline_arterial_segments_scored<br />\
    <img src="styles/legend/centreline_arterial_segments_scored_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/centreline_arterial_segments_scored_1_1.png" /> 1 - 3<br />\
    <img src="styles/legend/centreline_arterial_segments_scored_1_2.png" /> 3 - 5.8<br />\
    <img src="styles/legend/centreline_arterial_segments_scored_1_3.png" /> 5.8 - 10.3<br />\
    <img src="styles/legend/centreline_arterial_segments_scored_1_4.png" /> 10.3 - 48.3<br />'
        });

lyr_ESRIStandard_0.setVisible(true);lyr_centreline_arterial_segments_scored_1.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_centreline_arterial_segments_scored_1];
lyr_centreline_arterial_segments_scored_1.set('fieldAliases', {'uid': 'uid', 'total_score': 'total_score', });
lyr_centreline_arterial_segments_scored_1.set('fieldImages', {'uid': 'Range', 'total_score': 'TextEdit', });
lyr_centreline_arterial_segments_scored_1.set('fieldLabels', {'uid': 'no label', 'total_score': 'no label', });
lyr_centreline_arterial_segments_scored_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});