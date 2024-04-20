let array = [] //deklarasi array

//perulangan untuk mengisi nilai pada array dengan 100 nilai random
for (let index_array = 0; index_array<100; index_array++){
    array.push(Math.round((Math.random()*49)) + 1) //push() untuk menambahkan nilai kepaling belakang, math.round() untuk pembulatan dan math.random()untuk menampilkan nilai acak
}

//tampilkan nilai pada array
console.log("100 nilai random(1 sampai 50) : ")
console.log(array)

let array_genap = [] //deklarasi array untuk menampung array berindeks genap
let array_ganjil = [] //deklarasi array yang menampung array berindeks ganjil

//perulangan untuk memasukkan nilai padamasing-masing array sesuai dengan indeks
for (let index_array = 0; index_array<array.length; index_array++){
    //percabangan untuk memecah letak indeks genap dan ganjil
    if(index_array % 2 == 0){
        array_genap.push(array[index_array])
    }
    else{
        array_ganjil.push(array[index_array])
    }
}

//tampilkan nilai pada kedua array
console.log("50 array genap :")
console.log(array_genap)
console.log("50 array ganjil")
console.log(array_ganjil)

//buat method untuk mencari nilai maksimal pada array
function max_array(array){
    let max = array[0] //deklarasi nilai maksimal yang akan diisi pada array berindeks 0
    //searching dengan menggunakan perulangan
    for(let index_array = 0; index_array < array.length; index_array++){
        //kondisi pengecekan hingga mendapatkan nilai maksimal
        if (max < array[index_array]){
            max = array[index_array]
        }
    }
    return max //pengembalian nilai
}

//buat method untuk mencari nilai minimal pada array
function min_array(array){
    let min= array[0]
    for(let index_array = 0; index_array<array.length;index_array++){
        if (min > array.length[index_array]){
            min = array[index_array]
        }
    }
    return min
}

//deklarasi nilai maksimal pada array genap dan ganjil serta pengisian nilai menggunakan method
max_genap = max_array(array_genap)
min_genap = min_array(array_genap)
max_ganjil = max_array(array_ganjil)
min_ganjil = min_array(array_ganjil)

//tampilkan nilai maksimal dan minimal pada masing-masing array
console.log("Nilai max array genap : "+max_genap)
console.log("Nilai min array genap : "+min_genap)
console.log("Nilai max array ganjil : "+max_ganjil)
console.log("Nilai min array ganjil : "+min_ganjil)
 
//buat method untuk mencari jumlah total keseluruhan nilai pada array
function total(array){
    let total = 0; //deklarasi awal
    for(let index = 0; index<array.length; index++){
        total += array[index] //proses penjumlahan setiap elemen array
    }
    return total
}

//pengisian nilai pada variabelpenampung
total_genap = total(array_genap)
rata_genap = total_genap / array_genap.length //pencarian rata-rata dengan total penjulahan/jumlah elemen
total_ganjil = total(array_ganjil)
rata_ganjil = total_ganjil / array_ganjil.length

//tampikan total dan rata-rata pada asing-masing array
console.log("Array genap")
console.log("Total : "+total_genap)
console.log("Rata-rata : "+rata_genap)
console.log("Array ganjil")
console.log("Total : "+total_ganjil)
console.log("Rata-rata : "+rata_ganjil)

//buat percabangan untuk melakukan pembandingan nilai maksimal pada array genap dan ganjil
if(max_genap == max_ganjil){
    console.log("Nilai max genap ("+max_genap,") dan max ganjil ("+max_ganjil,") sama")
}
else if(max_genap > max_ganjil){
    console.log("Nilai max genap ("+max_genap,") lebih besar dari max ganjil ("+max_ganjil,") ")
}
else if(max_genap < max_ganjil){
    console.log("Nilai max genap ("+max_genap,") lebih kecil dari max ganjil ("+max_ganjil,") ")
}
else{
    console.log("Inputan salah")
}

//buat percabangan untuk melakukan pembandingan nilai minimal pada array genap dan ganjil
if(min_genap == min_ganjil){
    console.log("Nilai min genap ("+min_genap,") dan min ganjil ("+min_ganjil,") sama")
}
else if(min_genap > min_ganjil){
    console.log("Nilai min genap ("+min_genap,") lebih besar dari min ganjil ("+min_ganjil,")")
}
else if(min_genap < min_ganjil){
    console.log("Nilai min genap ("+min_genap,") lebih kecil dari min ganjil ("+min_ganjil,")")
}
else{
    console.log("Inputan salah")
}

//buat percabangan untuk melakukan pembandingan nilai total pada array genap dan ganjil
if(total_genap == total_ganjil){
    console.log("Nilai total genap ("+total_genap,") dan total ganjil ("+total_ganjil,") sama")
}
else if(total_genap > total_ganjil){
    console.log("Nilai total genap ("+total_genap,") lebih besar dari total ganjil ("+total_ganjil,")")
}
else if(total_genap < total_ganjil){
    console.log("Nilai total genap ("+total_genap,") lebih kecil dari total ganjil ("+total_ganjil,")")
}
else{
    console.log("Inputan salah")
}

//buat percabangan untuk melakukan pembandingan nilai rata-rata pada array genap dan ganjil
if(rata_genap == rata_ganjil){
    console.log("Nilai rata-rata genap ("+rata_genap,") dan rata-rata ganjil ("+rata_ganjil,")")
}
else if(rata_genap > rata_ganjil){
    console.log("Nilai rata-rata genap ("+rata_genap,") lebih besar dari rata-rata ganjil ("+rata_ganjil,")")
}
else if(rata_genap < rata_ganjil){
    console.log("Nilai rata-rata genap ("+rata_genap,") lebih kecil dari rata-rata ganjil ( "+rata_ganjil,")")
}
else{
    console.log("Inputan salah")
}
