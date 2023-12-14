// Exercise #4
// ให้นำ Function getJohnProfile จากโจทย์ Exercise #1 มาเขียนใหม่ด้วยวิธี Async / Await
// ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log()
// เราจะเห็นผลลัพธ์ของโปรแกรมออกมาทางหน้าจอแบบนี้
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

// const caseResolve = async () => {
//   console.log(data);
// };

async function asynchronousFunction() {
  const userProfile = await getJohnProfile();
  console.log(userProfile);
}

asynchronousFunction();
