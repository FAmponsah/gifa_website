function getStuff()
{
	document.querySelector('#member').onclick=talk;
}
function talk()
{
	alert('Welcome');
}
window.onload=getStuff;