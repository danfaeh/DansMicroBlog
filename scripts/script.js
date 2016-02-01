window.onload = start;
var counter = 0;

  function start(){
    restoreLS();
    listenerPost();
    deletepost();
    deleteAllPosts();
  }

  function restoreLS(){
    if (localStorage.length > 0){
      $('#counter').html('Currently '+localStorage.length+' comment(s)');
      for (var key in localStorage){
        $('#list').prepend('<li id="'+key+'">'+localStorage[key]+'</li>');
      }
    }
    else{
      $('#counter').html('0 comments... Be the first!');
    }
  }

  function listenerPost(){
    $('#post').click(function(e){
      e.preventDefault();
        if ($('#comment').val() !== '') {
          var $node = $('#comment');
          var $comment = $('#comment').val();
            addNewComment($comment);
            $node.val('');
        }   
    });
  }

  function addNewComment(comment){
    addGracefully(comment);
      counter ++;
      $("#counter").html("Currently: "+counter+" comment(s)");
        localStorage.setItem(counter-1,comment);
  }
  
  function deletepost(){
    counter = localStorage.length;
    $('#list').on('click', 'li', function(e){
      removeGracefully(this);

      //removal updates counter
      counter --;
      $("#counter").html("Currently: "+counter+" comment(s)");

      //update removal in LS
      var y = e.target.id;
      localStorage.removeItem(y);
    });
  }

  function deleteAllPosts(){
    $('#clear').click(function(e){
      localStorage.clear();
      $('li').remove();
      $('#counter').html('0 comments... Be the first!');
      counter=0;
    });
  }

  function removeGracefully(self) {
      $(self).fadeOut(1500, function() {
          $(self).remove();
      });
  }

  function addGracefully(comment) {
    var string = '<li id="'+counter+'">'+comment+'</li>';
      $('#list').prepend(string);
      $('#'+counter).hide();

      $('#'+counter).fadeIn(1000, function() {
          $('#'+counter).show();
      });
  }






