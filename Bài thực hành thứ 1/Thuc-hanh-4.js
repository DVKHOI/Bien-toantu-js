// Tạo 2 biến và hàm nhập 
let inputWitdh = prompt('Nhập chiều dài: ')
let inputHeight = prompt('Nhập chiều rộng: ')
// Chuyển 2 biến vừa tạo từ kiểu string sang kiểu số nguyên
let witdh = parseInt(inputWitdh)
let height = parseInt(inputHeight)

let dienTichHCN = witdh * height
document.write('Diện tích hình chữ nhật là ' + dienTichHCN)