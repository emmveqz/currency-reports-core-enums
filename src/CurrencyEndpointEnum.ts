
export enum CurrencyEndpointEnum {
  Coinbase		= "https://api.coinbase.com/v2/prices/{SYMBOL}-USD/spot",
  Nomics			= "https://api.nomics.com/v1/currencies/ticker?key=797fd357cda1b7eafa7ed3f5c9dc7c2d&ids={SYMBOL}",
  Lunarcrush		= "https://api.lunarcrush.com/v2?data=assets&key=hl058sesezomjzdkdyjr6s&symbol={SYMBOL}",
  /**
   * @Warning Supports only BTC.
   */
  Coindesk		= "http://api.coindesk.com/v1/bpi/currentprice.json",
  BinanceUS		= "https://api.binance.us/api/v3/ticker/price?symbol={SYMBOL}USD",
  BinanceWS		= "wss://stream.binance.com:9443/ws",
  Binance			= "https://api.binance.com/api/v3/ticker/price?symbol={SYMBOL}USDT",
}

export default CurrencyEndpointEnum
