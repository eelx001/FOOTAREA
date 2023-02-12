const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9cae026bbdmsh4e383cba949a930p15f892jsn2d136318cb43',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};
fetch('https://football98.p.rapidapi.com/botola/results', options).then( Response => {return Response.json()}).then(data=>{

	
	
	function cool(data){
    
    

		for (let i = 0; i < data.length; i++){
			
			
			console.log(data[0])
			
			
			
			var table = document.getElementById("ty")
			
			
			
			var row = `
			
			<div class="col-md-4 team team-left">
                <h3 class="team-name"><img src="${data[i].awayLogo}" width="28%"></h3>
                <h1 class="team-score">${data[i]}</h1>
              </div>
			  	
              <div class="col-md-2 d-flex align-items-center justify-content-center">
			  <center style="color:black;background-color:red;border:0px;border-radius:5px;">Live</center>
			  	
		
                <h4 class="sus">VS</h4>
              </div>
              <div class="col-md-5 team team-right">
                <h3 class="team-name"><img src="${data.Matchday_13[i].homeLogo}" width="22%"></h3>
                <h1 class="team-score">${data[i]}</h1>
              </div>
				
					`
		
		
			table.innerHTML += row
		}
		}   
	  cool(data);
	





            })
            
            