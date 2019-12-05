

		function dadosDoPersonagem(id) {
			let url = 'https://swapi.co/api/people/' + id + '/';

			jQuery.getJSON( url, function( data ) {
				let personagem = data
				$('#nome').text(personagem.name);
				$('#nascimento').text('Birth year: ' + personagem.birth_year);
				$('#cabelo').text('Hair color: ' + personagem.hair_color);
				$('#tamanho').text('Height: ' + personagem.height);
				$('#peso').text('Mass: ' + personagem.mass);
				$('#cor_pele').text('Skin color: ' + personagem.skin_color);
				$('#cor_olho').text('Eye color: ' + personagem.eye_color);
				$('#genero').text('Gender: ' + personagem.gender);

	

			})

		}


		jQuery(document).ready(function (){

		});

	



		function img01 (){
			document.getElementById("trocarimg").src="luke2.jpg";
		}
		function img02 (){
			document.getElementById("trocarimg").src="darth-vader.jpg";
		}
		function img03 (){
			document.getElementById("trocarimg").src="C3PO.jpg";
		}
		function img04 (){
			document.getElementById("trocarimg").src="r2d2.jpg";
		}
		function img05 (){
			document.getElementById("trocarimg").src="obi.jpg";
		}
		function img06 (){
			document.getElementById("trocarimg").src="leia.jpg";
		}
		function img07 (){
			document.getElementById("trocarimg").src="Chewbacca.jpg";
		}
		function img11 (){
			document.getElementById("trocarimg").src="ani.jpeg";
		}
		function img04 (){
			document.getElementById("trocarimg").src="r2.jpg";
		}
		function img05 (){
			document.getElementById("trocarimg").src="obi.jpeg";
		}
		function img25 (){
			document.getElementById("trocarimg").src="lando.jpg";
		}
		function img21 (){
			document.getElementById("trocarimg").src="palpatine.jpg";
		}
		function img06 (){
			document.getElementById("trocarimg").src="leia.jpg";
		}
		function img07 (){
			document.getElementById("trocarimg").src="chewie.jpeg";
		}
		function img20 (){
			document.getElementById("trocarimg").src="yoda.jpeg";
		}
		function img85 (){
			document.getElementById("trocarimg").src="rey-2.png";
		}
		function img84 (){
			document.getElementById("trocarimg").src="finn.jpg";
		}
		function img86 (){
			document.getElementById("trocarimg").src="poe.jpeg";
		}


	







		function doSearch(e, form){
			e.preventDefault();
			let searchText = form.searchText.value;
			window.fetch(`https://swapi.co/api/people/?search=${encodeURIComponent(searchText)}`)
			.then((response) => response.json())
			.then(showResults)
			.catch((e) => { 
				console.log(JSON.stringify(e));
			})
		}

		function showResults(result) {
			document.getElementById('result-count').innerHTML = result.count + 
			(result.count === 1 ?
				' result' :
				' results');

			if ( result.count > 0 ) {
				$('#result-table').empty();
				fillTable(result.results); 
			}
		}




		function fillTable(results){
			const target = document.getElementById('result-table');
			const header = document.createElement('thead');
			const headerRow = document.createElement('tr');
			header.appendChild(headerRow);

			for( let key in results[0] ) {
				const headerCell = document.createElement('th');
				headerCell.innerText = key;
				headerRow.appendChild(headerCell);
			};
			target.appendChild(header);
			const body = document.createElement('tbody');
			results.forEach((result) => {
				const row = document.createElement('tr');
				for(let key in result){
					const cell = document.createElement('td');
					cell.innerText = result[key];
					row.appendChild(cell);
				}
				body.appendChild(row);
			});
			target.appendChild(body);
		}





