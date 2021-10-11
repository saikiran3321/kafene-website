var urlLink ="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products";
function getOrders() {
    var http = new XMLHttpRequest();
    http.open('GET', urlLink, true);
    http.onreadystatechange = function(){
        if(http.readyState ===4 && http.status === 200){
            var data = JSON.parse(http.responseText);
            productList = data;
            productDisplay(productList);
        }
    }
    http.send();
}
getOrders();

let productList = [];

const productTable = (data) => {
    return `
        <tr class="TableRow">
            <td class="primary-text">${data?.id}</td>
            <td class="secondary-text">${data?.medicineName}</td>
            <td class="secondary-text">${data?.medicineBrand}</td>
            <td class="primary-text">${data?.expiryDate}</td>
            <td class="secondary-text">${data?.unitPrice}</td>
            <td class="secondary-text">${data?.stock}</td>
        </tr>
        `  ;
}

const productDisplay = (data) => {
    let card = "";
    for (let i = 0; i <data.length; i++) {
        card += productTable(data[i]);
    }
    $(".contant-section").html(card);
};


function filterData() {
    let count = 0;
    let productDetails = "";
    const presentDate = new Date();
    if(productList.length > 0) {
        for (let i = 0; i < productList.length; i++) {
            if(!$("#expriedCheck").is(":checked") &&
            new Date(productList[i].expiryDate) < presentDate
            ) {
                continue;
            } else if(
                !$("#lstockCheck").is(":checked") &&
                productList[i].stock <100
            ) {
                continue;
            }else {
                count++;
                productDetails += productTable(productList[i]);
            }
        }
    }
    $(".ordersCount").html(count);
    $(".contant-section").html(productDetails);
}

$(".check").on("change", function () {
    filterData();
});
