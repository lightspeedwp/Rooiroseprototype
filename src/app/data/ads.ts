/**
 * Ad data for rooi rose
 * Mock advertisements for various slots
 */

export interface Ad {
  id: string;
  imageUrl: string;
  link: string;
  alt: string;
  size: 'leaderboard' | 'mpu' | 'halfpage' | 'banner';
}

export const ADS: Ad[] = [
  {
    id: "ad-leaderboard-1",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200&h=200",
    link: "#",
    alt: "Spesiale Aanbod by Plaaslike Supermark",
    size: "leaderboard"
  },
  {
    id: "ad-mpu-1",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=250",
    link: "#",
    alt: "Nuwe Motor Bekendstelling",
    size: "mpu"
  },
  {
    id: "ad-mpu-2",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=300&h=250",
    link: "#",
    alt: "Eiendomsagentskap",
    size: "mpu"
  },
  {
    id: "ad-halfpage-1",
    imageUrl: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80&w=300&h=600",
    link: "#",
    alt: "Verskeringsmakelaar",
    size: "halfpage"
  },
  {
    id: "ad-banner-1",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800&h=100",
    link: "#",
    alt: "Skoenwinkel Uitverkoping",
    size: "banner"
  }
];