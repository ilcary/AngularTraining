/*
When you create an object that maps items as keys to specific
values, Record is a great utility type:*/

type Currency = 'USD' | 'EUR' | 'GBP';
type ExchangeRates = Record<Currency, number>;

const rates: ExchangeRates = {
    USD: 1.1, EUR: 1.22, GBP: 0.96
}