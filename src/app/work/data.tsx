export type Platform = "Mobile" | "Web" | "Desktop" | "Web & Mobile";

export interface UserPersona {
  name: string;
  age: number;
  occupation: string;
  goals: string[];
  painPoints: string[];
  quote: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  platform: Platform;
  year: string;
  cover: string;
  pageCover: string;
  href: string;
  slug: string;
  projectType: "Case Study" | "Assessment" | "Freelance";
  

  // Meta strip
  role: string;
  tools: string[];
  figmaLink?: string;
  liveLink?: string;

  // Case study sections
  introduction: string;
  problem: string;
  goal: string;
  research: string;
  targetUsers: string;
  userPersona: UserPersona;
  wireframes: string;
  uiDesign: string;
  designDecision: string;
  outcome: string;

  // Images
  wireframeImages: string[];
  uiImages: string[];
}

export const projects: Project[] = [
  {
    title: "Vithursha Kamaleswaran-Personal Blog Publishing Site",
    description:
      "A content-focused blog platform designed to deliver a clean reading experience with strong visual hierarchy and easy navigation.",
    tags: ["UX Research", "UI Design","Development"],
    platform: "Web",
    year: "2025",
    cover: "/front2.jpeg",
    pageCover: "/vithursha/cover.jpeg",
    href: "/work/vithursha-blog",
    slug: "vithursha-blog",
    projectType: "Freelance",

    role: "UI/UX Designer & Developer",
    tools: ["Figma", "Notion", "Next.js","Tailwind CSS","Strapi"],
    figmaLink: "https://www.figma.com/design/CTCm6q7BMlzJY1KOdmckY5/Vithursha-s-Blog-Publishing-Site?node-id=0-1&t=thgFBxiPMElnvgxa-1",
    liveLink: "https://vithurshakamaleswaran.com",

    introduction:
      "This personal blog publishing platform was designed for Ms. Vithursha Kamaleswaran based on her requirement for a dedicated space to publish and share her content. As an active blogger, she wanted full ownership of her platform instead of relying on third-party services.<br><br>A key requirement was simplicity-since she has limited familiarity with modern technologies, the platform needed to be easy to manage while still offering flexibility in content presentation. This project was developed to create a clean, user-friendly, and customizable blogging experience tailored to her needs.",
    problem:
      "Existing blogging platforms did not fully meet the client’s expectations. Many required paid subscriptions to access essential features, while others offered complex interfaces that were not suitable for her level of technical knowledge.<br><br>Additionally, the client preferred a specific content structure and visual hierarchy that was not easily achievable using standard templates. Therefore, a custom solution was required to provide both flexibility and simplicity while keeping costs minimal.<br><br>To address these challenges, I decided to design and develop the platform using Next.js and Strapi CMS, enabling full control over both design and content management.",
    goal:
      "<p>The goal was to design a blog experience that:<p><ul><li>Enhances readability and content focus</li><li>Provides clear navigation across articles and categories</li><li>Maintains a consistent and visually appealing layout</li><li>Ensures ease of use for non-technical users</li>",
    research:
      "<p>To better understand user needs, I analyzed popular blogging platforms such as WordPress, Medium, and Blogger. While these platforms provide powerful features, many users find them overwhelming due to complex interfaces and unnecessary functionalities.</p><br><p>I also conducted informal interviews with individuals who actively write or are interested in blogging. Key insights included:</p><ul><li>Preference for minimal, distraction-free writing environments</li><li>Need for simple post management (drafts, publishing, editing)</li><li>Desire for personalization (cover images, categories, tags)</li><li>Frustration with complicated setup processes</li></ul><br><p>Based on these findings, the design focused on simplifying the publishing workflow, maintaining a clean interface, and allowing essential customization without adding complexity.</p>",
    targetUsers:
      "The platform is designed for readers who regularly engage with Vithursha’s blog content and prefer a clean, distraction-free reading experience. It is also tailored for the content creator herself, ensuring she can easily manage and publish articles without technical difficulty..",
    userPersona: {
      name: "Vithursha Kamaleswaran",
      age: 28,
      occupation: "Project Manager,Content Creator",
      goals: [
        "Publish blog posts easily",
        "Manage content efficiently",
        "Reach wider audience",
      ],
      painPoints: [
        "Complex publishing workflows",
        "Limited design options",
        "Poor mobile experience",
      ],
      quote:
        "I just want to focus on writing and sharing my thoughts-not fighting with a complicated editor.",
    },
    wireframes:
      "Low-fidelity wireframes were created to explore layout structure and content hierarchy. The focus was on organizing content clearly and ensuring a smooth and intuitive reading flow.",
    uiDesign:
      "The final UI emphasizes simplicity, readability, and visual balance. A minimal color palette and consistent typography were used to create a clean and engaging reading experience across all pages.",
    designDecision:
      "A structured grid system was used to improve content organization and scannability.Typography was carefully selected to enhance readability across different screen sizes.White space was intentionally used to reduce visual clutter and maintain focus on the content",
    outcome:
      "The final design delivers a clean and structured blogging experience, improving readability and making it easier for users to navigate and engage with content.",

    wireframeImages: ["/projects/banking-wire-1.jpg", "/projects/banking-wire-2.jpg"],
    uiImages: ["/projects/banking-ui-1.jpg", "/projects/banking-ui-2.jpg"],
  },
  {
    title: "Shirohana Villa-Home Page Design",
    description:
      "A responsive homepage design for a luxury villa, focused on creating a visually engaging and seamless booking experience across web and mobile platforms.",
    tags: ["UI Design", "Internship Assignment"],
    platform: "Web & Mobile",
    year: "2025",
    cover: "/Shirohana.jpeg",
    pageCover: "/shirohana/cover.jpeg",
    href: "/work/shirohana-villa",
    slug: "shirohana-villa",
    projectType: "Assessment",

    role: "UX/UI Designer",
    tools: ["Figma"],
    figmaLink: "https://www.figma.com/design/oup272Qz77V4mWVRdOx9Fp/Home-Page-for-Shirohana-Villas?node-id=0-1&p=f&t=f5za6s5AxqigUMpI-0",
    // No liveLink — will not be shown

    introduction:
      "This project involved designing responsive homepage experiences for Shirohana Villa as part of a UI/UX design internship assignment. The goal was to create a visually appealing and user-friendly interface that effectively showcases the villa while guiding users toward booking and inquiry actions.",
    problem:
      "<p>Many villa and hotel websites lack a clear content hierarchy and fail to highlight key information effectively, which can impact user engagement and booking decisions.</p><p>The challenge was to design a homepage that balances strong visual appeal with clear structure, ensuring users can quickly understand the offering and take action.</p>",
    goal:
      "<p>The goal was to design a homepage that:</p><ul><li>Creates a strong first impression through visuals</li><li>Clearly presents key information about the villa</li><li>Guides users toward booking or inquiry actions</li><li>Maintains consistency across web and mobile layouts</li></ul>",
    research:
      "<p>To understand user expectations for villa and hospitality websites, I reviewed several hotel and villa booking platforms such as Airbnb and boutique hotel websites. The analysis focused on layout structure, content hierarchy, and how visual elements influence user decisions.</p><p>Key observations included:</p><ul><li>High-quality visuals play a major role in attracting user attention</li><li>Users prefer clear and structured information about the property</li><li>Easy access to booking or inquiry options is essential</li><li>Clean layouts improve trust and overall user experience</li></ul><br><p>Based on these insights, the design focused on creating a visually engaging yet structured homepage that highlights the villa experience while guiding users toward key actions.</p>",
    targetUsers:
      "The primary audience includes travelers and tourists looking for a comfortable and premium villa experience. These users typically explore multiple options and rely heavily on visuals and clear information to make decisions.The design also considers users who prefer quick access to key details such as amenities, pricing, and booking options, ensuring a smooth and efficient browsing experience across both web and mobile devices.",
    userPersona: {
      name: "Dilani Perera",
      age: 31,
      occupation: "Marketing Executive",
      goals: [
        "Find a comfortable and aesthetically pleasing villa for a short getaway",
        "Quickly understand available amenities and features",
        "Easily make a booking or inquiry without confusion",
      ],
      painPoints: [
        "Too many cluttered websites with unclear information",
        "Difficulty finding pricing, availability, or contact options",
        "Lack of high-quality images to understand the actual experience",
      ],
      quote: "If I have to create an account just to buy one thing, I'll just go somewhere else.",
    },
    wireframes:
      " Initial wireframes were created to define layout structure and content hierarchy. The focus was on positioning key sections such as hero, villa details, amenities, and call-to-action areas for optimal user flow.",
    uiDesign:
      "<p>The final UI emphasizes elegance, clarity, and usability. A clean layout, balanced spacing, and consistent typography were used to create a premium feel aligned with the villa’s branding.</p>",
    designDecision:
      "A strong hero section was used to immediately capture attention and communicate the villa’s atmosphere.Content was structured in clear sections to improve readability and guide users through the page.Consistent spacing and typography were applied to maintain a clean and premium aesthetic.Call-to-action elements were strategically placed to encourage user interaction.",
    outcome:
      " The final design delivers a visually engaging and structured homepage that effectively showcases the villa while guiding users toward key actions such as booking and inquiries.",

    wireframeImages: ["/projects/ecom-wire-1.jpg", "/projects/ecom-wire-2.jpg"],
    uiImages: ["/projects/ecom-ui-1.jpg", "/projects/ecom-ui-2.jpg"],
  },
  {
    title: "Eco Shopper – Mobile App Redesign",
    description:
      "A redesign of an e-commerce mobile app focused on improving usability, visual consistency, and overall user experience.",
    tags: ["Redesign Project", "UI Design"],
    platform: "Mobile",
    year: "2026",
    cover: "/eco.jpeg",
    pageCover: "/eco/cover.jpg",
    href: "/work/eco-shopper-redesign",
    slug: "eco-shopper-redesign",
    projectType: "Case Study",

    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Zeroheight"],
    figmaLink: "https://www.figma.com/design/K8inoxfgraFXPOlS0Sh3pj/Eco-Shopper--Redesign-?node-id=1-3367&p=f&t=wZPs4M95dCoEi0r5-0",
    

    introduction:
      "This project is a redesign of a previously created mobile application, Eco Shopper. The goal was to evaluate the existing design, identify usability issues, and improve the overall user experience through a more structured and user-centered approach.",
    problem:
      "<p>The initial design lacked clear visual hierarchy, consistency, and structured user flows, which affected usability and overall user experience.</p><p>Navigation was not intuitive, and certain UI elements did not effectively guide users toward key actions such as browsing products and completing purchases.</p><p>This created an opportunity to revisit the design and improve both functionality and visual clarity.</p>",
    goal:
      "<p>The goal of the redesign was to:</p><br><ul><li>Improve usability and navigation</li><li>Establish a clear visual hierarchy</li><li>Enhance consistency across screens</li><li>Create a more modern and user-friendly interface</li></ul>",
    research:
      "I audited all 12 modules, catalogued every unique component variant, and interviewed 6 product designers and 4 engineers about their biggest workflow pain points. The audit identified 84 reusable component patterns.",
    targetUsers:
      "<p>The target audience includes environmentally conscious consumers who prefer sustainable and eco-friendly products. These users are typically familiar with mobile shopping apps and expect a smooth, efficient, and intuitive shopping experience.</p><p>The design also considers users who value quick navigation, clear product information, and a seamless checkout process, ensuring they can browse and purchase products with minimal effort.</p>",
    userPersona: {
      name: "Kavindu Mendis",
      age: 34,
      occupation: "Senior Product Engineer",
      goals: [
        "Find eco-friendly and sustainable products easily",
        "Compare products and make informed decisions",
        "Complete purchases quickly without confusion",
      ],
      painPoints: [
        "Cluttered product pages with too much information",
        "Difficult navigation between categories",
        "Complicated checkout process",
      ],
      quote:
        "I want to shop eco-friendly products easily without spending too much time figuring things out.",
    },
    wireframes:
      "Low-fidelity wireframes were created to analyze and restructure the original design. The focus was on improving navigation, simplifying layouts, and creating a clearer user flow for browsing and purchasing products.",
    uiDesign:
      "The updated UI focuses on simplicity, clarity, and consistency. A structured layout and improved spacing were used to enhance readability, while consistent components create a cohesive user experience",
    designDecision:
      "Navigation was simplified to make it easier for users to browse products and complete actions efficiently.A consistent component system was introduced to improve usability and reduce cognitive load.Visual hierarchy was enhanced using spacing, typography, and color to guide user attention.",
    outcome:
      "The redesigned version provides a more intuitive and visually consistent experience, improving usability and making it easier for users to navigate and interact with the app.",

    wireframeImages: ["/projects/saas-wire-1.jpg", "/projects/saas-wire-2.jpg"],
    uiImages: ["/projects/saas-ui-1.jpg", "/projects/saas-ui-2.jpg"],
  },
  {
    title: "Event Desk",
    description:
      " A smart platform for streamlining event management and guest coordination.",
    tags: [ "UI Design","Assesment"],
    platform: "Web",
    year: "2025",
    cover: "/event.jpeg",
    pageCover: "/event/cover.jpg",
    href: "/work/event-desk",
    slug: "event-desk",
    projectType: "Assessment",

    role: "UI/UX Designer",
    tools: ["Figma","Miro"],
    figmaLink: "https://www.figma.com/design/h1U6u44Hv2XEpAEw5OyCNv/Event-Desk--Event-Booking-and-Management-WebApp-Dashboard?node-id=152-79&p=f&t=F4MT4ZwtajMyz5Fa-0",
    

    introduction:
      "<p>This is an assessment that has to design 4 main UI's for an event booking and management system that helps event organizers track bookings, manage attendees, and analyze event performance.So, I've Created interactive prototypes in Figma with a focus on intuitive workflows, clear hierarchy, and reusable UI components. This UI includes four key screens:</p><ul><li>Overview Page → KPIs, charts, and notifications</li><li>Browse Events Page → event discovery with filters</li><li>Event Details Page → ticket sales, attendee list, metrics</li><li>Attendee Insights Page → demographics and engagement trends</li></ul>",
    problem:
      "Event managers often face challenges when relying on multiple scattered tools to monitor ticket sales, manage attendees, and evaluate event success. Without a centralized platform, they struggle to gain a clear picture of upcoming events, track attendee demographics, and make quick, data-driven decisions. The problem I set out to solve was how to design a single, clear, and consistent dashboard that would streamline event management and provide organizers with actionable insights.",
    goal:
      "<p>The goal was to design a platform that:</p><ul><li>Simplifies the event booking and management process</li><li>Provides clear and structured workflows</li><li>Allows users to manage event details efficiently</li><li>Improves usability through intuitive navigation and layout</li></ul>",
    research:
      "To ground my design decisions, I reviewed competitor platforms such as Eventbrite and Meetup to understand how existing tools display event data and attendee information. From this, I identified that organizers value the ability to access a quick performance overview, browse and filter events efficiently, and dive into detailed event-level data such as ticket sales and attendee lists. I also noted that demographic and engagement insights are critical for marketing and planning. With these needs in mind, I focused on clarity, reusability, and scalability, applying a consistent design system with reusable components such as cards, charts, buttons, and input fields",
    targetUsers:
      " <p>The platform is designed for individuals and organizations who plan and manage events, including event organizers, small business owners, and users looking to book event-related services.</p><p>These users require a system that is easy to navigate, provides clear information, and allows them to manage multiple tasks efficiently without confusion.</p>",
    userPersona: {
      name: "Dilshan Fernando",
      age: 35,
      occupation: "Event Planner / Small Business Owner",
      goals: [
        "Plan and manage events efficiently from one platform",
        "Keep track of bookings, schedules, and event details",
        "Reduce time spent on manual coordination",
      ],
      painPoints: [
        "Managing multiple tasks across different tools",
        "Confusing and cluttered management systems",
        "Difficulty tracking bookings and event updates",
      ],
      quote:
        "I need a simple way to manage all my event bookings and details in one place without getting overwhelmed.",
    },
    wireframes:
      "Low-fidelity wireframes were created to define user flows and structure the platform’s layout. The focus was on organizing features such as event creation, booking management, and scheduling into a logical and intuitive flow.",
    uiDesign:
      "The final UI emphasizes clarity, structure, and usability. A clean layout and consistent components were used to ensure users can easily interact with the system and manage their tasks effectively..",
    designDecision:
      "Complex workflows were broken down into clear steps to improve usability.A structured layout was used to organize large amounts of information effectively.Consistent components and visual hierarchy were applied to guide user actions.Navigation was simplified to allow quick access to key features.",
    outcome:
      "The final design provides a structured and user-friendly platform that simplifies event booking and management, making it easier for users to organize and manage events efficiently.",

    wireframeImages: ["/projects/banking-wire-1.jpg", "/projects/banking-wire-2.jpg"],
    uiImages: ["/projects/banking-ui-1.jpg", "/projects/banking-ui-2.jpg"],
  },
  {
    title: "Dinuka Gunawardane Portfolio",
    description:
      " A personal portfolio website designed to showcase creative work, highlight skills, and create a strong first impression for potential clients and employers.",
    tags: [ "UI Design","Assesment"],
    platform: "Web",
    year: "2025",
    cover: "/dinuka-portfolio.jpeg",
    pageCover: "/dinuka/cover.jpeg",
    href: "/work/dinuka-portfolio",
    slug: "dinuka-portfolio",
    projectType: "Freelance",

    role: "UI/UX Designer & Developer",
    tools: ["Figma","Next.js","Tailwind css"],
    figmaLink: "https://www.figma.com/design/SFEHvCNaJUcKLAYJEWEkkl/Dinuka-Gunawardana-Portfolio?node-id=0-1&p=f&t=ZSTng7xqcJO8gYpr-0",
    liveLink: "https://www.dinukagunawardana.web.lk/",
    

    introduction:
      "This project involved designing a personal portfolio website for Dinuka, aimed at effectively showcasing his work, skills, and professional identity. The focus was on creating a clean, modern, and visually engaging experience that highlights projects while maintaining clarity and ease of navigation.",
    problem:
      "<p>Many portfolio websites lack clear structure and fail to effectively communicate the designer’s value, often resulting in cluttered layouts or poor content hierarchy.</p><p>The challenge was to design a portfolio that not only looks visually appealing but also clearly presents projects, skills, and information in a way that captures attention and keeps users engaged.</p>",
    goal:
      "<p>The goal was to design a portfolio that:</p><ul><li>Showcases projects in a clear and structured way</li><li>Creates a strong first impression through visual design</li><li>Highlights skills and experience effectively</li><li>Provides smooth and intuitive navigation</li></ul>",
    research:
      "To ground my design decisions, I reviewed competitor platforms such as Eventbrite and Meetup to understand how existing tools display event data and attendee information. From this, I identified that organizers value the ability to access a quick performance overview, browse and filter events efficiently, and dive into detailed event-level data such as ticket sales and attendee lists. I also noted that demographic and engagement insights are critical for marketing and planning. With these needs in mind, I focused on clarity, reusability, and scalability, applying a consistent design system with reusable components such as cards, charts, buttons, and input fields",
    targetUsers:
      "<p>The target audience includes recruiters, potential clients, and collaborators who are looking to quickly evaluate Dinuka’s skills, experience, and design capabilities.</p><p>These users typically spend a short amount of time reviewing portfolios, so the design focuses on clarity, strong visual hierarchy, and easy access to key information.</p>",
    userPersona: {
      name: "Chamara Silva",
      age: 35,
      occupation: "Product Manager / Hiring Manager",
      goals: [
        "Quickly evaluate candidate’s design skills",
        "View high-quality projects and case studies",
        "Understand experience and strengths",
      ],
      painPoints: [
        "Overly complex or cluttered portfolios",
        "Lack of clear project explanations",
        "Difficulty finding important information",
      ],
      quote:
        "I need to quickly understand a designer’s skills and see their best work without digging through too much content.",
    },
    wireframes:
      "Low-fidelity wireframes were created to define layout structure and content flow. The focus was on organizing sections such as hero, projects, about, and contact into a clear and logical sequence.",
    uiDesign:
      "The final UI emphasizes simplicity, clarity, and modern aesthetics. A minimal design approach was used to ensure that the focus remains on the work and content.",
    designDecision:
      "A clean layout was used to improve readability and focus on content.Strong visual hierarchy was applied to guide user attention.Consistent typography and spacing were used to create a cohesive experience.Project sections were designed to highlight key details clearly.",
    outcome:
      "The final design delivers a professional and visually engaging portfolio that effectively showcases work and helps users quickly understand the designer’s skills and experience.",

    wireframeImages: ["/projects/banking-wire-1.jpg", "/projects/banking-wire-2.jpg"],
    uiImages: ["/projects/banking-ui-1.jpg", "/projects/banking-ui-2.jpg"],
  },
];