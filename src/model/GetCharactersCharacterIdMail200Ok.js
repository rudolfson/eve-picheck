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
    define(['ApiClient', 'model/GetCharactersCharacterIdMailRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdMailRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdMail200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdMailRecipient);
  }
}(this, function(ApiClient, GetCharactersCharacterIdMailRecipient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMail200Ok model module.
   * @module model/GetCharactersCharacterIdMail200Ok
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMail200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMail200Ok
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMail200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMail200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMail200Ok} The populated <code>GetCharactersCharacterIdMail200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['Number']);
      }
      if (data.hasOwnProperty('mail_id')) {
        obj['mail_id'] = ApiClient.convertToType(data['mail_id'], 'Number');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetCharactersCharacterIdMailRecipient]);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
    }
    return obj;
  }

  /**
   * From whom the mail was sent
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * is_read boolean
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;
  /**
   * labels array
   * @member {Array.<Number>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * mail_id integer
   * @member {Number} mail_id
   */
  exports.prototype['mail_id'] = undefined;
  /**
   * Recipients of the mail
   * @member {Array.<module:model/GetCharactersCharacterIdMailRecipient>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Mail subject
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * When the mail was sent
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


