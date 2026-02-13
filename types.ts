
export enum Language {
  ENGLISH = 'en',
  KISWAHILI = 'sw',
  FRENCH = 'fr',
  ACHOLI = 'ach',
  LUGANDA = 'lug',
  MADI = 'madi',
  RUNYAKITARA = 'run',
  LUMASABA = 'lum',
  KUPSABINY = 'kup',
  ATESO = 'ate'
}

export interface LibraryItem {
  id: string;
  title: string;
  category: 'cooperative' | 'refugee' | 'vsla' | 'household' | 'general';
  description: string;
  languages: Language[];
  downloadUrl: string;
}

export interface ServiceReferral {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface ForumPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  category: string;
  language: Language;
}

export interface PlotProfile {
  id: string;
  size: number; // in acres
  lat: number;
  lng: number;
  soilHealth: 'poor' | 'fair' | 'good' | 'excellent';
  tenure: 'customary' | 'freehold' | 'leasehold' | 'communal';
}

export interface YieldRecord {
  id: string;
  crop: string;
  amount: number; // kg
  nutrientInput: number; // kg/ha
  date: string;
}

export interface ClimateAlert {
  id: string;
  type: 'drought' | 'flood' | 'pests' | 'irregular_rain';
  parish: string;
  date: string;
}
