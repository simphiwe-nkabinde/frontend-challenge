
# Project Structure

The single Home page is divided into these main sectional components:
- Header
- HeroSection
- ServicesSection
- CasesSection
- IndustriesSection
- Footer
I created folders for each component. Each component's `jsx` and `scss` styling file component in their respective folder.

List data is stored in the  `scr/data` folder in corresponding `js` files. The data is imported into the relevant component file.

## Styling
I am mostly using bootstrap classes to style the components and elements.
When custom styling is required, I created a SCSS file per component. Bootstrap is included/imported indirectly through the` index.scss` file. I used both custom declarations and where effective, I  extended bootstrap's classes using sass. 

What I found very useful and effective was to use bootstrap's media query mixin. This ensures consistency with bootstrap's screen-size breakpoint values, instead of writing my own custom media queries.

Using bootstrap's variables, I modified bootstrap's primary theme colour and font-family to custom values

I created custom styling for the Industries section and the footer section. Bootstrap's grid system and flex-box classes were not effective in dynamically structuring both the mobile and desktop views for the component. I used the css grid system with media queries to set up the styling for both mobile and desktop in accordance with the design.

## Case Studies Slider
I created a custom scroll slider for the case study section. Bootstrap's carousel component was not effective in doing this as the slider needed to scroll left and right with the contents hidden as they overflow to either side. 
I implemented the scroll function by manipulating the DOM Element `scrollLeft` property of the Slider wrapper element.