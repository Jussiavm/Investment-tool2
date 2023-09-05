var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PKS_postinumeroalueet_2023_shp_1 = new ol.format.GeoJSON();
var features_PKS_postinumeroalueet_2023_shp_1 = format_PKS_postinumeroalueet_2023_shp_1.readFeatures(json_PKS_postinumeroalueet_2023_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKS_postinumeroalueet_2023_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKS_postinumeroalueet_2023_shp_1.addFeatures(features_PKS_postinumeroalueet_2023_shp_1);
var lyr_PKS_postinumeroalueet_2023_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PKS_postinumeroalueet_2023_shp_1, 
                style: style_PKS_postinumeroalueet_2023_shp_1,
                interactive: true,
                title: 'PKS_postinumeroalueet_2023_shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PKS_postinumeroalueet_2023_shp_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PKS_postinumeroalueet_2023_shp_1];
lyr_PKS_postinumeroalueet_2023_shp_1.set('fieldAliases', {'Posno': 'Posno', 'Toimip': 'Toimip', 'Toimip_ru': 'Toimip_ru', 'Nimi': 'Nimi', 'Nimi_Ru': 'Nimi_Ru', 'Kunta': 'Kunta', 'Kunta_nro': 'Kunta_nro', 'Sijoitusasuntotyökalu - Rolling 1Y Price_m2 Data (2)_Rolling 1Y Price per m2': 'Sijoitusasuntotyökalu - Rolling 1Y Price_m2 Data (2)_Rolling 1Y Price per m2', });
lyr_PKS_postinumeroalueet_2023_shp_1.set('fieldImages', {'Posno': 'TextEdit', 'Toimip': 'TextEdit', 'Toimip_ru': 'TextEdit', 'Nimi': 'TextEdit', 'Nimi_Ru': 'TextEdit', 'Kunta': 'TextEdit', 'Kunta_nro': 'TextEdit', 'Sijoitusasuntotyökalu - Rolling 1Y Price_m2 Data (2)_Rolling 1Y Price per m2': 'Range', });
lyr_PKS_postinumeroalueet_2023_shp_1.set('fieldLabels', {'Posno': 'no label', 'Toimip': 'no label', 'Toimip_ru': 'no label', 'Nimi': 'no label', 'Nimi_Ru': 'no label', 'Kunta': 'no label', 'Kunta_nro': 'no label', 'Sijoitusasuntotyökalu - Rolling 1Y Price_m2 Data (2)_Rolling 1Y Price per m2': 'no label', });
lyr_PKS_postinumeroalueet_2023_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});