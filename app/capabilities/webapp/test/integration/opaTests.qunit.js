sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capabilities/test/integration/FirstJourney',
		'capabilities/test/integration/pages/BusinessCapabilitiesList',
		'capabilities/test/integration/pages/BusinessCapabilitiesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessCapabilitiesList, BusinessCapabilitiesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capabilities') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessCapabilitiesList: BusinessCapabilitiesList,
					onTheBusinessCapabilitiesObjectPage: BusinessCapabilitiesObjectPage
                }
            },
            opaJourney.run
        );
    }
);