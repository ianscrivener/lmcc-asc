# LMCC-ASC

***A simple leaflet spatial data viewer, hosted on Github Pages with, data grabbed from APIs and Google Sheets***


## About
This mapping app has been built to assist the Lake Macquarie City Council Aquatic Services Committeee in visualising current and proposed aquatic infrastructure. 


## Design Goals

- Simple
- Extensible data offering
- Easy to maintain & exnhance
- Reusable

## Tech overview

 - host with Github Pages (backendless)
 - grab and process data locally with node.js 
 - use javascript libraries hosted on unpkg CDN
 - API keys in .env  files  


## Spatial Data
Most of the spatial data is comes from NSW Government OpenData (https://opendata.transport.nsw.gov.au/) - geojson via APIs. Some data comes from Google Sheets. (Sample ToDo). 

A variety of base map layers are offered: Open Street Map (OSM), various Google Map layers and a plain CartoDB base layer.

ETL; Spatial data is downloaded and processed using node.js. Data is committed to Github and server via Github Pages along with the browser app (bacekendless).



## Install
*ToDo*

Create .env file with your API credentials eg `OPENDATA_NSW_KEY=***`



## Processing spatial data locally using node.js

*ToDo*

## Tweaking the Map

*ToDo*

**Base Maps**

**Marker Styles**

**Map Bounding Box**

**What's my BBOX?**

You can figure that out here: https://norbertrenner.de/osm/bbox.html

