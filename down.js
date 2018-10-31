$("#btnExport").click(function (e) {
    $(this).attr({
        'download': "download.xls",
            'href': 'data:application/csv;charset=utf-8,' + encodeURIComponent( $('#dvData').html())
    })
});
