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
  - [Tailwind CSS](https://tailwindcss.com/) & [MUI](https://mui.com/)
  - [Github Pages](https://pages.github.com/)

  ### Packages
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [axios](https://axios-http.com/docs/intro)
  - [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)
  - [react-confetti](https://www.npmjs.com/package/react-confetti)

## Getting Started

The demo live site is hoste on Github Pages [here](https://skydodle.github.io/fetch-pups/).
1. To get started you will need to enter a name and an email at the Login page.
2. Once you log in you can start searching thru the database.
   - The default filters are with breeds American Staffordshire Terrier & Yorkshire Terrier. You can take out those breeds from the filter to view all dogs, or add new breeds to the filter.
   - The default sort is by breed alphbatically ascending, click on Sort button to sort by descending.
4. You can favorite dogs that you liked, they will be kept at the favorites list on top search tool bar.
5. Once you have 1 or more favorites, click on the Match button and a dog match will be generated from your favorited list.

  ### Prerequisites

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

List the main features of your application.

- Search by zip code 🔍 : takes up to 100 zip codes and show all dogs that match the zip codes.
- Search by filters 🔍 : breed, age range (set minimum & maximum).
- Favorites list 💟 : you can save each dog you like to your personal favorites list, this list is also persisted with your device so that you can continue to access & modify it on your next login.
- Match Generator 🐕 : one perfect match dog will be generated from your favorites list.

## Tests

To run tests:
```bash
npm test
```


