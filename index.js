const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const baiGiang = [
  {
    title: "Lab2",
    src: './Lab2/info/index.html',
  },
  {
    title: "Exercise 7.2",
    src: './Lab2/info/index.html',
  },
  {
    title: "Exercise 7.3",
    src: './Lab2/cv/index.html',
  },
  {
    title: "Exercise 7.4",
    src: './Lab2/score/index.html',
  },
  {
    title: "Exercise 7.5",
    src: './Lab2/7.5/index.html',
  },
  {
    title: "Lab3",
    src: './Lab3/7.3/index.html',
  },
  {
    title: "Exercise 7.3 form nhập tt cá nhân",
    src: './Lab3/7.3/index.html',
  },
  {
    title: "Exercise 7.4 form hồ sơ",
    src: './Lab3/7.4/index.html',
  },
  {
    title: "Exercise 7.5 form nhập",
    src: './Lab3/7.5/index.html',
  },
  {
    title: "Exercise 7.6 Danh sách",
    src: './Lab3/7.6/index.html',
  },
  {
    title: "Exercise 7.7 thực đơn",
    src: './Lab3/7.7/index.html',
  },
  {
    title: "Exercise 7.8 Tab",
    src: './Lab3/7.8/index.html',
  },
  {
    title: "Exercise 7.9 Cây",
    src: './Lab3/7.9/index.html',
  },
  {
    title: "Exercise 7.10 Máy tính",
    src: './Lab3/7.10/index.html',
  },
  {
    title: "Exercise 7.11 Chuyển Ảnh",
    src: './Lab3/7.11/index.html',
  },
  {
    title: "Exercise 7.12 sắp xếp",
    src: './Lab3/7.12/index.html',
  },
  {
    title: "Lab4",
    src: './Lab4/7.3/index.php',
  },
  {
    title: "Exercise 7.3  lấy dữ liệu và gửi dữ liệu",
    src: './Lab4/7.3/index.php',
  },
  {
    title: "Exercise 7.4  Form tính toán",
    src: './Lab4/7.4/index.php',
  },
  {
    title: "Exercise 7.5 Mảng",
    src: './Lab4/7.5/index.php',
  },
  {
    title: "Exercise 7.6 GetForm",
    src: './Lab4/7.6/index.php',
  },
  {
    title: "Exercise 7.7 Phiên",
    src: './Lab4/7.7/index.php',
  },
  {
    title: "Exercise 7.8 cookie",
    src: './Lab4/7.8/index.php',
  },
  {
    title: "Exercise 7.9 function",
    src: './Lab4/7.9/index.php',
  },
  {
    title: "Exercise 7.10 Đọc ghi file",
    src: './Lab4/7.10/index.php',
  },
  {
    title: "Exercise 7.11 thao tác file",
    src: './Lab4/7.11/index.php',
  },
  {
    title: "Exercise 7.12 đa ngôn ngữ",
    src: './Lab4/7.12/index.php',
  },
  {
    title: "Exercise 7.13",
    src: './Lab4/7.13/index.php',
  },
  {
    title: "Exercise 7.14",
    src: './Lab4/7.14/index.php',
  },
];

const render = (src)=>{
    $(".content").src = src
}

const handleExam = (examName) => {
    console.log('""""')
     render(examName)
     
};

const renderMenu = ()=>{
    var content = baiGiang.map((value,index)=>`<li><a onclick="return handleExam('${value.src}')">${value.title}</a></li>`);
    $(".menunav").innerHTML = content.join("")
}

window.onload = function (){
    console.log("first load")
    renderMenu();
}