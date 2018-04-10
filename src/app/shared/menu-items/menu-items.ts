import {Injectable} from '@angular/core';

// export interface BadgeItem {
//   type: string;
//   value: string;
// }

// export interface ChildrenItems {
//   state: string;
//   target?: boolean;
//   name: string;
//   type?: string;
//   children?: ChildrenItems[];
// }

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  // badge?: BadgeItem[];
  // children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Interviews',
    state: 'company',
    main: [
      {
        state: 'interviews',
        name: 'Interview Options',
        type: 'sub',
        icon: 'ti-video-camera',
        children: [
          {
            state: 'create',
            name: 'Create'
          },
          {
            state: 'lists',
            name: 'Lists'
          },
        ]
      },
    ]
  },
  {
    label: 'Questions',
    state: 'company',
    main: [
      {
        state: 'questions',
        name: 'Questions Options',
        type: 'sub',
        icon: 'ti-list',
        children: [
          {
            state: 'create',
            name: 'Create'
          },
          {
            state: 'lists',
            name: 'Lists'
          },
        ]
      },
    ]  
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
