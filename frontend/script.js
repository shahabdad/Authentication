const registerForm = document.getElementById('registerForm'); 
const otpForm = document.getElementById('otpForm');
const otpInput = docuement.getElementById('optInput'); 
const messageDiv = document.getElementById('message'); 

let  registeredEmail = ' '; 

function   showMessage(msg,type = 'succcess')   { 
    messageDiv. textContent = msg; 
    messageDiv.className = `alert alert-${type}`; 
    messageDiv.classList.remove('d-none');
    }

    registerForm.addEventListener('submit', async(e) => { 
        e.preventDefault(); 
        const formData = new FormData(registerForm);
        const data  = object.fromEntries(formData.entries());
        try  {
            const res = await fetch('http://localhost:5000/api/auth/register',{ 
                method: 'POST',  
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            });

            const result = await res.json();
            if (res.ok) { 
                showMessage(result.message); 
                registeredEmail   = data.email; 
                otpForm.classList.remove('d-none'); 
            }  else { 
                showMessage(result.message || result.error, 'danger'); 
            }  
        } catch (error) { 
            showMessage('Network error ','danger'); 

        }
     });


 otpForm.addEventListener('submit', async(e) => {
    e.preventDefault(); 
     
    try {
        const res =  await fetch ('http://localhost:5000/api/auth/verify-otp',{ 
            method:'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ email:registerEmail, otp: otpInput.value})
        }); 
        
        const   result =  await  res.json();
        if(res.ok) {
            showMessage(result.message || result.error,'danger');
        }
    } catch (error) { 
        showMessage('Network error', 'danger');

    }
 });