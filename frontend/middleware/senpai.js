import devmode from './devmode';
export default async function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development' && devmode) return;
  if (![2,3].includes(store.state.auth.profile.usertype)) {
    return redirect(store.state.auth.main);
  }
  const data = await store.dispatch('fetchSenpai');
  if([3001,3011,3021,3022].includes(data.error)){
    store.state.auth.main ="/logout";
    return redirect(store.state.auth.main);
  }
}
