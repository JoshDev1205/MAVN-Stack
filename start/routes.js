'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')


Route.on('/').render('welcome')
Route.get('item', 'ItemController.getAllItems')
Route.get('item/:id', 'ItemController.getOneItem')
Route.post('item', 'ItemController.storeNewItem')
Route.put('item/:id', 'ItemController.updateAnItem')
Route.delete('item/:id', 'ItemController.deleteAnItem')

