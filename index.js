import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import fetch from 'node-fetch'
globalThis.fetch = fetch

const freecurrencyapi = new Freecurrencyapi('fca_live_MxN7l9ZFUzZnbV74Ocah4FbqXR5vfkXBHG0UzgZv');

// convertCurrency("INR","USD",5);

export async function convertCurrency(fromCurrency,toCurrency,units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}
