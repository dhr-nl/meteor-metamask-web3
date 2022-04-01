<style>
ul{padding-left:0}

.filter {
  justify-content: center;
}

.filter > button {
  background-color: transparent;
  border: 1px solid grey;
  transform: translatex(-2px);
}
.filter > button:hover {cursor: pointer; box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);}

</style>

<script>
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';

  let hideCompleted = false;


  $: incompleteCount = useTracker(() => TasksCollection.find({ isChecked: { $ne: true } }).count());
  $: tasks = useTracker(() => TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch());


  const setHideCompleted = value =>  {
      hideCompleted = value;
  }


  const hideCompletedFilter = { isChecked: { $ne: true } };
  const cArray = []

  const checkedArray = value => {
      TasksCollection.find({isChecked: true}).map(function(p) { return cArray.push(p._id) })
      cArray.forEach( e => { TasksCollection.remove(e) })
  }

</script>


<div class="container">

      <header>
        <h1>Todo List -- {$incompleteCount} remaining</h1>
      </header>

<TaskForm/>

    <div class="filter">

        <button on:click={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>

        <button on:click={() => Meteor.call('verifyAddress')}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>


        <button on:click={() => checkedArray()}>
        delete everything

        </button>

    </div>

    <ul class="tasks">
        {#each $tasks as task }
            <Task task={task} />
        {/each}
    </ul>

</div>
