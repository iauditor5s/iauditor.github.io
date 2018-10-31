$('#Export').click(function () {
        var csvFormattedDataTable = google.visualization.dataTableToCsv(dataTable);
        var encodedUri = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvFormattedDataTable);
        this.href = encodedUri;
        this.download = 'table-data.csv';
        this.target = '_blank';
    });
