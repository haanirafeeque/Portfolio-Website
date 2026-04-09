function validateForm()
{
    a=document.getElementById("name").value;
    b=document.getElementById("email").value;
    c=document.getElementById("phone").value;   
    if (a=="" || b=="" || c=="")
    {
        alert("Complete the required information before submiting!")
    }
}