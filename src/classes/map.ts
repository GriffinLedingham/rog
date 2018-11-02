import * as _ from 'lodash'
import Canvas from './components/canvas/canvas'

class Map {
  private grid
  private height
  private width
  private map

  constructor(height, width) {
    this.height = height
    this.width = width
    this.map = this.buildCleanMap(this.height,this.width)
  }

  buildCleanMap(height, width) {
    let grid = []
    for(let i = 0; i< width; i++) {
      let row = []
      for(let j = 0; j< height; j++) {
        if(i == 0 || i == (width-1)) {
          row.push('|')
        }
        else if(j == 0 || j == (height-1)) {
          row.push('-')
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