# daily-schedule

Ok so here is what I got, I moved the data-number attr into the div tag with the class of time, you can see below
<!-- 9AM Timeblock  -->
    <div class="row">
      <div class="col-sm-2" class="">
        <div id="time1" class="col-2 border text-center time" data-number="9">9AM</div>
      </div>
        <div class="col-sm-8">
          <textarea class="textarea" ></textarea>
        </div>
        <div class="col-sm-2">
        <button class="btn" type="button">Save </button>
      </div>
    </div>
10:18
then using jquery you can do this
$('.time').each(function(){
      var blockHour = parseInt($(this).attr('data-number'));
    })
10:19
loop through all of the tags that have the .time attr and then save the data-number as a variable and convert it into an interger