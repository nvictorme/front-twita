import {Component, OnInit} from '@angular/core';
import {AuthProviders} from '../models/enumerations';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.scss']
})
export class DemoHomeComponent implements OnInit {

  AuthProviders = AuthProviders;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login(authProvider: AuthProviders) {
    this.auth.login(authProvider);
  }

}
