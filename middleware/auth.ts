export default ({ redirect }: any) => {
  console.log('auth middleware')

  const loggedIn = false
  if (!loggedIn) {
    return redirect('/')
  }
}