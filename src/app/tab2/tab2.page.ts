import { Component } from '@angular/core';
// IMPORT DU SERVICE
import { BookService } from '../book.service';
// IMPORT DE NATIVE AUDIO DE CAPACITOR
import { NativeAudio } from '@capacitor-community/native-audio';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  items: any[];
  currentIndex: number = 0;
  isPlaying: boolean = false;
  progress: number = 25;
  totalAudioDuration: number = 0;

  constructor(private bookService: BookService) {
    // Recuperer les  données de notre service
    this.items = this.bookService.getItems();
    //la fonction  Capacitor pour charger un audio
    this.preloadAudio();
  }

  async preloadAudio() {
    for (const item of this.items) {
      await NativeAudio.preload({
        assetId: `audio_${item.id}`,
        assetPath: item.path,
        audioChannelNum: 1,
        isUrl: false,
      });
    }
  }

  ionViewDidEnter() {
    this.playAudio();
  }
  // FONCTION POUR PLAY OU METTRE EN PAUSE UN AUDIO
  playPauseAudio() {
    if (this.isPlaying) {
      NativeAudio.pause({
        assetId: `audio_${this.items[this.currentIndex].id}`,
      });
    } else {
      NativeAudio.play({
        assetId: `audio_${this.items[this.currentIndex].id}`,
      });
    }
    this.isPlaying = !this.isPlaying;
  }
  // FONCTION POUR RETOURNER AU LIVRE PRECEDENT
  goBackAudio() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.playAudio();
  }
  // FONCTION POUR PASSER AU LIVRE SUIVANT
  goForwardAudio() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.playAudio();
  }

  playAudio() {
    const currentAudioId = `audio_${this.items[this.currentIndex].id}`;
    NativeAudio.stop({ assetId: currentAudioId }); // mettre en pause l'audio s'il joue
    NativeAudio.play({ assetId: currentAudioId }); // POUR PLAY NOTRE FICHIER AUDIO
    this.isPlaying = true;
  }
  // Pour convertir la source de l'image
  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
  async UpdateProgress() {
    try {
      const result = await NativeAudio.getCurrentTime({
        assetId: `audio_${this.items[this.currentIndex].id}`,
      });
      this.progress = (result.currentTime / this.totalAudioDuration) * 100;
    } catch (error) {
      console.error("la position de l'audio est inaccessible", error);
    }
  }
}
