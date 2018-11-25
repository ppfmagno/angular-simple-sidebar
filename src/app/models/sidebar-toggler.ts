export enum sidebarState {
    open = 'open',
    closed = 'closed',
    cozy = 'cozy'
}

export class SidebarToggler {
    currentState: sidebarState;
    between;

    constructor(initialState: string) {
        this.currentState = sidebarState[initialState];
    }

    toggle(between) {
        const states = between.split(' ');
        if (states[0] !== states[1]) {
            const open_closed = /^(open|closed)\s(closed|open)/,
            open_cozy = /^(open|cozy)\s(cozy|open)/,
            cozy_closed = /^(cozy|closed)\s(closed|cozy)/;

            switch (true) {
                case open_closed.test(between):
                    if (this.currentState === sidebarState.open) {
                        this.currentState = sidebarState.closed;
                    } else {
                        this.currentState = sidebarState.open;
                    }
                break;

                case open_cozy.test(between):
                    if (this.currentState === sidebarState.open) {
                        this.currentState = sidebarState.cozy;
                    } else {
                        this.currentState = sidebarState.open;
                    }
                break;

                    case cozy_closed.test(between):
                    if (this.currentState === sidebarState.cozy) {
                        this.currentState = sidebarState.closed;
                    } else {
                        this.currentState = sidebarState.cozy;
                    }
                break;

                default:
                    console.error(`Can\'t toggle between "${between}". Provide valid states on toggler component directive`);
            }
        } else {
                console.error(`Can\'t toggle between "${between}". Provide different states on toggler component directive`);
        }
    }
}
