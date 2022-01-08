import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
        return {
      project: [
        {
          title: "Colorblindness Emulator, Ember App",
          alt: "Preview of the emulator",
          src: "assets/images/color-preview.png",
          "aria-label": "Colorblindness Emulator. Will open in a new window",
          href: "https://colorblindness-emulator.netlify.app/",
        },
        {
          title: "Dev Stories, Ember App",
          alt: "Preview of the landing page",
          src: "assets/images/becoming-a-dev.png",
          "aria-label": "Visit Dev Stories Project",
          href: "https://becoming-a-developer.netlify.app/"
        },
        {
          title: "Text-RPG, Javascript",
          alt: "Preview of the app",
          src: "assets/images/dev-knight-adv.png",
          "aria-label": "Visit Dev Knight Adventure Project",
          href: "https://dev-knight-adventure.netlify.app/"
        },
        {
          title: "Bootcamp final app, two weeks project",
          alt: "Preview of the app",
          src: "assets/images/oja.png",
          "aria-label": "Visit Github repository of Interview tracker project",
          href: "https://github.com/Agathebadia/interview_tracker"
        },
        {
          title: "Bootcamp app, one week project",
          alt: "Preview of the app",
          src: "assets/images/tooli.png",
          "aria-label": "Visit Tooli Project",
          href: "https://tooli-capmarvel.herokuapp.com/"
        },
      ]
    };
  }
}
