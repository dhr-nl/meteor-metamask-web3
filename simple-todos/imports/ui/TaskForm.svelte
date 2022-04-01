<style>
    task-form, form {
        --height: 35px;
        --max-width: 40vw;
        display: flex;
        font-size: 1em;
    }
    .task-form, button, input{
        height: var(--height);
        vertical-align: center;
        background: transparent;

    }
    .task-form > input {
        border: 1px solid #aaa;
        box-sizing: border-box;
        font-size: 1em;
        padding-left: 5px; width: 40vw;
    }

    .task-form > input:focus {
        outline: 0;
    }

    button {
        font-size: 1em;

        border-radius: 0px 6px 6px 0px;
        box-sizing: border-box;
        border: 1px solid #aaa;
        height: var(--height);
        transition: 0.3s;
    }
    button:hover{background-color: lightblue}

</style>

<script>
    import { TasksCollection } from '../api/TasksCollection';
    let newTask = '';
    const handleSubmit = () => {
        // Insert a task into the collection
        TasksCollection.insert({
            text: newTask,
            createdAt: new Date(), // current time
        });
        // Clear form
        newTask = '';
    }
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <button type="submit">Add Task</button>
</form>
