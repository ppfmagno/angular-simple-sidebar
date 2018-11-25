import { MenuItem } from '../models/menu-item';

export const MENUITEMS: MenuItem[] = [
    { name: 'Batata', icon: 'fab fa-accessible-icon', childrenMenus: [
        { name: 'Da terra', route: '#',  },
        { name: 'Doce', route: '#',  }
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
    { name: 'Pudim', route: '#',  }
];
