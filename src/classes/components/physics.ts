class Physics {
  public fixedUnwalkable
  public dynamicUnwalkable

  constructor() {
    this.fixedUnwalkable = []
    this.dynamicUnwalkable = []
  }

  public resolveCollision(x,y,velocity) {
    if(velocity.x == 0 && velocity.y == 0) return true
    return this.isTileWalkable(x+velocity.x,y+velocity.y)
  }

  isTileWalkable(x,y) {
    let result = true
    for(let i in this.fixedUnwalkable) {
      if(this.fixedUnwalkable[i].x == x
        && this.fixedUnwalkable[i].y == y) {
        result = false
        break
      }
    }
    if(result) {
      for(let j in this.dynamicUnwalkable) {
        if(this.dynamicUnwalkable[j].x == x
          && this.dynamicUnwalkable[j].y == y) {
          result = false
          break
        }
      }
    }
    return result
  }

  public setFixedUnwalkable(x,y) {
    this.fixedUnwalkable.push({x:x,y:y})
  }

  public setDynamicUnwalkable(x,y) {
    this.dynamicUnwalkable.push({x:x,y:y})
  }

  public setDynamicWalkable(x,y) {
    for(let i in this.dynamicUnwalkable) {
      if(this.dynamicUnwalkable[i].x == x
          && this.dynamicUnwalkable[i].y == y) {
        this.dynamicUnwalkable.splice(i,1)
      }
    }
  }

  public clearDynamicUnwalkable() {
    this.dynamicUnwalkable = []
  }
}

export default Physics