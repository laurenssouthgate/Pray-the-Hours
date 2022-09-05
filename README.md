# Pray-the-Hours
an app for the Orthodox Hours services

This app is designed to provide the user with the Hours services as laid out by the Orthodox church. Within these services there are sections that are repeated,
and there are also sections called the 'troparia' and 'kontakia' that vary depending on the day of the week, on Sundays there are also varations depending on which
of the eight tones is being used that week. Additionally there are troparia and konkatia that are unique each day of the year depending on the Saint celebrated on the 
day, and there are also movable feasts that occur on specific Sundays that are calculated in relation to Pascha (Easter). If one wanted to use books to read these
services accurately one would need to do a lot of preparation, own a lot of books, and do a lot of flicking between them. This app does all of this work, and puts
together these services without the user needing to do any thinking.

This is achieved using JSON databases that contain all of the troparia and kontakia, as well as the repeated prayers, these are then imported into the .js file using
AJAX, the Javascript then does all the work calculating the date and bringing up the right troparia and kontakia for the day. 
