import Controller from "@ember/controller";
import { action } from '@ember/object'

export default class AboutController extends Controller {
  isToggled = false;

  @action
  toggleColor() {
    this.set('isToggled', !this.isToggled)
  }
}
