function PluginSessionTimeout(){
  this.active = false;
  this.check = function(){
    if(!this.active){
      return null;
    }
    /**
     * Make ajax call to check if user is client.
     */
    $.getJSON( "/session_timeout/check", function( data ) {
      console.log(data.client);
      if(data.client){
        $('#modal_session_timeout').modal('hide');
      }else{
        $('#modal_session_timeout').modal('show');
      }
    });      
    return null;
  }
  this.modal_visible = function(){
    /**
     * Check if modal is visible.
     */
    return $('#modal_session_timeout').hasClass('show');
  }
}
var PluginSessionTimeout = new PluginSessionTimeout();
setInterval(function(){ PluginSessionTimeout.check(); }, 10000);
