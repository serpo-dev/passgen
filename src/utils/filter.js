const filter = (options, dictionary) => {
    const allKeys = Object.keys(options);
    const amount = options['amount'];
    const length = options['length'];
    const keys = allKeys.filter(e => e !== 'length' && e !== 'amount');

    const selection = [];
    keys.forEach(key => {
        const boolean = options[key];
        if (boolean) {
            selection.push(dictionary[key]);
        }
    });
    return { selection, length, amount };
};

export default filter;
