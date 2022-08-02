const titles = 'Toronto ON Canada'
let words
let simplePictures
let cityPictures

let clickCount = 0

function preload() {

  cityPictures = [
    loadImage('https://xiaoyu1013.github.io/Project3-Toronto/assets/bg1.png'),
    loadImage('https://xiaoyu1013.github.io/Project3-Toronto/assets/bg2.png'),
    loadImage('https://xiaoyu1013.github.io/Project3-Toronto/assets/bg3.png')
  ]
  simplePictures = [
  ]
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)


  words = [
    { word: 'City', x: 100, y: 50 },
    { word: 'Covid19 stay at home', x: width - 80, y: height - 80 },
    { word: 'UofT', x: 200, y: 150 },
    { word: 'Collage Life', x: 100, y: 290 },
    { word: 'sterilization', x: 50, y: 200 },
    { word: 'wear mask', x: - 70, y: -150 },
    { word: 'back to school', x: 80, y: 100 },
    { word: 'first dose', x: 100, y: 200 },
    { word: 'second dose', x: - 30, y: 230 },
  ]
}

function draw() {
  background(255)
  if (clickCount == 0) {
    textSize(38)
    text(titles, width / 2, height / 2)
  } else if (clickCount == 1) {
    textSize(30)
    for (let i = 0; i < words.length; i++) {
      text(words[i].word, words[i].x, words[i].y)
    }

    for (let i = 0; i < simplePictures.length; i++) {
      let { x, y, w, h } = simplePictures[i]
      image(simplePictures[i].url, x, y, w, h)
    }
  } else if (clickCount == 2) {
    push()
    imageMode(CENTER)
    let h = width / 1.33
    image(cityPictures[0], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 3) {
    push()
    imageMode(CENTER)
    let h = width
    image(cityPictures[1], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 4) {
    push()
    imageMode(CENTER)
    let h = width
    image(cityPictures[2], width / 2, height / 2, width, h)
    pop()
  }
}

function mouseClicked() {
  if (++clickCount == 5) {
    clickCount = 0
  }
}
