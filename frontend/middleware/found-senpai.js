import devmode from './devmode';
export default function ({ store, redirect}){
  if((process.env.NODE_ENV || 'development') === 'development' && devmode) return;
  if (!store.state.kohi.found) {
    return redirect('/pair-peer-mentor');
  }
}
