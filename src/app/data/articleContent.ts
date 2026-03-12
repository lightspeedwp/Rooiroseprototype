/**
 * Full article content for *rooi rose*
 * Maps article IDs to their full content
 */

export interface ArticleContent {
  id: number;
  content: string;
}

export const ARTICLE_CONTENT: Record<number, string> = {
  // Top Stories (1-7)
  1: `
    <p class="mb-4">Die plaaslike munisipaliteit het vandag hul planne vir die nuwe finansiële jaar aangekondig, met fokus op infrastruktuur. Die R450 miljoen begroting sal gerig wees op die herstel van paaie, verbetering van waterinfrastruktuur, en die uitbreiding van elektrisiteitsdienste na voorheen benadeelde gebiede.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Hoofpunte van die Begroting</h2>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>R120 miljoen vir padonderhoud en -opgradering</li>
      <li>R85 miljoen vir waterinfrastruktuur</li>
      <li>R95 miljoen vir elektrisiteitsdienste</li>
      <li>R60 miljoen vir openbare fasiliteite</li>
    </ul>
    
    <blockquote class="border-l-4 border-[var(--wp--preset--color--primary)] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r">
      "Hierdie begroting weerspieël ons verbintenis tot die publiek en die verbetering van lewenskwaliteit vir alle inwoners." — Burgemeester Johanna Smit
    </blockquote>
  `,
  
  2: `
    <p class="mb-4">In 'n naelbytstryd het die plaaslike span met 24-21 geseëvier voor 'n skare van duisende. Die jaarlikse derby tussen Hoërskool Paarl en Gimnasium het weereens nie teleurgestel nie, met beide spanne wat alles op die veld gelos het.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Die Wedstrydverloop</h2>
    <p class="mb-4">Die tuisspan het vinnig voorgeloop met twee drieë in die eerste helfte, maar die besoekers het teruggeveg om die telling gelyk te maak teen rustyd.</p>
    
    <p class="mb-4">Die wenpunte het gekom van 'n strafskop in die laaste minuut deur die kaptein, Jannie Gerber.</p>
  `,

  3: `
    <p class="mb-4">Die langverwagte ontwikkeling bring nuwe werksgeleenthede en internasionale handelsmerke na die dorp. Die nuwe sentrum, genaamd "Die Vallei Mall", beslaan 30,000 vierkante meter en huisves meer as 80 winkels.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Ekonomiese Inspuiting</h2>
    <p class="mb-4">Plaaslike ekonome voorspel dat die sentrum 'n groot hupstoot vir die plaaslike ekonomie sal wees, met verwagte maandelikse omset van meer as R50 miljoen.</p>
  `,

  4: `
    <p class="mb-4">Sarah Jansen se jongste uitstalling het aandag getrek van versamelaars in Londen en New York. Haar reeks skilderye, getiteld "Siel van die Karoo", beeld die rou skoonheid van die landskap uit.</p>
    
    <blockquote class="border-l-4 border-[var(--wp--preset--color--primary)] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r">
      "Ek probeer die stilte van die Karoo vasvang in my werk. Dit is 'n groot eer dat dit internasionaal aanklank vind." — Sarah Jansen
    </blockquote>
  `,

  5: `
    <p class="mb-4">Die jaarlikse literêre fees het vanjaar meer as 30 000 besoekers van regoor die land gelok. Die Woordfees op Stellenbosch het weereens bewys dat dit een van die voorste kunsfeeste in die land is.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Hoogtepunte</h2>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Meer as 100 boekbekendstellings</li>
      <li>Uitverkoopte teaterproduksies</li>
      <li>Optredes deur top musikante</li>
    </ul>
  `,

  6: `
    <p class="mb-4">Gunster weersomstandighede in die laat somer het bygedra tot druiwe van hoë gehalte vir die 2026-oes. Wynboere in die streek is optimisties oor die volume en kwaliteit van vanjaar se oes.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Internasionale Mark</h2>
    <p class="mb-4">Met die swak Rand is uitvoere na Europa en die VSA meer winsgewend as ooit, wat goeie nuus is vir die plaaslike ekonomie.</p>
  `,

  7: `
    <p class="mb-4">Meer as 50% van plase in die distrik wek nou hul eie krag op om beurtkrag teen te werk. Die oorskakeling na sonkrag is nie net 'n noodsaaklikheid nie, maar ook 'n stap na groener boerderypraktyke.</p>
    
    <blockquote class="border-l-4 border-[var(--wp--preset--color--primary)] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r">
      "Dit is 'n groot belegging aanvanklik, maar dit betaal homself vinnig af en verseker dat ons produksie ononderbroke kan voortgaan." — Piet le Roux, Boerevereniging Voorsitter
    </blockquote>
  `,

  // Trending Articles (101-105, 801-802)
  101: `
    <p class="mb-4">Die plaaslike munisipaliteit het vandag sy begroting vir die komende finansiële jaar bekend gemaak, met 'n sterk fokus op infrastruktuur-ontwikkeling en verbeterde dienstelewering aan inwoners.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Hoofpunte van die Begroting</h2>
    <p class="mb-4">Die R450 miljoen begroting sal gerig wees op die herstel van paaie, verbetering van waterinfrastruktuur, en die uitbreiding van elektrisiteitsdienste na voorheen benadeelde gebiede.</p>
    
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>R120 miljoen vir padonderhoud en -opgradering</li>
      <li>R85 miljoen vir waterinfrastruktuur</li>
      <li>R95 miljoen vir elektrisiteitsdienste</li>
      <li>R60 miljoen vir openbare fasiliteite</li>
    </ul>
    
    <blockquote class="border-l-4 border-[var(--wp--preset--color--primary)] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r">
      "Hierdie begroting weerspieël ons verbintenis tot die publiek en die verbetering van lewenskwaliteit vir alle inwoners." — Burgemeester Johanna Smit
    </blockquote>
    
    <p class="mb-4">Die munisipaliteit het ook beklemtoon dat hulle fokus sal plaas op finansiële volhoubaarheid en deursigtigheid in alle transaksies.</p>
  `,
  
  102: `
    <p class="mb-4">Met damvlakke wat daal tot onder die 30% merk, het die plaaslike munisipaliteit aangekondig dat vlak 3 waterbeperkings vanaf 1 Januarie van krag sal wees vir alle inwoners.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Wat Beteken Dit?</h2>
    <p class="mb-4">Onder vlak 3 beperkings is die volgende aktiwiteite verbode:</p>
    
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Vul swembaddens of gebruik van tuinspuite</li>
      <li>Was motors by die huis (slegs kommersiële wasplekke toegelaat)</li>
      <li>Natmaak van paaie of stofbestryding met drinkwater</li>
      <li>Besproeiing tussen 10:00 en 16:00</li>
    </ul>
    
    <p class="mb-4">Inwoners word aangemoedig om waterbesparende tegnieke te gebruik soos die hergebruik van gryswater en die installering van waterbesparende stortings en krane.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Boetes vir Oortredings</h2>
    <p class="mb-4">Oortredings van die waterbeperkings kan lei tot boetes van R500 vir 'n eerste oortreding en tot R2,000 vir herhaalde oortredings.</p>
  `,
  
  103: `
    <p class="mb-4">Die departement van vervoer en die Verkeersveiligheidskorporasie het vandag hul jaarlikse feesseisoen veldtog geloods, met strenger padmaatreëls en meer padblokkades om verkeersongelukke te voorkom.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Statistieke wat Bekommer</h2>
    <p class="mb-4">Verlede jaar het meer as 1,500 mense hul lewens verloor op Suid-Afrikaanse paaie gedurende die Desember seisoen. Hierdie jaar is die fokus op voorkomende maatreëls.</p>
    
    <blockquote class="border-l-4 border-[var(--wp--preset--color--primary)] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r">
      "Ons wil elke bestuurder aanmoedig om verantwoordelik te ry. Jou lewe en dié van ander is in jou hande." — Minister Barbara Creecy
    </blockquote>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Veiligheidswenke</h2>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Moenie drink en bestuur nie - gebruik 'n aangewese bestuurder</li>
      <li>Dra altyd veilighe idsgordels</li>
      <li>Hou by spoedbeperkings</li>
      <li>Neem gereelde rustye op lang ritte</li>
      <li>Sorg dat jou voertuig in goeie toestand is</li>
    </ul>
  `,

  104: `
    <p class="mb-4">Die langverwagte Riverwalk Winkelsentrum het sy deure geopen met 'n groot openingseremonie wat deur honderde inwoners bygewoon is.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Werkverskaffing en Ekonomiese Impak</h2>
    <p class="mb-4">Die ontwikkeling het meer as 300 nuwe werksgeleenthede geskep, waarvan 80% plaaslike inwoners is. Die sentrum huisves 45 winkels, insluitend nasionale handelsmerke en plaaslike besighede.</p>
    
    <p class="mb-4">Ekonome verwag dat die sentrum 'n beduidende impak sal hê op die plaaslike ekonomie, met 'n beraamde R250 miljoen in jaarlikse inkomste.</p>
  `,
  
  105: `
    <p class="mb-4">Die jaarlikse Boeremark het vanjaar rekordgetalle gelok, met meer as 5,000 besoekers wat die naweek opgedaag het vir plaaslike produkte, kuns, en kultuur.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Hoogtepunte van die Naweek</h2>
    <p class="mb-4">Meer as 120 stalletjies het hul ware aangebied, van vars groente en vrugte tot handgemaakte kunswerke en ambag. Kinders het geniet aan die ponie ritte en die petting zoo.</p>
    
    <p class="mb-4">Plaaslike musici het regdeur die naweek opgetree, wat 'n fees atmosfeer geskep het.</p>
  `,
  
  801: `
    <p class="mb-4">Die V&A Waterfront in Kaapstad is weereens aangewys as een van die wêreld se top toeristebestemmings, wat bevestig dat die Moederstad 'n wêreldklas speler in die toerismebedryf bly.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Internasionale Erkenning</h2>
    <p class="mb-4">Die toekenning, gegee deur die World Travel Awards, plaas Kaapstad bo ander groot stede soos Sydney en Rio de Janeiro. Dit is die vyfde jaar in 'n ry wat die Waterfront hierdie eer te beurt val.</p>
  `,

  802: `
    <p class="mb-4">Die plaaslike ster vertel oor die uitdagings van sy nuutste rol in die trefferfliek "Die Laaste Dans". Die film het reeds rekords gebreek by die loket.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Agter die Skerms</h2>
    <p class="mb-4">"Dit was fisies en emosioneel uitputtend," erken hy. "Maar die storie moes vertel word." Die akteur het maande lank geoefen vir die dansrolle in die film.</p>
  `
};

/**
 * Get full article content by ID
 * Returns a default content template if specific content doesn't exist
 */
export function getArticleContent(id: number): string {
  if (ARTICLE_CONTENT[id]) {
    return ARTICLE_CONTENT[id];
  }
  
  // Return default content template
  return `
    <p class="mb-4">Hierdie is 'n belangrike artikel wat lig werp op aktuele gebeure in ons omgewing.</p>
    
    <h2 class="text-2xl font-bold text-[var(--wp--preset--color--secondary)] mt-8 mb-4 font-heading">Meer Besonderhede</h2>
    <p class="mb-4">Ons berig sal voortdurend opgedateer word soos meer inligting beskikbaar word. Bly ingeskakel vir die jongste ontwikkelings.</p>
    
    <p class="mb-4">Vir meer inligting, kontak die redaksie by <a href="mailto:redaksie@rooirose.co.za">redaksie@rooirose.co.za</a></p>
  `;
}