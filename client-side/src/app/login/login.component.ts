import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;
  
  constructor(
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private client: HttpClient
  ) {
    
   }
  ngOnInit(): void {
  }
  

  onSubmit() { 
  
  //this.client.post('localhost:3000/users/login', 'username=s&password=d', {observe: 'response', responseType: 'text'})

  return this.router.navigate(['/search-screen'])
  }

}
