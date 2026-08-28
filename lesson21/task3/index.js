export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}
export const getItemsArray = () => {
    const elements = document.querySelectorAll('.tool');
    const elementsArray = Array.from(elements);
    console.log(elementsArray);
    return elementsArray; 
}

