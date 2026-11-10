import { Product } from '../types/brand';

// Generated assets
export const HERO_EDITORIAL_IMAGE = '/src/assets/images/hero_free_rose_editorial_1794300250633.jpg';
export const PRODUCT_WANISA_JACKET = '/src/assets/images/product_wanisa_denim_jacket_1794300250972.jpg';
export const PRODUCT_MASHUJAA_JERSEY = '/src/assets/images/product_mashujaa_jersey_1794300252517.jpg';
export const PRODUCT_CANVAS_ART = '/src/assets/images/product_canvas_painting_art_1794300251660.jpg';

export const COLLECTIONS_DATA = [
  {
    id: 'wanisa',
    name: 'Wanisa Collection',
    tagline: 'A Mother’s Grace & Unyielding Devotion',
    description: 'Dedicated entirely to Rose. Delicate botanical rose lines printed in high-density inks, symbolizing pure maternal love, grace, and timeless matriarchal power.',
    featuredTag: 'Maternal Homage'
  },
  {
    id: 'mashujaa',
    name: 'Mashujaa Collection',
    tagline: 'The Champions & The Everyday Heroes',
    description: 'Mashujaa (Swahili for Heroes). Bold monumental serif typography, heavyweight athletic silhouettes, celebrating the unsung heroes who gave us life and paved our paths.',
    featuredTag: 'Heroic Silhouette'
  },
  {
    id: 'kenyan-culture',
    name: 'Kenyan Culture Collection',
    tagline: 'Nairobi Haute Streetwear & Heritage',
    description: 'Monochrome geometric adaptations of traditional patterns, Maasai shuka screen prints translated into high-contrast street luxury, and Swahili poetic scriptures.',
    featuredTag: 'Heritage Haute'
  },
  {
    id: 'creative-art',
    name: 'Creative Art Collection',
    tagline: 'Wearable Gallery & Archival Strokes',
    description: 'Large-scale expressionist rose brushstrokes, canvas paintings translated onto raw cotton, and hand-pulled crackle discharge ink for a living art aesthetic.',
    featuredTag: 'Fine Art Edition'
  },
  {
    id: 'athletes',
    name: 'Athletes & Ballers Collection',
    tagline: 'Court to Runway & Field Champions',
    description: 'Engineered for basketballers, footballers, and modern athletic icons. Heavyweight double-knit mesh, breathable screen-printed numbers, and relaxed court shorts.',
    featuredTag: 'Athletic Couture'
  },
  {
    id: 'custom',
    name: 'Custom Bespoke Collection',
    tagline: '1-of-1 Tailored Screen Print Atelier',
    description: 'Bespoke customization suite. Select garment, ink depth (3D puff, discharge ink, foil shimmer), flower placement, and personalize a dedication to your own hero.',
    featuredTag: 'Bespoke Studio'
  }
] as const;

export const CATEGORIES_DATA = [
  { id: 'denim-jackets', name: 'Denim Jackets' },
  { id: 'ts', name: "T's" },
  { id: 'jerseys', name: 'Jerseys' },
  { id: 'denim-trousers', name: 'Denim Trousers' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'canvas-paintings', name: 'Canvas Paintings' },
] as const;

