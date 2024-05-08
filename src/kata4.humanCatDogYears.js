const humanCatDogYears = number => {
    let catYears = 0;
    let dogYears =0;

    if (number >= 1) {
        catYears += 15;
        dogYears += 15;
    }

    if (number >= 2) {
        catYears += 9;
        dogYears += 9;
    }

    if (number > 2) {
        catYears += 4 * (number - 2);
        dogYears += 5 * (number - 2);
    }

    return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
