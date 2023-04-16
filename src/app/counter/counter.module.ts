import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  // Exporto el CounterComponent para que viva fuera del
  // scope del directirio counter
  exports: [CounterComponent],
})
export class CounterModule {}
