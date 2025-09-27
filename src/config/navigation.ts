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
    label: "Who we Serve",
    title: undefined,
    href: PATHS.WHO_WE_SERVE.ROOT,
    hasDropdown: true,
    dropdown: [
      {
        label: "LD & Supported Living",
        href: PATHS.WHO_WE_SERVE.LD_SUPPORTED_LIVING,
      },
      {
        label: "Independent Living",
        href: PATHS.WHO_WE_SERVE.INDEPENDENT_LIVING,
      },
      {
        label: "Elderly Care",
        href: PATHS.WHO_WE_SERVE.ELDERLY_CARE,
      },
      {
        label: "Day Services, Respite, Outpatient & More",
        href: PATHS.WHO_WE_SERVE.DAY_SERVICES,
      },
    ],
  },
  {
    id: "our-solutions",
    label: "Our Solutions",
    title: "Our Solutions",
    href: PATHS.OUR_SOLUTIONS.ROOT,
    hasDropdown: true,
    dropdown: [
      {
        label: "Family Engagement",
        href: PATHS.OUR_SOLUTIONS.FAMILY_ENGAGEMENT,
      },
      {
        label: "Newsletters",
        href: PATHS.OUR_SOLUTIONS.NEWSLETTERS,
      },
      {
        label: "Activity Calendar",
        href: PATHS.OUR_SOLUTIONS.ACTIVITY_CALENDAR,
      },
      {
        label: "Voice Assistants",
        href: PATHS.OUR_SOLUTIONS.VOICE_ASSISTANTS,
      },
      {
        label: "Surveys",
        href: PATHS.OUR_SOLUTIONS.SURVEYS,
      },
      {
        label: "Wellbeing Library",
        href: PATHS.OUR_SOLUTIONS.WELLBEING_LIBRARY,
      },
      {
        label: "Menu",
        href: PATHS.OUR_SOLUTIONS.MENU,
      },
      {
        label: "Content Libraries",
        href: PATHS.OUR_SOLUTIONS.CONTENT_LIBRARIES,
      },
      {
        label: "Concierge",
        href: PATHS.OUR_SOLUTIONS.CONCIERGE,
      },
      {
        label: "Group Intelligence",
        href: PATHS.OUR_SOLUTIONS.GROUP_INTELLIGENCE,
      },
      {
        label: "Branded App",
        href: PATHS.OUR_SOLUTIONS.BRANDED_APP,
      },
      {
        label: "Staff Engagement",
        href: PATHS.OUR_SOLUTIONS.STAFF_ENGAGEMENT,
      },
      {
        label: "Digital Signage",
        href: PATHS.OUR_SOLUTIONS.DIGITAL_SIGNAGE,
      },
      {
        label: "Workflow",
        href: PATHS.OUR_SOLUTIONS.WORKFLOW,
      },
    ],
  },
  {
    id: "customer-testimonials",
    label: "Customer Testimonials",
    title: undefined,
    href: PATHS.CUSTOMER_TESTIMONIALS,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "our-mission",
    label: "Our Mission",
    title: undefined,
    href: PATHS.OUR_MISSION,
    hasDropdown: false,
    dropdown: [],
  },
] as const;

export const MENU_NAVIGATION_ITEMS = [
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    title: "Privacy Policy",
    href: PATHS.PRIVACY_POLICY,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "data-security",
    label: "Data Security",
    title: "Data Security",
    href: PATHS.DATA_SECURITY,
    hasDropdown: false,
    dropdown: [],
  },
];

export const COMPANY_NAVIGATION_ITEMS = [
  {
    id: "customer-testimonials",
    label: "Customer Testimonials",
    title: "Customer Testimonials",
    href: PATHS.CUSTOMER_TESTIMONIALS,
    hasDropdown: false,
    dropdown: [],
  },
  {
    id: "our-mission",
    label: "Our Mission",
    title: "Our Mission",
    href: PATHS.OUR_MISSION,
    hasDropdown: false,
    dropdown: [],
  },
];
