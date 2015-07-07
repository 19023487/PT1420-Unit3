function processForm(){
    
    var FisrtName;
    var LastName;
    var Address;
    var PhoneNumber;
    
    FirstName = document.getElementById("FirstName");
    LastName = document.getElementById("LastName");
    Address = document.getElementById("Address");
    PhoneNumber= document.getElementById("PhoneNumber");
    WebsiteComments= document.getElementById("WebsiteComments");
    
    content = document.getElementById("output")
    
    
	
	content.innerText = "My name is " + FirstName.value + " Last Name is " + LastName.value + " I reside at " + Address.value + " and my Phone Number is " + 
        PhoneNumber.value + " , " + WebsiteComments.value 

  

}