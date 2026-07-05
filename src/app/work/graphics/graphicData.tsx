export type GraphicCategory =
  | "Brand Identity"
  | "Logo Design"
  | "Flyer"
  | "Poster"
  | "Social Media"
  | "Packaging"
  | "Print"
  | "Illustration";

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
  category: GraphicCategory;
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
          "/graphics/coffee/cup.jpeg",
        ],
      },
    ],

    reflection: `<p>The final result is a cohesive premium brand identity that demonstrates how a consistent visual system can strengthen product recognition and communicate brand values. The project showcases branding, packaging, typography, layout, and print design skills while presenting a complete identity suitable for a modern specialty coffee brand.</p>`,
  },
];