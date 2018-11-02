import * as _ from 'lodash'

class Map {
  private grid
  private entities
  private height
  private width
  private map

  constructor(height, width) {
    this.height = height
    this.width = width
    this.entities = []
    this.map = this.buildCleanMap(this.height,this.width)
  }

  public addEntity(entity) {
    this.entities.push(entity)
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

  render() {
    let workingMap = _.cloneDeep(this.map)
    for(let p = 0; p < this.entities.length; p++) {
      let coords = this.entities[p].getPos()
      workingMap[coords.x][coords.y] = this.entities[p].render()
    }

    let renderGrid = _.zip.apply(_, workingMap)
    for(let i = 0; i<renderGrid.length; i++) {
      let rowStr = ''
      for(let j = 0; j<renderGrid[0].length; j++) {
        rowStr += renderGrid[i][j]
      }
      console.log(rowStr)
    }
  }
}

export default Map