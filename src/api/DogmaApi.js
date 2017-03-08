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
    define(['ApiClient', 'model/GetDogmaAttributesAttributeIdInternalServerError', 'model/GetDogmaAttributesAttributeIdNotFound', 'model/GetDogmaAttributesAttributeIdOk', 'model/GetDogmaAttributesInternalServerError', 'model/GetDogmaEffectsEffectIdInternalServerError', 'model/GetDogmaEffectsEffectIdNotFound', 'model/GetDogmaEffectsEffectIdOk', 'model/GetDogmaEffectsInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetDogmaAttributesAttributeIdInternalServerError'), require('../model/GetDogmaAttributesAttributeIdNotFound'), require('../model/GetDogmaAttributesAttributeIdOk'), require('../model/GetDogmaAttributesInternalServerError'), require('../model/GetDogmaEffectsEffectIdInternalServerError'), require('../model/GetDogmaEffectsEffectIdNotFound'), require('../model/GetDogmaEffectsEffectIdOk'), require('../model/GetDogmaEffectsInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.DogmaApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetDogmaAttributesAttributeIdInternalServerError, root.EveSwaggerInterface.GetDogmaAttributesAttributeIdNotFound, root.EveSwaggerInterface.GetDogmaAttributesAttributeIdOk, root.EveSwaggerInterface.GetDogmaAttributesInternalServerError, root.EveSwaggerInterface.GetDogmaEffectsEffectIdInternalServerError, root.EveSwaggerInterface.GetDogmaEffectsEffectIdNotFound, root.EveSwaggerInterface.GetDogmaEffectsEffectIdOk, root.EveSwaggerInterface.GetDogmaEffectsInternalServerError);
  }
}(this, function(ApiClient, GetDogmaAttributesAttributeIdInternalServerError, GetDogmaAttributesAttributeIdNotFound, GetDogmaAttributesAttributeIdOk, GetDogmaAttributesInternalServerError, GetDogmaEffectsEffectIdInternalServerError, GetDogmaEffectsEffectIdNotFound, GetDogmaEffectsEffectIdOk, GetDogmaEffectsInternalServerError) {
  'use strict';

  /**
   * Dogma service.
   * @module api/DogmaApi
   * @version 0.4.1
   */

  /**
   * Constructs a new DogmaApi. 
   * @alias module:api/DogmaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDogmaAttributes operation.
     * @callback module:api/DogmaApi~getDogmaAttributesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attributes
     * Get a list of dogma attribute ids  ---  Alternate route: &#x60;/v1/dogma/attributes/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/DogmaApi~getDogmaAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getDogmaAttributes = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/dogma/attributes/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDogmaAttributesAttributeId operation.
     * @callback module:api/DogmaApi~getDogmaAttributesAttributeIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDogmaAttributesAttributeIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attribute information
     * Get information on a dogma attribute  ---  Alternate route: &#x60;/v1/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/dev/dogma/attributes/{attribute_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Number} attributeId A dogma attribute ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/DogmaApi~getDogmaAttributesAttributeIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDogmaAttributesAttributeIdOk}
     */
    this.getDogmaAttributesAttributeId = function(attributeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'attributeId' is set
      if (attributeId == undefined || attributeId == null) {
        throw new Error("Missing the required parameter 'attributeId' when calling getDogmaAttributesAttributeId");
      }


      var pathParams = {
        'attribute_id': attributeId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetDogmaAttributesAttributeIdOk;

      return this.apiClient.callApi(
        '/dogma/attributes/{attribute_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDogmaEffects operation.
     * @callback module:api/DogmaApi~getDogmaEffectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get effects
     * Get a list of dogma effect ids  ---  Alternate route: &#x60;/v1/dogma/effects/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/&#x60;  Alternate route: &#x60;/dev/dogma/effects/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/DogmaApi~getDogmaEffectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getDogmaEffects = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/dogma/effects/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDogmaEffectsEffectId operation.
     * @callback module:api/DogmaApi~getDogmaEffectsEffectIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDogmaEffectsEffectIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get effect information
     * Get information on a dogma effect  ---  Alternate route: &#x60;/v1/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/dev/dogma/effects/{effect_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Number} effectId A dogma effect ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/DogmaApi~getDogmaEffectsEffectIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDogmaEffectsEffectIdOk}
     */
    this.getDogmaEffectsEffectId = function(effectId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'effectId' is set
      if (effectId == undefined || effectId == null) {
        throw new Error("Missing the required parameter 'effectId' when calling getDogmaEffectsEffectId");
      }


      var pathParams = {
        'effect_id': effectId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetDogmaEffectsEffectIdOk;

      return this.apiClient.callApi(
        '/dogma/effects/{effect_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));