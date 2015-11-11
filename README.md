# redux-action-types
shortcut for making action types

```js
import { createTypes, async } from 'redux-action-types'

export const types = createTypes('my-app/module/',
  'SORT',
  'ADD',
  async('LOAD'),
  async('SAVE'),
  async('UPDATE'),
  async('REMOVE')
)

/*
  types = {
    SORT: 'my-app/module/SORT',
    ADD: 'my-app/module/ADD',
    LOAD: 'my-app/module/LOAD',
    LOAD_SUCCESS: 'my-app/module/LOAD_SUCCESS',
    LOAD_FAIL: 'my-app/module/LOAD_FAIL',
    SAVE: 'my-app/module/SAVE',
    SAVE_SUCCESS: 'my-app/module/SAVE_SUCCESS',
    SAVE_FAIL: 'my-app/module/SAVE_FAIL',
    UPDATE: 'my-app/module/UPDATE',
    UPDATE_SUCCESS: 'my-app/module/UPDATE_SUCCESS',
    UPDATE_FAIL: 'my-app/module/UPDATE_FAIL',
    REMOVE: 'my-app/module/REMOVE',
    REMOVE_SUCCESS: 'my-app/module/REMOVE_SUCCESS',
    REMOVE_FAIL: 'my-app/module/REMOVE_FAIL'
  }
*/
```
