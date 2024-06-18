let display = document.getElementById('display');
showLogin()

function showLogin() {
    let str = `
        <h1>Login page</h1>
        <input type="text" id="usn" placeholder="Nhap username">
        <input type="text" id="pass" placeholder="Nhap password">
        <button onclick="login()">Login</button>
        <p onclick="showRegister()">Register</p>
    `
    display.innerHTML = str
}

function showRegister() {
    let str = `
        <h1>Register page</h1>
        <input type="text" placeholder="Nhap username">
        <input type="text"  placeholder="Nhap password">
        <input type="text"  placeholder="Nhap dob">
        <button>Register</button>
        <p onclick="showLogin()">Login</p>
    `
    display.innerHTML = str
}

function login() {
    let usn = document.getElementById('usn').value;
    let pass = document.getElementById('pass').value;
    let data = {usn, pass};
    axios.post('http://localhost:8080/login', data).then((res) => {
        if (res.data == 'Tài khoản hoặc mật khẩu sai!') {
            alert(res.data);
        } else {
            console.log(res.data)
            showHome()
            localStorage.setItem('user', JSON.stringify(res.data));
        }
    })
}

function showHome() {
    let str = `
        <h1>Home page </h1>
        <button onclick="showFormAddBlog()">Add new blog</button>
        <div id="main"></div>
        <button onclick="showLogin()">Logout</button>   
    `
    display.innerHTML = str;
    showListBlog()
}

function showListBlog() {
    axios.get('http://localhost:8080/blogs').then(x => {
        let list = x.data;
        let str = ''
        for (let i = 0; i < list.length; i++) {
            str += `<h2>${list[i].id}, ${list[i].title}</h2>`
        }
        document.getElementById('main').innerHTML = str;
    })
}

function showFormAddBlog() {
    document.getElementById('main').innerHTML = `
        <input id="title">
        <input id="content">
        <button onclick="addBlog()">Add</button>
    `;
}

function addBlog() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let data =
        {
            title,
            content,
            user: {
                id: JSON.parse(localStorage.getItem('user')).id
            }
        }
        axios.post('http://localhost:8080/blogs', data).then((x)=> {
            alert('Thêm thành công!');
            showListBlog();
        })
}