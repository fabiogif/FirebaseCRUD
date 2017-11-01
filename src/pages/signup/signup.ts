import { ShoppingListPage } from './../shopping-list/shopping-list';
import { User } from './../../providers/auth-service/user';
import { AuthService } from './../../providers/auth-service/auth-service';
import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  user: User = new User();
  @ViewChild('form') from: NgForm;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthService) {
  }

  createAccount(){
    
  }

}