export const PRODUCTS_CATALOG: Product[] = [
  // 1. WANISA COLLECTION
  {
    id: 'wanisa-01',
    name: 'Wanisa Archival Raw Denim Jacket',
    collectionId: 'wanisa',
    collectionName: 'Wanisa Collection',
    category: 'denim-jackets',
    categoryName: 'Denim Jackets',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 380,
    description: 'Structured 14oz black Japanese Kurabo selvedge denim jacket featuring an oversized hand-pulled screen print of the signature Free Rose botanical emblem on the back. Finished with the cursive inscription "You Deserve Your Flowers".',
    screenPrintStory: 'Screen printed using multi-layer titanium white discharge ink that penetrates the raw denim fibers, softening with age without cracking.',
    fabricDetails: '100% Japanese Selvedge Cotton Denim (14oz), custom gunmetal buttons, interior silk-screen dedication patch to Rose.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: PRODUCT_WANISA_JACKET,
    isFeatured: true,
    editionLimit: 'Run of 100 Pieces'
  },
  {
    id: 'wanisa-02',
    name: 'Rose Homage Heavyweight Tee',
    collectionId: 'wanisa',
    collectionName: 'Wanisa Collection',
    category: 'ts',
    categoryName: "T's",
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 145,
    description: 'Boxy drop-shoulder tee in 320 GSM organic combed cotton. Features an intricate center-chest botanical rose illustration with subtle petal screen prints draping toward the hem.',
    screenPrintStory: 'Silkscreened with 305-mesh screens for micro-detail linework on floral petals.',
    fabricDetails: '320 GSM 100% Organic Cotton Jersey, tight-knit ribbed collar, pre-shrunk luxury wash.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: HERO_EDITORIAL_IMAGE,
    isFeatured: true,
    editionLimit: 'Core Luxury Series'
  },
  {
    id: 'wanisa-03',
    name: 'Wanisa Botanical Pleated Denim Trouser',
    collectionId: 'wanisa',
    collectionName: 'Wanisa Collection',
    category: 'denim-trousers',
    categoryName: 'Denim Trousers',
    gender: 'ladies',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 290,
    description: 'High-waisted tailored black denim trousers with relaxed wide leg. Subtle vertical screen-printed rose thorns running down the outer seam with a floral coin pocket stamp.',
    screenPrintStory: 'Monochrome screen print along selvedge seam lines, heat-set for permanent garment longevity.',
    fabricDetails: '13.5oz Rigid Cotton Denim, front double pleats, horn button closure.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: PRODUCT_WANISA_JACKET,
    editionLimit: 'Limited Atelier Edition'
  },

  // 2. MASHUJAA COLLECTION
  {
    id: 'mashujaa-01',
    name: 'Mashujaa Athletic Mesh Jersey No. 01',
    collectionId: 'mashujaa',
    collectionName: 'Mashujaa Collection',
    category: 'jerseys',
    categoryName: 'Jerseys',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 210,
    description: 'Heavyweight double-layer perforated sports mesh basketball jersey. High-fashion contrast v-neck ribbing with monumental arched "MASHUJAA ATHLETIC" typography and dark tone-on-tone rose crest watermark.',
    screenPrintStory: 'High-density rubberized screen print across the chest, engineered to withstand intense movement while maintaining runway rigidity.',
    fabricDetails: '260 GSM Heavy Perforated Polyester Mesh, ribbed striped collar, woven Mashujaa jocktag.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: PRODUCT_MASHUJAA_JERSEY,
    isFeatured: true,
    editionLimit: 'Mashujaa Champions Series'
  },
  {
    id: 'mashujaa-02',
    name: 'Mashujaa Court Warm-up Shorts',
    collectionId: 'mashujaa',
    collectionName: 'Mashujaa Collection',
    category: 'shorts',
    categoryName: 'Shorts',
    gender: 'men',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 165,
    description: 'Deep black double-knit French terry court shorts. Features bold vertical screen print of the Mashujaa crest on the right thigh and "You Deserve Your Flowers" along the left hemline.',
    screenPrintStory: 'Screen printed with flexible plastisol ink that flexes naturally with athletic motion.',
    fabricDetails: '420 GSM Loopback French Terry, elongated braided drawstrings with matte steel aglets.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: PRODUCT_MASHUJAA_JERSEY,
    editionLimit: 'Limited Batch'
  },
  {
    id: 'mashujaa-03',
    name: 'Heroic Strength Heavyweight Tee',
    collectionId: 'mashujaa',
    collectionName: 'Mashujaa Collection',
    category: 'ts',
    categoryName: "T's",
    gender: 'men',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 135,
    description: 'Oversized boxy cut tee featuring bold typographic screen print "SHUJAA // ROSE" on back shoulder line, and minimal floral crest on front left chest.',
    screenPrintStory: 'Two-pull discharge screen print on pure obsidian cotton.',
    fabricDetails: '340 GSM Luxury Combed Cotton, drop shoulder, reinforced collar.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: HERO_EDITORIAL_IMAGE,
    editionLimit: 'Core Series'
  },

  // 3. KENYAN CULTURE COLLECTION
  {
    id: 'kenyan-01',
    name: 'Nairobi Heritage Trucker Denim Jacket',
    collectionId: 'kenyan-culture',
    collectionName: 'Kenyan Culture Collection',
    category: 'denim-jackets',
    categoryName: 'Denim Jackets',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 395,
    description: 'Raw black denim jacket featuring an intricate monochrome geometric grid screen print inspired by traditional Maasai beadwork and shuka patterns, merged with Free Rose botanical imagery.',
    screenPrintStory: 'Precision screen print using 280-mesh silk screens for mathematical geometric alignment across denim panels.',
    fabricDetails: '14.5oz Raw Black Selvedge Denim, branded oxidized buttons, inner woven label.',
    screenPrintInk: 'Silversmith Foil Shimmer',
    image: PRODUCT_WANISA_JACKET,
    isFeatured: true,
    editionLimit: 'Culture Series (75 Pieces)'
  },
  {
    id: 'kenyan-02',
    name: 'Utamaduni Relaxed Selvedge Denim Trouser',
    collectionId: 'kenyan-culture',
    collectionName: 'Kenyan Culture Collection',
    category: 'denim-trousers',
    categoryName: 'Denim Trousers',
    gender: 'men',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 275,
    description: 'Tailored straight-cut denim trousers with monochrome screen-printed Swahili poetic inscription along the back waistband and rose crest on the rear right pocket.',
    screenPrintStory: 'Screen printed with tonal dark grey water-base ink for understated luxury sophistication.',
    fabricDetails: '14oz Kuroki Japanese Denim, brass zipper fly, reinforced pocket rivets.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: HERO_EDITORIAL_IMAGE,
    editionLimit: 'Limited Run'
  },
  {
    id: 'kenyan-03',
    name: 'Shuka Pattern Luxury Tee',
    collectionId: 'kenyan-culture',
    collectionName: 'Kenyan Culture Collection',
    category: 'ts',
    categoryName: "T's",
    gender: 'ladies',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 140,
    description: 'Fitted luxury cotton tee with full chest screen print of stylized monochrome shuka lattice intertwining with fresh blooming rose petals.',
    screenPrintStory: 'Screen printed with non-PVC water-based discharge ink that breathes seamlessly.',
    fabricDetails: '280 GSM Pima Cotton, satin neck taping, blind-stitch hem.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: HERO_EDITORIAL_IMAGE,
    editionLimit: 'Run of 150'
  },

  // 4. CREATIVE ART COLLECTION
  {
    id: 'art-01',
    name: 'Archival Canvas Painting: "You Deserve Your Flowers"',
    collectionId: 'creative-art',
    collectionName: 'Creative Art Collection',
    category: 'canvas-paintings',
    categoryName: 'Canvas Paintings',
    gender: 'unisex',
    availableSizes: ['M', 'L', 'XL'],
    price: 650,
    description: 'Large-scale hand-stretched 480 GSM organic cotton canvas. Features a dramatic multi-layered monochrome screen print of an unfolding blooming rose, stamped with high-contrast serif typography "YOU DESERVE YOUR FLOWERS". Suitable for luxury residences and art galleries.',
    screenPrintStory: 'Silkscreened with fine art archival ink on gesso-primed heavy cotton canvas, individually hand-signed and numbered by the Free Rose atelier.',
    fabricDetails: '480 GSM 100% Unbleached Cotton Canvas, 1.5-inch solid pine stretcher bars, ready to hang.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: PRODUCT_CANVAS_ART,
    isFeatured: true,
    editionLimit: 'Numbered Fine Art Edition (50 Pieces)'
  },
  {
    id: 'art-02',
    name: 'Painterly Rose Wearable Canvas Denim Jacket',
    collectionId: 'creative-art',
    collectionName: 'Creative Art Collection',
    category: 'denim-jackets',
    categoryName: 'Denim Jackets',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 420,
    description: 'Artisan hand-distressed black denim jacket with an expressive splash and crackle screen print resembling an abstract oil painting of a rose.',
    screenPrintStory: 'Crafted using a specialized vintage crackle ink base that micro-fractures under high-temperature curing for a 1-of-1 artistic patina.',
    fabricDetails: '14oz Raw Black Denim, custom distress detailing, interior hand-painted numbered tag.',
    screenPrintInk: 'Vintage Distressed Crackle',
    image: PRODUCT_WANISA_JACKET,
    editionLimit: 'Studio Edition'
  },
  {
    id: 'art-03',
    name: 'Expressionist Stroke Heavyweight Tee',
    collectionId: 'creative-art',
    collectionName: 'Creative Art Collection',
    category: 'ts',
    categoryName: "T's",
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 155,
    description: 'Luxury drop-shoulder tee with oversized front screen print of sweeping charcoal and white brushstrokes forming the silhouette of a wild rose.',
    screenPrintStory: 'Hand-pulled through coarse mesh to recreate the visceral texture of oil impasto.',
    fabricDetails: '320 GSM 100% Cotton, seamless tubular body construction.',
    screenPrintInk: 'Vintage Distressed Crackle',
    image: HERO_EDITORIAL_IMAGE,
    editionLimit: 'Core Gallery Series'
  },

  // 5. ATHLETES / BASKETBALLERS / FOOTBALLERS COLLECTION
  {
    id: 'athletes-01',
    name: 'Baller Edition Flight Mesh Jersey',
    collectionId: 'athletes',
    collectionName: 'Athletes & Ballers Collection',
    category: 'jerseys',
    categoryName: 'Jerseys',
    gender: 'men',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 220,
    description: 'Pro-grade sleeveless basketball jersey in luxury double-mesh. Screen-printed front typography "FREE ROSE COURT" with back screen-printed player number "24" and subtle floral laurel wreath.',
    screenPrintStory: 'Rubberized athletic stretch screen ink resistant to peeling and high friction.',
    fabricDetails: '280 GSM Heavy Technical Mesh, striped ribbed armholes, woven jock tag at hem.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: PRODUCT_MASHUJAA_JERSEY,
    isFeatured: true,
    editionLimit: 'Player Edition'
  },
  {
    id: 'athletes-02',
    name: 'Pitch Legend Football Jersey',
    collectionId: 'athletes',
    collectionName: 'Athletes & Ballers Collection',
    category: 'jerseys',
    categoryName: 'Jerseys',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 195,
    description: 'Monochrome football/soccer silhouette jersey with jacquard rose tonal micro-stripes and bold chest screen print "FREE ROSE FC" with floral club crest.',
    screenPrintStory: 'Sublimated rose jacquard base paired with matte screen-printed crest and tagline.',
    fabricDetails: '220 GSM Performance Interlock Knit, ribbed polo collar, breathable mesh side panels.',
    screenPrintInk: 'Matte Water-Base Discharge',
    image: PRODUCT_MASHUJAA_JERSEY,
    editionLimit: 'FC Edition'
  },
  {
    id: 'athletes-03',
    name: 'Runway Court Athletic Shorts',
    collectionId: 'athletes',
    collectionName: 'Athletes & Ballers Collection',
    category: 'shorts',
    categoryName: 'Shorts',
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 150,
    description: 'Heavyweight perforated mesh shorts with comfortable cotton jersey inner lining. Screen-printed floral rose crest on both knee slits and arched "FLOWERS" typography on waistband.',
    screenPrintStory: 'Silkscreened with flexible durable plastisol ink for court and streetwear wearability.',
    fabricDetails: 'Double-layer breathable mesh, thick ribbed elastic waistband, deep zippered pockets.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: PRODUCT_MASHUJAA_JERSEY,
    editionLimit: 'Run of 200'
  },

  // 6. CUSTOM COLLECTION
  {
    id: 'custom-01',
    name: 'Bespoke 1-of-1 Tailored Screen Print Atelier Piece',
    collectionId: 'custom',
    collectionName: 'Custom Bespoke Collection',
    category: 'ts',
    categoryName: "T's",
    gender: 'unisex',
    availableSizes: ['S', 'M', 'L', 'XL'],
    price: 195,
    description: 'Your personal dedication made wearable. Customize your garment silhouette, screen print placement, ink finish (3D puff, discharge, crackle, silver foil), and personalize a dedication to your mother or hero.',
    screenPrintStory: 'Individually burned silk screen screens prepared by master printers in our atelier.',
    fabricDetails: 'Choice of 320 GSM Cotton, 14oz Denim, or 280 GSM Mesh.',
    screenPrintInk: 'High-Density 3D Puff Print',
    image: HERO_EDITORIAL_IMAGE,
    isFeatured: true,
    editionLimit: 'Bespoke 1-of-1'
  },
  {
    id: 'custom-02',
    name: 'Custom Commemorative Archival Canvas',
    collectionId: 'custom',
    collectionName: 'Custom Bespoke Collection',
    category: 'canvas-paintings',
    categoryName: 'Canvas Paintings',
    gender: 'unisex',
    availableSizes: ['M', 'L', 'XL'],
    price: 750,
    description: 'A bespoke gallery-grade stretched canvas artwork featuring the iconic Free Rose screen print alongside your personalized message or name of dedication.',
    screenPrintStory: 'Hand-pulled screen print on heavy 480 GSM gallery cotton canvas, archival varnish coat.',
    fabricDetails: '480 GSM Artist Cotton Canvas, solid kiln-dried pine stretcher.',
    screenPrintInk: 'Silversmith Foil Shimmer',
    image: PRODUCT_CANVAS_ART,
    editionLimit: 'Bespoke Art'
  }
];

