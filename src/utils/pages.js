export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount/limit)
}

export const getPAgesArray = (totalPAges) => {
    let result = [];
    for (let index = 0; index < totalPAges; index++) {
        result.push(index + 1);
        
    }
    return result;
}