import { BasicEntity, Price, Freezer, Vension } from './general_types';

export const animals: BasicEntity[] = [
  {
    id: 1,
    name: 'Reh',
  },
  {
    id: 2,
    name: 'Wildschwein',
  },
];

export const meats: BasicEntity[] = [
  {
    id: 1,
    name: 'Rücken',
  },
  {
    id: 2,
    name: 'Keule',
  },
  {
    id: 3,
    name: 'Schulter',
  },
  {
    id: 4,
    name: 'Brust',
  },
];

export const freezers: Freezer[] = [
  {
    id: 1,
    name: 'Gefrierschrank 1',
    drawer_numbers: 10,
  },
  {
    id: 2,
    name: 'Gefrierschrank 2',
    drawer_numbers: 5,
  },
  {
    id: 3,
    name: 'Gefrierschrank 3',
    drawer_numbers: 8,
  },
];

export const prices: Price[] = [
  {
    id: 1,
    animal_id: 1,
    meat_id: 1,
    price: 10.0,
  },
  {
    id: 2,
    animal_id: 1,
    meat_id: 2,
    price: 15.0,
  },
  {
    id: 3,
    animal_id: 2,
    meat_id: 3,
    price: 8.5,
  },
  {
    id: 4,
    animal_id: 2,
    meat_id: 4,
    price: 5.0,
  },
  {
    id: 5,
    animal_id: 1,
    meat_id: 5,
    price: 7.5,
  },
];

export const data_1: Vension[] = [
  {
    id: 1,
    freezer_id: 1,
    drawer_number: 'Nicht zugewiesen',
    animal_id: 1,
    meat_id: 2,
    weight: 380,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: '',
  },
  {
    id: 8,
    freezer_id: 1,
    drawer_number: 'Nicht zugewiesen',
    animal_id: 1,
    meat_id: 2,
    weight: 600,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 3,
    reserved_for: '',
  },
  {
    id: 9,
    freezer_id: 1,
    drawer_number: 4,
    animal_id: 2,
    meat_id: 1,
    weight: 1100,
    count: 1,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: 'Hans',
  },
  {
    id: 10,
    freezer_id: 1,
    drawer_number: 1,
    animal_id: 1,
    meat_id: 4,
    weight: 340,
    count: 3,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 2,
    reserved_for: '',
  },
  {
    id: 11,
    freezer_id: 1,
    drawer_number: 3,
    animal_id: 2,
    meat_id: 2,
    weight: 850,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 4,
    reserved_for: '',
  },
  {
    id: 12,
    freezer_id: 1,
    drawer_number: 5,
    animal_id: 1,
    meat_id: 1,
    weight: 920,
    count: 1,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 5,
    reserved_for: 'Silke',
  },
  {
    id: 13,
    freezer_id: 1,
    drawer_number: 2,
    animal_id: 2,
    meat_id: 4,
    weight: 380,
    count: 4,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 3,
    reserved_for: 'Hans',
  },
  {
    id: 14,
    freezer_id: 1,
    drawer_number: 6,
    animal_id: 1,
    meat_id: 2,
    weight: 550,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 2,
    reserved_for: '',
  },
  {
    id: 15,
    freezer_id: 1,
    drawer_number: 'Nicht zugewiesen',
    animal_id: 2,
    meat_id: 1,
    weight: 1050,
    count: 1,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: 'Silke',
  },
  {
    id: 16,
    freezer_id: 1,
    drawer_number: 4,
    animal_id: 1,
    meat_id: 4,
    weight: 310,
    count: 3,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 3,
    reserved_for: '',
  },
  {
    id: 17,
    freezer_id: 1,
    drawer_number: 1,
    animal_id: 2,
    meat_id: 2,
    weight: 820,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 2,
    reserved_for: 'Hans',
  },
  {
    id: 18,
    freezer_id: 1,
    drawer_number: 3,
    animal_id: 1,
    meat_id: 1,
    weight: 900,
    count: 1,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: 'Silke',
  },
  {
    id: 19,
    freezer_id: 1,
    drawer_number: 5,
    animal_id: 2,
    meat_id: 4,
    weight: 400,
    count: 4,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 4,
    reserved_for: '',
  },
];

export const data_2: Vension[] = [
  {
    id: 1,
    freezer_id: 2,
    drawer_number: 'Nicht zugewiesen',
    animal_id: 1,
    meat_id: 2,
    weight: 380,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: '',
  },
  {
    id: 8,
    freezer_id: 2,
    drawer_number: 'Nicht zugewiesen',
    animal_id: 1,
    meat_id: 2,
    weight: 600,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 3,
    reserved_for: '',
  },
  {
    id: 9,
    freezer_id: 2,
    drawer_number: 4,
    animal_id: 2,
    meat_id: 1,
    weight: 1100,
    count: 1,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 1,
    reserved_for: 'Hans',
  },
  {
    id: 10,
    freezer_id: 2,
    drawer_number: 1,
    animal_id: 1,
    meat_id: 4,
    weight: 340,
    count: 3,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 2,
    reserved_for: '',
  },
  {
    id: 11,
    freezer_id: 2,
    drawer_number: 3,
    animal_id: 2,
    meat_id: 2,
    weight: 850,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 4,
    reserved_for: '',
  },
];

export const data_3: Vension[] = [
  {
    id: 10,
    freezer_id: 3,
    drawer_number: 1,
    animal_id: 1,
    meat_id: 4,
    weight: 340,
    count: 3,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 2,
    reserved_for: '',
  },
  {
    id: 11,
    freezer_id: 3,
    drawer_number: 3,
    animal_id: 2,
    meat_id: 2,
    weight: 850,
    count: 2,
    date: new Date().toISOString().split('T')[0].split('-').slice(0, 2).join('-'),
    price_id: 4,
    reserved_for: '',
  },
];
