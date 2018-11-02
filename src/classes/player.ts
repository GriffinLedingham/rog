class Player {
  private x
  private y

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  movePlayer(xDelta: number, yDelta: number) {
    this.x += xDelta
    this.y += yDelta
  }

  public getCoords() {
    return {x: this.x, y: this.y}
  }

  public processInput(key) {
    if(key) {
      switch(key) {
        case 'up':
          this.movePlayer(0,-1)
          break
        case 'down':
          this.movePlayer(0,1)
          break
        case 'left':
          this.movePlayer(-1,0)
          break
        case 'right':
          this.movePlayer(1,0)
          break
      }
    }
  }
}

export default Player