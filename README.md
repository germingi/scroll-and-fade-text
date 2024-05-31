# scroll-and-fade-text
Vue3 component which repeatedly scrolls and fades text.

[example.webm](https://github.com/gsproston/scroll-and-fade-text/assets/22685193/783b7bf5-f950-419b-a12d-6d770af03274)

## Usage 
1. Install the package:
   ```
   npm install scroll-and-fade-text
   ```
1. Import the component:
    ```js
    import ScrollAndFadeText from "scroll-and-fade-text";
    import "scroll-and-fade-text/style.css";
    ```
1. Use the component:
    ```vue
    <ScrollAndFadeText
      text="a really long string that is repeatedly scrolling and fading"
    />
    ```
1. Configure the animation timings (optional):
   ```vue
   <ScrollAndFadeText
      text="a really long string that is repeatedly scrolling and fading"
      :scroll-speed-px-per-s="100"
      :visible-wait-time-ms="1000"
      :invisible-wait-time-ms="1000"
      :fade-time-ms="1000"
    />
   ```

## Demo

To see the component in action without installing it, you can use this repo! Here's what you need to do:
1. Clone this repo using `git clone`.
1. Change directory to the newly cloned repo.
1. Install the required packages with `npm install`.
1. Build the component with `npm run build`.
1. Check out the component in the browser of your choice! 😎
