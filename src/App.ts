import Map from './classes/map'
import Player from './classes/entities/player';
import GameEntity from './classes/gameEntity';
import Input from './classes/components/input'
import Canvas from './classes/components/canvas/terminal'
import Physics from './classes/components/physics'
import Camera from './classes/components/camera'

let canvas = new Canvas(process.stdout.rows-1,process.stdout.columns)

let camera = new Camera(canvas)

let physics = new Physics()
let input = new Input()
let player = new Player(input, physics, camera)
player.setPos(10,10)

let enemy = new GameEntity(undefined, physics)
enemy.setPos(20,20)

let gameEntities = []
gameEntities.push(player)
gameEntities.push(enemy)

let map = new Map(process.stdout.rows-1,process.stdout.columns,physics)
let tickLengthMs = 1000 / 60
let previousTick = Date.now()
let actualTicks = 0

class App {
  constructor() {
    gameLoop()
  }
}

let gameLoop = function( ) {
  let now = Date.now()
  actualTicks++
  if (previousTick + tickLengthMs <= now) {
    let delta = (now - previousTick) / 1000
    previousTick = now
    update(delta)
    render(delta)
    actualTicks = 0
  }
  if (Date.now() - previousTick < tickLengthMs - 16) {
    setTimeout(gameLoop)
  } else {
    setImmediate(gameLoop)
  }
}

let update = function( delta ) {
  for(let e in gameEntities) {
    gameEntities[e].update()
  }

  input.clearLastKey()
}

let render = function( delta ) {
  // Wipe canvas before render step
  canvas.clearCanvas()

  // Render map first as lowest level
  map.render(canvas)

  // Render entities over top of map
  for(let e in gameEntities) {
    gameEntities[e].render(canvas)
  }

  // Render canvas once all has been drawn to it
  camera.render()
}

export default App