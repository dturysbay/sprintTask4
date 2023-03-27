document.getElementById("reg_button").addEventListener("click",()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const fullName = document.getElementById("full_name").value
    const select = document.getElementById("country")
    const country = select.options[select.selectedIndex].text
    const birthdate = document.getElementById("date").value
    if(email  &&
        password &&
        fullName &&
        select  &&
        birthdate
        ){
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("full_name",fullName)
            localStorage.setItem("country",country)
            localStorage.setItem("birthdate",birthdate)
            reg_page.style="display:none"
            login_page.style="display:block"
    }
})

document.getElementById("sign_in_button").addEventListener("click",()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const info_page = document.getElementById("info_page")
    console.log(localStorage.getItem("email"))
    if(localStorage.getItem("email") === email && 
    localStorage.getItem("password") === password) {
        document.getElementById("login_page").style="display:none"
        info_page.style="display:block"
        document.getElementById("user_name").innerHTML = `Welcome ${localStorage.getItem("full_name")}`
        document.getElementById("user_email").innerHTML=localStorage.getItem("email")
        document.getElementById("user_full_name").innerHTML=localStorage.getItem("full_name")
        document.getElementById("user_country").innerHTML=localStorage.getItem("country")
        document.getElementById("user_birthdate").innerHTML=localStorage.getItem("birthdate")
    }
})