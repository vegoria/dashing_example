/* global Dashing */

Dashing.widgets.Sample = function(dashboard) {
    var self = this;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'sample');
    self.row = 2;
    self.col = 4;
    self.scope = {
        title: "Tak dodajemy tekst na stale",
    };
    self.getWidget = function () {
        return this.__widget__;
    };
    self.getData = function () {

        $.extend(self.scope, {
            value: "Ta funkcje mozemy nadpisac wywolujac kafelek",
            //wystarczy tam wpisac:
            //dashboard.addWidget('sample_valuation', 'Sample', {
            //    getData: function () {
            //                Cialo funkcji
            //      });
        });
        
        $.ajax({
            url: 'sample'
        }).done( function(result){
            $.extend(self.scope, {
                detail: result.detail,
                moreInfo: result.moreInfo,
                updatedAt: 'Powyzej sa dane uzyskane z pythona'
            });
        });
        
    };
    self.interval = 1000;
};
