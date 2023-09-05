var createTextStyle = function(feature, resolution, labelText, labelFont,
                               labelFill, placement, bufferColor,
                               bufferWidth, labelBackgroundFill, labelBackgroundStroke) {

    if (feature.hide || !labelText) {
        return; 
    } 

    var bufferStyle = bufferWidth > 0 
                      ? new ol.style.Stroke({
                          color: bufferColor,
                          width: bufferWidth
                        })
                      : null;
    
    var textStyle = new ol.style.Text({
        font: labelFont,
        text: labelText,
        textBaseline: "middle",
        textAlign: "center",
        offsetX: 0,
        offsetY: 0,
        placement: placement,
        maxAngle: 0,
        fill: new ol.style.Fill({
            color: labelFill
        }),
        stroke: bufferStyle,
        backgroundFill: labelBackgroundFill ? new ol.style.Fill({
            color: labelBackgroundFill
        }) : null,
        backgroundStroke: labelBackgroundStroke ? new ol.style.Stroke({
            color: labelBackgroundStroke
        }) : null
    });

    return textStyle;
};

function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width/2), -(screen.height/2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0,0,screen.width,screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};
