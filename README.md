## Website Performance Optimization 
- To optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques we have picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### About

####Part 1: Running the project
  - Clone the repository 
  - Run `gulp` from the root folder.
  - cd **dist/** 
  - Run the command `python -m SimpleHTTPServer 8080`

####Part 2: Optimize Frames per Second in pizza.html
  - Used will-change property to take pizza image in different layer.
  - Used requestanimationframe and set a variable tick to run animations in different frame.
  - Set up gulp to perform tasks to make a folder dist/
        - Minify Images
        - Minify CSS and JS
  - Optimize calculations by saving it to a variable outside the loop.
  - Optimizes pizza image creation loop to run till 24 only.
  - Compressed and scaled all images
  - Inline css manually before pageinsight check.
  - Remove pizza layout changes outside the loop for pizzacontainer. 

### Performance Evaluation

  * [60 fps](http://imgur.com/a/tqRJd)
  
  * [Google Page Insights](http://imgur.com/a/x6W2Z)
  
  
### References
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>


