// Bài 1
let i = 10
let f = 20.5
let b = true
let s = "Hà Nội"

document.write("--------Bài 1--------")
document.write("</br>")
document.write("i = " + i)
document.write("</br>")
document.write("----------------")
document.write("</br>")
document.write("f = " + f)
document.write("</br>")
document.write("----------------")
document.write("</br>")
document.write("b = " + b)
document.write("</br>")
document.write("----------------")
document.write("</br>")
document.write("s = " + s)

// Bài 2
let witdh = 10
let height = 8
let dienTichHCN = witdh * height
document.write("</br>")
document.write("--------Bài 2--------")
document.write("</br>")
document.write('Diện tích hình chữ nhật là : ' + dienTichHCN)

// Bài 3
let x = prompt("Nhập x: ")
let y = prompt("Nhập y: ")
if(x%y == 0){
    alert('x chia hết cho y')
} else{
    alert('x không chia hết cho y')
}