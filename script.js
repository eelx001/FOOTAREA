const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '0261d08343msh41855b1773a50cbp13cb10jsn9bd86de4cc89',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
		
	}
};
fetch('https://football98.p.rapidapi.com/premierleague/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
	function cool(data){
    
    

		for (let i = 0; i < data.length; i++){
			
			
			
			
			
			var table = document.getElementById("tb")
			
			
			var row = `
			
            	<tr class="hov">
					<td style="font-size:15px;" border:1px white;>${data[i].Position}</td>
					<td><img src="${data[i].SquadLogo}"><p style="color:white;font-wheight:300;">${data[i].Name}</p></td>
					<td style="font-size:15px;">${data[i].Played}</td>
					<td style="font-size:15px;">${data[i]["Goal Difference"]}</td>	
					<td style="font-size:15px;">${data[i].Points}</td>
        		</tr>
			 
					`
		
		
			table.innerHTML += row
		}
		}   
	  cool(data);
	





            })
            
        
fetch('https://football98.p.rapidapi.com/laliga/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
	function cool(data){
    
    

		for (let i = 0; i < data.length; i++){
			
			
			
			var table = document.getElementById("ts")
			
			
			var row = `
			
            	<tr class="hov">
					<td style="font-size:15px;" border:1px white;>${data[i].Position}</td>
					<td><img src="${data[i].SquadLogo}"><p style="color:white;font-wheight:300;">${data[i].Name}</p></td>
					<td style="font-size:15px;">${data[i].Played}</td>
					<td style="font-size:15px;">${data[i]["Goal Difference"]}</td>	
					<td style="font-size:15px;">${data[i].Points}</td>
        		</tr>
			 
					`
		
		
			table.innerHTML += row
		}
		}   
	  cool(data);
	





            })


	fetch('https://football98.p.rapidapi.com/seriea/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
	function cool(data){
    
    

		for (let i = 0; i < data.length; i++){
			
			
			
			
			
			var table = document.getElementById("tit")
			
			
			var row = `
			
            	<tr class="hov">
					<td style="font-size:15px;" border:1px white;>${data[i].Position}</td>
					<td><img src="${data[i].SquadLogo}"><p style="color:white;font-wheight:300;">${data[i].Name}</p></td>
					<td style="font-size:15px;">${data[i].Played}</td>
					<td style="font-size:15px;">${data[i]["Goal Difference"]}</td>	
					<td style="font-size:15px;">${data[i].Points}</td>
        		</tr>
			 
					`
		
		
			table.innerHTML += row
		}
		}   
	  cool(data);
	

	  



            })



			fetch('https://football98.p.rapidapi.com/ligue1ubereats/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
			function cool(data){
			
			
		
				for (let i = 0; i < data.length; i++){
					
					
					
					
					
					var table = document.getElementById("tfr")
					
					
					var row = `
					
						<tr class="hov">
							<td style="font-size:15px;" border:1px white;>${data[i].Position}</td>
							<td><img src="${data[i].SquadLogo}"><p style="color:white;font-wheight:300;">${data[i].Name}</p></td>
							<td style="font-size:15px;">${data[i].Played}</td>
							<td style="font-size:15px;">${data[i]["Goal Difference"]}</td>	
							<td style="font-size:15px;">${data[i].Points}</td>
						</tr>
					 
							`
				
				
					table.innerHTML += row
				}
				}   
			  cool(data);
			
		
	
		
		
		
					})



	fetch('https://football98.p.rapidapi.com/eredivisie/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
			function cool(data){
			
			
		
				for (let i = 0; i < data.length; i++){
					
					
					
					
					
					var table = document.getElementById("tho")
					
					
					var row = `
					
						<tr class="hov">
							<td style="font-size:15px;" border:1px white;>${data[i].Position}</td>
							<td><img src="${data[i].SquadLogo}"><p style="color:white;font-wheight:300;">${data[i].Name}</p></td>
							<td style="font-size:15px;">${data[i].Played}</td>
							<td style="font-size:15px;">${data[i]["Goal Difference"]}</td>	
							<td style="font-size:15px;">${data[i].Points}</td>
						</tr>
					 
							`
				
				
					table.innerHTML += row
				}
				}   
			  cool(data);
			
		
					})


					const options4 = {
						method: 'GET',
						headers: {
							'X-RapidAPI-Key': '04dfc0fa29mshd62f5282542f24bp1d4da4jsn22906914470b',
							'X-RapidAPI-Host': 'football98.p.rapidapi.com'
						}
					};
					fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options4).then( Response => {return Response.json()}).then(data=>{

						function cool(data){
						
							
							console.log(data);
					
							for (let i = 0; i < data[0][" Matchday 27 "].length; i++){
								
								
								
								
								
								var table = document.getElementById("tablelive")
								
								
								var row = `
								
								
							  <tbody id="tmatch">
								<tr>
								  <td>
									<div class="matche">
									<div class="match-content">

										<div class="team team--home">
										  <div class="team-logo">
											<img src="${data[0][" Matchday 27 "][i].homeLogo}"/>
										  </div>
										  <div class="team-name">${data[0][" Matchday 27 "][i].homeTeam}</div>
										</div>
										<div class="match-details">
										  <div class="match-score">
											<span class="match-score-number"></span>
											<span class="match-score-divider"></span>
											<span class="match-score-number"></span>
										  </div>
										  <div class="match-time-lapsed">${data[0][" Matchday 27 "][i].MatchDay}</div>
										</div>
										<div class="team-away">
										  <div class="away-logo">
											<img src="${data[0][" Matchday 27 "][i].awayLogo}" /></div>
										</div>
										<div class="team-awayname">${data[0][" Matchday 27 "][i].awayTeam}</div>
									  </div>
									  </div>
								  </td>
								</tr>
							  </tbody>
								 <br>
								 <br>
										`
							
							
								table.innerHTML += row
							}
							}   
						  cool(data);
						
					
								})					
							



								







































								
			const leagues = document.querySelectorAll('.leagues');
			const drops = document.querySelectorAll('.drop');
			let index = 0;
			
			 
			
			drops[0].style.opacity='1'
			
			// positioning the leagues
			
			leagues.forEach((slide,index)=>{
			slide.style.left=`${index*100}%`
			});
			
			
			// move slide function
			
			const moveSlide = () =>{
			  leagues.forEach((slide)=>{
				slide.style.transform=`translateX(-${index*100}%)`;
			  });
			}
			
			// remove drops opacity 1 from all drops
			
			const removeDotsOpacity = () =>{
			  drops.forEach((drop)=>{
				drop.style.opacity='.2';
			  });
			}
			
			drops.forEach((drop,i)=>{
			  drop
			  .addEventListener("click",(e)=>{
				index=i;
				removeDotsOpacity();
				e.target.style.opacity='1'
				moveSlide();
			  })
			});
			
			
			
			