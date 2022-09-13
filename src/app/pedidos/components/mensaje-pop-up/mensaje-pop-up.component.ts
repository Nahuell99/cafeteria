import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataEnviada } from '../../../Interfaces/pedido.interface';

@Component({
  selector: 'app-mensaje-pop-up',
  templateUrl: './mensaje-pop-up.component.html',
  styleUrls: ['./mensaje-pop-up.component.css']
})
export class MensajePopUpComponent implements OnInit {

  @Input() idPedido!: number;

  constructor( public dialogRef: MatDialogRef<MensajePopUpComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DataEnviada

  ) {
  }

  ngOnInit(): void {
  }

}
