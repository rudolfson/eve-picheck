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
    root.EveSwaggerInterface.GetAlliancesNames200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAlliancesNames200Ok model module.
   * @module model/GetAlliancesNames200Ok
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetAlliancesNames200Ok</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesNames200Ok
   * @class
   * @param allianceId {Number} alliance_id integer
   * @param allianceName {String} alliance_name string
   */
  var exports = function(allianceId, allianceName) {
    var _this = this;

    _this['alliance_id'] = allianceId;
    _this['alliance_name'] = allianceName;
  };

  /**
   * Constructs a <code>GetAlliancesNames200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesNames200Ok} obj Optional instance to populate.
   * @return {module:model/GetAlliancesNames200Ok} The populated <code>GetAlliancesNames200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Number');
      }
      if (data.hasOwnProperty('alliance_name')) {
        obj['alliance_name'] = ApiClient.convertToType(data['alliance_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * alliance_id integer
   * @member {Number} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * alliance_name string
   * @member {String} alliance_name
   */
  exports.prototype['alliance_name'] = undefined;



  return exports;
}));


