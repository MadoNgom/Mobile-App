import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  livres!: any[];

  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit() {
    this.livres = this.bookService.getItems();
  }
  onItemClick(bookId: number) {
    // Navigate to Tab2 without passing any parameters
    this.router.navigate(['/tabs/tab2']);
  }
  // Pour convertir la source de l'image
  dasherize(string: string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
