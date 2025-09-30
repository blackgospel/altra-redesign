import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
    },
    "/who-we-serve": {
      en: "/who-we-serve",
    },
    "/who-we-serve/ld-supported-living": {
      en: "/who-we-serve/ld-supported-living",
    },
    "/who-we-serve/independent-living": {
      en: "/who-we-serve/independent-living",
    },
    "/who-we-serve/elderly-care": {
      en: "/who-we-serve/elderly-care",
    },
    "/who-we-serve/day-services-respite-outpatient": {
      en: "/who-we-serve/day-services-respite-outpatient",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
    },
    "/data-security": {
      en: "/data-security",
    },
    "/customer-testimonials": {
      en: "/customer-testimonials",
    },
    "/our-mission": {
      en: "/our-mission",
    },
    "/our-solutions": {
      en: "/our-solutions",
    },
    "/our-solutions/family-engagement": {
      en: "/our-solutions/family-engagement",
    },
    "/our-solutions/newsletters": {
      en: "/our-solutions/newsletters",
    },
    "/our-solutions/activity-calendar": {
      en: "/our-solutions/activity-calendar",
    },
    "/our-solutions/voice-assistants": {
      en: "/our-solutions/voice-assistants",
    },
    "/our-solutions/surveys": {
      en: "/our-solutions/surveys",
    },
    "/our-solutions/wellbeing-library": {
      en: "/our-solutions/wellbeing-library",
    },
    "/our-solutions/menu": {
      en: "/our-solutions/menu",
    },
    "/our-solutions/content-libraries": {
      en: "/our-solutions/content-libraries",
    },
    "/our-solutions/concierge": {
      en: "/our-solutions/concierge",
    },
    "/our-solutions/group-intelligence": {
      en: "/our-solutions/group-intelligence",
    },
    "/our-solutions/branded-app": {
      en: "/our-solutions/branded-app",
    },
    "/our-solutions/staff-engagement": {
      en: "/our-solutions/staff-engagement",
    },
    "/our-solutions/digital-signage": {
      en: "/our-solutions/digital-signage",
    },
    "/our-solutions/workflow": {
      en: "/our-solutions/workflow",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
