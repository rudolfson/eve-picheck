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
    root.EveSwaggerInterface.GetUniverseStationsStationIdPosition = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseStationsStationIdPosition model module.
   * @module model/GetUniverseStationsStationIdPosition
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetUniverseStationsStationIdPosition</code>.
   * position object
   * @alias module:model/GetUniverseStationsStationIdPosition
   * @class
   * @param x {Number} x number
   * @param y {Number} y number
   * @param z {Number} z number
   */
  var exports = function(x, y, z) {
    var _this = this;

    _this['x'] = x;
    _this['y'] = y;
    _this['z'] = z;
  };

  /**
   * Constructs a <code>GetUniverseStationsStationIdPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStationsStationIdPosition} obj Optional instance to populate.
   * @return {module:model/GetUniverseStationsStationIdPosition} The populated <code>GetUniverseStationsStationIdPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
      if (data.hasOwnProperty('z')) {
        obj['z'] = ApiClient.convertToType(data['z'], 'Number');
      }
    }
    return obj;
  }

  /**
   * x number
   * @member {Number} x
   */
  exports.prototype['x'] = undefined;
  /**
   * y number
   * @member {Number} y
   */
  exports.prototype['y'] = undefined;
  /**
   * z number
   * @member {Number} z
   */
  exports.prototype['z'] = undefined;



  return exports;
}));


