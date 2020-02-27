//Bài 1:
function show01() {
    let cel = parseFloat(document.getElementById("value01").value);
    let far = 0;
    far = cel * (9/5) + 32;
    document.getElementById("result01").innerHTML = "Nhiệt độ F là: " + far;
}

//Bài 2:
function show02() {
    let met = parseFloat(document.getElementById("value02").value);
    let ft = 0;
    ft = met * 3.2808;
    document.getElementById("result02").innerHTML = "Độ dài là: " + ft + " feet.";
}

//Bài 3:
function show03() {
    let edge = parseFloat(document.getElementById("value03").value);
    let square = edge * edge;
    document.getElementById("result03").innerHTML = "Diện tích hình vuông là: " + square;
}

//Bài 4:
function show04() {
    let a = parseFloat(document.getElementById("value04").value);
    let b = parseFloat(document.getElementById("value05").value);
    let rectangle = a * b;
    document.getElementById("result04").innerHTML = "Diện tích hình chữ nhật là: " + rectangle;
}

//Bài 5:
function show05() {
    let a = parseFloat(document.getElementById("value06").value);
    let b = parseFloat(document.getElementById("value07").value);
    let triangle = (a * b)/2;
    document.getElementById("result05").innerHTML = "Diện tích hình tam giác là: " + triangle;
}

//Bài 6:
function show06() {
    let a = parseFloat(document.getElementById("value08").value);
    let b = parseFloat(document.getElementById("value09").value);
    let x = 0;
    if (a == 0) {
        if (b == 0) {
            document.getElementById("result06").innerHTML = "Phương trình vô số nghiệm.";
        } else {
            document.getElementById("result06").innerHTML = "Phương trình vô nghiệm.";
        }
    } else {
        x = (-b)/a;
        document.getElementById("result06").innerHTML = "Phương trình có nghiệm là: " + x;
    }
}

//Bài 7:
function show07() {
    let a = parseFloat(document.getElementById("value10").value);
    let b = parseFloat(document.getElementById("value11").value);
    let c = parseFloat(document.getElementById("value12").value);
    let delta = b * b - (4 * a * c);
    let x = 0;
    let x1= 0;
    if (a == 0) {
        document.getElementById("result07").innerHTML = "Đây không phải phương trình bậc 2.";
    } else if (delta == 0) {
        x = (-b) / (2*a);
        document.getElementById("result07").innerHTML = "Phương trình có nghiệm kép: x = " + x;
    } else if (delta < 0) {
        document.getElementById("result07").innerHTML = "Phương trình vô nghiệm.";
    } else {
        x = (-b + Math.sqrt(delta))/(2*a);
        x1 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById("result07").innerHTML = "Phương trình có 2 nghiệm phân biệt là: " + x + " và "+ x1;
    }
}

//Bài 8:
function show08() {
    let a = parseFloat(document.getElementById("value13").value);
    if (a === parseInt(a) && a <120 && a>0 ) {
        document.getElementById("result08").innerHTML = "Đây là tuổi của một người";
    } else {
        document.getElementById("result08").innerHTML = "Đây  không phải là tuổi của một người";
    }
}

//Bài 9:
function show09() {
    let a = parseFloat(document.getElementById("value14").value);
    let b = parseFloat(document.getElementById("value15").value);
    let c = parseFloat(document.getElementById("value16").value);
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        document.getElementById("result09").innerHTML = "Đây là 3 cạnh của tam giác.";
    } else {
        document.getElementById("result09").innerHTML = "Đây không là 3 cạnh của tam giác.";
    }
}

//Bài 10:
function show10() {
    let a = parseFloat(document.getElementById("value17").value);
    let total = 0;
    if (a > 50) {
        total += 50 * 1678;
        a = a - 50 ;
    } else {
        total += a * 1678;
    }
    if (a > 50) {
        total += 50 * 1734;
        a = a - 50 ;
    } else {
        total += a * 1734;
    }
    if (a > 100) {
        total += 100 * 2014;
        a = a - 100 ;
    } else {
        total += a * 2014;
    }
    if (a > 100) {
        total += 100 * 2536;
        a = a - 100 ;
    } else {
        total += a * 2536;
    }
    if (a > 100) {
        total += 100 * 2834;
        a = a - 100 ;
    } else {
        total = a * 2834;
    }
    total += a * 2927;
    document.getElementById("result10").innerHTML = total * 1.1;
}