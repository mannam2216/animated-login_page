// =====SHOW HIDDEN - PASSWORD===== //
const showHiddenPass = (loginPass,loginEye) => {
     const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);

     iconEye.addEventListener('click', () =>{
          //Changed password to text
          if (input.type === 'password') {
               //Switched to text
               input.type = 'text';
               //Icon changed
               iconEye.classList.remove('ri-eye-fill');
               iconEye.classList.add('ri-eye-off-fill');   
          }else{
               //Switched to text
               input.type = 'password';
               //Icon changed
               iconEye.classList.add('ri-eye-fill');
               iconEye.classList.remove('ri-eye-off-fill');   
          }
     })
}
 showHiddenPass('login-pass','login-eye');


