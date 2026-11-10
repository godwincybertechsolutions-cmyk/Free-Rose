export type CollectionId = 
  | 'custom'
  | 'wanisa'
  | 'mashujaa'
  | 'kenyan-culture'
  | 'creative-art'
  | 'athletes';

export type CategoryId = 
  | 'canvas-paintings'
  | 'shorts'
  | 'jerseys'
  | 'ts'
  | 'denim-trousers'
  | 'denim-jackets';

export type GenderType = 'unisex' | 'men' | 'ladies';

export type ApparelSize = 'S' | 'M' | 'L' | 'XL';

export type InkFinish = 
  | 'High-Density 3D Puff Print'
  | 'Matte Water-Base Discharge'
  | 'Vintage Distressed Crackle'
  | 'Silversmith Foil Shimmer';

export interface Product {
  id: string;
  name: string;
  collectionId: CollectionId;
  collectionName: string;
  category: CategoryId;
  categoryName: string;
  gender: GenderType;
  availableSizes: ApparelSize[];
  price: number;
  description: string;
  screenPrintStory: string;
  fabricDetails: string;
  screenPrintInk: InkFinish;
  image: string;
  secondaryAngleImage?: string;
  isFeatured?: boolean;
  editionLimit?: string;
}

export interface CustomScreenPrintConfig {
  garmentType: 'Heavyweight Luxury Tee' | 'Raw Denim Jacket' | 'Selvedge Denim Trouser' | 'Mesh Jersey' | 'Court Shorts' | 'Archival Canvas';
  garmentColor: 'Obsidian Black' | 'Chalk White';
  placement: 'Oversized Back Center' | 'Left Chest Emblem' | 'Full Front Graphic' | 'Sleeve & Trouser Stamp';
  roseMotif: 'Signature Blooming Rose' | 'Rose Stem & Thorns' | 'Geometric Kenyan Rose' | 'Abstract Painterly Rose';
  inkFinish: InkFinish;
  customDedicationText: string;
  customInitials: string;
  size: ApparelSize;
  gender: GenderType;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  collectionName: string;
  categoryName: string;
  gender: GenderType;
  size: ApparelSize;
  price: number;
  image: string;
  quantity: number;
  inkFinish?: string;
  giftCardMessage?: string;
  isCustom?: boolean;
  customDetails?: CustomScreenPrintConfig;
}
