var urlLink ="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"; // here we are declearing Api call to a varable call urlink
function getOrders() {  //here we are creating a function by the name getOrders 
var http = new XMLHttpRequest(); //The XMLHttpRequest object can be used to request data from a web server.
http.open('GET', urlLink, true);  //initializes a newly-created request, or re-initializes an existing one.
http.onreadystatechange = function(){ //The readyState property holds the status of the XMLHttpRequest
    if(http.readyState ===4 && http.status === 200){ //return the state of an XLHttpRequest
        var data = JSON.parse(http.responseText);  //its is used to convert string data into object formate while displaying
        orderList = data;
        productDisplay(orderList);
    }
}
http.send();
}
getOrders(); // function invoking

    let orderList = []; 

    const productDisplay = (data) => {
        let card = "";  //creating empty string
        for (let i = 0; i < data.length; i++) {
            card +=`
            <tr class="TableRow">
                <td class="primary-text">${data[i].id}</td>
                <td class="secondary-text">${data[i].customerName}</td>
                <td class="secondary-text">${data[i].orderDate}
                    <span>${data[i].orderTime}</span>
                </td>
                <td class="primary-text">${data[i].amount}</td>
                <td class="secondary-text">${data[i].orderStatus}</td>
            </tr>
            `  
        }
        $(".contant-section").html(card);
    }

    $(".filter_check").click(function () {
        let filterArr = $(".filter_check:checked")
        .map(function () {
            return this.value;
        })
        .get();
        getClickedArr(filterArr);
        
    });

    const getClickedArr = (data) => {
        let newOderList = [];
        if (orderList.length > 0) {
        for (let i = 0; i < data.length; i++) {
            orderList.filter((item) => {
            if (item.orderStatus == data[i]) {
                newOderList.push(item);
            }
            });
        }
        }

        $(".ordersCount").html(newOderList.length);
        productDisplay(newOderList);
    };