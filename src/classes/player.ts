import GameEntity from './gameEntity'

class Player extends GameEntity {
  update() {
    this.input.update(this)
    this.movePlayer(this.velocity.x, this.velocity.y)
    this.clearVelocity()
  }

  movePlayer(xDelta: number, yDelta: number) {
    this.x += xDelta
    this.y += yDelta
  }

  clearVelocity() {
    this.velocity = {x:0,y:0}
  }

  render() {
    return '*'
  }
}

export default Player