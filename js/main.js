$( "#subbed" ).accordion({
	collapsible : true,
	heightStyle: "content",
	active : false
});
$("#notSubbed").accordion({
	collapsible : true,
	heightStyle: "content",
	active : false
});

$(document).ready(function() {
	// drag from not subscribed to subscribed
    $('#notSubbed h4').draggable({
    	appendTo : 'body',
    	helper: 'clone'
    });
    $('#subbed').droppable({ 
    	accept: ":not(.ui-sortable-helper)",
      	drop: function( event, ui ) {
        	$( this ).find( "#subbed").remove();
        	$( "<h4></h4>" ).text( ui.draggable.text() ).appendTo(this);
        	$("<div><p></p></div>").text(ui.draggable.next().text()).appendTo(this);
        	ui.draggable.next().remove();
        	ui.draggable.remove();
        	$(this).accordion('destroy').accordion({
        		collapsible : true,
        		heightStyle: "content",
        		active : false
        	});
        }
    });

    // drag from subscribed to not subscribed. maybe not?
    $('#subbed h4').draggable({
    	appendTo : 'body',
    	helper: 'clone'
    });
    $('#notSubbed').droppable({ 
    	accept: ":not(.ui-sortable-helper)",
      	drop: function( event, ui ) {
        	$( this ).find( "#notSubbed").remove();
        	$( "<h4></h4>" ).text( ui.draggable.text() ).appendTo(this);
        	$("<div><p></p></div>").text(ui.draggable.next().text()).appendTo(this);
        	ui.draggable.next().remove();
        	ui.draggable.remove();
        	$(this).accordion('destroy').accordion({
        		collapsible : true,
        		heightStyle: "content",
        		active : false
        	});
        }
    });
});
