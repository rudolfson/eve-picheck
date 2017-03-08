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
    define(['ApiClient', 'model/GetUniverseTypesTypeIdDogmaAttribute', 'model/GetUniverseTypesTypeIdDogmaEffect'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseTypesTypeIdDogmaAttribute'), require('./GetUniverseTypesTypeIdDogmaEffect'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseTypesTypeIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseTypesTypeIdDogmaAttribute, root.EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect);
  }
}(this, function(ApiClient, GetUniverseTypesTypeIdDogmaAttribute, GetUniverseTypesTypeIdDogmaEffect) {
  'use strict';




  /**
   * The GetUniverseTypesTypeIdOk model module.
   * @module model/GetUniverseTypesTypeIdOk
   * @version 0.4.1
   */

  /**
   * Constructs a new <code>GetUniverseTypesTypeIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseTypesTypeIdOk
   * @class
   * @param description {String} description string
   * @param groupId {Number} group_id integer
   * @param name {String} name string
   * @param published {Boolean} published boolean
   * @param typeId {Number} type_id integer
   */
  var exports = function(description, groupId, name, published, typeId) {
    var _this = this;


    _this['description'] = description;



    _this['group_id'] = groupId;


    _this['name'] = name;

    _this['published'] = published;

    _this['type_id'] = typeId;

  };

  /**
   * Constructs a <code>GetUniverseTypesTypeIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseTypesTypeIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseTypesTypeIdOk} The populated <code>GetUniverseTypesTypeIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('capacity')) {
        obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dogma_attributes')) {
        obj['dogma_attributes'] = ApiClient.convertToType(data['dogma_attributes'], [GetUniverseTypesTypeIdDogmaAttribute]);
      }
      if (data.hasOwnProperty('dogma_effects')) {
        obj['dogma_effects'] = ApiClient.convertToType(data['dogma_effects'], [GetUniverseTypesTypeIdDogmaEffect]);
      }
      if (data.hasOwnProperty('graphic_id')) {
        obj['graphic_id'] = ApiClient.convertToType(data['graphic_id'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('icon_id')) {
        obj['icon_id'] = ApiClient.convertToType(data['icon_id'], 'Number');
      }
      if (data.hasOwnProperty('mass')) {
        obj['mass'] = ApiClient.convertToType(data['mass'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('portion_size')) {
        obj['portion_size'] = ApiClient.convertToType(data['portion_size'], 'Number');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('radius')) {
        obj['radius'] = ApiClient.convertToType(data['radius'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
    }
    return obj;
  }

  /**
   * capacity number
   * @member {Number} capacity
   */
  exports.prototype['capacity'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * dogma_attributes array
   * @member {Array.<module:model/GetUniverseTypesTypeIdDogmaAttribute>} dogma_attributes
   */
  exports.prototype['dogma_attributes'] = undefined;
  /**
   * dogma_effects array
   * @member {Array.<module:model/GetUniverseTypesTypeIdDogmaEffect>} dogma_effects
   */
  exports.prototype['dogma_effects'] = undefined;
  /**
   * graphic_id integer
   * @member {Number} graphic_id
   */
  exports.prototype['graphic_id'] = undefined;
  /**
   * group_id integer
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * icon_id integer
   * @member {Number} icon_id
   */
  exports.prototype['icon_id'] = undefined;
  /**
   * mass number
   * @member {Number} mass
   */
  exports.prototype['mass'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * portion_size integer
   * @member {Number} portion_size
   */
  exports.prototype['portion_size'] = undefined;
  /**
   * published boolean
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * radius number
   * @member {Number} radius
   */
  exports.prototype['radius'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * volume number
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;



  return exports;
}));

