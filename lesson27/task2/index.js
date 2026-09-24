const favorite = ['id-6', 'id-17'];
const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
        id: 'id-2',
        name: 'Food',
        nodes: [
            {
                id: 'id-6',
                name: 'Drink',
                nodes: [],
            }
        ]
        }, 
        {
        id: 'id-17',
        name: 'Vehicle',
        nodes: [],
        }
    ],
};
const markFavorites = (tree, favorite) => {
    const isFavorite = favorite.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorite)),
    }
}

const result = markFavorites(tree, favorite);
console.log(result);