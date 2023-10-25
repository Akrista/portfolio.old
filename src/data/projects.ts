export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "notakrista.com",
    techs: ["react", "docker", "linux"],
    link: "https://www.notakrista.com",
    isComingSoon: true,
  },
  {
    title: "Support for MSSQL on SQLChat",
    techs: ["typescript", "mssql", "docker"],
    link: "https://github.com/Akrista/sqlchat",
  },
  {
    title: "Steam Mini Profile",
    techs: ["html"],
    link: "https://github.com/Akrista/steam-miniprofile",
  },
  {
    title: "Wakfu Music Extractor",
    techs: ["rust"],
    link: "https://github.com/Akrista/wakfu_music_extractor",
  },
  {
    title: "MadGeoTools",
    techs: ["csv", "geojson", "iso-3166-1"],
    link: "https://github.com/Akrista/MadGeoTools",
  },
  {
    title: "MadreSteam",
    techs: ["docker", "linux", "steam"],
    link: "https://github.com/Akrista/madresteam",
  },
  {
    title: "Translation for Bytebase",
    techs: ["json", "translation", "docker"],
    link: "https://github.com/Akrista/bytebase",
  },
];

export default projects;
