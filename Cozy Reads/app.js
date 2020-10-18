var app = angular.module('CozyReadsApp', []);

app.factory('myFactory', function () {
    var displayFact;
    var addMSG = function (msg) {
        displayFact = '18IT058 Pooja Shri V' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '18IT030 Harsheni SK';
    }
    return {
        setMSG: function (msg) {
            addMSG(msg);
        },
        getMSG: function () {
            return displayFact;
        }
    };
});
app.controller('CozyReadsController', function ($scope, myFactory) {
    $scope.val = "item";
    myFactory.setMSG("Tutlane (with Factory)");
    $scope.textval = myFactory.getMSG();
});
angular
    .module('CozyReadsApp', [])
    .controller('CozyReadsAddController', CozyReadsAddController)
    .controller('CozyReadsShowController', CozyReadsShowController)
    .service('CozyReadsService', CozyReadsService)
    .directive('info',info);
    
 
    function info()
    {
        var ddo = { template:'Welcome to cozy Reads bookworms'};
        return ddo; 
    }
CozyReadsAddController.$inject = ['CozyReadsService'];
function CozyReadsAddController(CozyReadsService) {
    var itemAdder = this;
    itemAdder.itemBookName = '';
    itemAdder.itemAuthor = '';
    itemAdder.itemRent = '';
    itemAdder.addItem = function () {
        CozyReadsService.addItem(itemAdder.itemBookName, itemAdder.itemAuthor, itemAdder.itemRent);
    };
}
CozyReadsShowController.$inject = ['CozyReadsService'];
function CozyReadsShowController(CozyReadsService) {
    var showList = this;
    showList.items = CozyReadsService.getItems();
    showList.removeItem = function (itemIndex) {
        CozyReadsService.removeItem(itemIndex);
    };
}
function CozyReadsService() {
    var service = this;
    var items = [];
    service.addItem = function (itemBookName, itemAuthor, itemRent) {
        var item = { name: itemBookName, Author: itemAuthor , Rent: itemRent };
        items.push(item);
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };
    service.getItems = function () {
        return items;
    };
}