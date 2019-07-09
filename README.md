# Labs Project
### High Points
* Single page app leveraging the [Open Brewery API](https://www.openbrewerydb.org/) to pull data in
* React app built with the Parcel bundler
	* Written with functional components leveraging the new-ish React Hooks API
		* Extracted all the Brewery fetching logic into a custom hook
* Using SCSS for styling
	* Using Materialize for a few styles (selects, buttons)
		* Ended up extracting the colors I was using from Materialize due to specificity issues
* Using Ramda for some light data manipulation
* Embedded Google Maps for brewery entries that have Lat/Long data
* Deployed to S3 via a Circle CI workflow