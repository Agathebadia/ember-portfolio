 import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
 async model() {
        return {
      techstack1: [
        {
          src: "assets/images/html5-original.svg",
          height: '60',
          alt: 'HTML5',
        },
        {
          src: "assets/images/css3-original.svg",
          height: '60',
          alt: 'CSS3',
        },
        {
           src: "assets/images/sass.svg",
           height: '80',
          alt: 'Sass'
        },
        {
         src: "assets/images/sass.svg",
          height: '80',
          alt: 'Tailwind'
        }
      ],
      techstack2: [
        {
           src: "assets/images/javascript.svg",
           height: '60',
          alt: 'Javascript'
        },
        {
           src: "assets/images/ember.svg",
           height: '60',
          alt: 'Ember'
        }
      ],
      techstack3: [
        {
           src: "assets/images/git-plain.svg",
           height: '60',
           darkMode: 'yes',
          alt: 'Git'
        },
        {
           src: "assets/images/github-original.svg",
           height: '60',
          alt: 'Github'
        },
        {
           src: "assets/images/bitbucket.svg",
           height: '60',
          alt: 'Bitbucket'
        },
      ],
    };
  }
}
