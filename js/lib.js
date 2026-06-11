/*Viết mã Javascript*/
const products={
    name: "Hoa cúc Indo",
    price: 2500000,
    description: "Từ lâu, hoa cúc đã được trồng để làm cảnh, trang trí trong những sự kiện, ngày lễ trọng đại. Theo quan niệm của người xưa, hoa cúc tượng trưng cho sự trường thọ, thể hiện sự hiếu thảo, lòng biết ơn của con cháu đối với cha mẹ, ông bà, tổ tiên.",
    link: "chi-tiet.html",
    image: "../assets/images/cuc-indo.jpg"
}
function printBCC(n)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`; 
        i++;
    }
    //Đưa kết quả vào thẻ div có id là "result"
    document.getElementById("result").innerHTML = result;
}