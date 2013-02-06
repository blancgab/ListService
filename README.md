ListService
===========

Devfest 2013

Daniel Newman '15
Ben Caine '15
Polina Viro '15
Ved Tanavde '15
Gabriel Blanco '15

Columbia Mailman Important URLS's:
-https://lists.columbia.edu/mailman/listinfo
--list of clubs using mailman
-https://www1.columbia.edu/sec-cgi-bin/samurai/maillist?mode=mymailmanlists&ticketid=yjtFkRJwpsywdsslS9SzBmXjhQs1QfDz4j44KPQ
--mailman login for students

FRONTEND TODOs:

- [ ] make and maintain a JSON object that's 
specific to the user that would hold all info for the 
lists that a given user is subscribed to. this can be as 
simple as a listing of some ID of the lists.

- [ ] a JSON that would have the full list of 
all lists, with their ID + name + description. May choose
to populate dynamically the lists, instead of hardcoding.

- [x] enable dragging from one list to the other

- [ ] update the user JSON with this dragging

- [ ] alphabetical sort within categories 

- [ ] sorting by different categories.

- [ ] search feature.


BACKEND TODOs:

DATABASE CLASS

-   Stores dictionary of users and dictionary of clubs
with ability to add and remove from each.


USERS

-   Add users to database of accounts upon registering
(include name, email, password list of subscriptions).
-   Update "subscriptions" list of a user when user subscribes/unsubscribes,
AND send info between our server and Mailman to actually accomplish
the transaction (or look into how to integrate our code with Mailman API)


SUBSCRIPTIONS

-   To be contained in a user's list of subscriptions, with "PENDING" boolean,
and with the neccessary link to unsubscribe


CLUBS

-Store the name, blurb, subscribe link, subscribers, category