export const SIZING_GUIDE_DATA = {
  tops: [
    { size: 'S', chest: '36 - 38 in (92 - 96 cm)', length: '28 in (71 cm)', shoulder: '19.5 in (50 cm)', fit: 'Tailored Luxury Fit' },
    { size: 'M', chest: '39 - 41 in (99 - 104 cm)', length: '29 in (74 cm)', shoulder: '20.5 in (52 cm)', fit: 'Relaxed Editorial Boxy' },
    { size: 'L', chest: '42 - 44 in (107 - 112 cm)', length: '30 in (76 cm)', shoulder: '21.5 in (55 cm)', fit: 'Signature Oversized Drape' },
    { size: 'XL', chest: '45 - 48 in (114 - 122 cm)', length: '31 in (79 cm)', shoulder: '22.5 in (57 cm)', fit: 'Haute Streetwear Cut' }
  ],
  bottoms: [
    { size: 'S', waist: '29 - 30 in (74 - 76 cm)', inseam: '31 in (79 cm)', hip: '38 in (97 cm)', fit: 'Clean Taper / Straight' },
    { size: 'M', waist: '31 - 32 in (79 - 81 cm)', inseam: '32 in (81 cm)', hip: '40 in (102 cm)', fit: 'Standard Luxury Rise' },
    { size: 'L', waist: '33 - 35 in (84 - 89 cm)', inseam: '32 in (81 cm)', hip: '43 in (109 cm)', fit: 'Relaxed Wide Leg' },
    { size: 'XL', waist: '36 - 38 in (91 - 97 cm)', inseam: '33 in (84 cm)', hip: '46 in (117 cm)', fit: 'Wide Cut Stacking Fit' }
  ]
};
