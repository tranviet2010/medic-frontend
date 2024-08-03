import type { MenuList } from '../../interface/layout/menu.interface';


export const mockMenuList: MenuList = [
  {
    code: 'partner',
    label: {
      en_US: 'Quản lý đối tác',
    },
    icon: 'permission',
    path: '/partner',
  },

  {
    code: 'agent',
    label: {
      en_US: 'Quản lý đại lý',
    },
    icon: 'city',
    path: '/agent',
  },

  {
    code: 'customer',
    label: {
      en_US: 'Quản lý khách hàng',
    },
    icon: 'user',
    path: '/customer',
  },
  {
    code: 'nose-femur',
    label: {
      en_US: 'Quản lý chỉ số trẻ em',
    },
    icon: 'comment',
    path: '/nose-femur',
  },
  // {
  //   code: 'ManageMenu',
  //   label: {
  //     en_US: 'Quản lý tin nhắn',
  //   },
  //   icon: 'permission',
  //   path: '/manageMenu3.2',
  // },
  
  {
    code: 'adult',
    label: {
      en_US: 'Quản lý chỉ số người lớn',
    },
    icon: 'city',
    path: '/adult',
  },
  {
    code: 'mature',
    label: {
      en_US: 'Quản lý chỉ số người trưởng thành',
    },
    icon: 'city',
    path: '/mature',
  },
  {
    code: 'product',
    label: {
      en_US: 'Quản lý sản phẩm',
    },
    icon: 'city',
    path: '/product',
  },
  {
    code: 'course',
    label: {
      en_US: 'Quản lý liệu trình',
    },
    icon: 'city',
    path: '/course',
  }
];



// mock.mock('/user/menu', 'get', intercepter(mockMenuList));
