# Restaurant Reviews App—Stage 1

## Project Overview

For the **Restaurant Reviews, stage 1** project, I convert the static webpage provided to a mobile-ready web application. I took the static design that lacked accessibility and converted it to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for the user.

## Run the app

I used a simple HTTP server to serve up the site files on my local computer using Python. I used Python 3.x to spin up the server by running: `python -m http.server 8000` in the terminal. With my server running, I visited: `http://localhost:8000`.

## Dependencies

- This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/), to run its maps.
- I also imported fonts from [google-fonts](https://fonts.google.com/specimen/Markazi+Text?selection.family=Markazi+Text) to use them for the site's main header.

### Accessibility Guidelines

I tried my best to follow the **4 core principles** of the Web Content Accessibility Guidelines (WCAG):
Percievable: Making sure users can percieve content.
Operable: Users can use UI components and navigate the content.
Understandable: Users understand the content.
Robust: The content can be consumed by a wide variety of user agents and can in work with assistive technology.