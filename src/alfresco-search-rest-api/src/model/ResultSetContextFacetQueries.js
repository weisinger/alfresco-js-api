/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
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
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ResultSetContextFacetQueries = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResultSetContextFacetQueries model module.
   * @module model/ResultSetContextFacetQueries
   * @version 1
   */

  /**
   * Constructs a new <code>ResultSetContextFacetQueries</code>.
   * @alias module:model/ResultSetContextFacetQueries
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ResultSetContextFacetQueries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultSetContextFacetQueries} obj Optional instance to populate.
   * @return {module:model/ResultSetContextFacetQueries} The populated <code>ResultSetContextFacetQueries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));

