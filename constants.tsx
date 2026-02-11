
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
    id: 'l4',
    title: 'Linking Agenda 2063 and the SDGs',
    category: 'general',
    description: 'A strategic framework exploring the synergy between the African Union Agenda 2063 and the UN Sustainable Development Goals.',
    languages: [Language.ENGLISH, Language.FRENCH],
    downloadUrl: 'https://au.int/en/agenda2063/sdgs'
  },
  {
    id: 'l2',
    title: 'VSLA Management Handbook',
    category: 'vsla',
    description: 'CARE International official 2024 training manual for managing Village Saving and Loan Associations.',
    languages: [Language.ENGLISH, Language.ACHOLI, Language.KISWAHILI],
    downloadUrl: 'https://www.care-international.org/sites/default/files/2024-05/VSLA%20Training%20Manual_2024.pdf'
  },
  {
    id: 'l3',
    title: 'Climate Resilience for IDP Communities',
    category: 'refugee',
    description: 'UNHCR adaptation strategies and resilience building for sustainable farming in displaced settings.',
    languages: [Language.ENGLISH, Language.FRENCH, Language.MADI],
    downloadUrl: 'https://www.unhcr.org/sites/default/files/legacy-pdf/61b85fc84.pdf'
  }
];

// Updated to the user-provided Google Drive folder
export const ERASMUS_TOOLKIT_URL = 'https://drive.google.com/drive/mobile/folders/191L7EU_5MZ3sK6VqcbQICTSPTHHBVmgR?usp=sharing&fbclid=PAb21jcAPprkBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafqKy6Iff1YwgWWMFlAJFWkJTBWTeRdjW7J8yntpXjzpIqdmbdnJJFtubJ38w_aem_ALd8JXrUx0sH2JULRWoCtg&utm_source=ig&utm_medium=social&utm_content=link_in_bio';
