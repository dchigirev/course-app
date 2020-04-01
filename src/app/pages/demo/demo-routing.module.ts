import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        children: [
            {
                path: 'styles',
                loadChildren: () => import('./pages/styles/styles.module').then(m => m.StylesModule)
            },
            {
                path: 'shared',
                loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
