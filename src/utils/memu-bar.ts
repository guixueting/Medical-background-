/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
/** 所有权限 */
const find = [
  {
    id: 1,
    title: '测试1',
    path: '/index/test',
    name: 'resourceLibrary',
    icon: 'ResourceLibrary',
    promise: [],
    selectedPromise: []
  },
  {
    id: 2,
    title: '测试2',
    path: '/index/test2',
    name: 'topicManage',
    icon: 'folder',
    promise: [],
    selectedPromise: []
  },
  {
    id: 3,
    title: '测试3',
    path: '/index/test3',
    name: 'practise',
    icon: 'practise',
    promise: [],
    selectedPromise: []
  },
  {
    id: 4,
    title: '测试4',
    path: '/index/test4',
    name: 'exam',
    icon: 'exam',
    promise: [],
    selectedPromise: []
  },

  {
    id: 6,
    title: '测试5',
    path: '/index/test5',
    name: 'staff',
    icon: 'third',
    children: [
      {
        id: 7,
        path: '/index/staff',
        name: 'addPerson',
        title: '测试51',
        promise: [],
        selectedPromise: []
      },
      {
        id: 8,
        path: '/index/role-management',
        name: 'roleManagement',
        title: '测试52',
        promise: [],
        selectedPromise: []
      }
    ]
  },

];

/** 所有权限 */
const Permission = {

};

// export default Paths

const MenuBar = { find };

export { Permission, MenuBar };
