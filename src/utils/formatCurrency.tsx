export const formatCurrency = (value: number | undefined) => {
    if (value == undefined) {
        return 0;
    }

    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
}