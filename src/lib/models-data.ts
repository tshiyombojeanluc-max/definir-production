export type ModelCategory = 'Female' | 'Male' | 'Fashion' | 'Commercial' | 'Editorial'

export interface ModelMeasurements {
  bust?: string
  waist: string
  hips?: string
  chest?: string
  shoe: string
}

export interface Model {
  id: string
  name: string
  slug: string
  category: ModelCategory
  height: string
  measurements: ModelMeasurements
  hair: string
  eyes: string
  location: string
  experience: string
  specialties: string[]
  biography: string
  heroImage: string
  portfolioImages: string[]
  stats: { campaigns: number; editorials: number; runways: number }
}

export const models: Model[] = [
  {
    id: '1',
    name: 'Aria Chen',
    slug: 'aria-chen',
    category: 'Fashion',
    height: "5'10\" / 178cm",
    measurements: { bust: '34"', waist: '25"', hips: '35"', shoe: '38 EU' },
    hair: 'Black',
    eyes: 'Dark Brown',
    location: 'New York',
    experience: '7 Years',
    specialties: ['High Fashion', 'Editorial', 'Runway'],
    biography:
      'Aria Chen emerged from Manhattan to become one of the most sought-after faces in high fashion. With her striking features and effortless presence, she has graced international Vogue, walked for Balenciaga and Valentino, and starred in major campaigns for luxury houses worldwide. Her ability to transform for any creative vision makes her a director\'s first choice.',
    heroImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 48, editorials: 112, runways: 34 },
  },
  {
    id: '2',
    name: 'Sofia Martin',
    slug: 'sofia-martin',
    category: 'Editorial',
    height: "5'11\" / 180cm",
    measurements: { bust: '33"', waist: '24"', hips: '34"', shoe: '39 EU' },
    hair: 'Dark Brown',
    eyes: 'Hazel',
    location: 'Paris',
    experience: '5 Years',
    specialties: ['Editorial', 'Commercial', 'Print'],
    biography:
      'Sofia Martin is a Paris-based editorial force whose versatility and natural elegance have made her a constant presence in the pages of Harper\'s Bazaar, Elle, and W Magazine. Fluent in four languages and trained in classical dance, she brings a rare physical intelligence to every shoot.',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1524799526615-766a9833dec0?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 31, editorials: 87, runways: 19 },
  },
  {
    id: '3',
    name: 'Layla Hassan',
    slug: 'layla-hassan',
    category: 'Commercial',
    height: "5'8\" / 173cm",
    measurements: { bust: '35"', waist: '26"', hips: '36"', shoe: '37 EU' },
    hair: 'Dark Brown',
    eyes: 'Brown',
    location: 'Milan',
    experience: '4 Years',
    specialties: ['Commercial', 'Lifestyle', 'Beauty'],
    biography:
      'Layla Hassan\'s warm, accessible beauty has made her one of the most in-demand faces for commercial and beauty campaigns across Europe. Represented in Milan and Dubai, she bridges global markets with ease. Layla has worked with LancÃ´me, L\'OrÃ©al, and ZARA, and her relatable quality translates powerfully across all media.',
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 62, editorials: 44, runways: 8 },
  },
  {
    id: '4',
    name: 'Zara Kimura',
    slug: 'zara-kimura',
    category: 'Female',
    height: "5'9\" / 175cm",
    measurements: { bust: '34"', waist: '24"', hips: '35"', shoe: '38 EU' },
    hair: 'Black',
    eyes: 'Dark Brown',
    location: 'Tokyo',
    experience: '6 Years',
    specialties: ['Fashion', 'Runway', 'Beauty'],
    biography:
      'Born in Kyoto and based between Tokyo and New York, Zara Kimura has carved a distinct space in the industry with her otherworldly aesthetic and fearless approach to avant-garde fashion. She has walked for Comme des GarÃ§ons, Issey Miyake, and Rick Owens, and her editorial work pushes the boundaries of visual storytelling.',
    heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1524799526615-766a9833dec0?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 39, editorials: 93, runways: 51 },
  },
  {
    id: '5',
    name: 'Marcus Webb',
    slug: 'marcus-webb',
    category: 'Male',
    height: "6'1\" / 185cm",
    measurements: { chest: '40"', waist: '32"', shoe: '44 EU' },
    hair: 'Black',
    eyes: 'Brown',
    location: 'London',
    experience: '8 Years',
    specialties: ['High Fashion', 'Sportswear', 'Grooming'],
    biography:
      'Marcus Webb is a London-based model with a decade of experience across high fashion, sportswear, and grooming campaigns. His striking presence and athletic build have made him a favourite for brands like Nike, Tom Ford, and Burberry. Marcus brings a quiet intensity to every image that is instantly recognisable.',
    heroImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 55, editorials: 67, runways: 22 },
  },
  {
    id: '6',
    name: 'Jordan Blake',
    slug: 'jordan-blake',
    category: 'Commercial',
    height: "6'0\" / 183cm",
    measurements: { chest: '38"', waist: '30"', shoe: '43 EU' },
    hair: 'Dark Brown',
    eyes: 'Green',
    location: 'Los Angeles',
    experience: '5 Years',
    specialties: ['Commercial', 'Fitness', 'Lifestyle'],
    biography:
      'Jordan Blake is the definition of approachable luxury â€” a LA-based model whose natural charisma and versatility have made him a standout in commercial and lifestyle campaigns. He has represented brands across fitness, tech, and premium lifestyle, and his warm screen presence transitions seamlessly from print to video.',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 74, editorials: 28, runways: 4 },
  },
  {
    id: '7',
    name: 'CÃ©leste Dubois',
    slug: 'celeste-dubois',
    category: 'Fashion',
    height: "5'10\" / 178cm",
    measurements: { bust: '33"', waist: '24"', hips: '34"', shoe: '38 EU' },
    hair: 'Blonde',
    eyes: 'Blue',
    location: 'Paris',
    experience: '9 Years',
    specialties: ['Couture', 'Runway', 'Fine Jewellery'],
    biography:
      'A Parisian by birth and sensibility, CÃ©leste Dubois is synonymous with refined elegance. With nine years in the industry, she has become a staple at Paris Fashion Week, walking for Chanel, Dior, and Givenchy. Her work with fine jewellery houses â€” Cartier, Van Cleef & Arpels, and Boucheron â€” speaks to her singular ability to embody timeless luxury.',
    heroImage: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 29, editorials: 141, runways: 78 },
  },
  {
    id: '8',
    name: 'Damien Osei',
    slug: 'damien-osei',
    category: 'Editorial',
    height: "6'2\" / 188cm",
    measurements: { chest: '41"', waist: '31"', shoe: '45 EU' },
    hair: 'Black',
    eyes: 'Dark Brown',
    location: 'New York',
    experience: '6 Years',
    specialties: ['Editorial', 'Fine Art', 'Couture'],
    biography:
      'Damien Osei is a New York-based editorial model whose powerful physicality and emotional depth have made him one of the most photographed men in the industry. His collaboration with photographers like Mert & Marcus and Steven Meisel has produced iconic images that transcend fashion into fine art. He is the face of a new era of masculine expression.',
    heroImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=55',
    portfolioImages: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=360&auto=format&fit=crop&q=55',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=360&auto=format&fit=crop&q=55',
    ],
    stats: { campaigns: 33, editorials: 98, runways: 15 },
  },
]

export const allPortfolioImages = models.flatMap((m) =>
  m.portfolioImages.map((src, i) => ({
    id: `${m.id}-${i}`,
    src,
    alt: `${m.name} portfolio`,
    title: m.name,
    description: m.category,
  }))
)
