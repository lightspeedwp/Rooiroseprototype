export const SEARCH_UI = {
  title: "Soek artikels",
  placeholder: "Soek vir artikels, kategorie, of skrywers...",
  clear: "Maak skoon",
  searchButton: "Soek",
  loading: "Soek...",
  filter: "Kategorie",
  results: {
    found: (count: number, query: string) => `resultate gevind vir "${query}"`,
    inCategory: (category: string) => ` in ${category}`,
    none: (query: string) => `Geen resultate gevind vir "${query}"`,
    tryOther: "Probeer 'n ander soekterm of blaai deur ons kategorieë hieronder.",
    start: {
      title: "Begin soek",
      description: "Voer 'n soekterm in om artikels te vind."
    },
    empty: {
      title: "Geen resultate",
    }
  }
};
