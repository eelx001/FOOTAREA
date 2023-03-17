
const options7 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df56831299mshed6ae27403e381ap10f431jsn5185e8eada5e',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};

fetch('https://football98.p.rapidapi.com/laliga/news', options7).then( Response => {return Response.json()}).then(data=>{
    
console.log(data[0]);


document.getElementById('inew').src = data[0].Image ;
document.getElementById('pnew').innerHTML = data[0].Title;
document.getElementById('newtime').innerHTML = data[0].PublisherDate ;
document.getElementById('seemo').href = data[0].NewsLink ;

document.getElementById('inew1').src = data[1].Image ;
document.getElementById('pnew1').innerHTML = data[1].Title;
document.getElementById('newtime1').innerHTML = data[1].PublisherDate ;
document.getElementById('seemo1').href = data[1].NewsLink ;

document.getElementById('inew2').src = data[2].Image ;
document.getElementById('pnew2').innerHTML = data[2].Title;
document.getElementById('newtime2').innerHTML = data[2].PublisherDate ;
document.getElementById('seemo2').href = data[2].NewsLink ;

document.getElementById('inew3').src = data[3].Image ;
document.getElementById('pnew3').innerHTML = data[3].Title;
document.getElementById('newtime3').innerHTML = data[3].PublisherDate ;
document.getElementById('seemo3').href = data[3].NewsLink ;

document.getElementById('inew4').src = data[4].Image ;
document.getElementById('pnew4').innerHTML = data[4].Title;
document.getElementById('newtime4').innerHTML = data[4].PublisherDate ;
document.getElementById('seemo4').href = data[4].NewsLink ;

  
})