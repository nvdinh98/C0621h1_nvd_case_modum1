let Product = new Array();
let Price = new Array();
let Description = new Array();
let Picture = new Array();
Product.push("Iphone 15 ");
Product.push("Samsung j15");
Product.push("Nokia E69");
Price.push("30.000.000 ");
Price.push("25.000.000");
Price.push("10.000.000");
Description.push("Đẳng cấp")
Description.push("Sang trọng")
Description.push("Hàng siêu bền")
Picture.push("../pictrue/iphone.png")
Picture.push("../pictrue/nokia.png")
Picture.push("../pictrue/sam.png")

//=== show sản phẩm
function showProduct() {
    let textTable = "";
    textTable = "<table >";
    //====================Tạo tiêu đề bảng ===============================
    textTable += "<tr>";
    textTable += "<th border-spacing: 8px>" + "Product" + "</th>";
    textTable += "<th border-spacing: 8px>" + "Price" + "</th>";
    textTable += "<th border-spacing: 8px>" + "Description" + "</th>";
    textTable += "<th border-spacing: 8px>" + "Picture" + "</th>";
    textTable += "<th border-spacing: 8px>" + Product.length + "_" + "Product" + "</th>";
    textTable += "</tr>";
    //====================Tạo row(hàng) show Product ===============================
    for (let i = 0; i < Product.length; i++) {
        textTable += "<tr>";
        textTable += "<td>" + Product[i] + "</td>";
        textTable += "<td>" + Price[i] + "</td>";
        textTable += "<td>" + Description[i] + "</td>";
        textTable += "<td>" + "<img src="+ Picture[i] +" height="+69+" width="+160+"/></td>";
        textTable += "<td>" + "<button onclick='checkProduct(this.value)' value=" + i + ">Edit</button>" + "<button onclick='deleteProduct(this.value)' value=" + i + ">Delete</button>" + "</td>";
        textTable += "</td>";
        textTable += "</tr>";
    }
    //====================Tạo tiêu đề bảng ===============================
    textTable += "</table>";
    document.getElementById("Result").innerHTML = textTable;
}

showProduct()

function deleteProduct(id) {
    // Product[0] ===> id = 0;
    for (let i = 0; i < Product.length; i++) {
        if (Product[i] == Product[id]) {
            Product.splice(i, 1);
        }
    }
    showProduct();
}

// Chuyền vị trí và giá trị của mảng vào ô Edit
function checkProduct(id) {
    document.getElementById("editProduct").value = Product[id];
    document.getElementById("editDescription").value = Description[id]
    document.getElementById("editPrice").value = Price[id];
    document.getElementById("editPicture").value = Picture[id];
    document.getElementById("btn-Edit").value = id;
}

//============ Chỉnh sửa sản phẩm theo vị trí của mảng và showProduct
function editProduct(id) {
    Product[id] = document.getElementById("editProduct").value;
    Description[id] = document.getElementById("editDescription").value;
    Price[id] = document.getElementById("editPrice").value;
    Picture[id] = document.getElementById("Picture").value;
    showProduct();
}

//============== Thêm sản phẩm ===============
function addProduct() {
    let productName = document.getElementById("addProduct").value;
    let productDescription = document.getElementById("addDescription").value;
    let productPrice = document.getElementById("addPrice").value;
    let productPicture = document.getElementById("addPicture").value;
    Product.push(productName);
    Description.push(productDescription);
    Price.push(productPrice);
    Picture.push(productPicture);
    showProduct();
}