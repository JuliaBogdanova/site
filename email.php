<?php
  include "header.php";
?>
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center">Обратная связь</h3>
          </div>
          <div class="col-md-10">
            <form action="https://formspree.io/usivashutina1@gmail.com" method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" name="name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" name="_replyto">
              </div>
               <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" name="message"></textarea>
              </div>
              <input type="submit" class="btn btn-info btn-lg" value="Send">
            </form>
          </div>
        </div>
      </div>
    
       <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      
<?php
  include "footer.php";
?>

     