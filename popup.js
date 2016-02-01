document.addEventListener('DOMContentLoaded', function() {
	var gifBoard = document.getElementById('gifBoard');
	var controlPanel = document.getElementById('hideButton');
	var gallery = document.getElementById('gallery');
    var gifSaveButton = document.getElementById('save_gif');
	var clearSaveButton = document.getElementById('clear_gif');
	var textarea = document.getElementById('gif_url');
	var arr = [];
	
	var check = localStorage["gifArray"];
	if(check != undefined)
	{
		var arr = JSON.parse(localStorage["gifArray"]); 
		if(arr.length > 0)
		{
			var lineCount = 0; var lineMax = 3;
			arr.forEach(function(item, i, arr) {
				      
					  var div = document.createElement('div');
					  //div.innerHTML = '<div class="img"><a target="_blank" href="'+item+'"><img src="'+item+'"width="300" height="200"></a></div>';
					  div.innerHTML = '<div class="img" style="width:150px; float:left;"><a target="_blank" href="'+item+'"><img src="'+item+'"width="150" height="150" data-clipboard-text="'+item+'"></a></div>';					  
					  gifBoard.appendChild(div);
					});
		}	
	}
	
	var imgs = document.querySelectorAll('img');
    var clipboard = new Clipboard(imgs);
	
    // onClick's logic below:
    gifSaveButton.addEventListener('click', function() {
        var theValue = textarea.value;
		
        // Check that there's some code there.
        if (!theValue) {alert("aaa");}
		else{
			 var div = document.createElement('div');
			 div.innerHTML = '<div class="img" style="width:150px; float:left;"><a target="_blank" href="'+theValue+'"><img src="'+theValue+'"width="150" height="150" data-clipboard-text="'+theValue+'"></a></div>';
			 gifBoard.appendChild(div);
			
			 arr.push(theValue);
			 localStorage["gifArray"] = JSON.stringify(arr);			 
		}
    });
	
	clearSaveButton.addEventListener('click', function() {
        localStorage.clear();
    });
	
	controlPanel.addEventListener('click', function() {	
		var navDiv = document.getElementById('navLine');
		if(navDiv.style.display == 'none' )
			navDiv.style.display = 'block';
		else
			navDiv.style.display = 'none';	
    });
	
	gallery.addEventListener('click', function() {	
		var navDiv = document.getElementById('gifBoard');
		if(navDiv.style.display == 'none' )
			navDiv.style.display = 'block';
		else
			navDiv.style.display = 'none';	
    });
});
