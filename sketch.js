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
    console.log(imageCounter)
}

const JohnnyAppleseed = {
    greeting: "Hi! My name is Johnny Appleseed.",
    occupation: 'apple tree planting',
    location: Pennsylania,
    direction: 'South',
    waterSoil: () => {
        location.soil == "fertile";
    },
    plantSeed: (seed) => {
        if (location.soil == "fertile") {
            location.soil == "occupied";
        } else if (location.soil == "dry") {
            waterSoil();
        }
    },
    goal: "I want to plant apple trees on all the open land!",
    goal_achieved: False 
}