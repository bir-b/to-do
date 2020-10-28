function addTask() {
    let val = $("#taskInput").val();
    if(!val) {
        console.log("Input empty!");
    } else {
        //function to create task...
        val.trim();
        $("#currentTasks").append("<p>" + val + "</p>");
    }
}