# redux-action-types
shortcut for making action types

[![npm version](https://badge.fury.io/js/redux-action-types.svg)](https://badge.fury.io/js/redux-action-types)

```js
import { createTypes, asyncAction } from 'redux-action-types'

export const types = createTypes('my-app/module/',
  'SORT',
  'ADD',
  asyncAction('LOAD'),
  asyncAction('SAVE'),
  asyncAction('UPDATE'),
  asyncAction('REMOVE', ['REQUEST', 'COMPLETE'])
)

/*
  types = {
    SORT: "my-app/module/SORT"
    ADD: "my-app/module/ADD"
    LOAD_REQUEST: "my-app/module/LOAD_REQUEST"
    LOAD_SUCCESS: "my-app/module/LOAD_SUCCESS"
    LOAD_FAIL: "my-app/module/LOAD_FAIL"
    SAVE_REQUEST: "my-app/module/SAVE_REQUEST"
    SAVE_SUCCESS: "my-app/module/SAVE_SUCCESS"
    SAVE_FAIL: "my-app/module/SAVE_FAIL"
    UPDATE_REQUEST: "my-app/module/UPDATE_REQUEST"
    UPDATE_SUCCESS: "my-app/module/UPDATE_SUCCESS"
    UPDATE_FAIL: "my-app/module/UPDATE_FAIL"
    REMOVE_REQUEST: "my-app/module/REMOVE_REQUEST"
    REMOVE_COMPLETE: "my-app/module/REMOVE_COMPLETE"
  }
*/



```
