const url = 'https://raw.githubusercontent.com/ReikaMoss/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

fetch( url ).then( r => r.json() )
    .then( data => console.dir( data ) )
    .catch( e => console.error( 'Something went wrong' ) );


/*window.sedes = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderInfo(data);
    })

*/}
