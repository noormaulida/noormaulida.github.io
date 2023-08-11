function openMobileNav() {
    const dotBtn = document.getElementById('navbar');
    dotBtn.style.display = 'flex';
    const openBtn = document.getElementById('open');
    openBtn.style.display = 'none';
    const closeBtn = document.getElementById('close');
    closeBtn.style.display = 'block';
    scrollTopOnOpen();
}

function scrollTopOnOpen() {
    $('html, body').animate({
        scrollTop: ($('#m-navbar').offset().top)
    }, 1000);
}

function closeMobileNav() {
    const dotBtn = document.getElementById('navbar');
    dotBtn.style.display = 'none';
    const openBtn = document.getElementById('open');
    openBtn.style.display = 'block';
    const closeBtn = document.getElementById('close');
    closeBtn.style.display = 'none';
}



function validateform() {
    let error = document.getElementById('error');
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    let fnameerror = document.getElementById('fnameerror');
    let lnameerror = document.getElementById('lnameerror');
    let emailerror = document.getElementById("emailerror");
    let phoneerror = document.getElementById("phoneerror");
    let msgerror = document.getElementById("msgerror");

    fnameerror.innerHTML = "";
    lnameerror.innerHTML = "";
    emailerror.innerHTML = "";
    phoneerror.innerHTML = "";
    msgerror.innerHTML = "";

    let fnameInput = lnameInput = emailInput = phoneInput = messageInput = true;

    let errorArray = [];

    if (fname === "" || lname === "" || email === "" || phone === "") {
        error.innerHTML = "All fields are required";
        return false;
    } else {
        error.innerHTML = "";
    }

    if (!fname.match(/^[a-zA-Z\s]+$/)) {
        fnameInput = false;
        errorArray.push('fnameerror');
    }

    if (!lname.match(/^[a-zA-Z\s]+$/)) {
        lnameInput = false;
        errorArray.push('lnameerror');
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailInput = false;
        errorArray.push('emailerror');
    }
    if (!phone.match(/^[0][6|8|9][\d]{8}$/)) {
        phoneInput = false;
        errorArray.push('phoneerror');
    }
    if (message.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/)) {
        messageInput = false;
        errorArray.push('msgerror');
    }

    errorArray.forEach(eA => {
        if (eA === 'fnameerror') {
            fnameInput = false;
            fnameerror.innerHTML = "First name is  invalid";
        }
        if (eA === 'lnameerror') {
            lnameInput = false;
            lnameerror.innerHTML = "Last name is  invalid";
        }
        if (eA === 'emailerror') {
            emailInput = false;
            emailerror.innerHTML = "Email is invalid";
        }

        if (eA === 'phoneerror') {
            phoneInput = false;
            phoneerror.innerHTML = "Phone is invalid";
        }
        if (eA === 'msgerror') {
            messageInput = false;
            msgerror.innerHTML = "Request is invalid";
        }
    });

    if ((fnameInput && lnameInput && emailInput && phoneInput && messageInput) === true) {
        return true;
    } else {
        return false;
    }
}

