import Popper from "popper.js";

require("bootstrap");

/*
A small exercise:
1. Create a class to access the "Dicebar Avatars API": https://avatars.dicebear.com/
2. Create a small website with a button to generate 3 random avatars each time the button is clicked or the page is reloaded (edited)
Getting the "uuid" package up and running:
1. Run `npm install uuid`
2. Load it in your JavaScript file (for example index.js): `const uuid = require("uuid/v4");`
You can call it then like this:
```uuid();```
*/

// [ X ] Create a button and an empty div for the coming images.
// [ X ] Install and use uuid.
// [ X ] Create the class for the Api.

("use strict");

class AvatarApi {
  // Setting up the properties, we need in our class
  constructor() {
    this.apiUrl = "https://avatars.dicebear.com/v2";
    this.genderEndpoint = {
      female: "/female",
      male: "/male",
      identicon: "/identicon"
    };
    this.codeEndpoint = "/:seed.svg";

    // Registering the form events
    this.registerEvents();
  }

  registerEvents() {
    // Get the needed elements
    const button = document.querySelector(".btn");

    button.addEventListener("click", e => {
      console.log(e.target);

      const urls = this.getAvatars();

      // Update the div element to have the new text inside
      document.querySelector("#avatars").innerHTML = `
      <img src="${urls[0]}" alt="Avatar" width="30%">
        <img src="${urls[1]}" alt="Avatar" width="30%">
        <img src="${urls[2]}" alt="Avatar" width="30%">`;
    });
  }

  getAvatars() {
    const url1 = `${this.apiUrl}${this.genderEndpoint.female}${this.getURL()}`;
    const url2 = `${this.apiUrl}${
      this.genderEndpoint.identicon
    }${this.getURL()}`;
    const url3 = `${this.apiUrl}${this.genderEndpoint.male}${this.getURL()}`;

    console.log("get data", url1, url2, url3);

    return [url1, url2, url3];
  }

  getURL() {
    const uuid = require("uuid/v4");
    const firstEndpoint = this.codeEndpoint.replace(":seed", uuid());

    return firstEndpoint;
  }
}

const avatarApi = new AvatarApi();
console.log(avatarApi);
