export function formatPrice(value, notation = 'standard') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation
    }).format(value);
}

export function formatPercent(value) {
    return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}
