<template>
  <div class="canvas">
    <h1>This is Hoggie the stickman.</h1>
    <h2>Hoggie was drawn with a circle and  9 rectangles. </h2>
    <h2>He exist only on this canvas. His head can flow everywhere on the canvas, try to make him invisible.</h2>

    <!-- These are the custom components we'll create -->
    <!-- Values for `my-box` are percentages of the width of the canvas. -->
    <!-- Each bar will take up an equal space of the canvas. -->

    <p>left and right</p><input type="range" name="points" min="50" max="1400" v-model="circleValues[0].x">
    <p>up and down</p><input type="range" name="points" min="0"  max="1000"  v-model="circleValues[0].y">
    <!-- <input type="range" name="points" min="50" max="1400" v-model="rectangleValues[0].x"> -->
    <!-- <input type="range" name="points" min="120"  max="400"  v-model="rectangleValues[0].y"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickraValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickrlValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="sticklaValues[0].x"> -->
    <!-- <input type="range" name="points" min="50" max="1400" v-model="stickllValues[0].x"> -->
    <my-canvas style="width: 100%; height: 1000px;">
      <my-circle
        v-for="circle in circleValues"
        :x="parseInt(circle.x)"
        :y="parseInt(circle.y)"
        :r="parseInt(circle.r)"
        :color="circle.color"
      >
      </my-circle>
      <my-rectangle
        v-for="rectangle in rectangleValues"
        :x="rectangle.x"
        :y="rectangle.y"
        :w="rectangle.w"
        :h="rectangle.h"
        :color="rectangle.color"
      >
      </my-rectangle>
      <my-stickrua
        v-for="stickrua in stickruaValues"
        :x="stickrua.x"
        :y="stickrua.y"
        :w="stickrua.w"
        :h="stickrua.h"
        :color="stickrua.color"
      >
      </my-stickrua>
      <my-sticklua
        v-for="sticklua in stickluaValues"
        :x="sticklua.x"
        :y="sticklua.y"
        :w="sticklua.w"
        :h="sticklua.h"
        :color="sticklua.color"
      >
      </my-sticklua>
      <my-stickrul
        v-for="stickrul in stickrulValues"
        :x="stickrul.x"
        :y="stickrul.y"
        :w="stickrul.w"
        :h="stickrul.h"
        :color="stickrul.color"
      >
      </my-stickrul>
      <my-sticklul
        v-for="sticklul in sticklulValues"
        :x="sticklul.x"
        :y="sticklul.y"
        :w="sticklul.w"
        :h="sticklul.h"
        :color="sticklul.color"
      >
      </my-sticklul>
      <my-stickrla
        v-for="stickrla in stickrlaValues"
        :x="stickrla.x"
        :y="stickrla.y"
        :w="stickrla.w"
        :h="stickrla.h"
        :color="stickrla.color"
      >
      </my-stickrla>
      <my-sticklla
        v-for="sticklla in stickllaValues"
        :x="sticklla.x"
        :y="sticklla.y"
        :w="sticklla.w"
        :h="sticklla.h"
        :color="sticklla.color"
      >
      </my-sticklla>
      <my-stickrll
        v-for="stickrll in stickrllValues"
        :x="stickrll.x"
        :y="stickrll.y"
        :w="stickrll.w"
        :h="stickrll.h"
        :color="stickrll.color"
      >
      </my-stickrll>
      <my-sticklll
        v-for="sticklll in sticklllValues"
        :x="sticklll.x"
        :y="sticklll.y"
        :w="sticklll.w"
        :h="sticklll.h"
        :color="sticklll.color"
      >
      </my-sticklll>
    </my-canvas>
    </my-canvas>
  </div>
</template>

<style>
      canvas {
        border: 3px solid crimson;
        height: 700px;
        width: 1000px;
      }
      body {
        margin: 0px ;
      }
      html, body {
        margin: 0;
        padding: 0;
      }
</style>

<script>
  import MyCanvas      from '../components/MyCanvas.vue';
  import MyBox         from '../components/MyBox.vue';
  import MyCircle      from '../components/MyCircle.vue';
  import MyRectangle   from '../components/MyRectangle.vue';
  import MyStickrua    from '../components/MyStickrua.vue';
  import MySticklua    from '../components/MySticklua.vue';
  import MyStickrul    from '../components/MyStickrul.vue';
  import MySticklul    from '../components/MySticklul.vue';
  import MyStickrla    from '../components/MyStickrla.vue';
  import MySticklla    from '../components/MySticklla.vue';
  import MyStickrll    from '../components/MyStickrll.vue';
  import MySticklll    from '../components/MySticklll.vue';

  export default {
    components: {
      MyCanvas,
      MyBox,
      MyCircle,
      MyRectangle,
      MyStickrua,
      MySticklua,
      MyStickrul,
      MySticklul,
      MyStickrla,
      MySticklla,
      MyStickrll,
      MySticklll
    },
    data: function() {
      return {
        rectangleValues: [
          {color: 'navy', x: 390, y: 200, w: 120, h: 160}
        ],
        circleValues: [
          {color: 'green', x: 450, y: 100, r: 70}
        ],
        stickruaValues: [
          {color: 'red', x: 270, y: 200, w: 120, h: 30}
        ],
        stickluaValues: [
          {color: 'red', x: 510, y: 200, w: 120, h: 30}
        ],
        stickrulValues: [
          {color: 'red', x: 390, y: 360, w: 30, h: 140}
        ],
        sticklulValues: [
          {color: 'red', x: 480, y: 360, w: 30, h: 140}
        ],
        stickrlaValues: [
          {color: 'black', x: 180, y: 200, w: 90, h: 30}
        ],
        stickllaValues: [
          {color: 'black', x: 630, y: 200, w: 90, h: 30}
        ],
        stickrllValues: [
          {color: 'black', x: 390, y: 500, w: 30, h: 90}
        ],
        sticklllValues: [
          {color: 'black', x: 480, y: 500, w: 30, h: 90}
        ]
      }
    },
  }
</script>
<!-- 
    // Randomly selects a value to randomly increment or decrement every 16 ms.
    // Not really important, just demonstrates that reactivity still works.
    // mounted: function() {
    //   let dir = 1;
    //   let selectedVal = Math.floor(Math.random() * this.shapeValues.length);

    //   setInterval(() => {
    //     if (Math.random() > 0.995) dir *= -1;
    //     if (Math.random() > 0.99) selectedVal = Math.floor(Math.random() * this.shapeValues.length);

    //     this.shapeValues[selectedVal].val = Math.min(Math.max(this.shapeValues[selectedVal].val + dir * 0.5, 0), 100);
    //   }, 16);
    // } -->


<!-- ctx.moveTo(300, 0); // pick up "pen," reposition at 300 (horiz), 0 (vert)
    ctx.lineTo(300, 200); // draw straight down (from 300,0) to 200px
    ctx.lineTo(500, 100); // draw up toward right (100 half of 200)
    ctx.fill(); // connect and fill -->