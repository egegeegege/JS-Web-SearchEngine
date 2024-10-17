const products =[
    {
        id: 1,
        name: 'Xaomi 13 Pro',
        price: 19000
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21',
        price: 20000
    },
    {
        id: 3,
        name: 'Huawei P40 Pro',
        price: 28000
    },
    {
        id: 4,
        name: 'OnePlus 9 Pro',
        price: 22000
    },
    {
        id: 5,
        name: 'Apple iPhone 12 Pro Max',
        price: 35000
    },
    {
        id: 6,
        name: 'Google Pixel 5',
        price: 15000
    },
]//liste ürünleri oluşturuldu

 var list="" //list adında var değişkeninen bağlı bir değişke oluşturuldu
 products.forEach(product => {
    list += `<li>${product.name}</li>`
 });//foreach  döngüsü ile listedeki name leri bir li nin içine atarak ul nin içinde çalıştırıyotuz

 document.getElementById("productList").innerHTML = list // ul nin içine 

 function clear(){
    document.getElementById("productList").innerHTML = ''
 } // bu fonksiyon çalıştığında listedekigerkeli silme işlemlerini yapar

 function searchKeyword(e){
    clear()
    list = ""
    var filterProducts = products.filter(product =>
        !product.name.toLowerCase().search(e.target.value.toLowerCase())
    )
    filterProducts.forEach(product => {
        list += `<li>${product.name}</li>`
        }
    )
    document.getElementById("productList").innerHTML = list
 }

