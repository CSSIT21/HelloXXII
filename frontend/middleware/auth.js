export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development') return;
  if (!store.state.auth.isLoggedIn) {
    return redirect('/login');
  }
}
