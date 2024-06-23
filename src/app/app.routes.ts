import { Routes } from '@angular/router';
import { DocumentsComponent } from './pages/documents/documents.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TexteditorComponent } from './components/texteditor/texteditor.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MeetingminutesComponent } from './components/templates/meetingminutes/meetingminutes.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'documents',
        component: DocumentsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'notes',
        component: NotesComponent
    },
    {
        path: 'meetingminutes',
        component: MeetingminutesComponent
    }
];
