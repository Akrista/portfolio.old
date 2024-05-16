import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'notAkrista',
  subtitle: 'Jorge Thomas Portfolio',
  lang: 'en',
  themeHue: 50,
  banner: {
    enable: false,
    src: 'assets/images/banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/akrista/notakrista.com',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',
  name: 'Jorge Thomas',
  bio: 'Venezuelan DevOps Engineer, fan of technology, music, and video games.',
  links: [
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/akrista',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/akrista',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/id/akrista',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/notakrista',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/akristax',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
