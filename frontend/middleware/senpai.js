import devmode from './devmode';
export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development' && devmode) return;
  if (![2,3].includes(store.state.auth.profile.usertype)) {
    return redirect(store.state.auth.main);
  }
}
