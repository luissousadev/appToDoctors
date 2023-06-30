import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { Component } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AntibioticosComponent } from './pages/antibioticos/antibioticos.component';
import { ListaMedicamentosComponent } from './components/lista-medicamentos/lista-medicamentos.component';
import { AntiConvulsivantesComponent } from './pages/anti-convulsivantes/anti-convulsivantes.component';
import { AntiInflamatorioComponent } from './pages/anti-inflamatorio/anti-inflamatorio.component';
import {MatInputModule} from '@angular/material/input';
import { CalculoMedicamentosComponent } from './components/calculo-medicamentos/calculo-medicamentos.component';
import { AntibioticosCalculosComponent } from './pages/antibioticos-calculos/antibioticos-calculos.component';
import { PopupComponent } from './components/popup/popup.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AntiFungicosComponent } from './pages/anti-fungicos/anti-fungicos.component';
import { AntiHistaminicosComponent } from './pages/anti-histaminicos/anti-histaminicos.component';
import { AntiParasitariosComponent } from './pages/anti-parasitarios/anti-parasitarios.component';
import { BroncodilatadoresComponent } from './pages/broncodilatadores/broncodilatadores.component';
import { CorticosteroidesComponent } from './pages/corticosteroides/corticosteroides.component';
import { LaxativosComponent } from './pages/laxativos/laxativos.component';
import { SintomaticosComponent } from './pages/sintomaticos/sintomaticos.component';
import { HidratacaoVenosaComponent } from './pages/hidratacao-venosa/hidratacao-venosa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisarComponent,
    NavbarComponent,
    FooterComponent,
    AntibioticosComponent,
    ListaMedicamentosComponent,
    AntiConvulsivantesComponent,
    AntiInflamatorioComponent,
    CalculoMedicamentosComponent,
    AntibioticosCalculosComponent,
    PopupComponent,
    AntiFungicosComponent,
    AntiHistaminicosComponent,
    AntiParasitariosComponent,
    BroncodilatadoresComponent,
    CorticosteroidesComponent,
    LaxativosComponent,
    SintomaticosComponent,
    HidratacaoVenosaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
