// your code here
function changeurl()
	{
		let p1=document.getElementById("name").value;
		let p2=document.getElementById("year").value;
		let p3=document.getElementById("url").innerHTML;
		if(document.getElementById("name").value && p2==""){
			document.getElementById("url").innerHTML=document.getElementById("url").innerHTML+" "+"?"+" "+"name="+p1;
		}
			else if(document.getElementById("year").value && p1==""){
		document.getElementById("url").innerHTML=document.getElementById("url").innerHTML+" "+"?"+" "+"year="+p2;
		}
		else{
			document.getElementById("url").innerHTML=document.getElementById("url").innerHTML+" "+"?"+" "+" "+"name="+" "+p1+" "+"&"+" "+"year="+p2;
		}
	}