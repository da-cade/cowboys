import { CowboyDB } from "../db/CowboyDB";
import { NotFound } from "../utils/Errors";

class CowboysService {
  getAllCowboys() {
    return CowboyDB.cowboys
  }
  getCowboyById(cowboyId) {
    let foundBoy = CowboyDB.cowboys.find(c => c.id === cowboyId)
    if(!foundBoy){
      throw new NotFound("We couldn't find that boyo")
    }
    return foundBoy
  }
  addCowboy() {
    
  }
  editCowboy(newCowboy) {
    let ogBoy = this.getCowboyById(newCowboy.id)
    ogBoy.name = newCowboy.name || ogBoy.name
    ogBoy.mount = newCowboy.mount || ogBoy.mount
    ogBoy.weapon = newCowboy.weapon || ogBoy.weapon
    ogBoy.id = newCowboy.id || ogBoy.id
    return newCowboy
  }
}

export const cowboysService = new CowboysService();