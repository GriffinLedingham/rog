import Canvas from './canvas/canvas'

class Camera {
  public x
  public y
  public canvas

  constructor(canvas: Canvas) {
    this.canvas = canvas
  }

  moveCamera(x,y) {
    this.x = x
    this.y = y
  }

  render() {
    let halfX = Math.round((this.canvas.width - 1)/2)
    let halfY = Math.round((this.canvas.height - 1)/2)
    this.canvas.drawCanvas(
                            this.x - halfX,
                            this.x + halfX,
                            this.y - halfY,
                            this.y + halfY
                          )
  }
}

export default Camera