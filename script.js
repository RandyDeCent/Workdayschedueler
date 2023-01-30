const currentDay = moment().format('MMMM Do YYYY, h:mm');
const container = $(".container")
const currentHour = moment().hours()
console.log(currentHour);

$("#currentDay").text(currentDay)

// Users save the event.
for (let i = 8; i < 18; i++) {
    let storageText = '';
    let localStorageKey = 'hour-' + i;
    console.log(localStorageKey);
    console.log(localStorage.getItem(localStorageKey));
    if (localStorage.getItem(localStorageKey)) {
     storageText = localStorage.getItem(localStorageKey)
    }
    let hourClass; 
    if(i < currentHour){
        hourClass = 'past'
    } else if(i === currentHour){
        hourClass = 'current-event'
    } else {
        hourClass = 'future-event'
    }
    // Past,current and future events. save
    if (i < 13) {
      
        container.append(
        <div id="hour-${i}" class="row time-block">
          <div class="col-md-1 hour">
        ${i}${i===12 ? "PM" : "AM"}
      </div>
      <textarea class="col-md-10 description ${hourClass}">${storageText}
      </textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button> 
    </div>
        ) 
    }
    else {
      
        container.append(
    <div id="hour-${i}" class="row time-block"> <div class="col-md-1 hour">
    ${i - 12}PM
  </div>

  <textarea class="col-md-10 description ${hourClass}">${storageText}
  </textarea>
  <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
</div>
    )

    }
}
const saveBtn = $(".saveBtn")


$('.saveBtn').on('click', function () {
    // get nearby values
    let value = $(this)
    
        .siblings('.description')
        .val();
  
    let time = $(this)
        .parent()
        .attr('id');

  
    // Save to localStorage.
    localStorage.setItem(time, value);
    
  document.querySelectorAll(".saveBtn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let textArea = btn.previousElementSibling;
    let hour = textArea.parentElement.id.split("-")[1];
    localStorage.setItem(hour, textArea.value);
  });
});
});
