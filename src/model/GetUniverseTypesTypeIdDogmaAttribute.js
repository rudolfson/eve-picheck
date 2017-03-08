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
    root.EveSwaggerInterface.GetUniverseTypesTypeIdDogmaAttribute = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseTypesTypeIdDogmaAttribute model module.
   * @module model/GetUniverseTypesTypeIdDogmaAttribute
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetUniverseTypesTypeIdDogmaAttribute</code>.
   * dogma_attribute object
   * @alias module:model/GetUniverseTypesTypeIdDogmaAttribute
   * @class
   * @param attributeId {Number} attribute_id integer
   * @param value {Number} value number
   */
  var exports = function(attributeId, value) {
    var _this = this;

    _this['attribute_id'] = attributeId;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>GetUniverseTypesTypeIdDogmaAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseTypesTypeIdDogmaAttribute} obj Optional instance to populate.
   * @return {module:model/GetUniverseTypesTypeIdDogmaAttribute} The populated <code>GetUniverseTypesTypeIdDogmaAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
   * value number
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


