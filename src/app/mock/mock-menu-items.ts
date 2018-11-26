import { MenuItem } from '../models/menu-item';

export const MENUITEMS: MenuItem[] = [
    { name: 'Batata', icon: 'fab fa-accessible-icon', childrenMenus: [
        { name: 'Da terra', route: 'daterra' },
        { name: 'Doce', route: 'doce'  }
    ] },
    { name: 'Pizza', icon: 'account_circle', childrenMenus: [
        { name: 'Mozzarella', route: '#',  },
        { name: 'Peito de perú', childrenMenus: [
            { name: 'Com catupiri', route: '#',  },
            { name: 'Com alho', childrenMenus: [
                { name: 'Poró', route: '#',  },
                { name: 'Normal', route: '#',  }
            ] }
        ] }
    ] },
    { name: 'Pudim', route: '#',  },
    { name: 'lore frfwruihfriuherwiufhriuwhfu fr hfrwiuhfr iu irfiuhwfriu friuhiuhwiuferhiurehfuihwiuhfr iurewiuh friewufr i', route: '#' }
];
