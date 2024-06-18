let display = document.getElementById('display');
showLogin()
function showLogin(){
    let str = `
        <h1>Login page</h1>
        <input type="text" id="usn" placeholder="Nhap username">
        <input type="text" id="pass" placeholder="Nhap password">
        <button onclick="login()">Login</button>
        <p onclick="showRegister()">Register</p>
    `
    display.innerHTML = str
}
function showRegister(){
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
            showHome()
        }
    })
}
function showHome() {
    let str = `
        <h1>Home page </h1>
        <button onclick="showLogin()">Logout</button>   
    `
    display.innerHTML = str
}