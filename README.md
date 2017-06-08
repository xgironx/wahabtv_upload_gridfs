# wahabtv_upload_gridfs
wahabtv
Goal: Build a webapp/website the Raspberry Pis running on TVs can poll for updates to their loop using REST

The webapp must:

Have a management
front-end accessible via the web (AWS) for an admin to login to and use to control what’s displayed on the TV so The front end must:§
Have a login/password for one user, the Admin. No other users necessary.§
Allow the admin to upload .mp4 files to the webapp and store them in the database.§
Permit no more than 10 file uploads at once, with files no greater than 200MB each (is that reasonable?).§
Allow the admin to select the order in which the files are played one after another in the loop (first upload is the first one played, second is the next, and so on)§
Generate a JSON config based on what is input that can be
read/parsed by the Pis. This will likely be just
filenames, delay, and URLs to the files themselves. This
config will be available via REST for the HTTP GET the Pis will issue looking for a config.
Use TCP port 443 or 80
Use RESTful protocol and practices. E.g. Once the webapp is configured, issuing a HTTP GET for http:///control/config returns JSON for the configuration that was set up by the admin.o
It would be excellent to add an authentication token to this so the Raspberry PIs can get to it and no one else can.
Use a database to store the uploads. Anything is fine.
Only permit downloading if the correct authentication token is presented.
Run on AWS and any other Amazon services you need.
Support multiple Raspberry Pis talking to it to
obtain the same JSON config and files (so
two authentication tokens).
If the webapp is running but nothing config’d yet, the
webapp must respond to any Pi agents performing a GET with a response of some kind saying “nope, nothing yet”.
There will be a corresponding agent we can write in
Python to run on the Raspberry Pi that can do the
authentication,
file downloading, and
playing.
Suggestions:

start with the webapp/database and
see if you can simply make a webpage that lets you upload files and then
generates a JSON config you can read via URL with the HTTP GET like above.
Then add the authentication pieces (login & auth tokens) and then you’re almost done.
