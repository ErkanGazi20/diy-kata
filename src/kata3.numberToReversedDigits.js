const numberToReversedDigits = number => {
    return Array.from(number.toString()).map(Number).reverse();
};

module.exports = numberToReversedDigits;
