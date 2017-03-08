/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.4.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdFittingsItem = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdFittingsItem model module.
   * @module model/GetCharactersCharacterIdFittingsItem
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFittingsItem</code>.
   * item object
   * @alias module:model/GetCharactersCharacterIdFittingsItem
   * @class
   * @param flag {Number} flag integer
   * @param quantity {Number} quantity integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(flag, quantity, typeId) {
    var _this = this;

    _this['flag'] = flag;
    _this['quantity'] = quantity;
    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFittingsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFittingsItem} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFittingsItem} The populated <code>GetCharactersCharacterIdFittingsItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flag')) {
        obj['flag'] = ApiClient.convertToType(data['flag'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * flag integer
   * @member {Number} flag
   */
  exports.prototype['flag'] = undefined;
  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));


