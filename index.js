function addTask() {
    let val = $("#task-input").val();
    if(!val) {
        console.log("Input empty!");
    } else {
        //function to create task...
        val.trim();
        $("#current-tasks").append('<p onclick="hide(this)">' + val + '</p>');

        // $("#current-tasks").append('<p');
    }
}

function hide(item) {
    $(item).hide();
}