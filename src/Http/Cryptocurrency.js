import http from './Http';

export async function GetCurrencysList(){

   return await http.get('');
}

export async function GetCryptocurrencysList(limit){
   return await http.get(`top/mktcapfull?limit=${limit}&tsym=USD`);
}

export async function GetCryptocurrencysHistory(Currency, CriptoCurrency){
    
   return await http.get('');
}