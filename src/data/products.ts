import type {Product} from "@/types"
 
export const products: Product[] = [
  {
    "id": "prod_ts_01",
    "printify_id": "65f1a001b9c1",
    "title": "Kinetic Cyber Oversized Heavyweight Tee",
    "slug": "kinetic-cyber-oversized-heavyweight-tee",
    "description": "Crafted from 280 GSM combed ring-spun cotton with vibrant DTG archival print. Relaxed streetwear fit.",
    "category": "T-Shirts",
    "category_slug": "t-shirts",
    "blueprint_id": 6,
    "print_provider_id": 29,
    "base_cost": 1250,
    "base_price": 2800,
    "rating": 4.9,
    "reviews_count": 124,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Pitch Black", "hex": "#0F172A" },
          { "id": 102, "title": "Vintage White", "hex": "#F8FAFC" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 1001, "sku": "KT-TS01-BLK-M", "title": "Pitch Black / M", "cost": 1250, "price": 2800, "is_enabled": true, "is_available": true, "options": [101, 202] },
      { "id": 1002, "sku": "KT-TS01-BLK-L", "title": "Pitch Black / L", "cost": 1250, "price": 2800, "is_enabled": true, "is_available": true, "options": [101, 203] },
      { "id": 1003, "sku": "KT-TS01-WHT-M", "title": "Vintage White / M", "cost": 1250, "price": 2800, "is_enabled": true, "is_available": true, "options": [102, 202] },
      { "id": 1004, "sku": "KT-TS01-WHT-L", "title": "Vintage White / L", "cost": 1250, "price": 2800, "is_enabled": true, "is_available": true, "options": [102, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80", "variant_ids": [1001, 1002], "position": "front", "is_default": true },
      { "src": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80", "variant_ids": [1003, 1004], "position": "front", "is_default": false }
    ],
    
  "full_description": "Constructed from premium 280 GSM organic combed ring-spun cotton. Features a relaxed boxy cut, reinforced double-stitched neckline, and vibrant DTG archival print designed to retain visual sharp focus wash after wash.",
  "specs": [
    { "label": "Fabric Weight", "value": "280 GSM Cotton" },
    { "label": "Silhouette", "value": "Boxy Oversized Fit" },
    { "label": "Printing Technique", "value": "Direct-to-Garment (DTG)" },
    { "label": "Care Instructions", "value": "Machine wash cold inside out, tumble dry low" }
  ]
  },
  {
    "id": "prod_ts_02",
    "printify_id": "65f1a002b9c2",
    "title": "Aesthetic Kanji Boxy Graphic Tee",
    "slug": "aesthetic-kanji-boxy-graphic-tee",
    "description": "Minimalist Japanese typography printed on breathable 100% organic cotton.",
    "category": "T-Shirts",
    "category_slug": "t-shirts",
    "blueprint_id": 6,
    "print_provider_id": 29,
    "base_cost": 1150,
    "base_price": 2600,
    "rating": 4.8,
    "reviews_count": 89,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 103, "title": "Sand Dune", "hex": "#E2E8F0" },
          { "id": 104, "title": "Electric Indigo", "hex": "#4F46E5" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 1005, "sku": "KT-TS02-SND-M", "title": "Sand Dune / M", "cost": 1150, "price": 2600, "is_enabled": true, "is_available": true, "options": [103, 202] },
      { "id": 1006, "sku": "KT-TS02-IND-L", "title": "Electric Indigo / L", "cost": 1150, "price": 2600, "is_enabled": true, "is_available": true, "options": [104, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80", "variant_ids": [1005, 1006], "position": "front", "is_default": true }
    ],
    "full_description": "Crafted from 100% breathable organic cotton, featuring minimalist Japanese typography printed across the chest. Engineered for daily streetwear comfort with drop-shoulder tailoring.",
  "specs": [
    { "label": "Material", "value": "100% Organic Cotton" },
    { "label": "Fit Type", "value": "Relaxed Drop Shoulder" },
    { "label": "Print Type", "value": "Water-based Eco Ink" },
    { "label": "Origin", "value": "Ethically Sourced & Printed" }
  ]
  },
  {
    "id": "prod_ts_03",
    "printify_id": "65f1a003b9c3",
    "title": "Acid Wash Vintage Street Tee",
    "slug": "acid-wash-vintage-street-tee",
    "description": "Distressed mineral wash finish with retro halftone back print. Pre-shrunk fabric.",
    "category": "T-Shirts",
    "category_slug": "t-shirts",
    "blueprint_id": 12,
    "print_provider_id": 3,
    "base_cost": 1400,
    "base_price": 3200,
    "rating": 4.7,
    "reviews_count": 56,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 105, "title": "Washed Charcoal", "hex": "#334155" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 1007, "sku": "KT-TS03-CHR-L", "title": "Washed Charcoal / L", "cost": 1400, "price": 3200, "is_enabled": true, "is_available": true, "options": [105, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", "variant_ids": [1007], "position": "front", "is_default": true }
    ],
    "full_description": "Every garment undergoes an authentic mineral acid wash treatment, creating a unique distressed vintage patina. Finished with a bold retro halftone graphic printed on the back panel.",
  "specs": [
    { "label": "Treatment", "value": "Mineral Acid Wash" },
    { "label": "Fabric Composition", "value": "100% Pre-shrunk Cotton" },
    { "label": "Graphic Location", "value": "Full Back Print + Left Chest Logo" },
    { "label": "Neckline", "value": "Ribbed Crew Collar" }
  ]
  },
  {
    "id": "prod_ts_04",
    "printify_id": "65f1a004b9c4",
    "title": "Minimalist Code Syntax Developer Tee",
    "slug": "minimalist-code-syntax-developer-tee",
    "description": "Designed for creators and coders. Soft-touch eco-friendly water-based ink.",
    "category": "T-Shirts",
    "category_slug": "t-shirts",
    "blueprint_id": 6,
    "print_provider_id": 29,
    "base_cost": 1100,
    "base_price": 2500,
    "rating": 4.9,
    "reviews_count": 210,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Pitch Black", "hex": "#0F172A" },
          { "id": 106, "title": "Navy Blue", "hex": "#1E3A8A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" }
        ]
      }
    ],
    "variants": [
      { "id": 1008, "sku": "KT-TS04-BLK-M", "title": "Pitch Black / M", "cost": 1100, "price": 2500, "is_enabled": true, "is_available": true, "options": [101, 202] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80", "variant_ids": [1008], "position": "front", "is_default": true }
    ],
    "full_description": "Designed specifically for creators, coders, and minimalists. Lightweight yet durable fine-jersey fabric with soft-touch direct-to-garment syntax pattern print.",
  "specs": [
    { "label": "Fabric Weight", "value": "180 GSM Fine Jersey" },
    { "label": "Fit", "value": "Standard Modern Fit" },
    { "label": "Ink Type", "value": "Soft-Touch Eco-Pigment" },
    { "label": "Shrinkage", "value": "Pre-shrunk < 3%" }
  ]
  },
  {
    "id": "prod_hd_01",
    "printify_id": "65f1a005b9c5",
    "title": "Archive Cyber Graphic Heavyweight Hoodie",
    "slug": "archive-cyber-graphic-heavyweight-hoodie",
    "description": "450 GSM heavyweight fleece hoodie with double-lined hood, kangaroo pocket, and puff-print back artwork.",
    "category": "Hoodies",
    "category_slug": "hoodies",
    "blueprint_id": 77,
    "print_provider_id": 99,
    "base_cost": 2650,
    "base_price": 6800,
    "rating": 5.0,
    "reviews_count": 175,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Midnight Black", "hex": "#0F172A" },
          { "id": 104, "title": "Cyber Indigo", "hex": "#4F46E5" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" },
          { "id": 205, "title": "2XL" }
        ]
      }
    ],
    "variants": [
      { "id": 2001, "sku": "KT-HD01-BLK-L", "title": "Midnight Black / L", "cost": 2650, "price": 6800, "is_enabled": true, "is_available": true, "options": [101, 203] },
      { "id": 2002, "sku": "KT-HD01-IND-XL", "title": "Cyber Indigo / XL", "cost": 2850, "price": 7200, "is_enabled": true, "is_available": true, "options": [104, 204] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80", "variant_ids": [2001, 2002], "position": "front", "is_default": true }
    ],
    "full_description": "Built for cold weather street style using ultra-dense 450 GSM fleece. Boasts a double-lined thick hood without drawstrings, a spacious kangaroo pouch, and tactile 3D puff-print back artwork.",
  "specs": [
    { "label": "Fleece Weight", "value": "450 GSM Heavyweight" },
    { "label": "Interior", "value": "Brushed Fleece Lining" },
    { "label": "Hood Construction", "value": "Double-Layered (No Drawstrings)" },
    { "label": "Print Style", "value": "High-Density 3D Puff Print" }
  ]
  },
  {
    "id": "prod_hd_02",
    "printify_id": "65f1a006b9c6",
    "title": "Tokyo Drift Streetwear Pullover Hoodie",
    "slug": "tokyo-drift-streetwear-pullover-hoodie",
    "description": "High-density chest embroidery paired with vivid sleeve prints. Ultra-soft brushed interior.",
    "category": "Hoodies",
    "category_slug": "hoodies",
    "blueprint_id": 77,
    "print_provider_id": 99,
    "base_cost": 2500,
    "base_price": 5900,
    "rating": 4.8,
    "reviews_count": 94,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 107, "title": "Ash Heather", "hex": "#94A3B8" },
          { "id": 101, "title": "Midnight Black", "hex": "#0F172A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" }
        ]
      }
    ],
    "variants": [
      { "id": 2003, "sku": "KT-HD02-ASH-M", "title": "Ash Heather / M", "cost": 2500, "price": 5900, "is_enabled": true, "is_available": true, "options": [107, 202] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80", "variant_ids": [2003], "position": "front", "is_default": true }
    ],
    "full_description": "Combines high-density chest embroidery with vivid sleeve graphics. Features flatlock stitching along all seams and heavy-duty 2x2 ribbing on cuffs and waistband.",
  "specs": [
    { "label": "Fabric Blend", "value": "80% Cotton / 20% Polyester" },
    { "label": "Embroidery", "value": "Satin Stitch Chest Patch" },
    { "label": "Pocket", "value": "Front Pass-Through Kangaroo Pocket" },
    { "label": "Cuffs", "value": "Reinforced 2x2 Rib Cuffs" }
  ]
  },
  {
    "id": "prod_hd_03",
    "printify_id": "65f1a007b9c7",
    "title": "Essential Drop-Shoulder Blank Vibes Hoodie",
    "slug": "essential-drop-shoulder-hoodie",
    "description": "No-drawstring modern minimalist silhouette with subtle tonal back branding.",
    "category": "Hoodies",
    "category_slug": "hoodies",
    "blueprint_id": 77,
    "print_provider_id": 99,
    "base_cost": 2400,
    "base_price": 5500,
    "rating": 4.7,
    "reviews_count": 62,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 108, "title": "Forest Olive", "hex": "#14532D" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 2004, "sku": "KT-HD03-OLV-L", "title": "Forest Olive / L", "cost": 2400, "price": 5500, "is_enabled": true, "is_available": true, "options": [108, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80", "variant_ids": [2004], "position": "front", "is_default": true }
    ],
    "full_description": "A clean, unbranded aesthetic hoodie highlighting structural drop-shoulder geometry. Softly washed fabric gives it a cozy hand feel with tonal branding hit on the hood hem.",
  "specs": [
    { "label": "Material", "value": "350 GSM Ring-Spun Cotton" },
    { "label": "Design Style", "value": "Minimalist Blank / Drop Shoulder" },
    { "label": "Drawstrings", "value": "Tonal Flat Cotton Cords" },
    { "label": "Wash", "value": "Garment Dyed" }
  ]
  },
  {
    "id": "prod_hd_04",
    "printify_id": "65f1a008b9c8",
    "title": "Future Dystopia Zip-Up Tech Hoodie",
    "slug": "future-dystopia-zip-up-tech-hoodie",
    "description": "Heavy-duty matte metal zipper with front and back cybernetic vector graphics.",
    "category": "Hoodies",
    "category_slug": "hoodies",
    "blueprint_id": 85,
    "print_provider_id": 99,
    "base_cost": 2900,
    "base_price": 6500,
    "rating": 4.9,
    "reviews_count": 48,
    "is_featured": false,
    "sync_status": "syncing",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Pitch Black", "hex": "#0F172A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" }
        ]
      }
    ],
    "variants": [
      { "id": 2005, "sku": "KT-HD04-BLK-L", "title": "Pitch Black / L", "cost": 2900, "price": 6500, "is_enabled": true, "is_available": true, "options": [101, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80", "variant_ids": [2005], "position": "front", "is_default": true }
    ],
    "full_description": "Features a heavy-duty gunmetal full-zip enclosure, thumbhole storm cuffs, and futuristic vector circuitry printed along both shoulders and sleeves.",
  "specs": [
    { "label": "Zipper", "value": "YKK Custom Metal Full-Zip" },
    { "label": "Feature", "value": "Integrated Thumbhole Cuffs" },
    { "label": "Fabric", "value": "Tech Fleece Blend (400 GSM)" },
    { "label": "Graphics", "value": "Dual-Sleeve & Shoulder DTG Print" }
  ]
  },
  {
    "id": "prod_sw_01",
    "printify_id": "65f1a009b9c9",
    "title": "Acid Wash Crewneck Heavy Sweatshirt",
    "slug": "acid-wash-crewneck-heavy-sweatshirt",
    "description": "Ribbed collar, cuffs, and waistband in 380 GSM French Terry cotton. Vintage faded look.",
    "category": "Sweatshirts",
    "category_slug": "sweatshirts",
    "blueprint_id": 49,
    "print_provider_id": 29,
    "base_cost": 2100,
    "base_price": 4800,
    "rating": 4.9,
    "reviews_count": 112,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 105, "title": "Faded Slate", "hex": "#475569" },
          { "id": 102, "title": "Cream Bone", "hex": "#F1F5F9" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 3001, "sku": "KT-SW01-SLT-L", "title": "Faded Slate / L", "cost": 2100, "price": 4800, "is_enabled": true, "is_available": true, "options": [105, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=800&q=80", "variant_ids": [3001], "position": "front", "is_default": true }
    ],
    "full_description": "Premium 380 GSM French Terry sweatshirt featuring an intricate hand-dyed acid wash texture. Designed with dropped shoulders and thick ribbing for an authentic retro fit.",
  "specs": [
    { "label": "Fabric Type", "value": "380 GSM French Terry" },
    { "label": "Dye Method", "value": "Hand-Treated Acid Wash" },
    { "label": "Neckline", "value": "Thick Ribbed Crew Neck" },
    { "label": "Fit", "value": "Boxy Vintage Silhouette" }
  ]
  },
  {
    "id": "prod_sw_02",
    "printify_id": "65f1a010b9d0",
    "title": "Retro Varsity Typography Crewneck",
    "slug": "retro-varsity-typography-crewneck",
    "description": "Classic collegiate arch graphic across the chest with durable crack-resistant screen print.",
    "category": "Sweatshirts",
    "category_slug": "sweatshirts",
    "blueprint_id": 49,
    "print_provider_id": 29,
    "base_cost": 1950,
    "base_price": 4500,
    "rating": 4.6,
    "reviews_count": 73,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 106, "title": "Oxford Navy", "hex": "#1E3A8A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" }
        ]
      }
    ],
    "variants": [
      { "id": 3002, "sku": "KT-SW02-NVY-M", "title": "Oxford Navy / M", "cost": 1950, "price": 4500, "is_enabled": true, "is_available": true, "options": [106, 202] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1572495641004-28421ae52e52?auto=format&fit=crop&w=800&q=80", "variant_ids": [3002], "position": "front", "is_default": true }
    ],
    "full_description": "Inspired by 90s collegiate athletics. Features a high-contrast arch logo printed across the chest with crack-resistant flexible screen print technology.",
  "specs": [
    { "label": "Fabric", "value": "75% Cotton / 25% Poly Fleece" },
    { "label": "Print Technique", "value": "Screen Printed Arch Graphic" },
    { "label": "Weight", "value": "320 GSM Midweight" },
    { "label": "Stretch", "value": "4-Way Comfort Stretch" }
  ]
  },
  {
    "id": "prod_sw_03",
    "printify_id": "65f1a011b9d1",
    "title": "Botanical Line-Art Eco Sweatshirt",
    "slug": "botanical-line-art-eco-sweatshirt",
    "description": "Made with 85% organic ring-spun combed cotton and 15% recycled polyester.",
    "category": "Sweatshirts",
    "category_slug": "sweatshirts",
    "blueprint_id": 49,
    "print_provider_id": 29,
    "base_cost": 2200,
    "base_price": 4900,
    "rating": 4.8,
    "reviews_count": 41,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 103, "title": "Oatmeal Milk", "hex": "#F8FAFC" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 201, "title": "S" },
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" }
        ]
      }
    ],
    "variants": [
      { "id": 3003, "sku": "KT-SW03-OAT-M", "title": "Oatmeal Milk / M", "cost": 2200, "price": 4900, "is_enabled": true, "is_available": true, "options": [103, 202] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80", "variant_ids": [3003], "position": "front", "is_default": true }
    ],
    "full_description": "Crafted from eco-conscious recycled fibers and organic cotton. Decorated with intricate botanical vector line-art using water-based non-toxic inks.",
  "specs": [
    { "label": "Sustainability", "value": "85% Organic Cotton, 15% Recycled Poly" },
    { "label": "Ink Certification", "value": "OEKO-TEX Certified Eco Ink" },
    { "label": "Feel", "value": "Super-soft Brushed Fleece Interior" },
    { "label": "Weight", "value": "300 GSM" }
  ]
  },
  {
    "id": "prod_sw_04",
    "printify_id": "65f1a012b9d2",
    "title": "Kinetic Studio Embroidered Fleece Pullover",
    "slug": "kinetic-studio-embroidered-fleece-pullover",
    "description": "Minimalist left-chest 3D satin stitch embroidery on ultra-cozy fleece.",
    "category": "Sweatshirts",
    "category_slug": "sweatshirts",
    "blueprint_id": 49,
    "print_provider_id": 29,
    "base_cost": 2300,
    "base_price": 5200,
    "rating": 4.9,
    "reviews_count": 67,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Pitch Black", "hex": "#0F172A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 202, "title": "M" },
          { "id": 203, "title": "L" },
          { "id": 204, "title": "XL" }
        ]
      }
    ],
    "variants": [
      { "id": 3004, "sku": "KT-SW04-BLK-L", "title": "Pitch Black / L", "cost": 2300, "price": 5200, "is_enabled": true, "is_available": true, "options": [101, 203] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80", "variant_ids": [3004], "position": "front", "is_default": true }
    ],
    "full_description": "Subtle luxury streetwear. Features a small 3D satin stitch Kinetic studio emblem on the left chest with clean tonal neck taping.",
  "specs": [
    { "label": "Embroidery", "value": "High-Density Left Chest Satin Stitch" },
    { "label": "Fabric", "value": "100% Combed Cotton Face" },
    { "label": "Weight", "value": "360 GSM Heavyweight" },
    { "label": "Stitching", "value": "Cover-stitched Seams" }
  ]
  },
  {
    "id": "prod_pc_01",
    "printify_id": "65f1a013b9d3",
    "title": "Cyberpunk Matrix MagSafe Tough Case",
    "slug": "cyberpunk-matrix-magsafe-tough-case",
    "description": "Dual-layer polycarbonate outer shell with shock-absorbing TPU liner and built-in MagSafe magnet ring.",
    "category": "Phone Cases",
    "category_slug": "phone-cases",
    "blueprint_id": 420,
    "print_provider_id": 14,
    "base_cost": 1100,
    "base_price": 2900,
    "rating": 4.9,
    "reviews_count": 143,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Phone Models",
        "type": "model",
        "values": [
          { "id": 301, "title": "iPhone 16 Pro Max" },
          { "id": 302, "title": "iPhone 16 Pro" },
          { "id": 303, "title": "iPhone 15 Pro" },
          { "id": 304, "title": "Samsung Galaxy S24 Ultra" }
        ]
      },
      {
        "name": "Surface Finish",
        "type": "finish",
        "values": [
          { "id": 401, "title": "Matte" },
          { "id": 402, "title": "Glossy" }
        ]
      }
    ],
    "variants": [
      { "id": 4001, "sku": "KT-PC01-16PM-MAT", "title": "iPhone 16 Pro Max / Matte", "cost": 1100, "price": 2900, "is_enabled": true, "is_available": true, "options": [301, 401] },
      { "id": 4002, "sku": "KT-PC01-15P-GLS", "title": "iPhone 15 Pro / Glossy", "cost": 1100, "price": 2900, "is_enabled": true, "is_available": true, "options": [303, 402] },
      { "id": 4003, "sku": "KT-PC01-S24U-MAT", "title": "Samsung Galaxy S24 Ultra / Matte", "cost": 1100, "price": 2900, "is_enabled": true, "is_available": true, "options": [304, 401] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80", "variant_ids": [4001, 4002, 4003], "position": "back", "is_default": true }
    ],
    "full_description": "Dual-layer ultimate protection case. Features a hard polycarbonate outer shell, shock-absorbing inner TPU core, raised camera lips, and embedded N52 MagSafe magnet ring for high-speed wireless charging.",
  "specs": [
    { "label": "Protection Rating", "value": "10ft Drop Tested" },
    { "label": "Structure", "value": "Dual-Layer (Polycarbonate + TPU)" },
    { "label": "Compatibility", "value": "MagSafe & Qi Wireless Chargers" },
    { "label": "Bezel", "value": "1.5mm Raised Screen & Camera Lip" }
  ]
  },
  {
    "id": "prod_pc_02",
    "printify_id": "65f1a014b9d4",
    "title": "Carbon Fiber Topographic Impact Case",
    "slug": "carbon-fiber-topographic-impact-case",
    "description": "3D wrap UV-cured terrain map lines with raised bezel screen and camera protection.",
    "category": "Phone Cases",
    "category_slug": "phone-cases",
    "blueprint_id": 420,
    "print_provider_id": 14,
    "base_cost": 1050,
    "base_price": 2600,
    "rating": 4.7,
    "reviews_count": 88,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Phone Models",
        "type": "model",
        "values": [
          { "id": 301, "title": "iPhone 16 Pro Max" },
          { "id": 303, "title": "iPhone 15 Pro" },
          { "id": 304, "title": "Samsung Galaxy S24 Ultra" }
        ]
      }
    ],
    "variants": [
      { "id": 4004, "sku": "KT-PC02-16PM", "title": "iPhone 16 Pro Max", "cost": 1050, "price": 2600, "is_enabled": true, "is_available": true, "options": [301] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80", "variant_ids": [4004], "position": "back", "is_default": true }
    ],
    "full_description": "Engineered with a textured topographic contour vector graphic overlay. Printed using anti-scratch 3D wrap technology that extends all the way around the corners.",
  "specs": [
    { "label": "Finish", "value": "Matte Anti-Fingerprint Texture" },
    { "label": "Print Quality", "value": "Full-Wrap 3D UV Sublimation" },
    { "label": "Material", "value": "Impact-Resistant Polycarbonate" },
    { "label": "Buttons", "value": "Tactile Chrome Key Covers" }
  ]
  },
  {
    "id": "prod_pc_03",
    "printify_id": "65f1a015b9d5",
    "title": "Great Wave Neon Kanagawa Clear Case",
    "slug": "great-wave-neon-kanagawa-clear-case",
    "description": "Anti-yellowing flexible transparent TPU case featuring electric indigo Japanese wave artwork.",
    "category": "Phone Cases",
    "category_slug": "phone-cases",
    "blueprint_id": 425,
    "print_provider_id": 14,
    "base_cost": 850,
    "base_price": 2200,
    "rating": 4.8,
    "reviews_count": 64,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Phone Models",
        "type": "model",
        "values": [
          { "id": 302, "title": "iPhone 16 Pro" },
          { "id": 303, "title": "iPhone 15 Pro" }
        ]
      }
    ],
    "variants": [
      { "id": 4005, "sku": "KT-PC03-16P", "title": "iPhone 16 Pro", "cost": 850, "price": 2200, "is_enabled": true, "is_available": true, "options": [302] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=800&q=80", "variant_ids": [4005], "position": "back", "is_default": true }
    ],
    "full_description": "Ultra-clear flexible TPU bumper case with UV-resistant anti-yellowing technology. Displays vibrant neon artwork while keeping your original phone color visible.",
  "specs": [
    { "label": "Case Style", "value": "Slim Transparent Bumper" },
    { "label": "Material", "value": "Anti-Yellowing TPU + Acrylic Back" },
    { "label": "Grip", "value": "Non-Slip Micro-Dot Textured Edges" },
    { "label": "Port Cutouts", "value": "Precision Laser Cut" }
  ]
  },
  {
    "id": "prod_pc_04",
    "printify_id": "65f1a016b9d6",
    "title": "Biodegradable Eco-Compostable Minimal Case",
    "slug": "biodegradable-eco-compostable-minimal-case",
    "description": "100% plant-based wheat straw and PBAT bioplastic with natural speckled texture.",
    "category": "Phone Cases",
    "category_slug": "phone-cases",
    "blueprint_id": 430,
    "print_provider_id": 14,
    "base_cost": 1200,
    "base_price": 2800,
    "rating": 4.9,
    "reviews_count": 51,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Phone Models",
        "type": "model",
        "values": [
          { "id": 301, "title": "iPhone 16 Pro Max" },
          { "id": 304, "title": "Samsung Galaxy S24 Ultra" }
        ]
      }
    ],
    "variants": [
      { "id": 4006, "sku": "KT-PC04-16PM", "title": "iPhone 16 Pro Max", "cost": 1200, "price": 2800, "is_enabled": true, "is_available": true, "options": [301] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80", "variant_ids": [4006], "position": "back", "is_default": true }
    ],
    "full_description": "Made from 100% plant-derived materials (wheat straw and bioplastics). Naturally degrades in industrial compost within 180 days without sacrificing drop protection.",
  "specs": [
    { "label": "Eco Impact", "value": "100% Plastic-Free & Compostable" },
    { "label": "Material Blend", "value": "Wheat Straw + PBAT Bioplastic" },
    { "label": "Texture", "value": "Natural Flecked Matte Surface" },
    { "label": "Drop Test", "value": "6ft Everyday Drop Safe" }
  ]
  },
  {
    "id": "prod_cp_01",
    "printify_id": "65f1a017b9d7",
    "title": "Structure Low-Profile Embroidered Dad Cap",
    "slug": "structure-low-profile-embroidered-dad-cap",
    "description": "100% chino cotton twill unstructured 6-panel cap with antique brass buckle strap and 3D front embroidery.",
    "category": "Caps",
    "category_slug": "caps",
    "blueprint_id": 310,
    "print_provider_id": 45,
    "base_cost": 1250,
    "base_price": 3000,
    "rating": 4.9,
    "reviews_count": 132,
    "is_featured": true,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Obsidian Black", "hex": "#0F172A" },
          { "id": 106, "title": "Midnight Navy", "hex": "#1E3A8A" },
          { "id": 103, "title": "Stone Khaki", "hex": "#D6D3D1" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 210, "title": "One Size" }
        ]
      }
    ],
    "variants": [
      { "id": 5001, "sku": "KT-CP01-BLK-OS", "title": "Obsidian Black / One Size", "cost": 1250, "price": 3000, "is_enabled": true, "is_available": true, "options": [101, 210] },
      { "id": 5002, "sku": "KT-CP01-NVY-OS", "title": "Midnight Navy / One Size", "cost": 1250, "price": 3000, "is_enabled": true, "is_available": true, "options": [106, 210] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80", "variant_ids": [5001, 5002], "position": "front", "is_default": true }
    ],
    "full_description": "Classic 6-panel unstructured dad hat crafted from 100% washed chino cotton twill. Finished with intricate 3D puff embroidery on the front and an antique brass tri-glide buckle strap back.",
  "specs": [
    { "label": "Profile", "value": "Unstructured Low-Profile" },
    { "label": "Fabric", "value": "100% Chino Cotton Twill" },
    { "label": "Closure", "value": "Antique Brass Buckle Strap" },
    { "label": "Embroidery", "value": "3D Raised Front Logo" }
  ]
  },
  {
    "id": "prod_cp_02",
    "printify_id": "65f1a018b9d8",
    "title": "Kinetic Icon Flat-Bill Snapback Hat",
    "slug": "kinetic-icon-flat-bill-snapback-hat",
    "description": "Structured high-profile 6-panel snapback with classic green undervisor and raised puff embroidery.",
    "category": "Caps",
    "category_slug": "caps",
    "blueprint_id": 312,
    "print_provider_id": 45,
    "base_cost": 1350,
    "base_price": 3200,
    "rating": 4.8,
    "reviews_count": 79,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Pitch Black", "hex": "#0F172A" },
          { "id": 104, "title": "Electric Indigo", "hex": "#4F46E5" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 210, "title": "One Size" }
        ]
      }
    ],
    "variants": [
      { "id": 5003, "sku": "KT-CP02-BLK-OS", "title": "Pitch Black / One Size", "cost": 1350, "price": 3200, "is_enabled": true, "is_available": true, "options": [101, 210] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80", "variant_ids": [5003], "position": "front", "is_default": true }
    ],
    "full_description": "High-profile structured snapback featuring a rigid front buckram crown, classic retro green undervisor, and an adjustable 7-position plastic snap closure.",
  "specs": [
    { "label": "Crown", "value": "High-Profile 6-Panel Structured" },
    { "label": "Undervisor", "value": "Classic Green Vintage Fabric" },
    { "label": "Closure", "value": "Adjustable Plastic Snapback" },
    { "label": "Visor Shape", "value": "Flat Bill (Moldable)" }
  ]
  },
  {
    "id": "prod_cp_03",
    "printify_id": "65f1a019b9d9",
    "title": "Vintage Corduroy Streetwear Cap",
    "slug": "vintage-corduroy-streetwear-cap",
    "description": "100% cotton 8-wale corduroy crown with soft buckram lining and woven patch label.",
    "category": "Caps",
    "category_slug": "caps",
    "blueprint_id": 315,
    "print_provider_id": 45,
    "base_cost": 1400,
    "base_price": 3400,
    "rating": 4.9,
    "reviews_count": 45,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 108, "title": "Forest Olive", "hex": "#14532D" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 210, "title": "One Size" }
        ]
      }
    ],
    "variants": [
      { "id": 5004, "sku": "KT-CP03-OLV-OS", "title": "Forest Olive / One Size", "cost": 1400, "price": 3400, "is_enabled": true, "is_available": true, "options": [108, 210] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80", "variant_ids": [5004], "position": "front", "is_default": true }
    ],
    "full_description": "Crafted from plush 8-wale cotton corduroy for a tactile vintage vibe. Features a soft interior sweatband and a woven damask patch sewn onto the front crown.",
  "specs": [
    { "label": "Material", "value": "100% Cotton 8-Wale Corduroy" },
    { "label": "Patch", "value": "High-Density Woven Damask Label" },
    { "label": "Sweatband", "value": "Cotton Moisture-Wicking Band" },
    { "label": "Fit", "value": "One Size Fits Most Adjustable" }
  ]
  },
  {
    "id": "prod_cp_04",
    "printify_id": "65f1a020b9e0",
    "title": "Breathable Mesh Trucker Cap",
    "slug": "breathable-mesh-trucker-cap",
    "description": "Classic structured front panel with nylon mesh back panels and adjustable plastic snap closure.",
    "category": "Caps",
    "category_slug": "caps",
    "blueprint_id": 318,
    "print_provider_id": 45,
    "base_cost": 1050,
    "base_price": 2400,
    "rating": 4.6,
    "reviews_count": 38,
    "is_featured": false,
    "sync_status": "synced",
    "options": [
      {
        "name": "Colors",
        "type": "color",
        "values": [
          { "id": 101, "title": "Black / White", "hex": "#0F172A" }
        ]
      },
      {
        "name": "Sizes",
        "type": "size",
        "values": [
          { "id": 210, "title": "One Size" }
        ]
      }
    ],
    "variants": [
      { "id": 5005, "sku": "KT-CP04-BLK-OS", "title": "Black / White / One Size", "cost": 1050, "price": 2400, "is_enabled": true, "is_available": true, "options": [101, 210] }
    ],
    "images": [
      { "src": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80", "variant_ids": [5005], "position": "front", "is_default": true }
    ],
    "full_description": "Designed for maximum airflow. Features a padded foam structured front panel with screen-printed brand graphic and breathable rear nylon mesh panels.",
  "specs": [
    { "label": "Front Panel", "value": "High-Density Foam Front" },
    { "label": "Back Mesh", "value": "100% Breathable Nylon Mesh" },
    { "label": "Visor", "value": "Pre-curved Bill" },
    { "label": "Closure", "value": "Snap Closure" }
  ]
  }
]