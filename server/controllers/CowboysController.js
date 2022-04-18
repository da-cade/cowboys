import { send } from "express/lib/response";
import { cowboysService } from "../services/CowboysService";
import BaseController from "../utils/BaseController";

export class CowboysController extends BaseController {
  constructor(){
    super('api/cowboys')
    this.router
      .get('', this.getAllCowboys)
      .get('/:id', this.getCowboyById)
      .post('', this.addCowboy)
      .put('/:id', this.editCowboy)
  }
  async getAllCowboys(req, res, next) {
    try {
      const cowboys = await cowboysService.getAllCowboys()
      res.send(cowboys)
    } catch (error) {
      next(error)
    }
  }
  async getCowboyById(req, res, next) {
    try {
      const cowboyId = req.params.id
      const foundCowboy = await cowboysService.getCowboyById(cowboyId)
      res.send(foundCowboy)
    } catch (error) {
      next(error)
    }
  }
  async addCowboy(req, res, next) {
    try {
      const foundBoy = await cowboysService.addCowboy()
      res.send(foundBoy)
    } catch (error) {
      next(error)
    }
  }
  async editCowboy(req, res, next) {
    try {
      req.body.id = req.params.id
      const editedCowboy = await cowboysService.editCowboy(req.body)
      res.send(editedCowboy)
    } catch (error) {
      next(error)
    }
  }
}