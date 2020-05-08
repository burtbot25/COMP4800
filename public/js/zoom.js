var map = document.getElementById('map');

var pz = panzoom(map, {
    // transformOrigin : { x: 0.5, y: 0.5 },
    maxZoom         : 2.0,
    minZoom         : 1.0,
    bounds          : true,
    boundsPadding   : 1,
    beforeMouseDown : function(e){
        return pz.getTransform().scale === 1;
    }
});
