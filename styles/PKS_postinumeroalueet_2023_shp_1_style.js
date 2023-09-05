var size = 0;
var placement = 'point';

function formatNumber(value, decimals) {
    return parseFloat(value).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var style_PKS_postinumeroalueet_2023_shp_1 = function(feature, resolution){
    console.log("Style function executed");
	var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "15.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
	var labelBackgroundFill = 'rgba(255, 255, 255, 0.7)';  // semi-transparent white
	var labelBackgroundStroke = '#000';  // black
	var adjustFontSize = function(labelText, resolution, maxFontSize) {
    var baseSize = maxFontSize || 15;  // use 15 as default max size if not provided

    // Adjust baseSize based on the label text length
    if (labelText.length > 10) {
        baseSize -= (labelText.length - 10);
    }
    
    // Now, factor in the resolution.
    // This is just an example, you can tweak these values to get the desired effect
    if (resolution > 75) {
        baseSize *= 0.5;
    } else if (resolution > 40) {
        baseSize *= 0.75;
    }  // Add more conditions as needed
    
    return Math.max(baseSize, 8);  // assuming you don't want anything smaller than 8px
	};
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
	var textBaseline = "middle";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    var price = feature.get("Price");
	if (price !== null) {
		labelText = '€' + formatNumber(price, 0);
	console.log("Price attribute:", price);
	console.log("Label text:", labelText);
		labelFont = adjustFontSize(labelText, resolution) + "px 'Arial', sans-serif";
    }
	    
        function rules_PKS_postinumeroalueet_2023_shp_1(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_PKS_postinumeroalueet_2023_shp_1rule0_eval_expression(context)) {
				console.log("Rule 0 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(26,150,65,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
                    else if (exp_PKS_postinumeroalueet_2023_shp_1rule1_eval_expression(context)) {
						console.log("Rule 1 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(166,217,106,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
                    else if (exp_PKS_postinumeroalueet_2023_shp_1rule2_eval_expression(context)) {
						console.log("Rule 2 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(255,255,192,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
                    else if (exp_PKS_postinumeroalueet_2023_shp_1rule3_eval_expression(context)) {
						console.log("Rule 3 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(253,174,97,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
                    else if (exp_PKS_postinumeroalueet_2023_shp_1rule4_eval_expression(context)) {
						console.log("Rule 4 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(215,25,28,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
                    else if (exp_PKS_postinumeroalueet_2023_shp_1rule5_eval_expression(context)) {
						console.log("Rule 5 triggered");
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.46799999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(237,237,237,0.46799999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                      labelFill, placement, bufferColor,
                      bufferWidth, labelBackgroundFill, labelBackgroundStroke)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_PKS_postinumeroalueet_2023_shp_1(feature, value);
        ;
	console.log("Returned style:", style);
    return style;
};


