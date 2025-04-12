let input;
let slider;
let button;
let dropdown;
let iframe;

function setup() {
  //產生一個畫布 充滿整個視窗 背景為#9ef01a 
  createCanvas(windowWidth, windowHeight);
  background('#9ef01a');
  
  // 產生一個輸入文字框
  input = createInput();
  input.position(10, 10);
  input.size(300, 80);
  
  // 產生一個滑桿物件
  slider = createSlider(12, 30, 12);
  slider.position(380, 10);
  slider.size(100);
  
  // 產生一個按鈕物件
  button = createButton('跳動');
  button.position(500, 10);
  button.mousePressed(toggleJump);
  
  // 產生一個下拉式選單
  dropdown = createSelect();
  dropdown.position(800, 10);
  dropdown.size(100);
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.changed(openLink);
  
  // 產生一個 iframe
  iframe = createElement('iframe');
  iframe.position(10, 100);
  iframe.size(windowWidth - 20, windowHeight - 120);
}

function toggleJump() {
  jump = !jump;
}

function openLink() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw/');
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  }
}

function draw() {
  background('#9ef01a'); // 重置背景色
  fill(0); // 設置字的顏色為黑色
  
  let textSizeValue = slider.value(); // 獲取滑桿的值
  textSize(textSizeValue); // 設置文字大小
  
  let textContent = input.value(); // 獲取輸入文字框的內容
  let textW = textWidth(textContent);
  let x = 0;
  let y = 100; // 設置 Y 座標為 100
  
  while (y < height) {
    x = 0;
    while (x < width) {
      let yOffset = jump ? random(-5, 5) : 0; // 如果跳動，則設置隨機偏移
      text(textContent, x, y + yOffset);                                                           

      x += textW + 10; // 每次空一格
    }
    y += textSizeValue + textSizeValue; // 每次空一行
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.size(windowWidth - 20, windowHeight - 120);
}
