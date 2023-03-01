const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df56831299mshed6ae27403e381ap10f431jsn5185e8eada5e',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
		
	}
};
fetch('https://football98.p.rapidapi.com/premierleague/table', options).then( Response => {return Response.json()}).then(data=>{

	
	
	function cool(data){
    
    

		for (let i = 0; i < data.length; i++){
			
			
			console.log(data)
			
			
			
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
			
			
			console.log(data)
			
			
			
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
			
			
			console.log(data)
			
			
			
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
					
					
					console.log(data)
					
					
					
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
					
					
					console.log(data)
					
					
					
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



		fetch('https://football98.p.rapidapi.com/botola/results', options).then( Response => {return Response.json()}).then(data=>{

	
	
			function cool(data){
			
			
		
				for (let i = 0; i < data.length; i++){
					
					
					console.log(data)
					
					
					
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





			const leagues = document.querySelectorAll('.leagues');
			const drops = document.querySelectorAll('.drop');
			let index = 0;
			
			// Adding opacity to first drop on first time
			
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
			
			
			
			