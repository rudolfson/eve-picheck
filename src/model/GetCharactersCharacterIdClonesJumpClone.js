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
    root.EveSwaggerInterface.GetCharactersCharacterIdClonesJumpClone = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdClonesJumpClone model module.
   * @module model/GetCharactersCharacterIdClonesJumpClone
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdClonesJumpClone</code>.
   * jump_clone object
   * @alias module:model/GetCharactersCharacterIdClonesJumpClone
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetCharactersCharacterIdClonesJumpClone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdClonesJumpClone} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdClonesJumpClone} The populated <code>GetCharactersCharacterIdClonesJumpClone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('implants')) {
        obj['implants'] = ApiClient.convertToType(data['implants'], ['Number']);
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Number');
      }
      if (data.hasOwnProperty('location_type')) {
        obj['location_type'] = ApiClient.convertToType(data['location_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * implants array
   * @member {Array.<Number>} implants
   */
  exports.prototype['implants'] = undefined;
  /**
   * location_id integer
   * @member {Number} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * location_type string
   * @member {module:model/GetCharactersCharacterIdClonesJumpClone.LocationTypeEnum} location_type
   */
  exports.prototype['location_type'] = undefined;


  /**
   * Allowed values for the <code>location_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationTypeEnum = {
    /**
     * value: "station"
     * @const
     */
    "station": "station",
    /**
     * value: "structure"
     * @const
     */
    "structure": "structure"  };


  return exports;
}));


