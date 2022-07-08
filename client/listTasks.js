Template.listTasks.helpers({
    theTask(){
        return tododb.find({"trashBin": false});
    }

});

Template.listTasks.events({
    'click .js-trashIt'() {
        let taskId = this._id;
        tododb.update({ _id: TaskId}, {
            $set: {
                "trashBin": true
            }
        });
    }
});