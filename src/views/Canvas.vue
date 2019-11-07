<template>
  <div class="canvas">
    <h2>Bar Chart Example</h2>
    <!-- These are the custom components we'll create -->
    <!-- Values for `my-box` are percentages of the width of the canvas. -->
    <!-- Each bar will take up an equal space of the canvas. -->
    <input type="range" name="points" min="50" max="1400" v-model="circleValues[0].x">
    <my-canvas style="width: 100%; height: 600px;">
      <my-renctangle
        v-for="rectangle in rectangleValues"
        :x="rectangle.x"
        :y="rectangle.y"
        :w="rectangle.w"
        :h="rectangle.h"
        :color="rectangle.color"
      >
      </my-renctangle>
      <my-circle
        v-for="circle in circleValues"
        :x="circle.x"
        :y="circle.y"
        :r="circle.r"
        :color="circle.color"
      >
      </my-circle>
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
  import MyCanvas from '../components/MyCanvas.vue';
  import MyBox from '../components/MyBox.vue';
  import MyCircle from '../components/MyCircle.vue';
  import MyRectangle from '../components/MyRactangle.vue';

  export default {
    components: {
      MyCanvas,
      MyBox,
      MyCircle,
      MyRectangle
    },
    data: function() {
      return {
        rectangleValues: [
          {color: 'red', x: 150, y: 150, w: 70, h: 70}
        ],
        circleValues: [
          {color: 'green', x: 100, y: 100, r: 50}
        ]

      }
    },

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
    // }
  }
</script>
