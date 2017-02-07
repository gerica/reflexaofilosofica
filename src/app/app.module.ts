import { AuthGuard } from './shared/service/auth.guard';
import { AuthService } from './shared/service/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReflexaoComponent } from './reflexao/reflexao.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SigninComponent } from './signin/signin.component';

import { AngularFireModule } from 'angularfire2';
import { Ng2PaginationModule } from 'ng2-pagination';

import {
  TabsModule,
  ModalModule
} from 'ng2-bootstrap';
import { DropdowDirective } from './dropdow.directive';
import { ListaComponent } from './cadastro/lista/lista.component';
import { ReflexaoPipe } from './shared/pipe/reflexao.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyDZFCSxIsR-5nRpvsd6DjwfysBeRNyEf1A",
  authDomain: "reflexao-filosofica.firebaseapp.com",
  databaseURL: "https://reflexao-filosofica.firebaseio.com",
  messagingSenderId: "405105317374"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReflexaoComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    CadastroComponent,
    SigninComponent,
    DropdowDirective,
    ListaComponent,
    ReflexaoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    Ng2PaginationModule
  ],
  providers: [AuthService, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
