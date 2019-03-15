"use strict";
/*ToDo Persistant App */
$(() => {
  const BASE_ID = 'appgJxJ0YHiF5s7Op'; // TODO Put your Base ID here 
  const Airtable = {
    API_KEY: 'keyxWnBmXiUhlaA4K',
    API: `https://api.airtable.com/v0/${BASE_ID}`,
  };

$.get({
  headers: {
    authorization: `Bearer ${Airtable.API_KEY}`
  },
  url: `${Airtable.API}/To%20Do`,
}).fail(()=>{
  console.error("ERRORRRR!!!");
}).done((response)=>{  // response argument === the return of the get function
  console.log(response);
  console.log("HUZZAH!");
});

    // Start your $.get here
    // on fail, console.error out the error you recieve
    // on done, log out each individual response

  function submit() {
    console.log($('#toDoNameInput').val());
    console.log($('#toDoNotesInput').val());
    console.log($('#toDoDoneSelect').val());

    $.post({
      headers: {
        authorization: `Bearer ${Airtable.API_KEY}`
      },
      url: `${Airtable.API}/To%20Do`,
      data: {
        "fields":{
          "Name": $("#toDoNameInput").val(),
          "Notes": $("#toDoNotesInput").val(),
          "Done": $("#toDoDoneSelect option:selected").val()
        }
      }
    }).fail(()=>{
      console.error("ERRrr.r...r...");
    }).done((postresult)=>{
      console.log(postresult);
      console.log("Huzzah AGAIN!");
    });
    // Start your $.post here
      // on fail, console.error out the error you recieve
      // on done, log out the response
  }
  
  $('#btnSubmit').on('click', submit);
});