import Canvas from './canvas'
import * as _ from 'lodash'

class Terminal extends Canvas {
  setCoord(x,y,content) {
    this.canvas[x][y] = content
  }

  generateCanvas() {
    let grid = []
    for(let i = 0; i< this.width; i++) {
      let row = []
      for(let j = 0; j< this.height; j++) {
        row.push(false)
      }
      grid.push(row)
    }
    return grid
  }

  clearCanvas() {
    this.canvas = _.cloneDeep(this.blankCanvas)
  }

  drawCanvas(minX,maxX,minY,maxY) {
    if(minY < 0) {
      for(let k = 0;k<(0-minY);k++) {
        console.log('')
      }
    }
    let renderCanvas = _.zip.apply(_, this.canvas)
    for(let i = Math.max(0,minY); i<Math.min(maxY,renderCanvas.length); i++) {
      let rowStr = ''
      for(let j = Math.max(0,minX); j<Math.min(maxX,renderCanvas[0].length); j++) {
        rowStr += renderCanvas[i][j]
      }
      if(minX < 0) {
        for(let k = 0;k<(0-minX);k++) {
          rowStr = ' ' + rowStr
        }
      }
      if(maxX > this.width) {
        for(let k = 0;k<(maxX-this.width);k++) {
          rowStr = rowStr + ' '
        }
      }
      console.log(rowStr)
    }
    if(maxY > this.height) {
      for(let k = 0;k<(maxY-this.height);k++) {
        console.log('')
      }
    }
  }
}

export default Terminal