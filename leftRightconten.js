let content_list = [['', '', '', '']]

function displayLeft() {
    let table = "<table>"

    for (let i = 0; i < content_list.length; i++) {

        table += "<tr>"
        table += "<td>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay103.jfif' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Super Star</b>" + "<br/>" + "<p>$ : 1500</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay1' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Nike off 2.0</b>" + "<br/>" + "<p>$ : 1200</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"

        table += "<tr>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay106.jfif' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Nike Star</b>" + "<br/>" + "<p>$ : 1300</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay4' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Ultra Boot</b>" + "<br/>" + "<p>$ : 1600</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"

        table += "<tr>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay108.jfif' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Leboron 19</b>" + "<br/>" + "<p>$ : 1450</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay6' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>Alpha Bounce</b>" + "<br/>" + "<p>$ : 950</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"


    }
    table += "</table>"
    document.getElementById('content_left').innerHTML = table
}

function displayRight() {
    let table = "<table>"

    for (let i = 0; i < content_list.length; i++) {

        table += "<tr>"
        table += "<td>" +  "<img class='anh_hove'" + " alt='' src='anh/anhgiay7' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>altra boot 4.0</b>" + "<br/>" + "<p>$ : 1790</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay8' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>ultra boot 5.0</b>" + "<br/>" + "<p>$ : 570</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"

        table += "<tr>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay9' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>air force</b>" + "<br/>" + "<p>$ : 700</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay11' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>hurache</b>" + "<br/>" + "<p>$ : 850</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"

        table += "<tr>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay101.jfif' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>conzect</b>" + "<br/>" + "<p>$ : 1000</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "<td>" +"<br>" + "<img class='anh_hove'" + " alt='' src='anh/anhgiay104.jfif' style='width: 320px; height: 320px'>"
            + "<br>" + "<b>air force 1</b>" + "<br/>" + "<p>$ : 680</p>" + "<br>" + "<button>Mua Ngay</button>" + "</td>"
        table += "</tr>"


    }
    table += "</table>"
    document.getElementById('content_right').innerHTML = table
}