export interface MenuItem {
    name: string;
    route?: string;
    icon?: string;
    isActive?: boolean;
    childrenMenus?: MenuItem[];
}
