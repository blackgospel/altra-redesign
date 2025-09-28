export type INavigationItem = (typeof NAVIGATION_ITEMS)[number];

export type INavigationDropdown = (typeof NAVIGATION_ITEMS)[number]["dropdown"];

export type INavigationDropdownItem = INavigationDropdown[number];

export type IMenuNavigationItem = (typeof MENU_NAVIGATION_ITEMS)[number];

export type ICompanyNavigationItem = (typeof COMPANY_NAVIGATION_ITEMS)[number];

export const PATHS = {
  HOME: "/",
  WHO_WE_SERVE: {
    ROOT: "/who-we-serve",
    LD_SUPPORTED_LIVING: "/who-we-serve/ld-supported-living",
    INDEPENDENT_LIVING: "/who-we-serve/independent-living",
    ELDERLY_CARE: "/who-we-serve/elderly-care",
    DAY_SERVICES: "/who-we-serve/day-services-respite-outpatient",
  },
  OUR_SOLUTIONS: {
    ROOT: "/our-solutions",
    FAMILY_ENGAGEMENT: "/our-solutions/family-engagement",
    NEWSLETTERS: "/our-solutions/newsletters",
    ACTIVITY_CALENDAR: "/our-solutions/activity-calendar",
    VOICE_ASSISTANTS: "/our-solutions/voice-assistants",
    SURVEYS: "/our-solutions/surveys",
    WELLBEING_LIBRARY: "/our-solutions/wellbeing-library",
    MENU: "/our-solutions/menu",
    CONTENT_LIBRARIES: "/our-solutions/content-libraries",
    CONCIERGE: "/our-solutions/concierge",
    GROUP_INTELLIGENCE: "/our-solutions/group-intelligence",
    BRANDED_APP: "/our-solutions/branded-app",
    STAFF_ENGAGEMENT: "/our-solutions/staff-engagement",
    DIGITAL_SIGNAGE: "/our-solutions/digital-signage",
    WORKFLOW: "/our-solutions/workflow",
  },
  CUSTOMER_TESTIMONIALS: "/customer-testimonials",
  OUR_MISSION: "/our-mission",
  PRIVACY_POLICY: "/privacy-policy",
  DATA_SECURITY: "/data-security",
  TERMS_OF_SERVICE: "/terms-of-service",
} as const;

export const NAVIGATION_ITEMS = [
  {
    id: "who-we-serve",
    href: PATHS.WHO_WE_SERVE.ROOT,
    hasDropdown: true,
    dropdown: [
      {
        href: PATHS.WHO_WE_SERVE.LD_SUPPORTED_LIVING,
      },
      {
        href: PATHS.WHO_WE_SERVE.INDEPENDENT_LIVING,
      },
      {
        href: PATHS.WHO_WE_SERVE.ELDERLY_CARE,
      },
      {
        href: PATHS.WHO_WE_SERVE.DAY_SERVICES,
      },
    ],
  },
  {
    id: "our-solutions",
    href: PATHS.OUR_SOLUTIONS.ROOT,
    hasDropdown: true,
    dropdown: [
      {
        href: PATHS.OUR_SOLUTIONS.FAMILY_ENGAGEMENT,
      },
      {
        href: PATHS.OUR_SOLUTIONS.NEWSLETTERS,
      },
      {
        href: PATHS.OUR_SOLUTIONS.ACTIVITY_CALENDAR,
      },
      {
        href: PATHS.OUR_SOLUTIONS.VOICE_ASSISTANTS,
      },
      {
        href: PATHS.OUR_SOLUTIONS.SURVEYS,
      },
      {
        href: PATHS.OUR_SOLUTIONS.WELLBEING_LIBRARY,
      },
      {
        href: PATHS.OUR_SOLUTIONS.MENU,
      },
      {
        href: PATHS.OUR_SOLUTIONS.CONTENT_LIBRARIES,
      },
      {
        href: PATHS.OUR_SOLUTIONS.CONCIERGE,
      },
      {
        href: PATHS.OUR_SOLUTIONS.GROUP_INTELLIGENCE,
      },
      {
        href: PATHS.OUR_SOLUTIONS.BRANDED_APP,
      },
      {
        href: PATHS.OUR_SOLUTIONS.STAFF_ENGAGEMENT,
      },
      {
        href: PATHS.OUR_SOLUTIONS.DIGITAL_SIGNAGE,
      },
      {
        href: PATHS.OUR_SOLUTIONS.WORKFLOW,
      },
    ],
  },
  {
    id: "customer-testimonials",
    href: PATHS.CUSTOMER_TESTIMONIALS,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "our-mission",
    href: PATHS.OUR_MISSION,
    hasDropdown: false,
    dropdown: [],
  },
] as const;

export const MENU_NAVIGATION_ITEMS = [
  {
    id: "privacy-policy",
    href: PATHS.PRIVACY_POLICY,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "data-security",
    href: PATHS.DATA_SECURITY,
    hasDropdown: false,
    dropdown: [],
  },
];

export const COMPANY_NAVIGATION_ITEMS = [
  {
    id: "customer-testimonials",
    href: PATHS.CUSTOMER_TESTIMONIALS,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "our-mission",
    href: PATHS.OUR_MISSION,
    hasDropdown: false,
    dropdown: [],
  },
];
