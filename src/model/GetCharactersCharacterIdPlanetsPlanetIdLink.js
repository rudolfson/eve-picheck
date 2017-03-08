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
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdLink = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdLink model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdLink
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code>.
   * link object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdLink
   * @class
   * @param destinationPinId {Number} destination_pin_id integer
   * @param linkLevel {Number} link_level integer
   * @param sourcePinId {Number} source_pin_id integer
   */
  var exports = function(destinationPinId, linkLevel, sourcePinId) {
    var _this = this;

    _this['destination_pin_id'] = destinationPinId;
    _this['link_level'] = linkLevel;
    _this['source_pin_id'] = sourcePinId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdLink} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdLink} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('destination_pin_id')) {
        obj['destination_pin_id'] = ApiClient.convertToType(data['destination_pin_id'], 'Number');
      }
      if (data.hasOwnProperty('link_level')) {
        obj['link_level'] = ApiClient.convertToType(data['link_level'], 'Number');
      }
      if (data.hasOwnProperty('source_pin_id')) {
        obj['source_pin_id'] = ApiClient.convertToType(data['source_pin_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * destination_pin_id integer
   * @member {Number} destination_pin_id
   */
  exports.prototype['destination_pin_id'] = undefined;
  /**
   * link_level integer
   * @member {Number} link_level
   */
  exports.prototype['link_level'] = undefined;
  /**
   * source_pin_id integer
   * @member {Number} source_pin_id
   */
  exports.prototype['source_pin_id'] = undefined;



  return exports;
}));


