


		function dadosDoFilme(id) {
			let url = 'https://swapi.co/api/films/' + id + '/';

			jQuery.getJSON( url, function( data ) {
				let personagem = data
				$('#titulo').text('Title: ' + personagem.title);
				$('#epsodio').text('Episode: ' + personagem.episode_id);
				$('#diretor').text('Director: ' + personagem.director);
				$('#lancamento').text('Release date:' + personagem.release_date);
				$('#produtor').text('Producer:' + personagem.producer);
				$('#abertura').text('Opening: ' + personagem.opening_crawl);



			})

		}


		jQuery(document).ready(function (){

		});


		function img01 (){
			document.getElementById("trocarimg").src="ep4.jpg";
		}
		function img02 (){
			document.getElementById("trocarimg").src="ep5.jpg";
		}
		function img03 (){
			document.getElementById("trocarimg").src="ep6.jpg";
		}
		function img04 (){
			document.getElementById("trocarimg").src="ep1.jpg";
		}
		function img05 (){
			document.getElementById("trocarimg").src="ep2.jpg";
		}
		function img06 (){
			document.getElementById("trocarimg").src="ep3.jpg";
		}
		function img07 (){
			document.getElementById("trocarimg").src="ep7.jpg";
		}







		function doSearch(e, form){
			e.preventDefault();
			let searchText = form.searchText.value;
			window.fetch(`https://swapi.co/api/films/?search=${encodeURIComponent(searchText)}`)
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

