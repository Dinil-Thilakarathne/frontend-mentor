# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

### Screenshot
## Desktop view
![](ss/desktop-view-1.png)
![](ss/desktop-view-2.png)

## Mobile view
![](ss/mobile-view.png)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid




### What I learned

Check email validation using JS :

```js
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
submitBtn.addEventListener('click', function() {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    errorMsg.innerText = "Please provide a valid email";
    errorIcon.style.display = "block";
  }
});
```

### Useful resources

### CSS Flexbox:

[CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)

### Media Queries:

- [CSS-Tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [W3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)

## Author

- Frontend Mentor - [@Dinil-Thilakarathne](https://www.frontendmentor.io/profile/Dinil-Thilakarathne)
- Instagram - [Dinil Thilakarathne](https://www.instagram.com/sona_code/)
- GitHub - [@Dinil-Thilakarathne](https://github.com/Dinil-Thilakarathne)
- Youtube - [@sonacode](https://www.youtube.com/@sonacode)