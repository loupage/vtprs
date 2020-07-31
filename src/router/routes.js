const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageStories.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/statements', component: () => import('pages/PageStatements.vue') },
      { path: '/teach', component: () => import('pages/PageTeach.vue') },
      { path: '/user', component: () => import('pages/PageUser.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
