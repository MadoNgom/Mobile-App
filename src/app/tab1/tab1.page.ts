import { Component } from '@angular/core';
// IMPORT DES DONNEES JSON
import eduFin from '../../assets/audioLivre/educaFin.json';
import devPer from '../../assets/audioLivre/devPer.json';
import plusecouter from '../../assets/audioLivre/plusecouter.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  //Listes des données qu'on recuper
  data = [
    {
      titre: 'Les Plus écoutés',
      livres: plusecouter,
    },
    {
      titre: 'Developpement Personnel',
      livres: devPer,
    },
    {
      titre: 'Education Financière',
      livres: eduFin,
    },
  ];
  // ON CONVERTIIT LA SOURCE DE L'image
  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
  constructor(private router: Router) {}
  //FONCTION POUR OUVRIR UN LIVRE ET UTILISER SON TITRE DANS L'URL
  ouvrirLivre(livre: { title: string | number | boolean }) {
    const titreChemin = encodeURIComponent(livre.title);
    console.log('hello world');
    // POUR NAVIGER AU TAB1 PAGE
    this.router.navigateByUrl(`tabs/tab1/${titreChemin}`);
  }
}
