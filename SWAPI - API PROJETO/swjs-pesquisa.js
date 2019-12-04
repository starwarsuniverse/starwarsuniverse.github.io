

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

