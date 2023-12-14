// Exercise #6
// จากโจทย์ Exercise #3 ให้เรียงลำดับการทำงานของ Asynchronous Operation จาก Function ในโจทย์ข้างต้น ด้วยวิธี Async / Await
// กำหนดให้ลำดับการทำงานต้องเป็นดังนี้
// getJohnProfile จะต้องถูก Execute ก่อน
// ให้ Log ตัวข้อมูลที่ได้จาก Function getJohnProfile
// getJohnOrders จะต้องถูก Execute ถัดมา
// ให้ Log ตัวข้อมูลที่ได้จาก Function getJohnOrders
// ผลลัพธ์ที่ได้ทางหน้าจอจะเห็นข้อมูลแบบนี้ก่อน
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

async function asynchronousFunction() {
  try {
    const userProfile = await getJohnProfile();
    console.log(userProfile);
    const userOrder = await getJohnOrders();
    console.log(userOrder);
  } catch (error) {
    console.log(error);
  }
}

asynchronousFunction();
