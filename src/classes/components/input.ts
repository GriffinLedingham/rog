import * as keypress from 'keypress'
import GameEntity from '../GameEntity'
import { SIGKILL } from 'constants';

class InputComponent {
  public lastKey
  constructor() {
    keypress(process.stdin);

    process.stdin.on('keypress', (ch, key) => {
      this.setLastKey(key.name)
      if (key && key.ctrl && key.name == 'c') {
        process.exit()
      }
    })

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }

  update(gameEntity: GameEntity) {
    let key = this.getLastKey()
    switch(key) {
      case 'up':
        gameEntity.setVelocity(0,-1)
        break
      case 'down':
        gameEntity.setVelocity(0,1)
        break
      case 'left':
        gameEntity.setVelocity(-1,0)
        break
      case 'right':
        gameEntity.setVelocity(1,0)
        break
    }
  }

  setLastKey(key) {
    this.lastKey = key
  }

  public getLastKey() : string {
    let lastKey = this.lastKey
    this.lastKey = false
    return lastKey
  }
}

export default InputComponent