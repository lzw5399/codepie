const loadView = view => {
  return () => import(`../views/${view}.vue`)
}

const routes = [
  {
    path: '/',
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
