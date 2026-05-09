export interface CityData {
  slug: string;
  name: string;
  fullName: string;
  zipCodes: string[];
  population: string;
  excerpt: string;
}

export const cities: CityData[] = [
  {
    slug: "dallas",
    name: "Dallas",
    fullName: "Dallas, TX",
    zipCodes: ["75201", "75202", "75204", "75205", "75206", "75214", "75218", "75230", "75231", "75240", "75243"],
    population: "1.3M",
    excerpt: "Mobile auto glass service across all Dallas neighborhoods — Uptown, Lakewood, Oak Cliff, North Dallas.",
  },
  {
    slug: "plano",
    name: "Plano",
    fullName: "Plano, TX",
    zipCodes: ["75023", "75024", "75025", "75026", "75074", "75075", "75093", "75094"],
    population: "290K",
    excerpt: "Auto glass service across Plano — Willow Bend, Russwood Acres, Legacy area, all major subdivisions.",
  },
  {
    slug: "garland",
    name: "Garland",
    fullName: "Garland, TX",
    zipCodes: ["75040", "75041", "75042", "75043", "75044", "75048"],
    population: "245K",
    excerpt: "Mobile auto glass across Garland and Rowlett — same-day service, no insurance required.",
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    fullName: "Mesquite, TX",
    zipCodes: ["75149", "75150", "75180", "75181", "75182"],
    population: "150K",
    excerpt: "Auto glass service for Mesquite drivers — windshield repair, replacement, side and rear glass.",
  },
  {
    slug: "richardson",
    name: "Richardson",
    fullName: "Richardson, TX",
    zipCodes: ["75080", "75081", "75082", "75083"],
    population: "120K",
    excerpt: "Mobile auto glass across Richardson — Telecom Corridor, all UTD-area neighborhoods.",
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    fullName: "Carrollton, TX",
    zipCodes: ["75006", "75007", "75010"],
    population: "135K",
    excerpt: "Same-day windshield service in Carrollton, Farmers Branch, and Addison area.",
  },
  {
    slug: "irving",
    name: "Irving",
    fullName: "Irving, TX",
    zipCodes: ["75038", "75039", "75060", "75061", "75062", "75063"],
    population: "255K",
    excerpt: "Mobile auto glass for Irving and Las Colinas — DFW Airport area, corporate campuses.",
  },
  {
    slug: "lewisville",
    name: "Lewisville",
    fullName: "Lewisville, TX",
    zipCodes: ["75056", "75057", "75067", "75077"],
    population: "115K",
    excerpt: "Auto glass across Lewisville, Flower Mound, and Castle Hills — same-day service available.",
  },
];
