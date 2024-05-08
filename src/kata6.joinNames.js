const joinNames = namesObj => {
    if(!namesObj || namesObj.length === 0) {
        return '';
    }

    const namesList = namesObj.map(obj => obj.name);

    if(namesList.length === 1) {
        return namesList[0];
    }

    const last = namesList.pop();
    return namesList.length ? namesList.join (', ') + ' & ' + last : last;
};

module.exports = joinNames;
