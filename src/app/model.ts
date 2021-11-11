import { apptodoitem } from './apptodoitem';

export class Model {
  name: string;
  items: apptodoitem[];
  constructor() {
    this.name = 'Ersin';
    this.items=[
      {id:0,description: 'Ders çalış', action: true }, //interface ile de kullanilir.
      {id:1, description: 'Alışveriş yap', action: true },
      {id:2, description: 'Spora git', action: false },
      new apptodoitem(3,'Dinlen', false)
    ];
  }
}
