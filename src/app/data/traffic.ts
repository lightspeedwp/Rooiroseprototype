export type Severity = 'hoog' | 'medium' | 'laag';
export type IncidentType = 'ongeluk' | 'padwerk' | 'vertraging' | 'sluiting';

export interface TrafficIncident {
  id: string;
  title: string;
  road: string;
  location: string;
  description: string;
  type: IncidentType;
  severity: Severity;
  time: string;
  estimatedClear?: string;
}

export const INCIDENTS: TrafficIncident[] = [
  {
    id: '1',
    title: 'Botsing op N1 noord naby Hugenotetonnel',
    road: 'N1',
    location: 'Paarl, Wes-Kaap',
    description:
      'Twee voertuie was betrokke in \'n botsing. Slegs een laan oop. Verwag vertragings van tot 45 minute.',
    type: 'ongeluk',
    severity: 'hoog',
    time: '07:32',
    estimatedClear: '10:00',
  },
  {
    id: '2',
    title: 'Padwerk op N2 naby Somerset-Wes',
    road: 'N2',
    location: 'Somerset-Wes, Wes-Kaap',
    description:
      'Langtermyn padherstellingswerk. Snelheidsbeperking verlaag na 60 km/h. Verwag minimale vertragings.',
    type: 'padwerk',
    severity: 'laag',
    time: '06:00',
    estimatedClear: '18:00',
  },
  {
    id: '3',
    title: 'Swaar verkeer op N12 Johannesburg rigting',
    road: 'N12',
    location: 'Johannesburg, Gauteng',
    description:
      'Normale spitstydverkeer. Vertragings van ongeveer 30 minute op die stuk tussen Benoni en Germiston.',
    type: 'vertraging',
    severity: 'medium',
    time: '07:00',
  },
  {
    id: '4',
    title: 'R44 tydelik gesluit weens vloedskade',
    road: 'R44',
    location: 'Stellenbosch, Wes-Kaap',
    description:
      'Die pad is gesluit tussen Stellenbosch en Somerset-Wes weens vloedskade na swaar reënval. Alternatiewe roete via N2 aanbeveel.',
    type: 'sluiting',
    severity: 'hoog',
    time: '05:45',
  },
  {
    id: '5',
    title: 'Verkeersligte buite werking — Voortrekkerweg',
    road: 'Voortrekkerweg',
    location: 'Bellville, Wes-Kaap',
    description:
      'Verkeersligte by die kruising van Voortrekkerweg en Durbanweg is buite werking weens beurtkrag. Vierstop-reël geld.',
    type: 'vertraging',
    severity: 'medium',
    time: '08:15',
  },
  {
    id: '6',
    title: 'Padwerk op N8 tussen Bloemfontein en Botshabelo',
    road: 'N8',
    location: 'Bloemfontein, Vrystaat',
    description:
      'Padverbredingswerk in uitvoering. Stop-en-gaan-verkeer van toepassing. Verwag 15–20 minute vertragings.',
    type: 'padwerk',
    severity: 'medium',
    time: '06:30',
    estimatedClear: '17:00',
  },
];
