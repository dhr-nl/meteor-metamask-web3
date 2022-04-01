import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/rdb:svelte-meteor-data';

export const TasksCollection = new Mongo.Collection('tasks');
