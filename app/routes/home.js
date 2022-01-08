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
      ],
      content: [
        {
          title: "Agathe's Diary - Podcast & Tech Stories",
          alt: "Rubber duck with the title of the podcast, Agathe's Diary",
          height: '230',
          src: "assets/images/Agathe-s-Diary.jpg",
          "aria-label": "Visit Agathe's Diary Podcast",
          href: "https://www.buzzsprout.com/1248158"
        },
                {
          title: "Untold Developer Stories - Audio podcast",
          alt: "Glitchy background with a title with a black round centered design 'Untold developer stories",
          height: '230',
          src: "assets/images/untold-stories.jpg",
          "aria-label": "Visit Untold Developer Stories Podcast",
          href: "https://www.buzzsprout.com/979024"
        },
                {
          title: "Untold Developer Stories - Youtube Podcast",
          alt: "Screenshot of Agathe on a Youtube episode of Untold dev stories",
          src: "assets/images/youtube.png",
          "aria-label": "Visit Untold Developer Stories, Youtube podcast",
          height: '230',
          href: "https://www.youtube.com/playlist?list=PLtEPUaeDclkvfFlePNrYqYUrtDhEB6g-I"
        },
                {
          title: "Contributor on cult, Honeypot's Community Platform",
          alt: "Agathe and another student, chatting and looking at a laptop",
          height: '230',
          src: "assets/images/coding-bootcamp.jpg",
          "aria-label": "Check out Agathe's contributions on Honeypot's community platform",
          href: "https://cult.honeypot.io/contributors/agathe-badia"
        },
                {
          title: "Accessible & Inclusive Blog",
          alt: "Agathe sitting at a desk, on her computer",
          src: "assets/images/journey-to-dev.jpg",
          height: '230',
          "aria-label": "Visit Agathe's Accessible Blog",
          href: "https://inclusive-blog-post.netlify.app/"
        }
      ],
      media: [
        {
          title: "My Journey to Tech on CodeStory, with Nathaniel Idahosa",
          alt: "The codestories podcast number 20, in light purple on a black background",
          height: '220',
          src: "assets/images/codestory.png",
          "aria-label": "Check out the podcast on Youtube",
          href: "https://www.youtube.com/watch?v=Sjd60oa5Dt8"
        },
                {
          title: "Untold Developer Stories - Audio podcast",
          alt: "Glitchy background with a title with a black round centered design 'Untold developer stories",
          height: '230',
          src: "assets/images/untold-stories.jpg",
          "aria-label": "Visit Untold Developer Stories Podcast",
          href: "https://www.buzzsprout.com/979024"
        },
                {
          title: "Untold Developer Stories - Youtube Podcast",
          alt: "Screenshot of Agathe on a Youtube episode of Untold dev stories",
          src: "assets/images/youtube.png",
          "aria-label": "Visit Untold Developer Stories, Youtube podcast",
          height: '230',
          href: "https://www.youtube.com/playlist?list=PLtEPUaeDclkvfFlePNrYqYUrtDhEB6g-I"
        },
                {
          title: "Contributor on cult, Honeypot's Community Platform",
          alt: "Agathe and another student, chatting and looking at a laptop",
          height: '230',
          src: "assets/images/coding-bootcamp.jpg",
          "aria-label": "Check out Agathe's contributions on Honeypot's community platform",
          href: "https://cult.honeypot.io/contributors/agathe-badia"
        },
                {
          title: "Accessible & Inclusive Blog",
          alt: "Agathe sitting at a desk, on her computer",
          src: "assets/images/journey-to-dev.jpg",
          height: '230',
          "aria-label": "Visit Agathe's Accessible Blog",
          href: "https://inclusive-blog-post.netlify.app/"
        }
      ],
    };
  }
}
