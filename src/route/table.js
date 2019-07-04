const loadView = view => {
  return () => import(`../views/${view}.vue`)
}

const routes = [
  {
    path: '/home',
    name: 'home',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('About')
  },
  {
    path: '/',
    name: 'index',
    component: loadView('Index')
  }
]

export default routes
