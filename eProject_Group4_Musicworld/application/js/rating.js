
		function starmark(item)
		{
		   var count=item.id[0];
		   rating = count;
		   var subid=item.id.substring(1);
		   for(var i=0;i<5;i++)
		   {
		     if(i<count){
			   document.getElementById((i+1)+subid).style.color="yellow";
			 }
			 else{
			   document.getElementById((i+1)+subid).style.color="black";
			 }
		   
		   }
		   
		}
	     function showRating()
		 {
		   alert("Thank you for Rating");
		   
		 }