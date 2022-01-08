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
          id: "",
          src: "assets/images/codestory.png",
          "aria-label": "Check out the podcast on Youtube",
          href: "https://www.youtube.com/watch?v=Sjd60oa5Dt8"
        },
                {
          title: "Becoming A Dev featured in June 2020 Ember Times",
          alt: "Ember Times",
          height: '220',
          id: "photo-cover-fit",
          src: "assets/images/ember-times.png",
          "aria-label": "Check out Ember Times issue of June 2020 with Agathe's project featured",
          href: "https://blog.emberjs.com/the-ember-times-issue-153/"
        },
                {
          title: "My First Developer Job",
          alt: "A cartoonish piggy with glasses and holding a keyboard, with the title of the article in the background",
          src: "assets/images/first-dev-job-stories.png",
          "aria-label": "Check out the 30 stories of junior devs",
          height: '230',
          id: "",
          href: "https://makemoney.dev/blog/first-dev-job-stories"
        },
                {
          title: "Career Switch 'mit Vollgas!",
          alt: "Laptop",
          height: '230',
          id: "",
          flag: "yes",
          src: "assets/images/remote.jpg",
          "aria-label": "Check out Agathe's career switch on the German newspaper called Zukunft Personal",
          href: "https://www.zukunft-personal.com/media/filer_public/e7/32/e7323aed-4864-415c-b68d-beb4a5de39b8/zukunft-personal_media-lounge_pw_hh_09-2020.pdf#Karrierewechsel"
        },
                {
          title: "Interview with DPA - Wie werde ich Softwareentwickler/in?",
          alt: "Agathe posing with a smile at the Le Wagon bootcamp office",
          src: "assets/images/profile-picture.jpg",
          height: '220',
          id: "",
          flag: "yes",
          "aria-label": "Check out Agathe's career switch on the German newspaper called Sud Deutsche Zeitung",
          href: "https://www.sueddeutsche.de/karriere/arbeit-wie-werde-ich-softwareentwickler-in-dpa.urn-newsml-dpa-com-20090101-201023-99-52640"
        },
        {
          title: "IT-Fachkräfte gewinnen: Warum Recruiter Tech-Wissen brauchen",
          alt: "A group of men and woman are looking at a computer screen together",
          src: "assets/images/talente-article.png",
          height: '200',
          id: "",
          flag: "yes",
          "aria-label": "Check out Agathe's article on Tech knowledge for Recruiters on the German news platform called Talente",
          href: "https://talente.co/recruiting/7854/it-fachkraefte-gewinnen/"
        }
      ],
    };
  }
}
