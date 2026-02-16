export const bondsData = [
  {
    id: '1',
    name: 'Muthoottu Mini',
    category: 'Fixed-arm',
    yield: 11.25,
    rating: 'A',
    maturity: '3-12 months',
    tenure: '12 months',
    soldOut: 95,
    currentPrice: 1089.75,
    description: 'Short-term bond with monthly interest payouts backed by gold loans.',
    creditRating: 'A',
    ratingAgency: 'CARE',
    minimumInvestment: 1000,
    maximumInvestment: 1000000,
    companyName: 'Muthoot Finance Limited',
    companyHistory: {
      founded: 1887,
      headquarters: 'Kochi, India',
      employees: 7600,
      onTimePayments: '100%',
      defaultRate: 0,
      assetsUnderManagement: '₹3 crores'
    },
    repayments: [
      { date: '01 Apr 26', principal: 'At Maturity', interest: '₹7.64', type: 'Interest' },
      { date: '01 May 26', principal: 'At Maturity', interest: '₹7.40', type: 'Interest' },
      { date: '01 Jun 26', principal: 'At Maturity', interest: '₹7.64', type: 'Interest' },
      { date: '01 Jul 26', principal: 'At Maturity', interest: '₹7.40', type: 'Interest' }
    ],
    highlights: {
      securityCover: '1x',
      debtInvestors: 'Federal Bank, Canara Bank, Standard Chartered',
      sebiRegistration: true,
      handpickedBonds: true,
      zeroDefaults: true
    },
    features: [
      'Backed by Gold Loans',
      'Monthly Interest Payouts',
      '100% on-time repayments',
      'Zero delays'
    ],
    riskFactors: [
      'Gold price volatility risk',
      'Counterparty risk',
      'Liquidity risk'
    ],
    taxes: {
      taxableIncome: 'Interest is fully taxable',
      capitalGains: 'Not applicable for holding period',
      tds: '10% TDS applicable'
    }
  },
  {
    id: '2',
    name: 'Finance Ltd Senior',
    category: 'Big Brands',
    yield: 10.5,
    rating: 'AA',
    maturity: '4 months',
    tenure: '4 months',
    soldOut: 80,
    currentPrice: 980.00,
    description: 'Senior secured bonds from a leading finance company.',
    creditRating: 'AA',
    ratingAgency: 'ICRA',
    minimumInvestment: 5000,
    maximumInvestment: 5000000,
    companyName: 'Finance Ltd',
    companyHistory: {
      founded: 1995,
      headquarters: 'Mumbai, India',
      employees: 5000,
      onTimePayments: '100%',
      defaultRate: 0,
      assetsUnderManagement: '₹5 crores'
    },
    repayments: [
      { date: '15 Apr 26', principal: 'At Maturity', interest: '₹4.20', type: 'Interest' },
      { date: '15 May 26', principal: 'At Maturity', interest: '₹4.20', type: 'Interest' }
    ],
    highlights: {
      securityCover: '2x',
      debtInvestors: 'ICICI Bank, HDFC Bank',
      sebiRegistration: true,
      handpickedBonds: true,
      zeroDefaults: true
    },
    features: [
      'Senior Secured Bonds',
      'Quarterly Interest Payouts',
      '100% on-time repayments',
      'Investment grade rating'
    ]
  },
  {
    id: '3',
    name: 'Infrastructure Bond 2026',
    category: 'High-rated',
    yield: 11.75,
    rating: 'BBB+',
    maturity: '3-6 months',
    tenure: '6 months',
    soldOut: 65,
    currentPrice: 995.50,
    description: 'Infrastructure development bonds with attractive yields.',
    creditRating: 'BBB+',
    ratingAgency: 'CRISIL',
    minimumInvestment: 10000,
    maximumInvestment: 2000000,
    companyName: 'Infrastructure Development Corp',
    companyHistory: {
      founded: 2005,
      headquarters: 'Delhi, India',
      employees: 2000,
      onTimePayments: '99.5%',
      defaultRate: 0.5,
      assetsUnderManagement: '₹2 crores'
    },
    repayments: [
      { date: '10 Apr 26', principal: 'At Maturity', interest: '₹5.88', type: 'Interest' }
    ],
    highlights: {
      securityCover: '1.5x',
      debtInvestors: 'State Bank of India',
      sebiRegistration: true,
      handpickedBonds: true,
      zeroDefaults: false
    }
  },
  {
    id: '4',
    name: 'PSU Bond 2026-A',
    category: 'Low-risk',
    yield: 8.75,
    rating: 'AAA',
    maturity: '1-2 months',
    tenure: '2 months',
    soldOut: 45,
    currentPrice: 1002.00,
    description: 'PSU backed government securities with lowest risk profile.',
    creditRating: 'AAA',
    ratingAgency: 'CARE',
    minimumInvestment: 500,
    maximumInvestment: 500000,
    companyName: 'National Investment Fund'
  },
  {
    id: '5',
    name: 'Corporate Bond XYZ',
    category: 'repaid',
    yield: 9.5,
    rating: 'A+',
    maturity: '8 months',
    tenure: '8 months',
    soldOut: 70,
    currentPrice: 1015.75,
    description: 'Established corporation\'s monthly income bonds.',
    creditRating: 'A+',
    ratingAgency: 'ICRA',
    minimumInvestment: 2000,
    maximumInvestment: 1000000
  },
  {
    id: '6',
    name: 'Microfinance Bond',
    category: 'High-return',
    yield: 12.5,
    rating: 'B+',
    maturity: '6-9 months',
    tenure: '9 months',
    soldOut: 85,
    currentPrice: 965.00,
    description: 'High-yield bonds from microfinance institutions.',
    creditRating: 'B+',
    ratingAgency: 'ICRA',
    minimumInvestment: 1000,
    maximumInvestment: 500000
  },
  {
    id: '7',
    name: 'Fixed Deposit Bond',
    category: 'Tax-benefit',
    yield: 8.5,
    rating: 'AA',
    maturity: '3 months',
    tenure: '3 months',
    soldOut: 55,
    currentPrice: 998.50,
    description: 'Tax-saving bonds with fixed returns and maturity.',
    creditRating: 'AA',
    ratingAgency: 'CRISIL',
    minimumInvestment: 5000,
    maximumInvestment: 250000
  },
  {
    id: '8',
    name: 'Real Estate Bond',
    category: 'Big Brands',
    yield: 10.75,
    rating: 'A',
    maturity: '12 months',
    tenure: '12 months',
    soldOut: 100,
    currentPrice: 1050.00,
    description: 'Real estate development financing bonds.',
    creditRating: 'A',
    ratingAgency: 'CARE',
    minimumInvestment: 10000,
    maximumInvestment: 5000000
  }
];

export const categoriesData = [
  { id: 'any-tenure', label: 'Any tenure', icon: '📅' },
  { id: 'fixed-arm', label: 'Fixed arm', icon: '🔒' },
  { id: 'big-brands', label: 'Big brands', icon: '⭐' },
  { id: 'high-rated', label: 'High rated', icon: '⬆️' },
  { id: 'monthly', label: 'Monthly', icon: '📊' },
  { id: 'high-return', label: 'High return', icon: '💰' },
  { id: 'tax-benefit', label: 'Tax benefit', icon: '💳' },
  { id: 'low-risk', label: 'Low risk', icon: '🛡️' }
];
