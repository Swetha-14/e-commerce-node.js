$(document).ready(function(){
    
    // Add Product
    $('form').on('submit', function(){
        var item = $('form input');
        var listitem = {item: item.val()};

        $.ajax({
            type:'POST',
            url: '/list',
            data: listitem,
            success: function(data){
                location.reload();
            }
        });
        return false;

    });

    // Delete Product
    $('th').on('click', function(){
        var item = $(this).text().replace(/ /g,"-");

        $.ajax({
            type:'DELETE',
            url: '/list/' + item,
            success: function(data){
                location.reload();
            }
        });
    });


    // Add to Cart
    $('#add').on('submit', function(){
        var item =  $('th').val();
        var listitem = {item: item};
        $.ajax({
            type:'POST',
            data: listitem,
            url: '/cart' + listitem,
            success: function(data){
                location.reload();
            }
        });
    });

});