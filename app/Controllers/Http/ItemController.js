'use strict'
// Require Item Model
const Item = use('App/Models/Item')


class ItemController {

index () {
  return console.log(Item.findOne())
}

async getAllItems ({ response }) {
  const items = await Item.find()

  return response.json(items)
}

async getOneItem ({ params, response }) {
  const item = await Item.findOne({ _id: params.id })

  return response.json(item)
}

async storeNewItem ({ request, response }){ 
  const itemInfo = request.post()

  const item = new Item(itemInfo)
  await item.save()

  return response.status(200).json('Item Agregado')
}

async updateAnItem ({ params, request, response }) {
  const itemInfo = request.post()

  const item = await Item.findOne({ _id: params.id })

  if(!item) {
    return response.status(404).json({ data: 'No se encontro el Documento'})
  }

  item.name = itemInfo.name
  item.price = itemInfo.price

  await item.save()

  return response.status(200).json('Actualizacion Completada')
}

async deleteAnItem ({ params, response }) {
  const item = await Item.findOne({ _id: params.id })

  if(!item) {
    return response.status(400).json({ data: 'No se encontro el documento'})
  }

  await item.remove()

  return response.status(200).json('Item Eliminado Satisfactoriamente')
}

}

module.exports = ItemController
