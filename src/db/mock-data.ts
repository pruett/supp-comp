import { Supplement, SupplementCategory } from '@/lib/types'

export const mockSupplements: Supplement[] = [
  {
    id: '1',
    name: 'Creatine Monohydrate',
    brand: 'Optimum Nutrition',
    category: 'Creatine',
    primaryIngredient: 'Creatine Monohydrate',
    trustScore: 9.2,
    price: 24.99,
    ingredients: [
      { name: 'Creatine Monohydrate', amount: '5', unit: 'g' }
    ],
    certifications: ['NSF Certified', 'Informed Sport'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.5,
      ingredientTransparency: 9.2,
      manufacturingQuality: 9.0,
      brandReputation: 9.1
    }
  },
  {
    id: '2',
    name: 'Pure Creatine',
    brand: 'NOW Foods',
    category: 'Creatine',
    primaryIngredient: 'Creatine Monohydrate',
    trustScore: 8.7,
    price: 18.99,
    ingredients: [
      { name: 'Creatine Monohydrate', amount: '5', unit: 'g' }
    ],
    certifications: ['GMP Quality Assured'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.5,
      ingredientTransparency: 9.0,
      manufacturingQuality: 8.8,
      brandReputation: 8.5
    }
  },
  {
    id: '3',
    name: 'Micronized Creatine',
    brand: 'Thorne',
    category: 'Creatine',
    primaryIngredient: 'Micronized Creatine Monohydrate',
    trustScore: 9.5,
    price: 32.99,
    ingredients: [
      { name: 'Micronized Creatine Monohydrate', amount: '5', unit: 'g' }
    ],
    certifications: ['NSF Certified for Sport', 'TGA Listed'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.8,
      ingredientTransparency: 9.5,
      manufacturingQuality: 9.7,
      brandReputation: 9.0
    }
  },
  {
    id: '4',
    name: 'Creatine HCl',
    brand: 'Kaged',
    category: 'Creatine',
    primaryIngredient: 'Creatine Hydrochloride',
    trustScore: 8.9,
    price: 28.99,
    ingredients: [
      { name: 'Creatine Hydrochloride', amount: '3', unit: 'g' }
    ],
    certifications: ['Banned Substance Tested'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.0,
      ingredientTransparency: 8.8,
      manufacturingQuality: 9.1,
      brandReputation: 8.7
    }
  },
  {
    id: '5',
    name: 'Buffered Creatine',
    brand: 'Allmax',
    category: 'Creatine',
    primaryIngredient: 'Kre-Alkalyn (Buffered Creatine)',
    trustScore: 8.3,
    price: 26.99,
    ingredients: [
      { name: 'Kre-Alkalyn (pH-Correct Creatine)', amount: '1.5', unit: 'g' }
    ],
    certifications: ['cGMP Certified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.0,
      ingredientTransparency: 8.5,
      manufacturingQuality: 8.2,
      brandReputation: 8.5
    }
  },
  {
    id: '6',
    name: 'Omega-3 Fish Oil',
    brand: 'Nordic Naturals',
    category: 'Fish Oil',
    primaryIngredient: 'EPA/DHA',
    trustScore: 9.4,
    price: 34.99,
    ingredients: [
      { name: 'EPA (Eicosapentaenoic Acid)', amount: '650', unit: 'mg' },
      { name: 'DHA (Docosahexaenoic Acid)', amount: '450', unit: 'mg' }
    ],
    certifications: ['Third-Party Purity Tested', 'Friend of the Sea'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.6,
      ingredientTransparency: 9.4,
      manufacturingQuality: 9.5,
      brandReputation: 9.1
    }
  },
  {
    id: '7',
    name: 'Triple Strength Fish Oil',
    brand: 'NOW Foods',
    category: 'Fish Oil',
    primaryIngredient: 'EPA/DHA',
    trustScore: 8.8,
    price: 22.99,
    ingredients: [
      { name: 'EPA (Eicosapentaenoic Acid)', amount: '600', unit: 'mg' },
      { name: 'DHA (Docosahexaenoic Acid)', amount: '400', unit: 'mg' }
    ],
    certifications: ['Molecularly Distilled', 'GMP Quality Assured'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.5,
      ingredientTransparency: 9.0,
      manufacturingQuality: 8.8,
      brandReputation: 9.0
    }
  },
  {
    id: '8',
    name: 'Krill Oil',
    brand: 'Sports Research',
    category: 'Fish Oil',
    primaryIngredient: 'Krill Oil',
    trustScore: 8.6,
    price: 39.99,
    ingredients: [
      { name: 'Antarctic Krill Oil', amount: '1000', unit: 'mg' },
      { name: 'EPA', amount: '120', unit: 'mg' },
      { name: 'DHA', amount: '55', unit: 'mg' },
      { name: 'Astaxanthin', amount: '100', unit: 'mcg' }
    ],
    certifications: ['MSC Certified Sustainable', 'Non-GMO Verified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.8,
      ingredientTransparency: 8.7,
      manufacturingQuality: 8.5,
      brandReputation: 8.4
    }
  },
  {
    id: '9',
    name: 'Algae Omega-3',
    brand: 'Garden of Life',
    category: 'Fish Oil',
    primaryIngredient: 'Algae-derived Omega-3',
    trustScore: 8.9,
    price: 44.99,
    ingredients: [
      { name: 'Algae Oil', amount: '715', unit: 'mg' },
      { name: 'EPA', amount: '300', unit: 'mg' },
      { name: 'DHA', amount: '600', unit: 'mg' }
    ],
    certifications: ['Vegan Certified', 'Non-GMO Project Verified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.7,
      ingredientTransparency: 9.2,
      manufacturingQuality: 8.8,
      brandReputation: 8.9
    }
  },
  {
    id: '10',
    name: 'Cod Liver Oil',
    brand: 'Carlson',
    category: 'Fish Oil',
    primaryIngredient: 'Norwegian Cod Liver Oil',
    trustScore: 9.1,
    price: 26.99,
    ingredients: [
      { name: 'Norwegian Cod Liver Oil', amount: '1100', unit: 'mg' },
      { name: 'EPA', amount: '350', unit: 'mg' },
      { name: 'DHA', amount: '380', unit: 'mg' },
      { name: 'Vitamin A', amount: '1100', unit: 'IU' },
      { name: 'Vitamin D3', amount: '400', unit: 'IU' }
    ],
    certifications: ['IFOS 5-Star Rating', 'FDA Registered Facility'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.3,
      ingredientTransparency: 9.0,
      manufacturingQuality: 9.2,
      brandReputation: 8.9
    }
  },
  {
    id: '11',
    name: 'Gold Standard Whey Protein',
    brand: 'Optimum Nutrition',
    category: 'Protein',
    primaryIngredient: 'Whey Protein Isolate',
    trustScore: 9.3,
    price: 54.99,
    ingredients: [
      { name: 'Whey Protein Isolate', amount: '24', unit: 'g' },
      { name: 'Whey Protein Concentrate', amount: '5.5', unit: 'g' },
      { name: 'Natural & Artificial Flavors', amount: '0', unit: 'g' }
    ],
    certifications: ['Informed Choice', 'NSF Certified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.5,
      ingredientTransparency: 9.2,
      manufacturingQuality: 9.4,
      brandReputation: 9.1
    }
  },
  {
    id: '12',
    name: 'Plant-Based Protein',
    brand: 'Garden of Life',
    category: 'Protein',
    primaryIngredient: 'Organic Pea Protein',
    trustScore: 8.7,
    price: 44.99,
    ingredients: [
      { name: 'Organic Pea Protein', amount: '20', unit: 'g' },
      { name: 'Organic Brown Rice Protein', amount: '10', unit: 'g' },
      { name: 'Organic Chia Seed', amount: '1', unit: 'g' }
    ],
    certifications: ['USDA Organic', 'Non-GMO Project Verified', 'Vegan Certified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.5,
      ingredientTransparency: 9.0,
      manufacturingQuality: 8.7,
      brandReputation: 8.6
    }
  },
  {
    id: '13',
    name: 'Casein Protein',
    brand: 'Dymatize',
    category: 'Protein',
    primaryIngredient: 'Micellar Casein',
    trustScore: 8.9,
    price: 49.99,
    ingredients: [
      { name: 'Micellar Casein', amount: '25', unit: 'g' },
      { name: 'Natural & Artificial Flavors', amount: '0', unit: 'g' }
    ],
    certifications: ['Informed Choice'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.0,
      ingredientTransparency: 8.8,
      manufacturingQuality: 9.1,
      brandReputation: 8.7
    }
  },
  {
    id: '14',
    name: 'Collagen Peptides',
    brand: 'Vital Proteins',
    category: 'Protein',
    primaryIngredient: 'Hydrolyzed Collagen',
    trustScore: 8.4,
    price: 39.99,
    ingredients: [
      { name: 'Hydrolyzed Collagen (from Bovine)', amount: '20', unit: 'g' }
    ],
    certifications: ['Grass-Fed', 'Pasture-Raised'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.2,
      ingredientTransparency: 8.5,
      manufacturingQuality: 8.4,
      brandReputation: 8.5
    }
  },
  {
    id: '15',
    name: 'Egg White Protein',
    brand: 'NOW Foods',
    category: 'Protein',
    primaryIngredient: 'Egg White Protein',
    trustScore: 8.6,
    price: 32.99,
    ingredients: [
      { name: 'Egg White Protein', amount: '16', unit: 'g' }
    ],
    certifications: ['GMP Quality Assured'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.4,
      ingredientTransparency: 8.8,
      manufacturingQuality: 8.6,
      brandReputation: 8.6
    }
  },
  {
    id: '16',
    name: 'Grass-Fed Whey',
    brand: 'Transparent Labs',
    category: 'Protein',
    primaryIngredient: 'Grass-Fed Whey Protein Isolate',
    trustScore: 9.1,
    price: 59.99,
    ingredients: [
      { name: 'Grass-Fed Whey Protein Isolate', amount: '28', unit: 'g' },
      { name: 'Natural Flavors', amount: '0', unit: 'g' }
    ],
    certifications: ['Grass-Fed', 'rBGH-Free', 'Third-Party Tested'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.3,
      ingredientTransparency: 9.5,
      manufacturingQuality: 9.0,
      brandReputation: 8.6
    }
  },
  {
    id: '17',
    name: 'Hemp Protein',
    brand: 'Nutiva',
    category: 'Protein',
    primaryIngredient: 'Hemp Protein',
    trustScore: 8.2,
    price: 24.99,
    ingredients: [
      { name: 'Organic Hemp Protein', amount: '15', unit: 'g' },
      { name: 'Fiber', amount: '8', unit: 'g' }
    ],
    certifications: ['USDA Organic', 'Non-GMO Project Verified'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.0,
      ingredientTransparency: 8.5,
      manufacturingQuality: 8.1,
      brandReputation: 8.2
    }
  },
  {
    id: '18',
    name: 'Goat Whey Protein',
    brand: 'Mt. Capra',
    category: 'Protein',
    primaryIngredient: 'Goat Whey Protein',
    trustScore: 8.8,
    price: 64.99,
    ingredients: [
      { name: 'Goat Whey Protein Concentrate', amount: '26', unit: 'g' }
    ],
    certifications: ['Grass-Fed', 'GMO-Free'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.6,
      ingredientTransparency: 8.9,
      manufacturingQuality: 8.8,
      brandReputation: 8.9
    }
  },
  {
    id: '19',
    name: 'Vitamin D3',
    brand: 'Thorne',
    category: 'Vitamins',
    primaryIngredient: 'Cholecalciferol (Vitamin D3)',
    trustScore: 9.6,
    price: 17.99,
    ingredients: [
      { name: 'Vitamin D3 (as Cholecalciferol)', amount: '1000', unit: 'IU' }
    ],
    certifications: ['NSF Certified for Sport', 'TGA Listed'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.8,
      ingredientTransparency: 9.5,
      manufacturingQuality: 9.7,
      brandReputation: 9.4
    }
  },
  {
    id: '20',
    name: 'B-Complex',
    brand: 'Life Extension',
    category: 'Vitamins',
    primaryIngredient: 'B-Vitamin Complex',
    trustScore: 9.2,
    price: 22.99,
    ingredients: [
      { name: 'Thiamine (B1)', amount: '100', unit: 'mg' },
      { name: 'Riboflavin (B2)', amount: '100', unit: 'mg' },
      { name: 'Niacin (B3)', amount: '100', unit: 'mg' },
      { name: 'B6 (as P-5-P)', amount: '100', unit: 'mg' },
      { name: 'Folate', amount: '400', unit: 'mcg' },
      { name: 'B12 (as Methylcobalamin)', amount: '300', unit: 'mcg' }
    ],
    certifications: ['Non-GMO', 'Certificate of Analysis'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.3,
      ingredientTransparency: 9.4,
      manufacturingQuality: 9.1,
      brandReputation: 9.0
    }
  },
  {
    id: '21',
    name: 'Magnesium Glycinate',
    brand: 'Doctor\'s Best',
    category: 'Vitamins',
    primaryIngredient: 'Magnesium Glycinate',
    trustScore: 8.9,
    price: 19.99,
    ingredients: [
      { name: 'Magnesium (as Magnesium Glycinate)', amount: '200', unit: 'mg' }
    ],
    certifications: ['Non-GMO', 'Gluten Free', 'Vegan'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.7,
      ingredientTransparency: 9.0,
      manufacturingQuality: 8.9,
      brandReputation: 9.0
    }
  },
  {
    id: '22',
    name: 'Multivitamin',
    brand: 'Athletic Greens',
    category: 'Vitamins',
    primaryIngredient: 'Comprehensive Multivitamin',
    trustScore: 8.5,
    price: 79.99,
    ingredients: [
      { name: 'Vitamin A', amount: '60', unit: 'mcg' },
      { name: 'Vitamin C', amount: '180', unit: 'mg' },
      { name: 'Vitamin E', amount: '5.6', unit: 'mg' },
      { name: 'Folate', amount: '200', unit: 'mcg' },
      { name: 'B12', amount: '2.4', unit: 'mcg' },
      { name: 'Zinc', amount: '1.2', unit: 'mg' }
    ],
    certifications: ['NSF Certified', 'TGA Listed'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.8,
      ingredientTransparency: 8.3,
      manufacturingQuality: 8.6,
      brandReputation: 8.3
    }
  },
  {
    id: '23',
    name: 'Vitamin C',
    brand: 'NOW Foods',
    category: 'Vitamins',
    primaryIngredient: 'Ascorbic Acid',
    trustScore: 8.4,
    price: 12.99,
    ingredients: [
      { name: 'Vitamin C (as Ascorbic Acid)', amount: '1000', unit: 'mg' }
    ],
    certifications: ['GMP Quality Assured', 'Kosher', 'Halal'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.2,
      ingredientTransparency: 8.6,
      manufacturingQuality: 8.4,
      brandReputation: 8.4
    }
  },
  {
    id: '24',
    name: 'Zinc Picolinate',
    brand: 'Thorne',
    category: 'Vitamins',
    primaryIngredient: 'Zinc Picolinate',
    trustScore: 9.4,
    price: 14.99,
    ingredients: [
      { name: 'Zinc (as Zinc Picolinate)', amount: '15', unit: 'mg' }
    ],
    certifications: ['NSF Certified for Sport', 'TGA Listed'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.6,
      ingredientTransparency: 9.3,
      manufacturingQuality: 9.5,
      brandReputation: 9.2
    }
  },
  {
    id: '25',
    name: 'Iron Bisglycinate',
    brand: 'Gentle Iron',
    category: 'Vitamins',
    primaryIngredient: 'Iron Bisglycinate',
    trustScore: 8.7,
    price: 16.99,
    ingredients: [
      { name: 'Iron (as Ferrous Bisglycinate)', amount: '25', unit: 'mg' }
    ],
    certifications: ['Non-GMO', 'Gluten Free'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.5,
      ingredientTransparency: 8.8,
      manufacturingQuality: 8.7,
      brandReputation: 8.8
    }
  },
  {
    id: '26',
    name: 'Pre-Workout Elite',
    brand: 'C4',
    category: 'Pre-Workout',
    primaryIngredient: 'Caffeine + Beta-Alanine',
    trustScore: 8.3,
    price: 29.99,
    ingredients: [
      { name: 'Caffeine Anhydrous', amount: '150', unit: 'mg' },
      { name: 'Beta-Alanine', amount: '1.6', unit: 'g' },
      { name: 'Creatine Nitrate', amount: '1', unit: 'g' },
      { name: 'L-Arginine AKG', amount: '1', unit: 'g' }
    ],
    certifications: ['Informed Sport'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.5,
      ingredientTransparency: 8.0,
      manufacturingQuality: 8.3,
      brandReputation: 8.4
    }
  },
  {
    id: '27',
    name: 'Legion Pulse',
    brand: 'Legion',
    category: 'Pre-Workout',
    primaryIngredient: 'L-Citrulline Malate',
    trustScore: 9.1,
    price: 39.99,
    ingredients: [
      { name: 'L-Citrulline Malate', amount: '8', unit: 'g' },
      { name: 'Beta-Alanine', amount: '3.2', unit: 'g' },
      { name: 'Betaine', amount: '2.5', unit: 'g' },
      { name: 'Caffeine Anhydrous', amount: '350', unit: 'mg' }
    ],
    certifications: ['Third-Party Tested', 'No Artificial Colors'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.3,
      ingredientTransparency: 9.5,
      manufacturingQuality: 9.0,
      brandReputation: 8.6
    }
  },
  {
    id: '28',
    name: 'Ghost Legend',
    brand: 'Ghost',
    category: 'Pre-Workout',
    primaryIngredient: 'L-Citrulline',
    trustScore: 8.7,
    price: 44.99,
    ingredients: [
      { name: 'L-Citrulline', amount: '6', unit: 'g' },
      { name: 'Beta-Alanine', amount: '3.2', unit: 'g' },
      { name: 'Caffeine Anhydrous', amount: '202', unit: 'mg' },
      { name: 'Alpha-GPC', amount: '150', unit: 'mg' }
    ],
    certifications: ['Informed Sport'],
    trustScoreBreakdown: {
      thirdPartyTesting: 8.8,
      ingredientTransparency: 8.5,
      manufacturingQuality: 8.7,
      brandReputation: 8.8
    }
  },
  {
    id: '29',
    name: 'Transparent Labs BULK',
    brand: 'Transparent Labs',
    category: 'Pre-Workout',
    primaryIngredient: 'L-Citrulline Malate',
    trustScore: 9.3,
    price: 49.99,
    ingredients: [
      { name: 'L-Citrulline Malate', amount: '6', unit: 'g' },
      { name: 'Beta-Alanine', amount: '4', unit: 'g' },
      { name: 'BCAAs', amount: '4', unit: 'g' },
      { name: 'Caffeine Anhydrous', amount: '180', unit: 'mg' }
    ],
    certifications: ['Third-Party Tested', 'No Artificial Colors/Flavors'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.5,
      ingredientTransparency: 9.8,
      manufacturingQuality: 9.2,
      brandReputation: 8.7
    }
  },
  {
    id: '30',
    name: 'Gorilla Mode',
    brand: 'Gorilla Mind',
    category: 'Pre-Workout',
    primaryIngredient: 'L-Citrulline',
    trustScore: 8.9,
    price: 39.99,
    ingredients: [
      { name: 'L-Citrulline', amount: '9', unit: 'g' },
      { name: 'Creatine Monohydrate', amount: '5', unit: 'g' },
      { name: 'Glycerol', amount: '3', unit: 'g' },
      { name: 'Caffeine Anhydrous', amount: '350', unit: 'mg' }
    ],
    certifications: ['Third-Party Tested'],
    trustScoreBreakdown: {
      thirdPartyTesting: 9.0,
      ingredientTransparency: 8.9,
      manufacturingQuality: 8.8,
      brandReputation: 8.9
    }
  }
]

export const categories: SupplementCategory[] = [
  'Creatine',
  'Fish Oil', 
  'Protein',
  'Vitamins',
  'Pre-Workout'
]