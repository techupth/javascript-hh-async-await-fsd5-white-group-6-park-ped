//Exercise #2
// สืบเนื่องจาก Exercise #1 ในกรณีนี้ เราจะเขียน Function ใหม่ ซึ่งมีรายละเอียดดังนี้

// Return ผลลัพธ์ออกมาเป็น Promise Function
// Function getJohnProfile ดึงข้อมูลจาก Server ไม่สำเร็จเสมอ
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()

// เราจะเห็นผลลัพธ์ของโปรแกรมออกมาทางหน้าจอแบบนี้
// {
//   errorCode: 500,
//   message: '👿 Failed to request data from server'
// }

const caseReject = (data) => {
  console.log(data);
};
getJohnProfile().catch(caseReject);
