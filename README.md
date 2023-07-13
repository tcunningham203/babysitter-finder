# CubCare

## Description
CubCare is a childcare website where parents can match with babysitters (based on a questionaire) and can select babysitters to care for their children. This app is designed for both parents and babysitters to benefit, where parents can gain the time off that they have needed away from their kids, while babysitters can earn an income by babysitting their children.  This app is targeted to parents and babysitters living inside the borough of Manhattan in NYC.  

<h1 align="center">
    <a href="LINK HERE" target="_blank">
     Deployed Application
    </a>
    <br>

</h1>

## Table of Contents
- [User Story](#user-story)
- [Visual](#visual)
- [Technologies](#technologies)
- [Installing](#installing)
- [Application Usage and Features](#application-usage-and-features)
- [Credits](#credits)
- [Contributors](#contributors) 

# User story: 

AS A parent living in Manhattan,

I WANT to find the right babysitter that matches my qualifications and can babysit my child/children,

SO THAT my children can still receive proper care while I prioritize other needs. 

AS A babysitter living in Manhattan,

I WANT to meet families who need help with child care,

SO THAT I can grow my business more easily. 


## Visual

Here are screenshots of the landing page, home page, and map page, respectively.

![AppScreenshot1](/client/public/images/screenshot1.png?raw=true "Screenshot of Deployed Application- Landing")

![AppScreenshot1](/client/public/images/screenshot2.png?raw=true "Screenshot of Deployed Application- Homepage")

![AppScreenshot1](/client/public/images/screenshot3.png?raw=true "Screenshot of Deployed Application- Map")

### Technologies 

- React
- Tailwind
- Flowbite React
- React Icons

- GraphQL
- JSW (Json Web Token)
- Apollo Server
- Dot Env
- Express
- Mongoose
- MongoDB
- BCrypt
- ESLint
- Concurrently
- Firebase (for picture uploads only)

### Installing

1. Clone this repo.
2. Navigate to repo folder.
3. From the command line, run npm i to install the packages listed above.
4. Run npm run develop
5. Open a new tab in your browser and navigate to http://localhost:3000

## Application Usage and Features:

This section will walk through the features of each page. 

### Landing Page:
The landing page displays a bit about the site. This section is hidden on mobile view, to better give the feeling of a mobile app. To the right, you have the option to sign up, or log in if you are an existing user. Use the button at the bottom to swap forms. When signing up, you have the option of choosing a babysitter account or a parent account. This cannot be changed once chosen, and each account type has different abilities, as you'll see below. 

### Home Page:
When you enter the site, you are first prompted to enter a location within the city. This will determine what area you'll see babysitters, and also who sees you if you are a babysitter. By confirming this, you are creating your profile officially and as a babysitter, you will appear on the front page immediately. You can edit the rest of the profile in the Edit Profile page, covered later.

As a parent, you can click the "mail" icon in a profile to bookmark that babysitter. The babysitter will then appear in the parent user's contacts, where they can keep track of babysitters theyve contacted. Additionally, the babysitter whose mail icon was hit gets that parent in their contacts.  

The home page will always display the current user's region's babysitters. It will do this whether you are a parent or a babysitter (good to see what your competition looks like.)

### Profile Page:
As a babysitter, preview what you look like for the public.

As a parent, preview what information you will send to babysitters when you contact them. 

### Edit Profile Page:
As a babysitter, edit a wide range of things on your profile like babysitting style, experience, rates, and more.

As a parent, edit what info you give to babysitters. Things like special preferences, contact info, family info, and more. 

Both user types can set their location here as well, which changes which babysitters appear on the home page.

### Contacts Page:
As a babysitter, view the parents that have contacted you.

As a parent, view the babysitters you have sent your profile to. 

### Map Page:
A map of Manhattan materializes into view. Select one of the areas on the map to create a button bearing its name. Click the button and watch the map fade away and reveal all the babysitters in that area. Can be used as a search if you want to look for babysitters outside of your home area. It can also just be used as a map for users who may be unfamilar with the city layout when choosing their home zone.

### Logout:
This will log out the current user. The log out also expires after a set time.

## Credits

- Educational resources like W3Schools, Stack Overflow, and ChatGPT were used to help our team better understand concepts and fine-tune our vision.
- The second commit titled "Starter Code and file structure from Mini Project" had the file structure taken from the mini project in Module 21 to act as a starting point. Most of the files say things like "insert code here", but some of them, like the package.json files, were taken directly. However, as the project went on, certain dependencies were added and removed to better suit our needs for this project.
- https://www.vecteezy.com/vector-art/137630-vector-of-manhattam-map Credit to this page for the manhattan svg. it was later working on in illustrator to change the colors and reduce it to single map. Then, the svg was converted to jsx for use in react.
- We used freepik and pexels for many of the stock photos used for the seeded babysitters.


<!-- ADD ADDITIONAL CREDITS HERE AS THE PROJECT GOES ON. -->

## Contributors 

- [Lauren Sullivan](https://github.com/lnsvn)

- [Tim Cunningham](https://github.com/tcunningham203)

- [Genci Odobashi](https://github.com/odobashigenci)

- [Rama Santayana](https://github.com/ramasantayana)





