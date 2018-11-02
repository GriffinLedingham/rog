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
        if(i == 0 || i == (this.width-1)) {
          row.push('|')
        }
        else if(j == 0 || j == (this.height-1)) {
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

  clearCanvas() {
    this.canvas = _.cloneDeep(this.blankCanvas)
  }

  drawCanvas() {
    let renderCanvas = _.zip.apply(_, this.canvas)
    for(let i = 0; i<renderCanvas.length; i++) {
      let rowStr = ''
      for(let j = 0; j<renderCanvas[0].length; j++) {
        rowStr += renderCanvas[i][j]
      }
      console.log(rowStr)
    }
  }
}

export default Terminal