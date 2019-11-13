function avenge()
{
    var button = document.getElementById("button");
    function popup()
	{
		var request = new XMLHttpRequest();
		var avenger = document.getElementById("searchbar").value;
		
		request.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200) 
        {
			switch(this.response)
			
			case document.getElementById('result').innerHTML;
				document.getElementById('result').innerHTML = "<p style=\"color:red;"> SUPERHERO NOT FOUND </p>
				break;
				
				default:
					document.getElementById('result').innerHTML=this.responseText;
            
        }
        
    }
    request.open('GET', "http://localhost:8080/superheroes.php?query=" + str, true);
    request.send();
}
}
window.onload = avenge;