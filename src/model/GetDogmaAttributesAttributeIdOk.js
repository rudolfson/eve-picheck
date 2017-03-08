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
    root.EveSwaggerInterface.GetDogmaAttributesAttributeIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetDogmaAttributesAttributeIdOk model module.
   * @module model/GetDogmaAttributesAttributeIdOk
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetDogmaAttributesAttributeIdOk</code>.
   * 200 ok object
   * @alias module:model/GetDogmaAttributesAttributeIdOk
   * @class
   * @param attributeId {Number} attribute_id integer
   */
  var exports = function(attributeId) {
    var _this = this;

    _this['attribute_id'] = attributeId;









  };

  /**
   * Constructs a <code>GetDogmaAttributesAttributeIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaAttributesAttributeIdOk} obj Optional instance to populate.
   * @return {module:model/GetDogmaAttributesAttributeIdOk} The populated <code>GetDogmaAttributesAttributeIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('high_is_good')) {
        obj['high_is_good'] = ApiClient.convertToType(data['high_is_good'], 'Boolean');
      }
      if (data.hasOwnProperty('icon_id')) {
        obj['icon_id'] = ApiClient.convertToType(data['icon_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('stackable')) {
        obj['stackable'] = ApiClient.convertToType(data['stackable'], 'Boolean');
      }
      if (data.hasOwnProperty('unit_id')) {
        obj['unit_id'] = ApiClient.convertToType(data['unit_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * attribute_id integer
   * @member {Number} attribute_id
   */
  exports.prototype['attribute_id'] = undefined;
  /**
   * default_value number
   * @member {Number} default_value
   */
  exports.prototype['default_value'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * display_name string
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * high_is_good boolean
   * @member {Boolean} high_is_good
   */
  exports.prototype['high_is_good'] = undefined;
  /**
   * icon_id integer
   * @member {Number} icon_id
   */
  exports.prototype['icon_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * published boolean
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * stackable boolean
   * @member {Boolean} stackable
   */
  exports.prototype['stackable'] = undefined;
  /**
   * unit_id integer
   * @member {Number} unit_id
   */
  exports.prototype['unit_id'] = undefined;



  return exports;
}));


