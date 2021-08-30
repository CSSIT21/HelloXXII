import devmode from './devmode';
export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development' && devmode) return;
  if (![1].includes(store.state.auth.profile.usertype)) {
    return redirect(store.state.auth.main);
  }
}
