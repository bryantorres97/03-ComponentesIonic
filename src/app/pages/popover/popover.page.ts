import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    // const {data} = await popover.onDidDismiss();
    // NOTE onWillDismiss se dispara más rápido, la otra espera a que se cierre el componente
    const {data} = await popover.onWillDismiss();
    console.log('Desde el padre:', data);
  }
}


