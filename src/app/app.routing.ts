import { AuthGuard } from './shared/service/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReflexaoComponent } from './reflexao/reflexao.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'reflexao', component: ReflexaoComponent },
    { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
    { path: 'sigin', component: SigninComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: false });


// 