import devmode from './devmode';
export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development' && devmode) return;
  if (!store.state.auth.isLoggedIn) {
    return redirect('/login');
  }
  return redirect(store.state.auth.main);
}
