# 🐾 Fetch-Pups 

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Tests](#tests)


## Overview

`fetch-pups` is a web application to help dog lovers search through a database of sheltered dogs to find the perfect match for adoption.

![](https://media.giphy.com/media/2sXHaogN0rtyuN1j4t/giphy-downsized-large.gif)

  ### Tech Stack
  - [React](https://react.dev/) 
  - [Typescript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) & [MUI Components](https://mui.com/)
  - [Github Pages](https://pages.github.com/)

  ### Packages
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [axios](https://axios-http.com/docs/intro)
  - [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)
  - [react-confetti](https://www.npmjs.com/package/react-confetti)

## Getting Started

### Demo site login & usage
The demo live site is hosted on Github Pages [here](https://skydodle.github.io/fetch-pups/).
1. To get started at login page just enter **any name you'd like** and **any made-up email** (It can be made up as long as input is in correct email format).
2. Once you log in you can start searching thru the database.
   - The default filters are with breeds American Staffordshire Terrier & Yorkshire Terrier. You can delete those default breeds from the filter to view all breeds, or add new breeds to the filter.
   - The default sort is by breed alphabetically ascending, click on Sort button to switch to descending.
4. You can add dogs that you liked to favorites. Your personalized favorites can be access in the search tool bar aobve the search results.
5. Once you have 1 or more favorites, click on the Match button and a dog match will be generated from your favorited list.

  ### Development Prerequisites

  > [!IMPORTANT]<br>
  > This repository is mainly for showcasing my frontend project on the live site.
  > The API that I used to get data is a private API that may have usage limits and is not for public development.
  > Therefore, the API url is encrypted in my local env file and do not exist in this repository.
  > If you are really interested in building an app with it, DM me on LinkedIn.
  
  What things you need to install the software and how to install them:
  - A good IDE/ code editor such as [Visual Studio Code](https://code.visualstudio.com/download)
  - Have [Git](https://git-scm.com/downloads) installed on your device globally

## Installation

1. Clone the repo & install with npm
   ```bash
   git clone https://github.com/Skydodle/fetch-pups.git
   cd fetch-pups
   npm install
   ```
2. Start the development server
   ```bash
   npm start
   ```

## Features

List of main features:

- Search by zip code 🔍 : takes up to 100 zip codes and show all dogs that match the zip codes.
- Search by filters 🔍 : breed, age range (set minimum & maximum).
- Favorites list 💟 : you can save each dog you like to your personal favorites list, this list is also persisted with your device so that you can continue to access & modify it on your next login.
- Match Generator 🐕 : one perfect match dog will be generated from your favorites list.

## Tests

To run tests:
```bash
npm test
```


