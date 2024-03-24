var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/ima361.jpg');




// ZONA 1 
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot1.position.set(-500, -48, -390);
infospot1.addHoverText('En Buffet Delicias del Mundo, cada mesa es una obra de arte en sí misma. Con un diseño elegante y detalles cuidadosamente seleccionados, nuestras mesas están diseñadas para cautivar tus sentidos.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">En Buffet Delicias del Mundo, cada mesa es una obra de arte en sí misma. Con un diseño elegante y detalles cuidadosamente seleccionados, nuestras mesas están diseñadas para cautivar tus sentidos.</div>';
panorama.add(infospot1);

// //  ZONA 2 

var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot2.position.set(499, 174, -297);
infospot2.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
infospot2.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/qH4Cge_ED-4?si=wDDSumkY5MeVdYNS"></iframe>        
    </div>
`;
panorama.add(infospot2);


// ZONA 3 

var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

var infospot3 = new PANOLENS.Infospot(50);
infospot3.position.set(-500, 412, 71);
infospot3.addHoverText('Nuestra zona con techo de vidrio te permite disfrutar de una atmósfera luminosa y vibrante mientras saboreas nuestros exquisitos platos. ', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Nuestra zona con techo de vidrio te permite disfrutar de una atmósfera luminosa y vibrante mientras saboreas nuestros exquisitos platos. </div>';
panorama.add(infospot3);

// // ZONA 4



var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(499, 15, 182);
infospot4.addHoverText('Un audio MP3 multimedial...', -60);
infospot4.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audio/bar.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot4);


// ZONA 5


var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(155, 123, 500);
infospot5.addHoverText('Hemos creado una zona especialmente diseñada para grupos grandes, donde pueden disfrutar juntos de una experiencia culinaria inolvidable. Con amplias mesas y un ambiente acogedor.Aquí encontrarás una amplia selección de platos exquisitos de todo el mundo.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Hemos creado una zona especialmente diseñada para grupos grandes, donde pueden disfrutar juntos de una experiencia culinaria inolvidable. Con amplias mesas y un ambiente acogedor. Aquí encontrarás una amplia selección de platos exquisitos de todo el mundo.</div>';
panorama.add(infospot5);

// Zona 6

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-500, 77, 103);
infospot6.addHoverText('En esta área, te invitamos a sumergirte en un mundo de sabores y opciones deliciosas. Aquí encontrarás una amplia selección de platos exquisitos de todo el mundo, dispuestos para que te sirvas y disfrutes a tu antojo. ', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">En esta área, te invitamos a sumergirte en un mundo de sabores y opciones deliciosas. Aquí encontrarás una amplia selección de platos exquisitos de todo el mundo, dispuestos para que te sirvas y disfrutes a tu antojo. </div>';
panorama.add(infospot6);



// Zona 7

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-500, 136, -481);
infospot7.addHoverText('Sube por estas escaleras y adéntrate en un oasis culinario privado, donde podrás disfrutar de una experiencia gastronómica al aire libre como ninguna otra. ', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Sube por estas escaleras y adéntrate en un oasis culinario privado, donde podrás disfrutar de una experiencia gastronómica al aire libre como ninguna otra.  </div>';
panorama.add(infospot7);



viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);