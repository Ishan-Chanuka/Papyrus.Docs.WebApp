import { Routes } from '@angular/router';
import { DocumentsComponent } from './pages/documents/documents.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MeetingminutesComponent } from './components/templates/meetingminutes/meetingminutes.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'documents',
        component: DocumentsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard]
    },
    {
        path: 'notes',
        component: NotesComponent,
        canActivate: [authGuard]
    },
    {
        path: 'meetingminutes',
        component: MeetingminutesComponent,
        canActivate: [authGuard]
    }
];
