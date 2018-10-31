google.load('visualization', '1', {
    packages: ['dataTable']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1qx5PQ1WM0CbMVjEkOD0h8mFx7vNTbZuAoeVjOU63K1Q&output=html&usp=sharing');
    query.setQuery('SELECT A, C,D,E,F,G,H');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
