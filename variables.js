const generatePostsArr = () => {
  let myArr = [];
  for (let i = 0; i < 5; i++) {
    myArr.push({
      id: 0,
      title: "hola",
      content: "well",
      img: "ciao",
      tags: ["fe", "fa", "la"],
    });
  }
  return myArr;
};

// console.log(generatePostsArr);
module.exports = { generatePostsArr };
