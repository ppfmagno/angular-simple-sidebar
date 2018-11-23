import { MenuItem } from '../model/menu-item';

export const MENUITEMS: MenuItem[] = [
    { name: 'Batata', childrenMenus: [
        { name: 'Da terra', route: '#',  },
        { name: 'Doce', route: '#',  }
    ] },
    { name: 'Pizza', childrenMenus: [
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
