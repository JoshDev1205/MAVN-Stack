'use strict'

const BaseModel = use('Model')

/**
 * @class Item
 */
class Item extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps () {
    return false
  }
  /**
   * Item's schema
   */
  static get schema () {
    return {
      name: { type: String },
      price: { type: Number }
    }
  }

  static get schemaOptions () {
    return {
      collection: 'items'
    }
  }
}

module.exports = Item.buildModel('Item')
