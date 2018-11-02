import Input from './components/input'

class GameEntity {
    public x
    public y
    public velocity
    public input

    constructor(input?: Input) {
      if(input != undefined)
        this.input = input

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

    public render() {
      return '#'
    }
}

export default GameEntity