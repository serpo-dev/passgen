function random(selection, length, amount) {
    let combinedSrt = '';
    for (let i = 0; i < selection.length; i++) {
        const part = selection[i];
        if (part.length === 0) {
            continue;
        };
        combinedSrt += part.join('');
    };
    if (combinedSrt.length === 0) {
        return;
    };

    const combined = combinedSrt.split('');

    Object.defineProperty(
        combined,
        'rndElem',
        {
            value: function () {
                const rndIndex = Math.floor(Math.random() * this.length);
                const rndVl = this[rndIndex];
                return rndVl;
            },
        },
    );

    const result = [];
    for (let j = 0; j < amount; j++) {
        const rowArr = [];
        for (let i = 0; i < length; i++) {
            const elem = combined.rndElem();
            rowArr.push(elem);
        };
        const rowStr = rowArr.join('');
        result.push(rowStr);
    };

    return result;
};

export default random;