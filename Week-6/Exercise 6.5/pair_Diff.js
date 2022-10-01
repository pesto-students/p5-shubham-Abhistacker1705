    const pairDiff = (array, b) => {
        for (let i = 0; i < array.length; i++) {
            if (array.includes(b + array[i])) {
                return 1;
            }
        } return 0;
    }
    console.log(pairDiff([5, 10, 3, 2, 50, 80], 78))
    console.log(pairDiff([5, 10, 3, 2, 50, 80], 53))