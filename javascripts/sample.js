function emailValidation() {
  const form = document.getElementById('form');
  const alert = document.getElementsByClassName("alert");
  const element = document.createElement('p');
  form.addEventListener('input', e => {
    e.preventDefault();
    var emailCF = document.getElementById("email_confirm");
    if (emailCF.value !== "") {
      if(form.email.value !== form.email_confirm.value && alert.length == 0) {
        
        element.innerText = "Eメールが一致しません";
        element.classList.add("alert");
        emailCF.classList.add("difference")

        const content = document.getElementsByClassName("contact_content");
        const tent = content[0];  

        tent.parentNode.insertBefore(element, tent);  // 親ノードの子要素として挿入
      } else if (form.email.value == form.email_confirm.value && alert.length >= 1) {
        element.parentNode.removeChild(element);
        emailCF.classList.remove("difference")
      }
    };
  });
};

window.onload = emailValidation;