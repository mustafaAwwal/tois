import { 
    stagger,
    group,
    animate,
    transition,
    trigger,
    query,
    style,
    animateChild
} from '@angular/animations';

export const RouterAnimation = trigger('routerAnimation', [
    transition("* <=> *", [
        query(':enter,:leave', [
            style({
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%'
            })
        ], {optional: true}),
        group([
            query("#progress-bar", [
                style({
                    display: 'block',
                    transition: '400ms'
                }),
            ], {optional: true}),
            query(':enter', [
                style({
                    opacity: 0
                }),
                animate('200ms 200ms ease-in', style({
                    opacity: 1
                }))
            ], {optional: true}),
            query(':leave', [
                style({
                    opacity: 1
                }),
                animate('200ms 0ms ease-in', style({
                    opacity: 0
                }))
            ], {optional: true})
        ]),
        
    ])
])