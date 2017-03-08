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
    root.EveSwaggerInterface.GetAlliancesAllianceIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAlliancesAllianceIdOk model module.
   * @module model/GetAlliancesAllianceIdOk
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetAlliancesAllianceIdOk</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesAllianceIdOk
   * @class
   * @param allianceName {String} the full name of the alliance
   * @param dateFounded {Date} date_founded string
   * @param ticker {String} the short name of the alliance
   */
  var exports = function(allianceName, dateFounded, ticker) {
    var _this = this;

    _this['alliance_name'] = allianceName;
    _this['date_founded'] = dateFounded;

    _this['ticker'] = ticker;
  };

  /**
   * Constructs a <code>GetAlliancesAllianceIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesAllianceIdOk} obj Optional instance to populate.
   * @return {module:model/GetAlliancesAllianceIdOk} The populated <code>GetAlliancesAllianceIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_name')) {
        obj['alliance_name'] = ApiClient.convertToType(data['alliance_name'], 'String');
      }
      if (data.hasOwnProperty('date_founded')) {
        obj['date_founded'] = ApiClient.convertToType(data['date_founded'], 'Date');
      }
      if (data.hasOwnProperty('executor_corp')) {
        obj['executor_corp'] = ApiClient.convertToType(data['executor_corp'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
    }
    return obj;
  }

  /**
   * the full name of the alliance
   * @member {String} alliance_name
   */
  exports.prototype['alliance_name'] = undefined;
  /**
   * date_founded string
   * @member {Date} date_founded
   */
  exports.prototype['date_founded'] = undefined;
  /**
   * the executor corporation ID, if this alliance is not closed
   * @member {Number} executor_corp
   */
  exports.prototype['executor_corp'] = undefined;
  /**
   * the short name of the alliance
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;



  return exports;
}));

