function kgString(str) {
    let page = "";
    for (var i = str.length - 1; i >= 0; --i){
        page += str[i];
    }
    return page;
}

console.log(kgString('Привет'));