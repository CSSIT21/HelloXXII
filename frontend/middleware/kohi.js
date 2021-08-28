export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development') return;
  if (![1].includes(store.state.auth.profile.usertype)) {
    return redirect('/');
  }
}
