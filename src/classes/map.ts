import * as _ from 'lodash'
import Canvas from './components/canvas/canvas'

class Map {
  private grid
  public  height
  public  width
  private map
  private physics

  constructor(height, width, physics?) {
    this.height = height
    this.width = width
    if(physics != undefined)
      this.physics = physics
    this.map = this.buildCleanMap(this.height,this.width)
  }

  buildCleanMap(height, width) {
    let grid = []
    for(let i = 0; i< width; i++) {
      let row = []
      for(let j = 0; j< height; j++) {
        if(i == 0 || i == (width-1)) {
          row.push('|')
          this.physics.setFixedUnwalkable(i,j)
        }
        else if(j == 0 || j == (height-1)) {
          row.push('-')
          this.physics.setFixedUnwalkable(i,j)
        }
        else {
          row.push(' ')
        }
      }
      grid.push(row)
    }
    return grid
  }

  render(canvas: Canvas) {
    for(let i = 0; i<this.map.length; i++) {
      for(let j = 0; j<this.map[0].length; j++) {
        canvas.setCoord(i,j,this.map[i][j])
      }
    }
  }
}

export default Map