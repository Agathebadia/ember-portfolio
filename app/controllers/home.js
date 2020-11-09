import Controller from "@ember/controller";
import { action } from '@ember/object'

export default class HomeController extends Controller {
  isToggled = false;

  @action
  toggleColor() {
    this.set('isToggled', !this.isToggled)
  }
}
