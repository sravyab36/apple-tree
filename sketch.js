//const imgs = []
const numImgs = 29
const imgs = Array.from({ length: numImgs})
let imageCounter = 0
let currentDirection = 1
let img

function preload(){
    //load the images
    imgs.forEach((img, i) => imgs[i] = (loadImage(`piskel/sprite_apple_tree${i}.png`)))
    console.log(imgs)
}

function setup(){
    createCanvas(1024, 1024);
    frameRate(3);
}

function draw(){
    //draw an image from the array of images
    image(imgs[imageCounter % imgs.length], 0, 0, 1024, 1024);
    imageCounter++
    // direction = nextDirection(imageCounter, currentDirection, 0, imgs.length - 1)
    // console.log(direction)
    // imageCounter+= direction;
    console.log(imageCounter)
}

// // Returns the next direction to take depending on whether we've hit our upper or lower bounds
// const nextDirection = (count, direction, lo, hi) => {
//     if(direction > 0 &&  count >= hi){
//         return direction *= -1
//     } else if(direction < 0 && count === lo){
//         return direction *= -1
//     } else {
//         return direction
//     }
// }