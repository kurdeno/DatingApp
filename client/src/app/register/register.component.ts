import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private accoutService: AccountService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accoutService.register(this.model).subscribe(res => {
      console.log(res);
      this.cancel();
    }, error => { 
      console.error(error);
      this.toastr.error(error.error); 
    }
    )
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
