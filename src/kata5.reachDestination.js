const reachDestination = (distance, speed) => {
    if (speed === 0) throw new Error('Speed cannot be zero');

    const travelTime = distance / speed;
    const roundedTime = Math.ceil(travelTime / 0.5) * 0.5;
    if (roundedTime === 1) {
        return 'I should be there in 1 hour.';
    } else {
    return 'I should be there in ' + roundedTime + ' hours.';
    }
};

module.exports = reachDestination;
