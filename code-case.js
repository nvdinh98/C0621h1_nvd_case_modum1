
let products = [];

function addProduct(product, addProductName) {
    product.push(addProductName);
    return product;
}
function editProduct(product, index) {
    for (let i = 0; i < product.length; i++) {
        if (i == index) {
            product[i] = prompt("Sửa tên sản phẩm")
            return product;
        }
    }
}
function deleteProduct(product, index) {
    let newProduct = [];
    let count = 0
    for (let i = 0; i < product.length; i++) {
        if (index > i) {
            newProduct[count] = product[i];
            count++;
        }
        if (i > index) {
            newProduct[count] = product[i];
            count++;
        }
    }
    return newProduct;
}
// Bước 4
function displayProduc(product) {
    let data = "<table><tr><th width='200px' height='32px'>Product Name</th><th>" + product.length + " product</th></tr> ";
    for (let i = 0; i < product.length; i++) {
        data += "<tr><td width='160px' height='32px'>" + product[i] + "</td><td><button type='button' onclick='edit(" + i + ")'>Edit</button></td><td><button type='button' onclick='deleteProduc(" + i + ")'>Delete</button></td></tr>"
    }
    data += "</table>";
    document.getElementById("data").innerHTML = data;
}
displayProduc(products);

// Bước 5
function add() {
    let inputAddProduct = document.getElementById("input").value;
    addProduct(products, inputAddProduct);
    displayProduc(products);
    document.getElementById("input").value = "";
}
// Bước 6
function edit(i) {
    let index = i;
    editProduct(products, index);
    displayProduc(products);
}
// Bươc 7
function deleteProduc(i) {
    products = deleteProduct(products, i);
    displayProduc(products);

}