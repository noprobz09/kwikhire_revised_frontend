import { Routes } from '@angular/router';
import {InterviewListsComponent} from './interview/lists/lists.component';
import { InterviewCreateComponent } from './interview/create/create.component';
import { QuestionsCreateComponent } from './questions/create/create.component';
import { QuestionsListsComponent } from './questions/lists/lists.component';

export const CompanyRoutes: Routes = [
    {
        path: '',
        // data: {
        //     breadcrumb: 'Interview',
        //     status: false
        // },
       children: [
            {
                path: 'interviews/lists', 
                component: InterviewListsComponent,
                data: {
                    breadcrumb: 'Interview Lists',
                    status: true
                }
            }, 
            {
                path: 'interviews/create',
                component: InterviewCreateComponent,
                data: {
                    breadcrumb: 'Interview Lists',
                    status: true
                }
            },
            {
                path: 'questions/create',
                component: QuestionsCreateComponent,
                data: {
                    breadcrumb: 'Questions Create',
                    status: true
                }
            },
            {
                path: 'questions/lists',
                component: QuestionsListsComponent,
                data: {
                    breadcrumb: 'Questions Lists',
                    status: true
                }
            }
        ]
    }
];
