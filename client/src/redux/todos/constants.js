/* Sagas watch for these actions... */
export const FETCH_TODOS = 'todos/FETCH_TODOS';
export const CREATE_TODO = 'todos/CREATE_TODO';
export const UPDATE_TODO = 'todos/UPDATE_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';

export const CREATE_TODO_ITEM = 'todos/CREATE_TODO_ITEM';
export const UPDATE_TODO_ITEM = 'todos/UPDATE_TODO_ITEM';
export const COMPLETE_TODO_ITEM = 'todos/COMPLETE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'todos/DELETE_TODO_ITEM';

/* ...and the reducer handles these. */
export const FETCH_TODOS_SUCCESS = 'todos/FETCH_TODOS_SUCCESS';
export const CREATE_TODO_SUCCESS = 'todos/CREATE_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'todos/UPDATE_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'todos/DELETE_TODO_SUCCESS';
export const FETCH_TODOS_FAILURE = 'todos/FETCH_TODOS_FAILURE';
export const CREATE_TODO_FAILURE = 'todos/CREATE_TODO_FAILURE';
export const UPDATE_TODO_FAILURE = 'todos/UPDATE_TODO_FAILURE';
export const DELETE_TODO_FAILURE = 'todos/DELETE_TODO_FAILURE';

export const CREATE_TODO_ITEM_SUCCESS = 'todos/CREATE_TODO_ITEM_SUCCESS';
export const UPDATE_TODO_ITEM_SUCCESS = 'todos/UPDATE_TODO_ITEM_SUCCESS';
export const COMPLETE_TODO_ITEM_SUCCESS = 'todos/COMPLETE_TODO_ITEM_SUCCESS';
export const DELETE_TODO_ITEM_SUCCESS = 'todos/DELETE_TODO_ITEM_SUCCESS';
export const CREATE_TODO_ITEM_FAILURE = 'todos/CREATE_TODO_ITEM_FAILURE';
export const UPDATE_TODO_ITEM_FAILURE = 'todos/UPDATE_TODO_ITEM_FAILURE';
export const COMPLETE_TODO_ITEM_FAILURE = 'todos/COMPLETE_TODO_ITEM_FAILURE';
export const DELETE_TODO_ITEM_FAILURE = 'todos/DELETE_TODO_ITEM_FAILURE';

export const IS_EDITING_TODO = 'todos/IS_EDITING_TODO';
