// thêm sản phẩm mới
let data = [];

function addData() {
    let masp = document.getElementById("masp").value
    let tensp = document.getElementById("tensp").value
    let soluongsp = document.getElementById("soluong").value
    let gianhapsp = document.getElementById("gianhap").value
    let giabansp = document.getElementById("giaban").value
    if (
        document.getElementById("masp").value === "" ||
        document.getElementById("tensp").value === "" ||
        document.getElementById("soluong").value === "" ||
        document.getElementById("gianhap").value === "" ||
        document.getElementById("giaban").value === "") {
        document.getElementById("hienthongbao").innerHTML ="!!! Hãy nhập đầy đủ thông tin"
    } else {
        let item = {
            id1: masp,
            name1: tensp,
            quantity: soluongsp,
            import: gianhapsp,
            sell: giabansp,
        };
        data.push(item);
        viewData()
    }
}


function viewData() {
    let table = '<table>'
    table += '<tr>'
        + '<td>' + 'Mã Sản Phẩm' + '</td>'
        + '<td>' + 'Sản Phẩm' + '</td>'
        + '<td>' + 'Số Lượng(ĐÔI)' + '</td>'
        + '<td>' + 'Giá Bán/ĐÔI' + '</td>'
        + '<td>' + 'Giá Nhập/ĐÔI' + '</td>'
        + '<td>' + 'Delete' + '</td>'
        + '</tr>';
    for (let i = 0; i < data.length; i++) {
        table += '<tr>'
        table += '<td>' + data[i].id1 + '</td>'
        table += '<td>' + data[i].name1 + '</td>'
        table += '<td>' + data[i].quantity + '</td>'
        table += '<td>' + data[i].import + '</td>'
        table += '<td>' + data[i].sell + '</td>'
        table += '<td>' + '<button onClick="deleteData(' + data[i].id1 + ')">' + 'Delete' + '</button>' + '</td>'
        table += '</tr>'
    }
    table += '</table>'
    document.getElementById('thongtin').innerHTML = table
}

function deleteData(id1) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id1 == id1) {
            data.splice(i, 1)
            viewData()
        }
    }
}




