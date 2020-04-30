let map = document.getElementById('map');
let img = document.getElementById('image-map');
console.log(img.width);
console.log(img.height);

const pz = panzoom(map, {
    // transformOrigin : { x: 0.5, y: 0.5 },
    maxZoom         : 2.0,
    minZoom         : 1.0,
    bounds          : true,
    boundsPadding   : 1,
    beforeMouseDown : function(e){
        return pz.getTransform().scale === 1;
    }
});

console.log(pz.getTransform());
