$( "#subbed" ).accordion({
	collapsible : true,
	heightStyle: "content"
});
$("#notSubbed").accordion({
	collapsible : true,
	heightStyle: "content"
});

/*TODOS: 

make and maintain a JSON object that's 
specific to the user that would hold all info for the 
lists that a given user is subscribed to. this can be as 
simple as a listing of some ID of the lists

a JSON that would have the full list of 
all lists, with their ID + name + description. May choose
to populate dynamically the lists, instead of hardcoding.

enable dragging from one list to the other.

sorting by different categories.

search feature.
*/