import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../../../Services/Transactions/transactions.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';


@Component({
  selector: 'app-pse',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterOutlet, RouterModule],
  templateUrl: './pse.component.html',
  styleUrl: './pse.component.css'
})
export class PseComponent {

  /*------------------------*/

  PSEinput: any

  /*-------------------------*/

    /*------------------------*/

    showAlert: boolean = false;

    show() {
      this.showAlert = true;
    }
  
    closeAlert() {
      this.showAlert = false;
    }
  
    /*-----------------------*/

    /*-----------------------*/

    showAlertVerification: boolean = false;

    show1() {
      this.showAlertVerification = true;
    }

    closeAlert1() {
      this.showAlertVerification = false;
    }

  /*-----------------------*/


   /*-----------------------*/

   sendButton = true;

   sendlookingButton = false;
 
   /*------------------------*/
   Balance:any=[] 

  constructor(private transactionsService:TransactionsService, private store:Store<AppState> ){

    this.PSEinput = new FormGroup({
      id : new FormControl("",[Validators.required,Validators.minLength(1)]),
      request : new FormControl("",[Validators.required,Validators.minLength(1)]),
    })

  }
  ngOnInit(){
    this.store.pipe(select("balance")).subscribe((value: number) => {
      //console.log(value)
      //this.Balance = value
      const info = localStorage.getItem('valorBalance')
      const valor:number = info ? JSON.parse(info) : 0
      console.log(valor)
      this.Balance = valor
    })
  }
  saveinfo(){
    const id = this.PSEinput.value.id
    const amount = this.PSEinput.value.request
    this.sendButton = false;
    this.sendlookingButton = true;
    this.PSEinput.reset()
    this.money(id,amount)
  }

  money(id:number, request:number) {
    this.transactionsService.sendMoneyPSE(id, request).subscribe({   
      next: (info)=>{
        console.log("Transaccion Exitosa se logro bro")
        this.sendButton = true;
        this.sendlookingButton = false;
        this.show()
      },
      error(err) {
          console.error(err)
      },
    })
  }
}
