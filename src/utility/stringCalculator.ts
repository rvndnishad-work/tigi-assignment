export const add = (numbers: string): number => {
    if (numbers === '') {
        return 0;
    }

    let delimiter = ',';
    const numList = numbers.split(delimiter);

    let total = 0;

    for (const num of numList) {
        if (num) {
            const n = parseInt(num, 10);
            total += n;
        }
    }

    return total;
};
