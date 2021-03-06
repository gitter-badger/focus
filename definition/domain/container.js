"use strict";

//Dependencies.
var Immutable = require('immutable');
var isObject = require('lodash/lang/isObject');
var isString = require('lodash/lang/isString');
var InvalidException =  Error;
var checkIsString = require('../../util/string/check');
var checkIsObject = require('../../util/object/check');

/**
 * Container for the application domains.
 * @type {object}
 */
var domainsMap = Immutable.Map({});

/**
 * Get all domains in a JS Structure.
 */
function getDomains(){
  return domainsMap.toJS();
}

/**
 * Set new domains.
 * @param {object} newDomains - New domains to set.
 */
function setDomains(newDomains){
  if(!isObject(newDomains)){
    throw new InvalidException('newDomains should be an object', newDomains);
  }
  domainsMap = domainsMap.merge(newDomains);
}


/**
 * Set a domain.
 * @param {object} domain - Object structure of the domain.
 */
function setDomain(domain){
  checkIsObject('domain', domain);
  checkIsString('doamin.name', domain.name);
  //test domain, domain.name
  domainsMap = domainsMap.set(domain.name, domain);
}

/**
 * Get a domain given a name.
 * @param {string} domainName - name of the domain.
 */
function getDomain(domainName){
  if(!isString(domainName)){
    throw new InvalidException('domaiName should extists and be a string', domainName);
  }
  return domainsMap.get(domainName);
}



module.exports = {
  getAll: getDomains,
  setAll: setDomains,
  set: setDomain,
  get: getDomain
};
