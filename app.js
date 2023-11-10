// จงเขียนโปรแกรมคำนวนว่าเลขของ input หารด้วย 3 และ 11 ได้เศษเท่าไร โดยที่ไม่ใช้ modulo
// ตัวอย่าง input:18 output:0 7 input167output:2 1


// 18 output %3 = 0 | %11 = 7

// modulo method
// function mod311(input) {
//     const collectmod311 = [];
//     let mod3 = input % 3;
//     // console.log(mod3);
//     let mod11 = input % 11;
//     // console.log(mod11);
//     collectmod311.push(mod3, mod11)
//     return collectmod311;
// }

// console.log(mod311(18));
// console.log(mod311(167));


function mod(input) {
    const collectmod = [];
    // let mod3 = input % 3;
    let mod3 = Math.round(((input / 3) - (Math.floor((input) / 3))) * 3);
    // console.log(mod3);

    let mod11 = Math.round(((input / 11) - (Math.floor((input) / 11))) * 11);
    // console.log(mod11);
    collectmod.push(mod3, mod11)
    return collectmod;
}

console.log(mod(18));
console.log(`mod(18) โปรดใช้คำสั่งนี้แล้วเปลี่ยนแปลงตัวเลขภายใน โปรแกรมจะแสดงเศษที่หารด้วย 3 และ 11 ตามลำดับ`);
// console.log(mod311(167));