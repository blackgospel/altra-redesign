import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      fr: "/",
    },
    "/who-we-serve": {
      en: "/who-we-serve",
      fr: "/a-qui-nous-nous-adressons",
    },
    "/who-we-serve/ld-supported-living": {
      en: "/who-we-serve/ld-supported-living",
      fr: "/a-qui-nous-nous-adressons/handicap-vie-accompagnee",
    },
    "/who-we-serve/independent-living": {
      en: "/who-we-serve/independent-living",
      fr: "/a-qui-nous-nous-adressons/village-autonome-retraite",
    },
    "/who-we-serve/elderly-care": {
      en: "/who-we-serve/elderly-care",
      fr: "/a-qui-nous-nous-adressons/soins-personnes-agees",
    },
    "/who-we-serve/day-services-respite-outpatient": {
      en: "/who-we-serve/day-services-respite-outpatient",
      fr: "/a-qui-nous-nous-adressons/accueil-jour-hebergement-temporaire",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      fr: "/politique-confidentialite",
    },
    "/data-security": {
      en: "/data-security",
      fr: "/securite-donnees",
    },
    "/customer-testimonials": {
      en: "/customer-testimonials",
      fr: "/temoignages-clients",
    },
    "/our-mission": {
      en: "/our-mission",
      fr: "/notre-mission",
    },
    "/our-solutions": {
      en: "/our-solutions",
      fr: "/nos-solutions",
    },
    "/our-solutions/family-engagement": {
      en: "/our-solutions/family-engagement",
      fr: "/nos-solutions/engagement-famille",
    },
    "/our-solutions/newsletters": {
      en: "/our-solutions/newsletters",
      fr: "/nos-solutions/gazettes",
    },
    "/our-solutions/activity-calendar": {
      en: "/our-solutions/activity-calendar",
      fr: "/nos-solutions/calendrier-activites",
    },
    "/our-solutions/voice-assistants": {
      en: "/our-solutions/voice-assistants",
      fr: "/nos-solutions/assistant-vocal-alexa",
    },
    "/our-solutions/surveys": {
      en: "/our-solutions/surveys",
      fr: "/nos-solutions/questionnaires",
    },
    "/our-solutions/wellbeing-library": {
      en: "/our-solutions/wellbeing-library",
      fr: "/nos-solutions/bibliotheque-bien-etre",
    },
    "/our-solutions/menu": {
      en: "/our-solutions/menu",
      fr: "/nos-solutions/menus",
    },
    "/our-solutions/content-libraries": {
      en: "/our-solutions/content-libraries",
      fr: "/nos-solutions/bibliotheques-contenu",
    },
    "/our-solutions/concierge": {
      en: "/our-solutions/concierge",
      fr: "/nos-solutions/conciergerie",
    },
    "/our-solutions/group-intelligence": {
      en: "/our-solutions/group-intelligence",
      fr: "/nos-solutions/gestion-centralisee-groupes",
    },
    "/our-solutions/branded-app": {
      en: "/our-solutions/branded-app",
      fr: "/nos-solutions/application-marque-blanche",
    },
    "/our-solutions/staff-engagement": {
      en: "/our-solutions/staff-engagement",
      fr: "/nos-solutions/engagement",
    },
    "/our-solutions/digital-signage": {
      en: "/our-solutions/digital-signage",
      fr: "/nos-solutions/affichage-numerique",
    },
    "/our-solutions/workflow": {
      en: "/our-solutions/workflow",
      fr: "/nos-solutions/gestion-parcours",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
