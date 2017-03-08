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
    define(['ApiClient', 'model/GetSovereigntyCampaigns200Ok', 'model/GetSovereigntyCampaignsInternalServerError', 'model/GetSovereigntyStructures200Ok', 'model/GetSovereigntyStructuresInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetSovereigntyCampaigns200Ok'), require('../model/GetSovereigntyCampaignsInternalServerError'), require('../model/GetSovereigntyStructures200Ok'), require('../model/GetSovereigntyStructuresInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.SovereigntyApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetSovereigntyCampaigns200Ok, root.EveSwaggerInterface.GetSovereigntyCampaignsInternalServerError, root.EveSwaggerInterface.GetSovereigntyStructures200Ok, root.EveSwaggerInterface.GetSovereigntyStructuresInternalServerError);
  }
}(this, function(ApiClient, GetSovereigntyCampaigns200Ok, GetSovereigntyCampaignsInternalServerError, GetSovereigntyStructures200Ok, GetSovereigntyStructuresInternalServerError) {
  'use strict';

  /**
   * Sovereignty service.
   * @module api/SovereigntyApi
   * @version 0.4.1
   */

  /**
   * Constructs a new SovereigntyApi. 
   * @alias module:api/SovereigntyApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSovereigntyCampaigns operation.
     * @callback module:api/SovereigntyApi~getSovereigntyCampaignsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSovereigntyCampaigns200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List sovereignty campaigns
     * Shows sovereignty data for campaigns.  ---  Alternate route: &#x60;/v1/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/legacy/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/dev/sovereignty/campaigns/&#x60;   ---  This route is cached for up to 5 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/SovereigntyApi~getSovereigntyCampaignsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSovereigntyCampaigns200Ok>}
     */
    this.getSovereigntyCampaigns = function(opts, callback) {
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
      var returnType = [GetSovereigntyCampaigns200Ok];

      return this.apiClient.callApi(
        '/sovereignty/campaigns/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSovereigntyStructures operation.
     * @callback module:api/SovereigntyApi~getSovereigntyStructuresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetSovereigntyStructures200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List sovereignty structures
     * Shows sovereignty data for structures.  ---  Alternate route: &#x60;/v1/sovereignty/structures/&#x60;  Alternate route: &#x60;/legacy/sovereignty/structures/&#x60;  Alternate route: &#x60;/dev/sovereignty/structures/&#x60;   ---  This route is cached for up to 120 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/SovereigntyApi~getSovereigntyStructuresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetSovereigntyStructures200Ok>}
     */
    this.getSovereigntyStructures = function(opts, callback) {
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
      var returnType = [GetSovereigntyStructures200Ok];

      return this.apiClient.callApi(
        '/sovereignty/structures/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
