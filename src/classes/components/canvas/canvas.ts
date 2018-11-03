class Canvas {
  public canvas
  public blankCanvas
  public height
  public width

  constructor(height, width) {
    this.height = height
    this.width = width
    this.canvas = this.generateCanvas()
    this.blankCanvas = this.generateCanvas()
  }

  setCoord(x,y,content) {
    // Extend this
  }

  generateCanvas() {
    // Extend this
  }

  clearCanvas() {
    // Extend this
  }

  drawCanvas(minX,maxX,minY,maxY) {
    // Extend this
  }
}

export default Canvas