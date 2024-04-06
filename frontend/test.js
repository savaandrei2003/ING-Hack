let image;
let detector;

function preload() {
  image = loadImage('image.jpg');
  detector = ml5.objectDetector('cocossd');
}

function getDetections(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
}

function setup() {
    createCanvas(640, 420);
    image(image, 0, 0, width, height);
    detector.detect(image, getDetections);
}