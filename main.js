let loginBtn = document.querySelector('#loginBtn');
let username = document.querySelector('#username');
let userpass = document.querySelector('#userpass');

let userFrom = document.getElementById('userFrom');

userFrom.onsubmit = (e) =>{
    e.preventDefault();
}

let alert_div = document.querySelector('.alert');
let alert_dets = document.querySelector('#alert_dets');
let alert_img = document.querySelector('#alert_img');

loginBtn.onclick = () =>{
    let username_value = username.value;
    let userpass_value = userpass.value;

    if(username_value.length < 5 && userpass_value.length < 8){
        alert_div.style = `
            display: inline-flex;
            background: #fc0303;
            color: #fff;
            padding: 1em;
            height: 120px;
            width: 300px;
            font-family: sans-serif;
        `;
        alert_dets.textContent = 'Check Your details ~ username characters more than 5 & Password more than 8 characters!';
        alert_dets.style = `
            line-height: 1.2;
           
        `;
        alert_img.style.display = 'none';

        setTimeout(() => {
            alert_div.style.display = 'none';        
        }, 5000);
    }
    else{
        alert_div.style = `
            display: inline-flex;
            background: #2df20f;
            color: #fff;
            height: 50px;
        `;

        alert_dets.textContent = 'Successful login';

        setTimeout(() => {
            alert_div.style.display = 'none';        
        }, 2000);
    }

}