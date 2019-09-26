
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('components/Search.vue')
  },
  {
    name: 'show',
    path: '/show/:id',
    component: () => import('components/ShowMember.vue')
  },
  {
    name: 'create',
    path: '/create',
    component: () => import('components/CreateMember.vue')
  },
  {
    name: 'edit',
    path: '/edit',
    component: () => import('components/EditMember.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
