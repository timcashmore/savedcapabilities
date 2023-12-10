using app.capabilities from '../db/capabilities';
service CapabilityService {
@requires: 'TC_Capabilities'
entity Scope as projection on capabilities.Scope;
@requires: 'TC_Capabilities'
entity BusinessCapabilities as projection on capabilities.BusinessCapabilities;
@requires: 'TC_Capabilities'
entity BusinessAreas as projection on capabilities.BusinessAreas;

}