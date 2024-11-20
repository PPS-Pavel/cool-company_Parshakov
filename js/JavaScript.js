function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[\p{Script=Cyrillic}]{2,15}$/u;

    if (regex.test(first)) { 
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Правильный ввод данных";
        return true;
    } else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, введите от 2 до 15 символов";
        return false;
    }
}

function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[\p{Script=Cyrillic}]{2,20}$/u;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Правильный ввод данных";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Пожалуйста, введите от 2 до 20 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^[87]\d{10}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Правильный ввод данных";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Телефон должен быть в формате: 7XXXXXXXXXX";
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Правильный ввод данных";
        return true;
    } else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Введите корректный адрес электронной почты";
        return false;
    }
}

function checkProduct() {
    var product = document.getElementById("product").value;
    if (product) {
        document.getElementById("product_Check").style.color = "green";
        document.getElementById("product_Check").innerHTML = "Товар выбран!";
        return true;
    } else {
        document.getElementById("product_Check").style.color = "red";
        document.getElementById("product_Check").innerHTML = "Пожалуйста, выберите товар";
        return false;
    }
}

function checkPayment() {
    var payment = document.getElementById("payment").value;
    if (payment) {
        document.getElementById("payment_Check").style.color = "green";
        document.getElementById("payment_Check").innerHTML = "Способ оплаты выбран!";
        return true;
    } else {
        document.getElementById("payment_Check").style.color = "red";
        document.getElementById("payment_Check").innerHTML = "Пожалуйста, способ оплаты";
        return false;
    }
}

function openProductModal() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "flex";
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "none";
}

function selectProduct(productName) {
    document.getElementById("product").value = productName;
    document.getElementById("product_Check").style.color = "green";
    document.getElementById("product_Check").innerHTML = "Товар выбран: " + productName;
    closeProductModal();
}

function outputData() {
    if (checkFirst() && checkLast() && checkPhone() && checkEmail() && checkProduct() && checkPayment()) {
        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var product = document.getElementById("product").value;
        var payment = document.getElementById("payment").value;

        var summaryContent = `<p>Здравствуйте, ${last} ${first}! Ваш заказ успешно отправлен.</p>
            <p>Телефон: ${phone}</p> <p>E-mail: ${email}</p> <p>Выбранный товар: ${product}</p> <p>Способ оплаты: ${payment}</p> `;

        document.getElementById("summary").innerHTML = summaryContent;
        const modal = document.getElementById("summary-modal");
        modal.style.display = "flex";
    } else {
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля корректно.<br>";
        const modal = document.getElementById("summary-modal");
        modal.style.display = "flex";
    }
}


function closeModal() {
    const modal = document.getElementById("summary-modal");
    modal.style.display = "none";
}


const blocks = document.querySelectorAll('.block1, .block2, .block3');

blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.style.transform = 'scale(1.1)';
        block.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    block.addEventListener('mouseout', () => {
        block.style.transform = 'scale(1)';
        block.style.boxShadow = 'none';
    });
});

window.onload = function() {
    var img = document.querySelector(".img1");

    function toggleVisibility() {
        if (img.style.opacity === "0") {
            img.style.opacity = "1";
        } else {
            img.style.opacity = "0"; 
        }
    }

    setInterval(toggleVisibility, 2000);
};