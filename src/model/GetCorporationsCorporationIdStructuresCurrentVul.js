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
    root.EveSwaggerInterface.GetCorporationsCorporationIdStructuresCurrentVul = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdStructuresCurrentVul model module.
   * @module model/GetCorporationsCorporationIdStructuresCurrentVul
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStructuresCurrentVul</code>.
   * current_vul object
   * @alias module:model/GetCorporationsCorporationIdStructuresCurrentVul
   * @class
   * @param day {Number} day integer
   * @param hour {Number} hour integer
   */
  var exports = function(day, hour) {
    var _this = this;

    _this['day'] = day;
    _this['hour'] = hour;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStructuresCurrentVul</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStructuresCurrentVul} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStructuresCurrentVul} The populated <code>GetCorporationsCorporationIdStructuresCurrentVul</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient.convertToType(data['day'], 'Number');
      }
      if (data.hasOwnProperty('hour')) {
        obj['hour'] = ApiClient.convertToType(data['hour'], 'Number');
      }
    }
    return obj;
  }

  /**
   * day integer
   * @member {Number} day
   */
  exports.prototype['day'] = undefined;
  /**
   * hour integer
   * @member {Number} hour
   */
  exports.prototype['hour'] = undefined;



  return exports;
}));


