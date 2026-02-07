
import React from 'react';
import { Language, ServiceReferral, LibraryItem } from './types';

export const LANGUAGES = [
  { code: Language.ENGLISH, name: 'English' },
  { code: Language.KISWAHILI, name: 'Kiswahili' },
  { code: Language.FRENCH, name: 'French' },
  { code: Language.ACHOLI, name: 'Acholi' },
  { code: Language.LUGANDA, name: 'Luganda' },
  { code: Language.MADI, name: 'Madi' },
  { code: Language.RUNYAKITARA, name: 'Runyakitara' },
  { code: Language.LUMASABA, name: 'Lumasaba' },
  { code: Language.KUPSABINY, name: 'Kupsabiny' },
  { code: Language.ATESO, name: 'Ateso' },
];

export const SERVICE_REFERRALS: ServiceReferral[] = [
  { id: '1', name: 'LifeStream: Community Health Hub', description: 'Bridging the gap to local health services, blood donation drives, and emergency medical support.', icon: '🏥', link: '#/referrals' },
  { id: '4', name: 'Micro-Loans', description: 'Financial linkage and seasonal credit for small-holder farmers.', icon: '💰', link: '#/referrals' },
  { id: '5', name: 'Market Hub', description: 'Digital supply chain powered by Fromy Farm, linking farmers to traders.', icon: '🚜', link: 'https://www.fromyfarm.app/' },
  { id: '6', name: 'Capacity Training', description: 'Skill building for youth and women in agri-business.', icon: '🎓', link: '#/library' },
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'l1',
    title: 'Modern Coffee Pruning Techniques',
    category: 'cooperative',
    description: 'A comprehensive guide to increasing yield through systemic pruning.',
    languages: [Language.ENGLISH, Language.LUGANDA, Language.ACHOLI],
    downloadUrl: '#'
  },
  {
    id: 'l2',
    title: 'VSLA Management Handbook',
    category: 'vsla',
    description: 'Best practices for managing Village Saving and Loan Associations.',
    languages: [Language.ENGLISH, Language.ACHOLI, Language.KISWAHILI],
    downloadUrl: '#'
  },
  {
    id: 'l3',
    title: 'Climate Resilience for IDP Communities',
    category: 'refugee',
    description: 'Adaptation strategies for sustainable farming in displaced settings.',
    languages: [Language.ENGLISH, Language.FRENCH, Language.MADI],
    downloadUrl: '#'
  }
];
