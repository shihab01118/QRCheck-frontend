export const generateBatchNumber = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `Batch-${year}${month}${day}`;
}

export const generateProductionDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`
}

export const generateExpireDate = (monthsToAdd) => {
    const today = new Date();
    today.setMonth(today.getMonth() + monthsToAdd);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
}



