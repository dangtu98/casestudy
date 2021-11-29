function checkAccount() {
    let dangnhap = document.getElementById("dangnhap").value
    let matkhau = document.getElementById("matkhau").value
    if (dangnhap === 'admin@gmail.com' && matkhau === "123456"){
        document.getElementById('login').action = "quanlyhanghoa.html"
    }else {
        document.getElementById('login').action = "dangnhap.html"
        alert('Nhập Lại')
    }
}