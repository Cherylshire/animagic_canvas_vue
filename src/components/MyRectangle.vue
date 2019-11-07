<script>

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

    // End coordinates (percentage of canvas dimensions).
    w: {
      type: Number,
      default: 0
    },
    h: {
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
      oldRectangle: {
        x: null,
        y: null,
        w: null,
        h: null
      }
    }
  },

  computed: {
    calculatedRectangle () {
      const ctx = this.provider.context

      // Turn start / end percentages into x, y, width, height in pixels.
      const calculated = {
        x: this.x,
        y: this.y,
        w: this.w,
        h: this.h
      }

      // Yes yes, side-effects. This lets us cache the box dimensions of the previous render.
      // before we re-calculate calculatedRectangle the next render.
      this.oldRectangle = calculated
      return calculated
    }
  },

  render: function() {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if(!this.provider.context) return;
    const ctx = this.provider.context;

    // Keep a reference to the box used in the previous render call.
    const oldRectangle = this.oldRectangle
    // Calculate the new box. (Computed properties update on-demand.)
    const newRectangle = this.calculatedRectangle

    ctx.beginPath();
    // Clear the old area from the previous render.
    ctx.clearRect(oldRectangle.x, oldRectangle.y, oldRectangle.w, oldRectangle.h);
    // Clear the area for the text.
    // ctx.clearRect(newRectangle.x, newRectangle.y - 42, newRectangle.w, 100);

    // Draw the new rectangle.
    ctx.rect(newRectangle.x, newRectangle.y, newRectangle.w, newRectangle.h);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
</script>