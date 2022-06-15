function encontrarIntruso(array, caracter){
    let index_list = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] != caracter) index_list.push(i);
    }
    return index_list;
}

