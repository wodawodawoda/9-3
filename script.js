var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();

var fixedText = text.replace('Velociraptor', dinosaur);
console.log(fixedText.substr(0, (fixedText.length / 2)));
