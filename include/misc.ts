type SocialMediaEntry = {
   icon: string;
   title: string;
   href: string;
   custom?: boolean;
};

export const SocialMediaEntries: SocialMediaEntry[] = [
   {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/elkhayder.zakaria",
      title: "Instagram",
   },
   {
      icon: "fab fa-github",
      href: "https://www.github.com/elkhayder",
      title: "Github",
   },
   {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/elkhayderzakaria",
      title: "LinkedIn",
   },
   {
      icon: "fab fa-twitch",
      href: "https://www.twitch.tv/elkhayder",
      title: "Twitch",
   },
   {
      icon: '<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/></svg>',
      href: "https://www.upwork.com/freelancers/~01c002a1361a1c9ab4",
      title: "Upwork",
      custom: true,
   },
];
