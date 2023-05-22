	let selectElement=document.getElementsByTagName("strong");

function highlight() {
    //Write your code here
	let selectElement=document.getElementsByTagName("strong");
	for(let i=0;i<selectElement.length;i++)
		{
			selectElement[i].style.color="green";
		}


}


function return_normal() {
    //Write your code here
for(let i=0;i<selectElement.length;i++)
		{
			selectElement[i].style.color="black";
		}
    
}
