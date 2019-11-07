var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// squares
c.fillStyle = 'rgba(0, 0, 255, 0.3)'
c.fillRect(2, 2, 70, 70);
c.fillStyle = 'rgba(0, 0, 250, 0.3)'
c.fillRect(5, 5, 70, 70);

// triangle
c.beginPath();
c.moveTo(100, 100);
c.lineTo(100, 300);
c.lineTo(300, 300);
c.fillStyle = 'rgba(240, 130, 0, 1.0)'
c.closePath();

// circle
c.beginPath();
c.arc(100, 75, 50, 0, 2 * Math.PI);
c.fillStyle = 'rgba(15, 15, 150, 0.7)'
c.closePath();