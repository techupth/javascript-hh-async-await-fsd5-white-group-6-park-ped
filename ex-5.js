// Exercise #5
// ให้นำ Function getJohnProfile จากโจทย์ Exercise #2 มาเขียนใหม่ด้วยวิธี Async / Await
// ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log()
// เราจะเห็นผลลัพธ์ของโปรแกรมออกมาทางหน้าจอแบบนี้
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
// Start coding here
async function asynchronousFunction() {
  try {
    const userProfile = await getJohnProfile();
    console.log(userProfile);
  } catch (error) {
    console.log(error);
  }
}

asynchronousFunction();
