# React CV Application

Check it out here: https://stupendous-chaja-6cae5c.netlify.app

This repository contains the code for a CV generator application, powered by React and Vite. It was done as part of The Odin Project's React curriculum. The user inputs information relating to themselves in the form of contact info, education history, and work experience. In addition, the user can add an extra section to detail more about themselves if they deem it necessary. When finished, the user can print or download their CV as a fully functional PDF (depending on browser print support).

The focus in this project is to divide the functionality between necessary components. Each section that receives or displays the user's information is a singular component. The main state is held within the CV App file, which also contains the primary structure of the application. When the component renders, the data and the update functions are passed through to the necessary components, which keeps the data organized and restricted to the places that it is needed.

In the first two input sections, the display will re-render as the user types, letting them see their changes in real-time. The other components do not follow this logic, as there is a possibility that the user could add/edit/remove multiple pieces of information from any of the remaining sections. In essence, the user can only change their information in the remaining sections if they submit it first.

The general look for the project was meant to be simple and clean, so I opted for a dark blue color to compliment the black on the CV itself. There are no real animations, just some highlights on hover and the download button shrinking 10% on click. The spacing was fairly consistent throughout as I used rem units for margin and padding. The preview itself is a fixed size of 600px by 862.5px, which is the ratio of a standard sized piece of paper (8.5 x 11).