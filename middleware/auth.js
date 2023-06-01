export default ({ store, route, redirect }) => {
  const user = store.getters['user/userIsLogged']
  if (route.path === '/' && user) {
    redirect('/house-rules')
  }
  if (route.path === '/house-rules' && !user) {
    redirect('/')
  }
  redirect()
  // if (!store.getters['user/userIsLogged']) {
  //   redirect('/login')
  // }
}
