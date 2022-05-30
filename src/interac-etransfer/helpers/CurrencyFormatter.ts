const currencyFormatter = (currency = 'USD') => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }));

export default currencyFormatter;
