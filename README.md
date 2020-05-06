**Example**

https://codepen.io/mickyholbrook/pen/GRpQpjB

1.Markup. Create the root element with any selector, put inside the container element and your images:

      <div class="my-gallery">
        <div>
          <img src="assets/img/img1.jpg">
          <img src="assets/img/img2.jpg">
          <img src="assets/img/img3.jpg">
          <img src="assets/img/img4.jpg">
        </div>
      </div>
      
2.Add main styles im HEAD tag:

      <link rel="stylesheet" href="assets/css/simple-gallery.css">
 
3.Add main Javascript code in the end of BODY tag:

      <script src="assets/js/simple-gallery.js"></script>      
      
4.Initialization. Init gallery by specifying the root selector:

      <script>

        document.addEventListener('DOMContentLoaded', function() {
          new SimpleGallery({
            el: document.querySelector('.my-gallery')
          })
        })

      </script>     
