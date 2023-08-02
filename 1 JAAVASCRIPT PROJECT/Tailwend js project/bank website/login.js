//step 1 clicked even hensiler width the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    
    // step 2 get the Email address inside the emil address
    // always remember to use .value to get text from an input field
    const emailFild = document.getElementById('user-email');
      const email = emailFild.value;
    //   step 3 get the Password inside the password filed
      const passwordlFild = document.getElementById('user-password');
      const password =  passwordlFild.value;

    //  step 4 verify email & password
      if(email === 'abdullah@gmail.com' && password ==='abdullah.123'){
        window.location.href = "bank.html";
      }else{
        console.log('invalid');
      }


});