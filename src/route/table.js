const loadView = view => {
  return () => import(`../views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'dash',
    component: loadView('Dashboard')
  },
  {
    path: '/home',
    name: 'home',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('About')
  }
]

export default routes
