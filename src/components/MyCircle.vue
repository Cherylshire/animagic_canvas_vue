<script>
// Note how there's no template or styles in this component.

export default {
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],

  props: {
    // Start coordinates (percentage of canvas dimensions).
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },

    // radius of the circle
    r: {
      type: Number,
      default: 0
    },

    // The color of the box.
    color: {
      type: String,
      default: '#F00'
    }
  },

  data: function() {
    return {
      // We cache the dimensions of the previous
      // render so that we can clear the area later.
      oldArc: {
        x: null,
        y: null,
        r: null
      }
    }
  },

  computed: {
    calculatedBox () {
      const atx = this.provider.context

      // Turn start / end percentages into x, y, width, height in pixels.
      const calculated = {
        x: this.x,
        y: this.y,
        r: this.r
      }

      // Yes yes, side-effects. This lets us cache the box dimensions of the previous render.
      // before we re-calculate calculatedBox the next render.
      this.oldArc = calculated
      return calculated
    }
  },

  render: function() {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if(!this.provider.context) return;
    const atx = this.provider.context;

    // Keep a reference to the box used in the previous render call.
    const oldArc = this.oldArc
    // Calculate the new circle. (Computed properties update on-demand.)
    const newArc = this.calculatedBox

    atx.beginPath();
    // Clear the old area from the previous render.
    atx.clearRect(oldArc.x - oldArc.r, oldArc.y - oldArc.r, oldArc.x + oldArc.r , oldArc.y + oldArc.r );

    // Draw the new circle.
    atx.arc(newArc.x, newArc.y, newArc.r, 0, 2 * Math.PI);
    atx.fillStyle = this.color;
    atx.fill();
    atx.closePath();
  }
}

// // squares
// c.fillStyle = 'rgba(0, 0, 255, 0.3)'
// c.fillRect(2, 2, 70, 70);
// c.fillStyle = 'rgba(0, 0, 250, 0.3)'
// c.fillRect(5, 5, 70, 70);

// // circle
// c.beginPath();
</script>
