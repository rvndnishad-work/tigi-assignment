export const add = (numbers: string): number => {
    if (numbers === '') {
        return 0;
    }

    let delimiter = ',';

    numbers = numbers.replace(/\n/g, delimiter);
    const numList = numbers.split(delimiter);

    let total = 0;
    const negatives: number[] = [];
    for (const num of numList) {
        if (num) {
            const n = parseInt(num, 10);
            if (n < 0) {
                negatives.push(n);
            }
            total += n;
        }
    }
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return total;
};
