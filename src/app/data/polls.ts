export interface PollOption {
  id: string;
  text: string;
}

export interface PollData {
  id: string;
  question: string;
  options: PollOption[];
  active: boolean;
}

export const POLLS: PollData[] = [
  {
    id: 'poll-001',
    question: 'Waaroor droom jou dorp?',
    active: true,
    options: [
      { id: '1', text: 'Veiliger strate vir ons kinders' },
      { id: '2', text: 'Meer werksgeleenthede vir jongmense' },
      { id: '3', text: 'Beter dienste en infrastruktuur' },
      { id: '4', text: "'n Heigte gemeenskapsgees" },
      { id: '5', text: 'Trots op ons plaaslike kultuur' }
    ]
  },
  {
    id: 'poll-002',
    question: 'Wat is jou gunsteling deel van die koerant?',
    active: false,
    options: [
      { id: '1', text: 'Plaaslike nuus' },
      { id: '2', text: 'Sport' },
      { id: '3', text: 'Blokraai en vermaak' },
      { id: '4', text: 'Briewe van lesers' },
      { id: '5', text: 'Skole-nuus' }
    ]
  }
];

export const getActivePoll = (): PollData | undefined => {
  return POLLS.find(poll => poll.active);
};
