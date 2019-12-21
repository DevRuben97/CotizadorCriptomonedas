import http from './Http';

export function GetCurrencysList(){

   return http.get('/v1/exchange/map');
}

export function GetCryptocurrencysList(){
   return http.get('');
}

export function GetCryptocurrencysHistory(data){
    
}