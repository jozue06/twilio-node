'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var SubscribedTrackList;
var SubscribedTrackPage;
var SubscribedTrackInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
 * @description Initialize the SubscribedTrackList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {string} roomSid - The room_sid
 * @param {string} subscriberSid - The subscriber_sid
 */
/* jshint ignore:end */
SubscribedTrackList = function SubscribedTrackList(version, roomSid,
                                                    subscriberSid) {
  /* jshint ignore:start */
  /**
   * @function subscribedTracks
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackContext}
   */
  /* jshint ignore:end */
  function SubscribedTrackListInstance(sid) {
    return SubscribedTrackListInstance.get(sid);
  }

  SubscribedTrackListInstance._version = version;
  // Path Solution
  SubscribedTrackListInstance._solution = {roomSid: roomSid, subscriberSid: subscriberSid};
  SubscribedTrackListInstance._uri = _.template(
    '/Rooms/<%= roomSid %>/Participants/<%= subscriberSid %>/SubscribedTracks' // jshint ignore:line
  )(SubscribedTrackListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams SubscribedTrackInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'Track': _.get(opts, 'track'),
      'Publisher': _.get(opts, 'publisher'),
      'Kind': _.get(opts, 'kind'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * update a SubscribedTrackInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} opts.roomSid - The room_sid
   * @param {string} opts.subscriberSid - The subscriber_sid
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {subscribed_track.status} [opts.status] - The status
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SubscribedTrackInstance
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.update = function update(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Track': _.get(opts, 'track'),
      'Publisher': _.get(opts, 'publisher'),
      'Kind': _.get(opts, 'kind'),
      'Status': _.get(opts, 'status')
    });

    var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return SubscribedTrackListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackPage
 * @augments Page
 * @description Initialize the SubscribedTrackPage
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SubscribedTrackPage
 */
/* jshint ignore:end */
SubscribedTrackPage = function SubscribedTrackPage(version, response, solution)
                                                    {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(SubscribedTrackPage.prototype, Page.prototype);
SubscribedTrackPage.prototype.constructor = SubscribedTrackPage;

/* jshint ignore:start */
/**
 * Build an instance of SubscribedTrackInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SubscribedTrackInstance
 */
/* jshint ignore:end */
SubscribedTrackPage.prototype.getInstance = function getInstance(payload) {
  return new SubscribedTrackInstance(
    this._version,
    payload,
    this._solution.roomSid,
    this._solution.subscriberSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackInstance
 * @description Initialize the SubscribedTrackContext
 *
 * @property {string} sid - The sid
 * @property {string} roomSid - The room_sid
 * @property {string} name - The name
 * @property {string} publisherSid - The publisher_sid
 * @property {string} subscriberSid - The subscriber_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {boolean} enabled - The enabled
 * @property {subscribed_track.kind} kind - The kind
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
SubscribedTrackInstance = function SubscribedTrackInstance(version, payload,
                                                            roomSid,
                                                            subscriberSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.roomSid = payload.room_sid; // jshint ignore:line
  this.name = payload.name; // jshint ignore:line
  this.publisherSid = payload.publisher_sid; // jshint ignore:line
  this.subscriberSid = payload.subscriber_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.enabled = payload.enabled; // jshint ignore:line
  this.kind = payload.kind; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {roomSid: roomSid, subscriberSid: subscriberSid, };
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the SubscribedTrackInstance for serialization.
 * Removes any circular references in the object.
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackInstance
 * @instance
 *
 * @returns Object
 */
/* jshint ignore:end */
SubscribedTrackInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

module.exports = {
  SubscribedTrackList: SubscribedTrackList,
  SubscribedTrackPage: SubscribedTrackPage,
  SubscribedTrackInstance: SubscribedTrackInstance
};
