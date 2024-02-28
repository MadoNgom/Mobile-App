import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// NOS SERVICES AUDIO
export class BookService {
  constructor() {}
  private items = [
    {
      id: 1,
      image: 'subtile',
      title: "L'Art subtile",
      author: 'Mark Manson',
      path: '/assets/sounds/audio1.mp3',
    },
    {
      id: 2,
      image: 'moment',
      title: 'Le moment Present de Eckart Tolle',
      author: 'Eckart Toller',
      path: '/assets/sounds/audio2.mp3',
    },
    {
      id: 3,
      image: 'alchimistre',
      title: "L'alchimiste",
      author: 'Al-Ghazli',
      path: '/assets/sounds/audio3.mp3',
    },
    {
      id: 4,
      image: 'comment',
      title: 'se faire des amis',
      author: 'Dale Carnegie',
      path: '/assets/sounds/audio2.mp3',
    },
    {
      id: 5,
      image: 'moment',
      title: 'Lean startUp',
      author: 'Erics Ries',
      path: '/assets/sounds/audio1.mp3',
    },
    {
      id: 6,
      image: 'riche',
      title: 'Pere riche Pere Pauvre',
      author: 'Robert Kiosakie',
      path: '/assets/sounds/audio2.mp3',
    },
    {
      id: 7,
      image: 'semaine',
      title: 'La semaine des 4heures',
      author: 'Timothy Ferriss',
      path: '/assets/sounds/audio3.mp3',
    },
    {
      id: 8,
      image: 'vivre',
      title: 'Vivre Libere',
      author: 'Eckart Tolle',
      path: '/assets/sounds/audio3.mp3',
    },
    {
      id: 9,
      image: 'lean',
      title: 'lean startup',
      author: 'Jean Michel',
      path: '/assets/sounds/audio3.mp3',
    },
    {
      id: 10,
      image: 'personnel',
      title: 'le Personel MBA',
      author: 'Jean Michel',
      path: '/assets/sounds/audio3.mp3',
    },
  ];

  getItems() {
    return this.items;
  }

  getItemById(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
