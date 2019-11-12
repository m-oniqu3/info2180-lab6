function popup() {
	var request = new XMLHttpRequest();
   
    request.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)  
        {
            alert(this.responseText);
        }
		else
		{
			alert("An error occurred while displaying the list! ");
        }
    }
    request.open('GET', "http://localhost:8080/superheroes.php", true);
    request.send();
}