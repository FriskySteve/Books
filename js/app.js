/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
   console.log('DOM is OK');
   $('button').on('click', function(){
        $.get('http://date.jsontest.com/', function(json){
            console.log(json);
            var czas = $('<p><b>Czas:</b> '+json.time+'</p>');
            var timestamp = $('<p><b>Timestamp:</b> '+json.milliseconds_since_epoch+'</p>');
            var data = $('<p><b>Data:</b> '+json.date+'</p>');

            $('div#json').empty();
            $('div#json').prepend(czas);
            $('div#json').prepend(timestamp);
            $('div#json').prepend(data);
       
       
           
       });
   });
   // to samo co $.get
//   $.ajax({
//      url: 'http://date.jsontest.com/',
//      data: {},
//      type: 'GET',
//      dataType: 'json',
//      success: function (json){
//        console.log('sukces!', json);  
//      },
//      error: function(xhr, status, error){
//          console.log('blad', error);
//      },
//      complete: function (xhr, status){
//          console.log('wykonano zapytanie', xhr);
//      }
//   });
});