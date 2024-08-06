export const add = (numbers: string): number => {
    if (numbers === '') {
        return 0;
    }

    let delimiter = ',';

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    delimiter = delimiter.replace(/[\[\]]/g, '');
    const delimiters = new RegExp(`[${delimiter},\n]+`);

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
