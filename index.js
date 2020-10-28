function addTask() {
    let val = $("#task-input").val();
    if(!val) {
        console.log("Input empty!");
    } else {
        //function to create task...
        val.trim();
        $("#current-tasks").append("<p>" + val + "</p>");
    }
}