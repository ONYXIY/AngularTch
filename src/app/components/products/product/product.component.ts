import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { IProduct } from './product.interface';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user.models';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  realText: boolean = false;
  isIndexHtmlDark: boolean = false;
  moreDetails: boolean = false;

  name: string;
  age: number;

  users: User[] = [];

  submitForm(){
    
  }

  @Input() product: IProduct

  constructor(@Inject(DOCUMENT) private document: Document, private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }
  addUser(): void {
    
    this.users.push(new User(this.name, this.age))
    this.clearUser()
  }
  clearUser(): void {
    this.name = '';
    this.age = 0;
  }

  ngOnInit(): void {
    this.checkDarkMode();

    const classObserver = new MutationObserver(() => {
      this.checkDarkMode();
    });

    classObserver.observe(this.document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  toggleDarkMode(): void {
    const indexHtml = document.documentElement;
    this.isIndexHtmlDark = !this.isIndexHtmlDark;

  }
  checkDarkMode(): void {
    this.isIndexHtmlDark = this.document.documentElement.classList.contains('dark');
  }
}
