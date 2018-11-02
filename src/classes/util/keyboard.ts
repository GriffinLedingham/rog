import * as keypress from 'keypress'
import { SIGKILL } from 'constants';

class Keyboard {
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

  setLastKey(key) {
    this.lastKey = key
  }

  public getLastKey() : string {
    let lastKey = this.lastKey
    this.lastKey = false
    return lastKey
  }
}

export default Keyboard