type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "info@notakrista.com",
  title: "Hi, I’m Jorge 👋",
  profile: "/profile.svg",
  description:
    "Hola! i'm a *venezuelan devops developer* with over *5 years* of web experience. I am currently working in *TBTBGlobal*. Outside of work I play a lot of games on Steam and write some code for fun.",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/akrista",
    },
    {
      label: "Github",
      link: "https://github.com/akrista",
    },
    {
      label: "Steam",
      link: "https://steamcommunity.com/id/akrista/",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/notakrista",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/akristax",
    },
  ],
};

export default presentation;
