import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // directivas de Angular ngIf / ngFor / ngSwich
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DbzMainComponent } from './pages/dbz.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [DbzMainComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [DbzMainComponent],
})
export class DbzModule {}
