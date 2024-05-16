function graph_valid()

{

	var symbol=document.getElementById('symbol').value;

	if(symbol=='Enter Symbol'){

		document.getElementById('symbol').style.color='RED';

		document.getElementById('symbol').value='Enter Symbol';

		return false;

	} else {

	   return true;



	}

	

}

function change_color()

{

	document.getElementById('symbol').style.color='#666666'

}
