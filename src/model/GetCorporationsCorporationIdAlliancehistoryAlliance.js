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
    root.EveSwaggerInterface.GetCorporationsCorporationIdAlliancehistoryAlliance = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdAlliancehistoryAlliance model module.
   * @module model/GetCorporationsCorporationIdAlliancehistoryAlliance
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdAlliancehistoryAlliance</code>.
   * alliance object
   * @alias module:model/GetCorporationsCorporationIdAlliancehistoryAlliance
   * @class
   * @param allianceId {Number} alliance_id integer
   * @param isDeleted {Boolean} True if the alliance has been deleted
   */
  var exports = function(allianceId, isDeleted) {
    var _this = this;

    _this['alliance_id'] = allianceId;
    _this['is_deleted'] = isDeleted;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdAlliancehistoryAlliance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdAlliancehistoryAlliance} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdAlliancehistoryAlliance} The populated <code>GetCorporationsCorporationIdAlliancehistoryAlliance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Number');
      }
      if (data.hasOwnProperty('is_deleted')) {
        obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
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
   * True if the alliance has been deleted
   * @member {Boolean} is_deleted
   */
  exports.prototype['is_deleted'] = undefined;



  return exports;
}));


