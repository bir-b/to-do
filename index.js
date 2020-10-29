let taskId = 0;

function addTask() {
    let input = $("#task-input").val();
    if(!input) {
        console.log("Input empty!");
    } else {
        //function to create task...
        input.trim();
        $("#current-tasks").append(createTask(input));

        // $("#current-tasks").append('<p');
    }
}

function createTask(input) {
    let s = `<p id="${taskId}">${input}</p>`;
    s = `<div class="task-box" onclick="switchStrike(this)">${s}</div>`;
    taskId++;
    return s;
}

function switchStrike(item) {
    if($(item).hasClass("strike")) {
        $(item).removeClass("strike")
    } else {
        $(item).addClass("strike");
    }

}

function hide(item) {
    $(item).hide();
}