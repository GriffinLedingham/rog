import Input from './components/input'
import Canvas from './components/canvas/canvas'
import Physics from './components/physics'
import Camera from './components/camera'

class GameEntity {
    public x
    public y
    public velocity
    public input
    public physics
    public camera

    constructor(
                input?: Input,
                physics?: Physics,
                camera?: Camera
              ) {
      if(input != undefined)
        this.input = input
      if(physics != undefined)
        this.physics = physics
      if(camera != undefined)
        this.camera = camera

      this.x = 0
      this.y = 0
      this.velocity = {x:0,y:0}
    }

    public getPos() {
      return {x: this.x, y: this.y}
    }

    public setPos(x,y) {
      this.x  = x
      this.y  = y
    }

    public setVelocity(x,y) {
      this.velocity.x = x
      this.velocity.y = y
    }

    public render(canvas: Canvas) {
      canvas.setCoord(this.x, this.y, this.getSprite())
      if(this.camera != undefined)
        this.camera.moveCamera(this.x, this.y)
    }

    public getSprite() {
      return '#'
    }

    public update() {
      if(this.input != undefined)
        this.input.update(this)

      if(this.physics && this.physics.resolveCollision(this.x, this.y, this.velocity)) {
        this.physics.setDynamicWalkable(this.x, this.y)
        this.moveEntity(this.velocity.x, this.velocity.y)
        this.physics.setDynamicUnwalkable(this.x, this.y)
      }

      this.clearVelocity()
    }

    public moveEntity(xDelta: number, yDelta: number) {
      this.x += xDelta
      this.y += yDelta
    }

    public clearVelocity() {
      this.velocity = {x:0,y:0}
    }
}

export default GameEntity