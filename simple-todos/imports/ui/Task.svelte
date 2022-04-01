<style>
    button{height: 100%; padding: 0; width: 2vw; height: 1rem; border: none; background-color: transparent }
li{vertical-align: before-edge;}
</style>

<script>
    import { TasksCollection } from '../api/TasksCollection';
    export let task;
    const toggleChecked = () => {
        // Set the checked property to the opposite of its current value
        TasksCollection.update(task._id, {
            $set: { isChecked: !task.isChecked }
        });
    };
    const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<li>
    <input
            type="checkbox"
            readonly
            checked={!!task.isChecked}
            on:click={toggleChecked}
    />
    <span>{ task.text }</span>
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
