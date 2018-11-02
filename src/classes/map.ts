import * as _ from 'lodash'

class Map {
  private grid
  private players
  private height
  private width
  private map

  constructor(height, width) {
    this.height = height
    this.width = width
    this.players = []
    this.map = this.buildCleanMap(this.height,this.width)
  }

  public addPlayer(player) {
    this.players.push(player)
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
    for(let p = 0; p < this.players.length; p++) {
      let coords = this.players[p].getCoords()
      workingMap[coords.x][coords.y] = '*'
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