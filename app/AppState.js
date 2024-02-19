import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'
import { ToDo } from './models/ToDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  // toDo = null

  toDos = []

  image = null

  quote = null
}

export const AppState = createObservableProxy(new ObservableAppState())