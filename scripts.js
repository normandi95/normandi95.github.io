let currentPhoto = 0;
let imagesData = [
    { photo: 'images/bunny.jpg', title: 'Bunny', description: "Rabbits, or bunnies, are small mammals in the family Leporidae (along with the hare) of the order Lagomorpha (along with the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit." }, 
    { photo: 'images/butterfly.jpg', title: 'Butterfly', description: "Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight." }, 
    { photo: 'images/hills.jpg', title: 'Hills', description: "For a while, the U.S. defined a mountain as being 1,000 feet (304.8 m) or more tall. Any similar landform lower than this height was considered a hill. The United States Geological Survey (USGS), however, has concluded that these terms do not in fact have technical definitions in the U.S." }, 
    { photo: 'images/northern_lights.jpg', title: 'Northern Lights', description: "An aurora (plural: auroras or aurorae), sometimes referred to as polar lights (aurora polaris), northern lights (aurora borealis), or southern lights (aurora australis), is a natural light display in Earth's sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic). Auroras display dynamic patterns of brilliant lights that appear as curtains, rays, spirals or dynamic flickers covering the entire sky." }, 
    { photo: 'images/ocean.jpg', title: 'Ocean', description: "The ocean (also the sea or the world ocean) is the body of salt water which covers approximately 71% of the surface of the Earth and contains 97% of Earth's water. Another definition is 'any of the large bodies of water into which the great ocean is divided'." },    
    { photo: 'images/sky.jpg', title: 'Sky', description: "In the field of astronomy, the sky is also called the celestial sphere. This is an abstract sphere, concentric to the Earth, on which the Sun, Moon, planets, and stars appear to be drifting. The celestial sphere is conventionally divided into designated areas called constellations." },   
    { photo: 'images/tiger.jpg', title: 'Tiger', description: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring." },  
    { photo: 'images/waterfall.jpg', title: 'Waterfall', description: "Waterfalls are commonly formed in the upper course of a river where lakes flow into valleys in steep mountains. Because of their landscape position, many waterfalls occur over bedrock fed by little contributing area, so they may be ephemeral and flow only during rainstorms or significant snowmelt. The further downstream, the more perennial a waterfall can be. Waterfalls can have a wide range of widths and depths." },        

];
$('#big_picture').attr('src', imagesData[currentPhoto].photo);
$('#photo_title').text(imagesData[currentPhoto].title);
$('#photo_description').text(imagesData[currentPhoto].description);

$('#arrow_right').click(function() {
    if (currentPhoto < 7) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }   else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    } 
})
$('#arrow_left').click(function() {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    }   else {
        currentPhoto = 7;
        loadPhoto(currentPhoto);
    }
})
let loadPhoto = (photoNumber) => {
    $('#big_picture').attr('src', imagesData[photoNumber].photo);
    $('#photo_title').text(imagesData[photoNumber].title);
    $('#photo_description').text(imagesData[photoNumber].description);
    $('.thumbnail_div').attr('id', "");
    $('#' + index).parent().attr('id', 'active_arrow');
  }


let thumbnailsData = [
    { photo: 'images/thumbnails/bunny.jpg', title: 'Bunny'},
    { photo: 'images/thumbnails/butterfly.jpg', title: 'Butterfly'},
    { photo: 'images/thumbnails/hills.jpg', title: 'Hills'},
    { photo: 'images/thumbnails/northern_lights.jpg', title: 'Northern Lights'},
    { photo: 'images/thumbnails/ocean.jpg', title: 'Ocean'},
    { photo: 'images/thumbnails/sky.jpg', title: 'Sky'},
    { photo: 'images/thumbnails/tiger.jpg', title: 'Tiger'},
    { photo: 'images/thumbnails/waterfall.jpg', title: 'Waterfall'}
];
let index = 0;
for (let index = 0; index < thumbnailsData.length; index++) {
    $('#bottom').append(`<div class="thumbnail_div" id=""><div id="thumbnail_${index}" class="thumbnail_title"><p>${thumbnailsData[index].title}</p></div><img id="${index}" data-number="${index}" src="${thumbnailsData[index].photo}"></div>`);
}
loadPhoto(currentPhoto);
$('#bottom img').click(function() {
    currentPhoto = $(this).data('number')
    loadPhoto(currentPhoto);
    $('.thumbnail_div').attr('id', "")
    $(this).parent().attr('id', 'active_arrow')
})
let tn;
$("#bottom img").hover(function(){
    tn = "thumbnail_"+this.id
    $(`#${tn}`).css("display", "block")
    }, function(){
        $(".thumbnail_title").css("display", "none")
        tn =""
  });