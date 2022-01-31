Array.prototype.bubbleSort = function () {
    let wall = this.length - 1;
    while (wall > 0) {
        for (let j = 0; j < this.length; j++) {
            if (this[j] > this[j + 1]) {
                let aux = this[j];
                this[j] = this[j + 1];
                this[j + 1] = aux;
            }
        }
        wall--;
    }
}
​
Array.prototype.selectionSort = function () {
    let min = 0;
    while (min < this.length - 1) {
        for (let i = min + 1; i < this.length; i++) {
            if (this[min] > this[i]) {
                let aux = this[min];
                this[min] = this[i];
                this[i] = aux;
            }
        }
        min++;
    }
    return this;
}
​
let notas = [10, 9, 5, 3, 1, 8, 7, 6, 2, 4];
//notas.sort((v1, v2) => v1 > v2 ? 1 : v1 < v2 ? 1 : 0); // unicode
console.log(notas);
​
​
​
//notas.bubbleSort();
notas.selectionSort();
console.log(notas);
​
notas.sort();
​