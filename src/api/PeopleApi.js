(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FavoriteEntry', '../model/FavoriteBody', '../model/Error', '../model/SiteMembershipBody', '../model/SiteMembershipRequestEntry', '../model/FavoriteSiteBody', '../model/FavoriteSite', '../model/ActivityPaging', '../model/FavoriteSitePaging', '../model/FavoritePaging', '../model/PersonEntry', '../model/PersonNetworkEntry', '../model/PersonNetworkPaging', '../model/PreferenceEntry', '../model/PreferencePaging', '../model/SitePaging', '../model/SiteMembershipRequestPaging', '../model/SiteMembershipBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FavoriteEntry'), require('../model/FavoriteBody'), require('../model/Error'), require('../model/SiteMembershipBody'), require('../model/SiteMembershipRequestEntry'), require('../model/FavoriteSiteBody'), require('../model/FavoriteSite'), require('../model/ActivityPaging'), require('../model/FavoriteSitePaging'), require('../model/FavoritePaging'), require('../model/PersonEntry'), require('../model/PersonNetworkEntry'), require('../model/PersonNetworkPaging'), require('../model/PreferenceEntry'), require('../model/PreferencePaging'), require('../model/SitePaging'), require('../model/SiteMembershipRequestPaging'), require('../model/SiteMembershipBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PeopleApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.FavoriteBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.SiteMembershipBody, root.AlfrescoCoreRestApi.SiteMembershipRequestEntry, root.AlfrescoCoreRestApi.FavoriteSiteBody, root.AlfrescoCoreRestApi.FavoriteSite, root.AlfrescoCoreRestApi.ActivityPaging, root.AlfrescoCoreRestApi.FavoriteSitePaging, root.AlfrescoCoreRestApi.FavoritePaging, root.AlfrescoCoreRestApi.PersonEntry, root.AlfrescoCoreRestApi.PersonNetworkEntry, root.AlfrescoCoreRestApi.PersonNetworkPaging, root.AlfrescoCoreRestApi.PreferenceEntry, root.AlfrescoCoreRestApi.PreferencePaging, root.AlfrescoCoreRestApi.SitePaging, root.AlfrescoCoreRestApi.SiteMembershipRequestPaging, root.AlfrescoCoreRestApi.SiteMembershipBody1);
  }
}(this, function(ApiClient, FavoriteEntry, FavoriteBody, Error, SiteMembershipBody, SiteMembershipRequestEntry, FavoriteSiteBody, FavoriteSite, ActivityPaging, FavoriteSitePaging, FavoritePaging, PersonEntry, PersonNetworkEntry, PersonNetworkPaging, PreferenceEntry, PreferencePaging, SitePaging, SiteMembershipRequestPaging, SiteMembershipBody1) {
  'use strict';

  /**
   * People service.
   * @module api/PeopleApi
   * @version 1
   */

  /**
   * Constructs a new PeopleApi. 
   * @alias module:api/PeopleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFavorite operation.
     * @callback module:api/PeopleApi~addFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \n\nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n\nFor example, to favorite a file the following body would be used:\n\n&#x60;&#x60;&#x60;JSON\n{\n   \&quot;target\&quot;: {\n      \&quot;file\&quot;: {\n         \&quot;guid\&quot;: \&quot;abcde-01234\&quot;\n      }\n   }\n}\n&#x60;&#x60;&#x60;\n
     * @param {module:api/PeopleApi~addFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteEntry}
     */
    this.addFavorite = function(personId, favoriteBody, callback) {
      var postBody = favoriteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addFavorite";
      }

      // verify the required parameter 'favoriteBody' is set
      if (favoriteBody == undefined || favoriteBody == null) {
        throw "Missing the required parameter 'favoriteBody' when calling addFavorite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSiteMembershipRequest operation.
     * @callback module:api/PeopleApi~addSiteMembershipRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiteMembershipRequestEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a site membership request
     * Create a site membership request for **personId** and **siteId**. The **personId** will be invited to the site as a SiteConsumer.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMembershipBody} siteMembershipBody Site membership request details
     * @param {module:api/PeopleApi~addSiteMembershipRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    this.addSiteMembershipRequest = function(personId, siteMembershipBody, callback) {
      var postBody = siteMembershipBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addSiteMembershipRequest";
      }

      // verify the required parameter 'siteMembershipBody' is set
      if (siteMembershipBody == undefined || siteMembershipBody == null) {
        throw "Missing the required parameter 'siteMembershipBody' when calling addSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestEntry;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFavoriteSite operation.
     * @callback module:api/PeopleApi~deleteFavoriteSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete favorite site
     * Removes site **siteId** from the favorite site list of person **personId**.\n\n**Note This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:api/PeopleApi~deleteFavoriteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFavoriteSite = function(personId, siteId, callback) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling deleteFavoriteSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling deleteFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the favoriteSite operation.
     * @callback module:api/PeopleApi~favoriteSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteSite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Favorite a site
     * Add a favorite site for person **personId**.\n\n**Note: that this method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteSiteBody} favoriteSiteBody The id of the site to favorite.
     * @param {module:api/PeopleApi~favoriteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteSite}
     */
    this.favoriteSite = function(personId, favoriteSiteBody, callback) {
      var postBody = favoriteSiteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling favoriteSite";
      }

      // verify the required parameter 'favoriteSiteBody' is set
      if (favoriteSiteBody == undefined || favoriteSiteBody == null) {
        throw "Missing the required parameter 'favoriteSiteBody' when calling favoriteSite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteSite;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivities operation.
     * @callback module:api/PeopleApi~getActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get activities
     * Returns a list of activities for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.who A filter to include the user&#39;s activities only &#x60;-me-&#x60;, other user&#39;s activities only &#x60;-others-&#x60;&#39;\n
     * @param {String} opts.siteId Include only activity feed entries relating to this site.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ActivityPaging}
     */
    this.getActivities = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getActivities";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'who': opts['who'],
        'siteId': opts['siteId'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ActivityPaging;

      return this.apiClient.callApi(
        '/people/{personId}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavorite operation.
     * @callback module:api/PeopleApi~getFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteEntry}
     */
    this.getFavorite = function(personId, favoriteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling getFavorite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavoriteSite operation.
     * @callback module:api/PeopleApi~getFavoriteSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteSite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a favorite site
     * Returns information on favorite site **siteId** of person **personId**.\n\n**Note: This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getFavoriteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteSite}
     */
    this.getFavoriteSite = function(personId, siteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavoriteSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteSite;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavoriteSites operation.
     * @callback module:api/PeopleApi~getFavoriteSitesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoriteSitePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get favorite sites
     * Get a person&#39;s favorite sites.\n\n**Note: This method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getFavoriteSitesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoriteSitePaging}
     */
    this.getFavoriteSites = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavoriteSites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteSitePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFavorites operation.
     * @callback module:api/PeopleApi~getFavoritesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FavoritePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.\n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS**\nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getFavoritesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FavoritePaging}
     */
    this.getFavorites = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoritePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPerson operation.
     * @callback module:api/PeopleApi~getPersonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a person
     * Gets information for the person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getPersonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PersonEntry}
     */
    this.getPerson = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPerson";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonEntry;

      return this.apiClient.callApi(
        '/people/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPersonNetwork operation.
     * @callback module:api/PeopleApi~getPersonNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonNetworkEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get network information
     * Returns network information on a single network specified by **networkId** for **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getPersonNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PersonNetworkEntry}
     */
    this.getPersonNetwork = function(personId, networkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPersonNetwork";
      }

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getPersonNetwork";
      }


      var pathParams = {
        'personId': personId,
        'networkId': networkId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkEntry;

      return this.apiClient.callApi(
        '/people/{personId}/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPersonNetworks operation.
     * @callback module:api/PeopleApi~getPersonNetworksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonNetworkPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get network membership for a person
     * Gets a list of network memberships for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getPersonNetworksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PersonNetworkPaging}
     */
    this.getPersonNetworks = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPersonNetworks";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkPaging;

      return this.apiClient.callApi(
        '/people/{personId}/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPreference operation.
     * @callback module:api/PeopleApi~getPreferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PreferenceEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a preference
     * Returns a specific preference for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} preferenceName The name of the preference.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PreferenceEntry}
     */
    this.getPreference = function(personId, preferenceName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPreference";
      }

      // verify the required parameter 'preferenceName' is set
      if (preferenceName == undefined || preferenceName == null) {
        throw "Missing the required parameter 'preferenceName' when calling getPreference";
      }


      var pathParams = {
        'personId': personId,
        'preferenceName': preferenceName
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PreferenceEntry;

      return this.apiClient.callApi(
        '/people/{personId}/preferences/{preferenceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPreferences operation.
     * @callback module:api/PeopleApi~getPreferencesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PreferencePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get preferences
     * Returns a list of preferences for person **personId**.\n\nEach preference consists of an **id** and a **value**.\nThe **value** can be of any JSON type.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PreferencePaging}
     */
    this.getPreferences = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPreferences";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PreferencePaging;

      return this.apiClient.callApi(
        '/people/{personId}/preferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSiteMembership operation.
     * @callback module:api/PeopleApi~getSiteMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SitePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get site membership information
     * Returns a list of site membership information for person **personId**.\nYou can sort the list of sites using the **orderBy** parameter.\n\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getSiteMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SitePaging}
     */
    this.getSiteMembership = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembership";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SitePaging;

      return this.apiClient.callApi(
        '/people/{personId}/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSiteMembershipRequest operation.
     * @callback module:api/PeopleApi~getSiteMembershipRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiteMembershipRequestEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a site membership request
     * Returns the site membership request for site **siteId** for person **personId**, if one exists.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getSiteMembershipRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    this.getSiteMembershipRequest = function(personId, siteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestEntry;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSiteMembershipRequests operation.
     * @callback module:api/PeopleApi~getSiteMembershipRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiteMembershipRequestPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get site membership requests
     * Returns the current site membership requests for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/PeopleApi~getSiteMembershipRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SiteMembershipRequestPaging}
     */
    this.getSiteMembershipRequests = function(personId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembershipRequests";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestPaging;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFavoriteSite operation.
     * @callback module:api/PeopleApi~removeFavoriteSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {module:api/PeopleApi~removeFavoriteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeFavoriteSite = function(personId, favoriteId, callback) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeFavoriteSite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling removeFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSiteMembershipRequest operation.
     * @callback module:api/PeopleApi~removeSiteMembershipRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a site membership
     * Cancels the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:api/PeopleApi~removeSiteMembershipRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeSiteMembershipRequest = function(personId, siteId, callback) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling removeSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSiteMembershipRequest operation.
     * @callback module:api/PeopleApi~updateSiteMembershipRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a site membership request
     * Updates the message for the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMembershipBody1} siteMembershipBody The new message to display
     * @param {module:api/PeopleApi~updateSiteMembershipRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSiteMembershipRequest = function(personId, siteId, siteMembershipBody, callback) {
      var postBody = siteMembershipBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling updateSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling updateSiteMembershipRequest";
      }

      // verify the required parameter 'siteMembershipBody' is set
      if (siteMembershipBody == undefined || siteMembershipBody == null) {
        throw "Missing the required parameter 'siteMembershipBody' when calling updateSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth', 'ticketAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
