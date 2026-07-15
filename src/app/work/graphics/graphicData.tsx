export type GraphicCategory =
  | "Brand Identity"
  | "Logo Design"
  | "Flyer"
  | "Poster"
  | "Social Media"
  | "Packaging"
  | "Print"
  | "Illustration"
  | "Graphic Design"
  | "Marketing Campaign"
  | "Event Branding";

export interface ColorSwatch {
  hex: string;
  name?: string;
}

export interface TypographyItem {
  name: string;      // font name, e.g. "Poppins"
  usage: string;      // e.g. "Headings", "Body text"
  sample?: string;     // optional sample string, defaults to font name
}

export interface FinalDesignSet {
  heading?: string;        // optional — e.g. "Instagram Post Series"
  description?: string;    // optional — short blurb about this set
  images: string[];        // always required
}

export interface GraphicProject {
  slug: string;
  title: string;
  category: string;
  client: string;
  role: string;
  tools: string[];
  year: string;

  heroImage: string;
  overview: string;

  colorPalette?: ColorSwatch[];
  typography?: TypographyItem[];
  logo?: string;

  finalDesigns: FinalDesignSet[];   // ← replaces finalImages
  reflection?: string;
}

export const graphicProjects: GraphicProject[] = [
  {
    slug: "imagic-social-media-posts",
    title: "Imagic Creation - Social Media Posts",
    category: "Brand Identity",
    client: "Imagic Creation",
    role: "Graphic Designer",
    tools: [ "Adobe Photoshop"],
    year: "2026",

    heroImage: "/graphics/hero2.jpeg",

    overview: `<p>Imagic Creation is a creative production house specializing in video production, photography, editing, graphic design, UI/UX design, and web development. This project involved designing a cohesive set of marketing assets to strengthen the brand's visual identity across both digital and print platforms.</p><br><p>The deliverables included Instagram promotional posts, a business card, and Facebook and LinkedIn cover banners, all designed with a consistent visual style to enhance brand recognition and create a professional impression.</p>`,

    colorPalette: [
      { hex: "#1b1b1b", name: "Black" },
      { hex: "#ffd200", name: "Shining Gold" },
    ],

    typography: [
      { name: "Book Antiqua", usage: "Headings", sample: "Aa Bb Cc" },
      { name: "Calibri", usage: "Body text", sample: "Aa Bb Cc" },
    ],


    finalDesigns: [
      
      // Labeled set — with heading + description
      {
        heading: "Instagram Promotional Posts",
        description: "A series of promotional posts designed to introduce the brand, showcase services, and engage potential clients through visually appealing and informative content.",
        images: [
          "/graphics/1.jpeg",
        ],
      },
      {
        heading: "Business Card",
        description: "A professional business card designed to represent the brand identity while presenting essential contact information in a clean and memorable format.",
        images: [
          "/graphics/bc1.jpeg",
          "/graphics/bc2.jpeg",
        ],
      },
      {
        heading: "Facebook & LinkedIn Cover Banners",
        description: "Custom cover banners created to establish a strong visual presence across social media platforms while maintaining consistency with the overall brand identity",
        images: [
          "/graphics/fb banner.png",
        ],
      },
    ],

    reflection: `<p>This project enhanced my ability to create cohesive marketing materials for a brand across multiple platforms. It strengthened my skills in maintaining visual consistency, designing for different formats, and developing marketing assets that effectively communicate a brand's identity while remaining professional and engaging</p>`,
  },
  {
    slug: "auralia-coffee",
    title: "Aurelia Coffee – Premium Brand Identity",
    category: "Brand Identity",
    client: "Case Study Project",
    role: "Graphic Designer & Brand Identity Designer",
    tools: [ "Adobe Illustrator", "Adobe Photoshop"],
    year: "2026",

    heroImage: "/graphics/coffee/all.jpeg",

    overview: `<p>Aurelia Coffee is a fictional premium coffee brand created to showcase a complete brand identity system. The project focuses on building a sophisticated and cohesive visual identity that reflects quality, craftsmanship, and the experience of enjoying specialty coffee. Every design element was carefully developed to create a modern, elegant, and memorable brand.</p>`,

   


    finalDesigns: [
      
      {
        images: [
          "/graphics/coffee/1.png",
          "/graphics/coffee/Apron.jpeg",
          "/graphics/coffee/cap.jpeg",
          "/graphics/coffee/shirt.jpeg",
          "/graphics/coffee/Cup.jpeg",
        ],
      },
    ],

    reflection: `<p>The final result is a cohesive premium brand identity that demonstrates how a consistent visual system can strengthen product recognition and communicate brand values. The project showcases branding, packaging, typography, layout, and print design skills while presenting a complete identity suitable for a modern specialty coffee brand.</p>`,
  },
  {
    slug: "deisgnfest2026",
    title: "DesignFest Colombo 2026 – Event Branding & Marketing Campaign",
    category: "Event Branding",
    client: "Self-Initiated Concept Project",
    role: "Graphic Designer",
    tools: [ "Adobe Photoshop","Adeobe Illusrator"],
    year: "2026",

    heroImage: "/graphics/2026/hero.jpg",

    overview: `<p>DesignFest Colombo 2026 is a conceptual branding project created to showcase a complete visual identity system for a large-scale creative conference. The project simulates a real-world design brief where a cohesive brand experience is developed across multiple marketing and event touchpoints.</p><br><p>The objective was to create a modern, energetic, and professional event identity that appeals to designers, creative professionals, students, and industry leaders while maintaining consistency across both digital and print media.</p>`,

    colorPalette: [
      { hex: "#111827", name: "Dark" },
      { hex: "#6d28d9", name: "Purple" },
      { hex: "#2563eb", name: "Blue" },
      { hex: "#ffffff", name: "White" },
      { hex: "#05378c", name: " Navy blue" },
    ],

    typography: [
      { name: "Poppins", usage: "Headings and Special Texts", sample: "Aa Bb Cc" },
      { name: "Calibri", usage: "Body text", sample: "Aa Bb Cc" },
    ],


    finalDesigns: [
      
      // Labeled set — with heading + description
      {
        heading: "Logo",
        description: "Designed the official logo concept for DesignFest Colombo 2026, focusing on creating a distinctive visual mark that represents creativity, innovation, and the design community. Developed a memorable identity system with consideration for scalability across digital platforms, print materials, and event applications.",
        images: [
          "/graphics/2026/logo.jpeg",
        ],
      },
      {
        heading: "Instagram Post and Story",
        description: "Designed promotional Instagram posts and stories for DesignFest Colombo 2026 to create event awareness and audience engagement. Applied the event’s visual identity, typography, and graphic elements to deliver clear, attractive, and consistent social media communication.",
        images: [
          "/graphics/2026/Design.jpeg",
        ],
      },
      {
        heading: "Facebook & LinkedIn Cover Banners",
        description: "Created social media cover banners for DesignFest Colombo 2026, adapting the event branding into wide-format layouts suitable for different platforms while maintaining strong visual hierarchy, brand consistency, and professional presentation.",
        images: [
          "/graphics/2026/fb cover.jpg",
          "/graphics/2026/linkedin.jpg",
        ],
      },
      {
        heading: "X Stand Banner",
        description: "Designed an X stand banner for DesignFest Colombo 2026 as a portable event marketing display. Created a visually impactful vertical layout with clear event information, strong branding elements, and optimized typography for effective visibility in physical event spaces.",
        images: [
          "/graphics/2026/X-banner.jpg",
        ],
      },
      {
        heading: "Backdrop and LED Wall Backdrop",
        description: "Designed large-scale event visuals including stage backdrops and LED wall graphics for DesignFest Colombo 2026. Developed impactful layouts that enhance the event atmosphere while ensuring clear brand visibility across physical and digital displays.",
        images: [
          "/graphics/2026/bigscreen.jpg",
          "/graphics/2026/backdrop.jpg",
        ],
      },
      {
        heading: "Event Pass",
        description: " Designed event identification cards for DesignFest Colombo 2026, including organizer, and media crew passes. Created a clear and functional badge system using consistent branding, color coding, and visual hierarchy to improve identification and enhance the overall event experience.",
        images: [
          "/graphics/2026/all.jpg",
          "/graphics/2026/media.jpg",
        ],
      },
      {
        heading: "T-Shirt",
        images: [
          "/graphics/2026/shirt.jpeg",
          
        ],
      },
    ],

    reflection: `<p>This project strengthened my ability to develop a complete event branding system rather than designing individual marketing materials in isolation. It challenged me to maintain visual consistency across multiple formats while adapting layouts for different applications, from social media graphics to printed event collateral.</p><p>Through this project, I further developed my skills in branding, typography, editorial design, print production, and campaign thinking, gaining a deeper understanding of how a unified visual identity enhances user experience and brand recognition.</p>`,
  },
];