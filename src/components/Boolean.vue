<template>
  <div>
    <canvas id = "canvas"></canvas>
  </div>
</template>
<script>
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// destination-atop
ctx.globalCompositeOperation = 'destination-atop';

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

// xor
ctx.globalCompositeOperation = 'xor';

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

</script>
