angular
    .module('getData.controller', ['getData.service'])
    .controller('getDataCtrl', getDataCtrl);
    function getDataCtrl(getDataAbout) {
        getDataAbout.getIt()
    }