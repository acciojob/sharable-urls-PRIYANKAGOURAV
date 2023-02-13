// your code here
function changeurl()
	{
		let p1=document.getElementById("name").value;
		let p2=document.getElementById("year").value;
		if(document.getElementById("name").value && p2==""){
			document.getElementById("url").innerHTML=" https://localhost:8080/"+" "+"name="+p1;
		}
			else if(document.getElementById("year").value && p1==""){
		document.getElementById("url").innerHTML=" https://localhost:8080/"+" "+"year="+p2;
		}
		else{
			document.getElementById("url").innerHTML=" https://localhost:8080/"+" "+" "+"name="+" "+p1+" "+"year="+p2;
		}
	}