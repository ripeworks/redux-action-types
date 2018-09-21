# redux-action-types
shortcut for making action types

[![npm version](https://badge.fury.io/js/redux-action-types.svg)](https://badge.fury.io/js/redux-action-types)

```js
import { createTypes, async } from 'redux-action-types'

export const types = createTypes('my-app/module/',
  'SORT',
  'ADD',
  async('LOAD'),
  async('SAVE'),
  async('UPDATE'),
  async('REMOVE', ['REQUEST', 'COMPLETE'])
)

/*
  types = {
    SORT: 'my-app/module/SORT',
    ADD: 'my-app/module/ADD',
    LOAD_SUCCESS: 'my-app/module/LOAD_SUCCESS',
    LOAD_FAIL: 'my-app/module/LOAD_FAIL',
    SAVE_SUCCESS: 'my-app/module/SAVE_SUCCESS',
    SAVE_FAIL: 'my-app/module/SAVE_FAIL',
    UPDATE_SUCCESS: 'my-app/module/UPDATE_SUCCESS',
    UPDATE_FAIL: 'my-app/module/UPDATE_FAIL',
    REMOVE_SUCCESS: 'my-app/module/REMOVE_REQUEST',
    REMOVE_FAIL: 'my-app/module/REMOVE_COMPLETE'
  }
*/
```
