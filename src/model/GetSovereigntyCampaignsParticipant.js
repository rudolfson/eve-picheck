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
    root.EveSwaggerInterface.GetSovereigntyCampaignsParticipant = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSovereigntyCampaignsParticipant model module.
   * @module model/GetSovereigntyCampaignsParticipant
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetSovereigntyCampaignsParticipant</code>.
   * participant object
   * @alias module:model/GetSovereigntyCampaignsParticipant
   * @class
   * @param allianceId {Number} alliance_id integer
   * @param score {Number} score number
   */
  var exports = function(allianceId, score) {
    var _this = this;

    _this['alliance_id'] = allianceId;
    _this['score'] = score;
  };

  /**
   * Constructs a <code>GetSovereigntyCampaignsParticipant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSovereigntyCampaignsParticipant} obj Optional instance to populate.
   * @return {module:model/GetSovereigntyCampaignsParticipant} The populated <code>GetSovereigntyCampaignsParticipant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Number');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
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
   * score number
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));


