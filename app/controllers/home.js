import Controller from "@ember/controller";
import { action } from '@ember/object'

export default class HomeController extends Controller {
  isToggled = false;
  // constructor() {
  //   super(...arguments);
  //   this.isToggled = false;
  // }
  @action
  toggleColor() {
    // this.isToggled = !this.isToggled;
    this.set('isToggled', !this.isToggled)
    // $('.banner').toggleClass('purple-color-scheme', this.isToggled);
  }
}
