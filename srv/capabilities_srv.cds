using app.capabilities from '../db/capabilities';
service CapabilityService {

entity BusinessCapabilities as projection on capabilities.BusinessCapabilities;

entity BusinessAreas as projection on capabilities.BusinessAreas;

entity Scope as projection on capabilities.Scope;


}